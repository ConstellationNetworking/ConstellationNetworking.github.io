var a0_0x14a782=a0_0x47f6;function a0_0x47f6(_0xbafaa2,_0x30e60b){var _0x5ce4e6=a0_0x5ce4();return a0_0x47f6=function(_0x47f640,_0x2281e5){_0x47f640=_0x47f640-0x1d3;var _0x13fc87=_0x5ce4e6[_0x47f640];return _0x13fc87;},a0_0x47f6(_0xbafaa2,_0x30e60b);}(function(_0x29ca4a,_0x4d9e0a){var _0xa9a1b0=a0_0x47f6,_0x561a4e=_0x29ca4a();while(!![]){try{var _0x229fe3=parseInt(_0xa9a1b0(0x1df))/0x1*(parseInt(_0xa9a1b0(0x1d8))/0x2)+parseInt(_0xa9a1b0(0x1dd))/0x3*(parseInt(_0xa9a1b0(0x1d6))/0x4)+parseInt(_0xa9a1b0(0x1ed))/0x5+-parseInt(_0xa9a1b0(0x1dc))/0x6*(parseInt(_0xa9a1b0(0x1d9))/0x7)+parseInt(_0xa9a1b0(0x1de))/0x8*(parseInt(_0xa9a1b0(0x1e5))/0x9)+parseInt(_0xa9a1b0(0x1e4))/0xa*(-parseInt(_0xa9a1b0(0x1f3))/0xb)+-parseInt(_0xa9a1b0(0x1f7))/0xc;if(_0x229fe3===_0x4d9e0a)break;else _0x561a4e['push'](_0x561a4e['shift']());}catch(_0x134242){_0x561a4e['push'](_0x561a4e['shift']());}}}(a0_0x5ce4,0x908e6));const db=firebase[a0_0x14a782(0x1e8)]();function addTask(){var _0x2484c9=a0_0x14a782,_0x5cdcb6=document[_0x2484c9(0x1eb)](_0x2484c9(0x1f2))['value'];db[_0x2484c9(0x1f4)]('tasks')[_0x2484c9(0x1f1)]({'task':_0x5cdcb6,'completed':![]})['then'](()=>{var _0x3558b7=_0x2484c9;console[_0x3558b7(0x1d7)](_0x3558b7(0x1f5)),document['getElementById'](_0x3558b7(0x1f2))['value']='',loadTasks();})[_0x2484c9(0x1e0)](_0x52e893=>{var _0x952241=_0x2484c9;console[_0x952241(0x1d5)]('Error\x20writing\x20document:\x20',_0x52e893);});}function a0_0x5ce4(){var _0x134d7d=['newTask','3179coFJwY','collection','Document\x20successfully\x20written!','then','12063036zvfByL','taskList','\x27,\x20this.checked)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','error','2021836VitgqF','log','4oQOiSs','2392824thKuJj','checked','task','6towHeY','3joYDcA','4168vPBEkm','116803NEqxzK','catch','Document\x20successfully\x20updated!','tasks','Error\x20removing\x20document:\x20','1810YMQNFa','18423lbTSeP','data','Are\x20you\x20sure\x20you\x20want\x20to\x20delete\x20this\x20task?','firestore','<li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20','innerHTML','getElementById','Error\x20updating\x20document:\x20','929720VpVHcF','completed','DOMContentLoaded','\x27)\x22>Delete</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>','add'];a0_0x5ce4=function(){return _0x134d7d;};return a0_0x5ce4();}function updateTaskStatus(_0x40d5d0,_0x553fb8){var _0x1c9c92=a0_0x14a782;db[_0x1c9c92(0x1f4)](_0x1c9c92(0x1e2))['doc'](_0x40d5d0)['update']({'completed':_0x553fb8})[_0x1c9c92(0x1f6)](()=>{var _0x58418b=_0x1c9c92;console[_0x58418b(0x1d7)](_0x58418b(0x1e1));})[_0x1c9c92(0x1e0)](_0x1a8d49=>{var _0x16a62f=_0x1c9c92;console[_0x16a62f(0x1d5)](_0x16a62f(0x1ec),_0x1a8d49);});}function loadTasks(){var _0x38552b=a0_0x14a782;db[_0x38552b(0x1f4)](_0x38552b(0x1e2))['onSnapshot'](_0x2148be=>{var _0xd8de53=_0x38552b,_0x3db396='';_0x2148be['forEach'](_0x188232=>{var _0x146a20=a0_0x47f6;_0x3db396+=_0x146a20(0x1e9)+(_0x188232['data']()[_0x146a20(0x1ee)]?_0x146a20(0x1da):'')+'\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onchange=\x22updateTaskStatus(\x27'+_0x188232['id']+_0x146a20(0x1d4)+_0x188232[_0x146a20(0x1e6)]()[_0x146a20(0x1db)]+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22deleteTask(\x27'+_0x188232['id']+_0x146a20(0x1f0);}),document[_0xd8de53(0x1eb)](_0xd8de53(0x1d3))[_0xd8de53(0x1ea)]=_0x3db396;});}function deleteTask(_0x1fa92c){var _0xb27992=a0_0x14a782;confirm(_0xb27992(0x1e7))&&db['collection'](_0xb27992(0x1e2))['doc'](_0x1fa92c)['delete']()[_0xb27992(0x1f6)](()=>{console['log']('Document\x20successfully\x20deleted!'),loadTasks();})[_0xb27992(0x1e0)](_0x50eebf=>{var _0x54fec1=_0xb27992;console['error'](_0x54fec1(0x1e3),_0x50eebf);});}document['addEventListener'](a0_0x14a782(0x1ef),function(){loadTasks();});