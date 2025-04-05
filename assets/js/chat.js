const sidebarList = document.getElementById("chat-sidebar-list");
const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");
const sendButton = document.getElementById("send-btn");
const searchInput = document.getElementById("user-search-email");
const allSidebarUsers = [];

let CURRENT_USER_ID = null;
let CURRENT_USER_NAME = "";
let CURRENT_USER_PIC = "/assets/img/default_user.jpeg";
let lastTimestamp = null;
let unsubscribeMessages = null;

firebase.auth().onAuthStateChanged(async (user) => {
  if (!user) return window.location.href = "/signin.html";
  CURRENT_USER_ID = user.uid;

  const userDoc = await firebase.firestore().collection("Users").doc(CURRENT_USER_ID).get();
  const data = userDoc.data();
  CURRENT_USER_NAME = data.name || "You";
  CURRENT_USER_PIC = data.profileIMG || "/assets/img/default_user.jpeg";

  loadSidebarFromUserHistory(data.userHistory || {});

  const urlParams = new URLSearchParams(window.location.search);
  const chatTargetId = urlParams.get("chat");
  if (chatTargetId) {
    firebase.firestore().collection("Users").doc(chatTargetId).get().then(doc => {
      if (doc.exists) {
        const data = doc.data();
        document.getElementById("chat-header").textContent = data.name || "Chat";
        activeUserId = chatTargetId;
        loadChatHistory(chatTargetId);
      }
    });
  }
});

function loadSidebarFromUserHistory(history) {
  history.forEach(userId => {
    firebase.firestore().collection("Users").doc(userId).get().then(doc => {
      if (doc.exists) {
        const data = doc.data();
        const name = data.name || "Unknown";
        const profilePic = data.profileIMG || "/assets/img/default_user.jpeg";
        const email = data.email || "";
        add_to_sidebar(name, profilePic, userId, email);
      }
    });
  });
}

function add_to_sidebar(name, profilePic, userId, email) {
  const li = document.createElement("li");
  li.className = "p-4 flex items-center space-x-2 hover:bg-gray-100 cursor-pointer";
  li.innerHTML = `
    <img src="${profilePic}" class="w-10 h-10 rounded-full">
    <span class="font-medium">${name}</span>
  `;
  li.addEventListener("click", () => {
    document.getElementById("chat-header").textContent = name;
    chatMessages.innerHTML = ""; // Clear on switch
    activeUserId = userId; // Store userId for future message sending
    loadChatHistory(userId);
  });
  sidebarList.appendChild(li);
  allSidebarUsers.push({ name, profilePic, userId, email });
}

function updateSidebarList(filterText) {
  sidebarList.innerHTML = "";
  const lowerFilter = filterText.toLowerCase();
  allSidebarUsers
    .filter(user =>
      user.name.toLowerCase().includes(lowerFilter) ||
      user.userId.toLowerCase().includes(lowerFilter) ||
      user.email.toLowerCase().includes(lowerFilter)
    )
    .forEach(user => {
      const li = document.createElement("li");
      li.className = "p-4 flex items-center space-x-2 hover:bg-gray-100 cursor-pointer";
      li.innerHTML = `
        <img src="${user.profilePic}" class="w-10 h-10 rounded-full">
        <span class="font-medium">${user.name}</span>
      `;
      li.addEventListener("click", () => {
        document.getElementById("chat-header").textContent = user.name;
        chatMessages.innerHTML = "";
        activeUserId = user.userId;
        loadChatHistory(user.userId);
      });
      sidebarList.appendChild(li);
    });

  // Firebase email-based lookup for dynamic search
  if (sidebarList.children.length === 0 && filterText.includes("@")) {
    firebase.firestore().collection("Users")
      .where("email", "==", filterText)
      .get()
      .then(snapshot => {
        if (!snapshot.empty) {
          const doc = snapshot.docs[0];
          const data = doc.data();
          const userId = doc.id;
          const name = data.name || "Unknown";
          const profilePic = data.profileIMG || "/assets/img/default_user.jpeg";
          const email = data.email || "";
          add_to_sidebar(name, profilePic, userId, email);
          updateSidebarList(filterText); // re-run to show only matching user
        }
      });
  }
}

searchInput.addEventListener("input", (e) => {
  updateSidebarList(e.target.value);
});

function add_message(senderId, isSelf, name, profilePic, messageContent) {
  const msg = document.createElement("div");
  msg.className = `flex items-start space-x-3 ${isSelf ? "justify-end" : ""}`;

  const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  msg.innerHTML = `
    ${isSelf ? `
      <div class="flex flex-col items-end">
        <div class="max-w-xs bg-blue-500 text-white rounded-lg px-3 py-2">${messageContent}</div>
        <div class="text-xs text-gray-400 mt-1">${timeString}</div>
      </div>
      <img src="${profilePic}" class="w-8 h-8 rounded-full">
    ` : `
      <img src="${profilePic}" class="w-8 h-8 rounded-full">
      <div>
        <div class="max-w-xs bg-gray-200 text-black rounded-lg px-3 py-2">${messageContent}</div>
        <div class="text-xs text-gray-400">${timeString}</div>
      </div>
    `}
  `;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Sample send logic
sendButton.addEventListener("click", () => {
  const msg = chatInput.value.trim();
  if (!msg) return;

  firebase.firestore().collection("Messages").add({
    senderId: CURRENT_USER_ID,
    receiverId: activeUserId,
    chatId: getChatId(CURRENT_USER_ID, activeUserId),
    messageText: msg,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  });
  firebase.firestore().collection("Users").doc(CURRENT_USER_ID).update({
    userHistory: firebase.firestore.FieldValue.arrayUnion(activeUserId)
  });

  chatInput.value = "";
});

// Add keydown listener to send message on Enter
chatInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendButton.click();
  }
});

function getChatId(userId1, userId2) {
  return [userId1, userId2].sort().join("-");
}

function loadChatHistory(userId) {
  const chatId = getChatId(CURRENT_USER_ID, userId);

  if (unsubscribeMessages) {
    unsubscribeMessages();
    unsubscribeMessages = null;
  }

  firebase.firestore().collection("Users").doc(userId).get().then(userDoc => {
    const userData = userDoc.data();
    const otherUserName = userData?.name || "Other";
    const otherUserPic = userData?.profileIMG || "/assets/img/default_user.jpeg";

    unsubscribeMessages = firebase.firestore().collection("Messages")
      .where("chatId", "==", chatId)
      .orderBy("timestamp")
      .onSnapshot(snapshot => {
        chatMessages.innerHTML = ""; // Clear previous messages
        snapshot.forEach(doc => {
          const message = doc.data();
          const isSelf = message.senderId === CURRENT_USER_ID;
          const name = isSelf ? CURRENT_USER_NAME : otherUserName;
          const profilePic = isSelf ? CURRENT_USER_PIC : otherUserPic;

          add_message(message.senderId, isSelf, name, profilePic, message.messageText);
        });
      });
  });
}