const a0_0x301ed0=a0_0x15ff;function a0_0x5ab1(){const _0x62bc9=['classList','/index.html','catch','#background\x20.grid\x20img','top','addEventListener','3666PhZxjM','getElementById','450gaVzdp','DOMContentLoaded','3028560PhcUWn','add','5166TnaKqO','t-selected','Missions','Welcome\x20to\x20your\x20first\x20mission!','Avatar\x20updated','doc','getBoundingClientRect','self','get','update','Remove','glasses','Avatar\x20saved!','head','2SnKStM','remove','forEach','querySelectorAll','location','error','559614riHFTf','background','pageYOffset','currentUser','1261440pNdTGo','/signin.html','hair','collection','firestore','617790SHCxXD','Edit\x20your\x20avatar.','href','2221323WZeURp','where','then','16gSbOtu','hairstyle','Users','uid','innerHTML','smooth','Choose','1450764xbuXXq','filter','onAuthStateChanged'];a0_0x5ab1=function(){return _0x62bc9;};return a0_0x5ab1();}function a0_0x15ff(_0x4071fd,_0x5adf26){const _0x5ab12c=a0_0x5ab1();return a0_0x15ff=function(_0x15fffd,_0x38e869){_0x15fffd=_0x15fffd-0xdd;let _0x44ef2e=_0x5ab12c[_0x15fffd];return _0x44ef2e;},a0_0x15ff(_0x4071fd,_0x5adf26);}(function(_0x71ddd9,_0x28fd13){const _0x27a05e=a0_0x15ff,_0x19abc1=_0x71ddd9();while(!![]){try{const _0x1c2569=parseInt(_0x27a05e(0x10d))/0x1*(-parseInt(_0x27a05e(0xfe))/0x2)+-parseInt(_0x27a05e(0x110))/0x3+-parseInt(_0x27a05e(0x113))/0x4*(parseInt(_0x27a05e(0x108))/0x5)+parseInt(_0x27a05e(0xea))/0x6*(parseInt(_0x27a05e(0xf0))/0x7)+parseInt(_0x27a05e(0xee))/0x8+-parseInt(_0x27a05e(0xe1))/0x9+-parseInt(_0x27a05e(0xec))/0xa*(-parseInt(_0x27a05e(0x104))/0xb);if(_0x1c2569===_0x28fd13)break;else _0x19abc1['push'](_0x19abc1['shift']());}catch(_0x3fab2c){_0x19abc1['push'](_0x19abc1['shift']());}}}(a0_0x5ab1,0x9019f));let chosenAvatar={},chosenBg=null,db=firebase[a0_0x301ed0(0x10c)](),auth=firebase['auth']();function setHead(_0x35a702){const _0x1f8ecd=a0_0x301ed0;chosenAvatar[_0x1f8ecd(0xfd)]=_0x35a702,smoothScrollAboveElement(_0x1f8ecd(0x114),0x32),['d1','d2','d3'][_0x1f8ecd(0xe2)](_0x2c313b=>_0x2c313b!==_0x35a702)[_0x1f8ecd(0x100)](_0x2176f1=>document[_0x1f8ecd(0xeb)](_0x2176f1)[_0x1f8ecd(0xde)]=_0x1f8ecd(0xe0)),document[_0x1f8ecd(0xeb)](_0x35a702)[_0x1f8ecd(0xde)]='Remove';}function setHair(_0x34de00){const _0x3fef84=a0_0x301ed0;chosenAvatar[_0x3fef84(0x10a)]=_0x34de00,smoothScrollAboveElement(_0x3fef84(0xfb),0x32),['h1','h2'][_0x3fef84(0xe2)](_0x18a984=>_0x18a984!==_0x34de00)[_0x3fef84(0x100)](_0x16b9d3=>document['getElementById'](_0x16b9d3)['innerHTML']=_0x3fef84(0xe0)),document[_0x3fef84(0xeb)](_0x34de00)[_0x3fef84(0xde)]=_0x3fef84(0xfa);}function setGlasses(_0x54eb2b){const _0x2bd14c=a0_0x301ed0;chosenAvatar['glasses']=_0x54eb2b,smoothScrollAboveElement(_0x2bd14c(0x105),0x32),['g1'][_0x2bd14c(0xe2)](_0x4f8091=>_0x4f8091!==_0x54eb2b)[_0x2bd14c(0x100)](_0x1d2e5c=>document[_0x2bd14c(0xeb)](_0x1d2e5c)[_0x2bd14c(0xde)]=_0x2bd14c(0xe0));}function setBg(_0x565d4e){const _0x5adf04=a0_0x301ed0,_0x3c5af8=document[_0x5adf04(0x101)](_0x5adf04(0xe7));_0x3c5af8[_0x5adf04(0x100)](_0x54b8dd=>_0x54b8dd[_0x5adf04(0xe4)][_0x5adf04(0xef)](_0x5adf04(0xf1))),document[_0x5adf04(0xeb)](_0x565d4e)[_0x5adf04(0xe4)][_0x5adf04(0xff)](_0x5adf04(0xf1)),smoothScrollAboveElement('saveActions',0x32),chosenBg=_0x565d4e;}function smoothScrollAboveElement(_0x1cd0f4,_0x3e96b3){const _0x59991e=a0_0x301ed0,_0x388d9b=document['getElementById'](_0x1cd0f4);if(_0x388d9b){const _0x26cb2e=_0x388d9b[_0x59991e(0xf6)](),_0x3a2c59=_0x26cb2e[_0x59991e(0xe8)]+window[_0x59991e(0x106)];window['scrollTo']({'top':_0x3a2c59-_0x3e96b3,'behavior':_0x59991e(0xdf)});}}function saveAvatar(){const _0x3b3b7c=a0_0x301ed0;if(chosenAvatar['head']&&chosenAvatar[_0x3b3b7c(0x10a)]){const _0x30d4e4=db[_0x3b3b7c(0x10b)]('Users')[_0x3b3b7c(0xf5)](auth[_0x3b3b7c(0x107)]['uid']);_0x30d4e4[_0x3b3b7c(0xf9)]({'avatar':chosenAvatar,'bg':chosenBg})[_0x3b3b7c(0x112)](()=>{const _0x172391=_0x3b3b7c;console['log'](_0x172391(0xf4)),db[_0x172391(0x10b)](_0x172391(0x115))['doc'](auth[_0x172391(0x107)][_0x172391(0xdd)])['collection'](_0x172391(0xf2))[_0x172391(0x111)]('title','==',_0x172391(0xf3))[_0x172391(0xf8)]()[_0x172391(0x112)](_0x36e3e7=>{_0x36e3e7['forEach'](_0x2abf09=>{const _0x15ff44=a0_0x15ff,_0x564fe4=_0x2abf09['data']()['tasks']||{};_0x564fe4[_0x15ff44(0x10e)]=!![],db['collection'](_0x15ff44(0x115))['doc'](auth['currentUser'][_0x15ff44(0xdd)])[_0x15ff44(0x10b)](_0x15ff44(0xf2))[_0x15ff44(0xf5)](_0x2abf09['id'])[_0x15ff44(0xf9)]({'tasks':_0x564fe4})[_0x15ff44(0x112)](()=>{const _0x433a02=_0x15ff44;window[_0x433a02(0xf7)]!==window[_0x433a02(0xe8)]?(alert(_0x433a02(0xfc)),window['scrollTo']({'top':0x0,'behavior':'smooth'})):window[_0x433a02(0x102)][_0x433a02(0x10f)]=_0x433a02(0xe5);})['catch'](_0x4c16f2=>{const _0x2e8e60=_0x15ff44;console[_0x2e8e60(0x103)](_0x4c16f2);});});})['catch'](_0x3bde0c=>{console['error']('Error\x20getting\x20mission:',_0x3bde0c);});})[_0x3b3b7c(0xe6)](_0x423cb9=>{const _0x2f2a22=_0x3b3b7c;console[_0x2f2a22(0x103)](_0x423cb9);});}}document[a0_0x301ed0(0xe9)](a0_0x301ed0(0xed),function(){const _0x53a167=a0_0x301ed0;auth[_0x53a167(0xe3)](_0x5de15a=>{const _0x51a15d=_0x53a167;!_0x5de15a&&(window[_0x51a15d(0x102)]=_0x51a15d(0x109));});});