var a0_0x502906=a0_0x34da;(function(_0x4a1846,_0x179e0f){var _0x4e9421=a0_0x34da,_0x16d7db=_0x4a1846();while(!![]){try{var _0xe247c=parseInt(_0x4e9421(0xe9))/0x1*(parseInt(_0x4e9421(0xe1))/0x2)+-parseInt(_0x4e9421(0xf8))/0x3*(parseInt(_0x4e9421(0xee))/0x4)+-parseInt(_0x4e9421(0xec))/0x5+-parseInt(_0x4e9421(0xfc))/0x6+parseInt(_0x4e9421(0xeb))/0x7*(-parseInt(_0x4e9421(0xde))/0x8)+parseInt(_0x4e9421(0xef))/0x9+parseInt(_0x4e9421(0x100))/0xa;if(_0xe247c===_0x179e0f)break;else _0x16d7db['push'](_0x16d7db['shift']());}catch(_0x35d78){_0x16d7db['push'](_0x16d7db['shift']());}}}(a0_0x5ed1,0x23594));const db=firebase[a0_0x502906(0xff)]();function addTask(){var _0x371a39=a0_0x502906,_0x31db46=document[_0x371a39(0xf5)](_0x371a39(0xe4))[_0x371a39(0xfb)];db[_0x371a39(0xe8)](_0x371a39(0x101))[_0x371a39(0xf4)]({'task':_0x31db46,'completed':![]})[_0x371a39(0xf7)](()=>{var _0x189ac4=_0x371a39;console['log']('Document\x20successfully\x20written!'),document['getElementById'](_0x189ac4(0xe4))[_0x189ac4(0xfb)]='',loadTasks();})[_0x371a39(0xf1)](_0x1b51d2=>{var _0x3001ea=_0x371a39;console[_0x3001ea(0xe2)](_0x3001ea(0xea),_0x1b51d2);});}function a0_0x34da(_0x19c83b,_0x49f90c){var _0x5ed1ec=a0_0x5ed1();return a0_0x34da=function(_0x34daf1,_0x45e23d){_0x34daf1=_0x34daf1-0xde;var _0x5096b9=_0x5ed1ec[_0x34daf1];return _0x5096b9;},a0_0x34da(_0x19c83b,_0x49f90c);}function updateTaskStatus(_0x876cfd,_0x429058){var _0x5c6547=a0_0x502906;db[_0x5c6547(0xe8)](_0x5c6547(0x101))[_0x5c6547(0xdf)](_0x876cfd)['update']({'completed':_0x429058})['then'](()=>{var _0x22b047=_0x5c6547;console[_0x22b047(0xe0)](_0x22b047(0xf6));})['catch'](_0x5681d8=>{var _0x556817=_0x5c6547;console[_0x556817(0xe2)](_0x556817(0xe3),_0x5681d8);});}function loadTasks(){var _0x531e66=a0_0x502906;db[_0x531e66(0xe8)](_0x531e66(0x101))[_0x531e66(0x104)](_0x51b35d=>{var _0x590931=_0x531e66,_0x10ddf7='';_0x51b35d[_0x590931(0xfa)](_0xc5c63d=>{var _0x19e888=_0x590931;_0x10ddf7+=_0x19e888(0xe7)+(_0xc5c63d[_0x19e888(0xe5)]()['completed']?'checked':'')+_0x19e888(0xf9)+_0xc5c63d['id']+_0x19e888(0xfe)+_0xc5c63d[_0x19e888(0xe5)]()[_0x19e888(0xfd)]+_0x19e888(0xf3)+_0xc5c63d['id']+_0x19e888(0xf2);}),document[_0x590931(0xf5)](_0x590931(0x103))['innerHTML']=_0x10ddf7;});}function deleteTask(_0x45ae26){var _0x41092f=a0_0x502906;confirm(_0x41092f(0x102))&&db[_0x41092f(0xe8)]('tasks')[_0x41092f(0xdf)](_0x45ae26)['delete']()[_0x41092f(0xf7)](()=>{var _0x1e7043=_0x41092f;console[_0x1e7043(0xe0)](_0x1e7043(0xf0)),loadTasks();})[_0x41092f(0xf1)](_0x3929cd=>{var _0x55d4a7=_0x41092f;console[_0x55d4a7(0xe2)](_0x55d4a7(0x105),_0x3929cd);});}function a0_0x5ed1(){var _0x258a37=['onSnapshot','Error\x20removing\x20document:\x20','1461584nAUuja','doc','log','2mjNXFv','error','Error\x20updating\x20document:\x20','newTask','data','addEventListener','<li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20','collection','27017sCfLri','Error\x20writing\x20document:\x20','7jPLpXb','1180470dkJVmN','DOMContentLoaded','4276rUXBkb','1579707cfsJrE','Document\x20successfully\x20deleted!','catch','\x27)\x22>Delete</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22deleteTask(\x27','add','getElementById','Document\x20successfully\x20updated!','then','69znZPTx','\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onchange=\x22updateTaskStatus(\x27','forEach','value','1446144rDbeOY','task','\x27,\x20this.checked)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','firestore','6266510vWjZTr','tasks','Are\x20you\x20sure\x20you\x20want\x20to\x20delete\x20this\x20task?','taskList'];a0_0x5ed1=function(){return _0x258a37;};return a0_0x5ed1();}document[a0_0x502906(0xe6)](a0_0x502906(0xed),function(){loadTasks();});