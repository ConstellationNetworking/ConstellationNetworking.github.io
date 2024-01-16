let db = firebase.firestore();
let auth = firebase.auth();

document.addEventListener('DOMContentLoaded', function () {
    const currentDate = new Date();
    const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate());

    setTimeout(() => {
        db.collection('Users')
            .where('lastActive', '>=', lastMonth)
            .get()
            .then(querySnapshot => {
                animateValue('monthly-active-users', 0, querySnapshot.size, 700)
            });


        db.collection('Statistics').doc('website-views').get()
            .then(doc => {
                if (doc.exists) {
                    const data = doc.data();
                    animateValue('website-views', 0, data.views, 700)
                } else {
                    console.error('No document exists.')
                }
            })
            .catch(error => {
                console.error(error);
            })

        db.collection('Messages')
            .get()
            .then(querySnapshot => {
                animateValue('messages-sent', 0, querySnapshot.size, 700)
            });
    }, 500);

    addMembersToPage();
});

function animateValue(id, start, end, duration) {
    let range = start - end
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);

    let timer = setInterval(function () {
        current += increment;
        obj.innerText = current.toLocaleString();
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime)
}

function addToNewsletter() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = document.getElementById('newsletter-email').value

    if (email === '' || !emailRegex.test(email)) {
        alert('Please enter a valid email address.');
    } else {
        db.collection('ReceivesNewsletter').add({
            email: email,
            addedDate: new Date(),
            pageAddedFrom: window.location.href
        })

        alert('You have been added to the newsletter.')
    }
}

// function getMembers() {
//     let members = [];

//     return new Promise((resolve, reject) => {
//         let members = []
//         db.collection('Members')
//         .get()
//         .then(querySnapshot => {
//             querySnapshot.forEach(doc => {
//                 members.push(doc.data());
//             });
//             resolve(members)
//         });
//     })
// }

// async function addMembersToPage() {
//     let membersContainer = document.getElementById('members-container');
//     membersContainer.classList.add('grid', 'grid-cols-2', 'md:grid-cols-3', 'lg:grid-cols-4', 'gap-6')
//     let members = await getMembers();
//     let roleColors = {
//         'Executive Officer': "yellow",
//         "Chief Technology Officer": "blue",
//         "Illustrations and UI": "purple",
//         "Assisting Technology": "green"
//     }

//     members.forEach(member => {
//         let button = document.createElement('button');
//         button.classList.add('member-btn');
//         button.onclick = () => { window.location.href = '/members/' + member.name.toLowerCase().replace(' ', '_') + '.html'; }
        
//         let div1 = document.createElement('div');
//         div1.classList.add('text-center')

//         let div2 = document.createElement('div');
//         div2.classList.add('w-24', 'h-24', 'mx-auto', 'mb-2', 'relative')
        
//         let img = document.createElement('img');
//         img.src = member.imgPath;
//         img.alt = `${member.name}, ${member.role}`;
//         img.classList.add('rounded-full', 'absolute', 'top-0', 'left-0', 'right-0', 'bottom-0', 'm-auto')

//         let p1 = document.createElement('p');
//         p1.classList.add(`text-sm`, `bg-${roleColors[member.role]}-600`, `text-white`, `py-1`, `px-2`, `inline-block`, `rounded-full`, `mb-2`)
//         p1.innerText = member.role;
        
//         let h3 = document.createElement('h3');
//         h3.classList.add('text-lg', 'font-semibold');
//         h3.innerText = member.name;

//         let link_a = document.createElement('a');
//         link_a.classList.add('text-sm', 'text-blue-600')
//         link_a.onclick = () => { window.location = `mailto:${member.email}` }
//         link_a.innerText = member.email;

//         let p2 = document.createElement('p');
//         p2.style.paddingTop = '10px';
//         p2.classList.add('text-sm', 'text-black-600')
//         p2.innerText = member.bio;

//         div2.appendChild(img);
//         div1.appendChild(div2);
//         div1.appendChild(p1);
//         div1.appendChild(h3);
//         div1.appendChild(link_a);
//         div1.appendChild(p2);
//         button.appendChild(div1);
//         membersContainer.appendChild(button);
//     })
// }