const a0_0x10a43e=a0_0x1966;(function(_0x236a85,_0x3e0f89){const _0xb458bc=a0_0x1966,_0x6272a7=_0x236a85();while(!![]){try{const _0x53f3e1=parseInt(_0xb458bc(0x148))/0x1*(parseInt(_0xb458bc(0x1b4))/0x2)+-parseInt(_0xb458bc(0x180))/0x3+parseInt(_0xb458bc(0x1b6))/0x4*(parseInt(_0xb458bc(0x16e))/0x5)+-parseInt(_0xb458bc(0x154))/0x6+parseInt(_0xb458bc(0x167))/0x7+parseInt(_0xb458bc(0x19b))/0x8*(parseInt(_0xb458bc(0x1b3))/0x9)+-parseInt(_0xb458bc(0x1aa))/0xa;if(_0x53f3e1===_0x3e0f89)break;else _0x6272a7['push'](_0x6272a7['shift']());}catch(_0x21f754){_0x6272a7['push'](_0x6272a7['shift']());}}}(a0_0x234e,0xd34d9));let db=firebase[a0_0x10a43e(0x199)](),auth=firebase[a0_0x10a43e(0x14b)]();document['addEventListener']('DOMContentLoaded',function(){const _0x59d7d4=a0_0x10a43e;auth[_0x59d7d4(0x198)](function(_0x49cf8e){const _0x33deb9=_0x59d7d4;if(_0x49cf8e){const _0x1abbe8=db['collection'](_0x33deb9(0x18c))[_0x33deb9(0x1a4)](_0x49cf8e['uid']),_0x4f7f5f=new Date();_0x1abbe8[_0x33deb9(0x1b9)]({'lastActive':_0x4f7f5f},{'merge':!![]}),db[_0x33deb9(0x196)](_0x33deb9(0x18c))[_0x33deb9(0x1a4)](auth[_0x33deb9(0x144)]['uid'])[_0x33deb9(0x197)]()[_0x33deb9(0x175)](_0x3c6652=>{const _0x4066be=_0x33deb9;if(_0x3c6652['exists']){const _0x4f9e6f=_0x3c6652[_0x4066be(0x156)]();document[_0x4066be(0x19c)](_0x4066be(0x15e))[_0x4066be(0x1a2)]=_0x4f9e6f[_0x4066be(0x169)],document[_0x4066be(0x19c)](_0x4066be(0x15b))['innerHTML']=_0x4f9e6f['email'],document[_0x4066be(0x19c)](_0x4066be(0x19d))[_0x4066be(0x16f)]=_0x4f9e6f['profileIMG']==''?_0x4066be(0x181):_0x4f9e6f['profileIMG'],document[_0x4066be(0x19c)]('currentUser-profile-picture')[_0x4066be(0x168)]='Profile\x20picture\x20of\x20'+_0x4f9e6f['name'];}}),db[_0x33deb9(0x196)](_0x33deb9(0x18c))['doc'](auth[_0x33deb9(0x144)][_0x33deb9(0x14f)])[_0x33deb9(0x196)](_0x33deb9(0x1a3))[_0x33deb9(0x15c)](_0x33deb9(0x1bb),'asc')[_0x33deb9(0x197)]()[_0x33deb9(0x175)](_0x141c03=>{const _0x524381=_0x33deb9;_0x141c03[_0x524381(0x1a8)](_0x58b1c0=>{const _0x3f10bc=_0x524381,_0x698881=_0x58b1c0[_0x3f10bc(0x156)]();_0x698881[_0x3f10bc(0x19a)]=_0x58b1c0['id'],displayMissions(_0x698881);});}),db[_0x33deb9(0x196)](_0x33deb9(0x18c))[_0x33deb9(0x1a4)](auth['currentUser']['uid'])[_0x33deb9(0x196)]('Missions')[_0x33deb9(0x1ba)]('title','==',_0x33deb9(0x191))[_0x33deb9(0x197)]()[_0x33deb9(0x175)](_0x3649a9=>{const _0x125860=_0x33deb9;_0x3649a9[_0x125860(0x1a8)](_0x306b96=>{const _0xc22063=_0x125860,_0x322d95=_0x306b96[_0xc22063(0x156)]()[_0xc22063(0x194)]||{};_0x322d95[_0xc22063(0x177)]=!![],db[_0xc22063(0x196)](_0xc22063(0x18c))[_0xc22063(0x1a4)](auth['currentUser'][_0xc22063(0x14f)])[_0xc22063(0x196)](_0xc22063(0x1a3))['doc'](_0x306b96['id'])[_0xc22063(0x185)]({'tasks':_0x322d95})[_0xc22063(0x175)](()=>{fetchMissions()['then'](renderMission);})[_0xc22063(0x17e)](_0x4f8fb5=>{const _0x263772=_0xc22063;console[_0x263772(0x1a6)](_0x4f8fb5);});});})[_0x33deb9(0x17e)](_0x296162=>{const _0x1e7cea=_0x33deb9;console['error'](_0x1e7cea(0x183),_0x296162);}),setTimeout(()=>{const _0x91740c=_0x33deb9;missionRedeemTokens(auth[_0x91740c(0x144)][_0x91740c(0x14f)]);},0xbb8);}else window[_0x33deb9(0x174)][_0x33deb9(0x17c)]=_0x33deb9(0x158);});});function displayMissions(_0x1c44f2){const _0x1c3bd3=a0_0x10a43e,_0x414e6b=document['getElementById'](_0x1c3bd3(0x18b)),_0x511014=document[_0x1c3bd3(0x1a7)]('div');_0x511014[_0x1c3bd3(0x17f)]=_0x1c3bd3(0x1ad)+_0x1c44f2[_0x1c3bd3(0x182)]+_0x1c3bd3(0x159),_0x511014[_0x1c3bd3(0x172)]=()=>{openMission(_0x1c44f2);},_0x511014[_0x1c3bd3(0x160)][_0x1c3bd3(0x1bc)]=_0x1c3bd3(0x1ab),_0x511014['id']=_0x1c44f2[_0x1c3bd3(0x19a)],_0x511014[_0x1c3bd3(0x165)][_0x1c3bd3(0x14c)]=JSON[_0x1c3bd3(0x153)](_0x1c44f2),_0x511014[_0x1c3bd3(0x1a2)]=_0x1c3bd3(0x161)+_0x1c44f2[_0x1c3bd3(0x155)]+'\x22\x20class=\x22rounded-lg\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20justify-between\x20items-center\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-sm\x20font-medium\x20text-blue-800\x22>'+_0x1c44f2[_0x1c3bd3(0x1a0)]+'\x20•\x20'+(_0x1c44f2[_0x1c3bd3(0x1b7)]?_0x1c3bd3(0x16a):_0x1c3bd3(0x193))+_0x1c3bd3(0x150)+_0x1c44f2[_0x1c3bd3(0x155)]+_0x1c3bd3(0x179)+_0x1c44f2[_0x1c3bd3(0x188)]+_0x1c3bd3(0x164),_0x414e6b['appendChild'](_0x511014),openMission(_0x1c44f2);}function openMission(_0x5d966a){const _0x1d99c0=a0_0x10a43e;db[_0x1d99c0(0x196)]('Users')[_0x1d99c0(0x1a4)](auth[_0x1d99c0(0x144)][_0x1d99c0(0x14f)])[_0x1d99c0(0x196)](_0x1d99c0(0x1a3))[_0x1d99c0(0x1a4)](_0x5d966a[_0x1d99c0(0x19a)])['get']()[_0x1d99c0(0x175)](_0x35ee9=>{const _0xf898b9=_0x1d99c0,_0x39e275=_0x35ee9[_0xf898b9(0x156)]();let _0x254937=Object[_0xf898b9(0x17a)](_0x39e275[_0xf898b9(0x194)]);_0x254937[_0xf898b9(0x14a)]((_0x51a1cf,_0xdf43fb)=>_0x51a1cf[0x0][_0xf898b9(0x1bf)](_0xdf43fb[0x0]));let _0x981fa9=Object[_0xf898b9(0x1a1)](_0x254937);_0x39e275[_0xf898b9(0x194)]=_0x981fa9;});const _0x48a013=document[_0x1d99c0(0x1a5)]('.mission-card');_0x48a013[_0x1d99c0(0x1a8)](_0x3e6f56=>{const _0x1cb6ed=_0x1d99c0,_0xc4e15e=JSON[_0x1cb6ed(0x166)](_0x3e6f56[_0x1cb6ed(0x165)]['mission']),_0x6f53d0=Object[_0x1cb6ed(0x17a)](_0xc4e15e[_0x1cb6ed(0x194)])[_0x1cb6ed(0x186)](([_0x186a2d,_0x2b6da8])=>_0x1cb6ed(0x192)+(_0x2b6da8?_0x1cb6ed(0x15d):'')+_0x1cb6ed(0x17b)+_0x186a2d+_0x1cb6ed(0x171))[_0x1cb6ed(0x157)]('');_0x3e6f56[_0x1cb6ed(0x160)]['display']='flex',_0x3e6f56['style'][_0x1cb6ed(0x147)]=_0x1cb6ed(0x16b),_0x3e6f56[_0x1cb6ed(0x160)][_0x1cb6ed(0x173)]=_0x1cb6ed(0x14d),_0x5d966a=JSON[_0x1cb6ed(0x166)](_0x3e6f56[_0x1cb6ed(0x165)][_0x1cb6ed(0x14c)]);_0x5d966a[_0x1cb6ed(0x1b7)]?_0x3e6f56[_0x1cb6ed(0x1a2)]='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://placehold.co/300x150\x22\x20alt=\x22'+_0x5d966a['title']+'\x22\x20class=\x22rounded-lg\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20justify-between\x20items-center\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-sm\x20font-medium\x20text-blue-800\x22>'+_0x5d966a['type']+_0x1cb6ed(0x145)+(_0x5d966a[_0x1cb6ed(0x1b7)]?'Completed':_0x1cb6ed(0x193))+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-lg\x20font-semibold\x20mb-1\x22>'+_0x5d966a['title']+_0x1cb6ed(0x151)+_0x5d966a[_0x1cb6ed(0x188)]+'%\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22padding-top:\x2020px;\x22>'+_0x5d966a['description']+'</p>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20style=\x22padding-top:\x2020px;\x20font-weight:\x20bold;\x22>Tasks:</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20id=\x22taskList\x22\x20style=\x22list-style-type:\x20none;\x20padding:\x2010px\x22>'+_0x6f53d0+_0x1cb6ed(0x143)+_0x5d966a[_0x1cb6ed(0x19a)]+_0x1cb6ed(0x146)+_0x5d966a['missionID']+'\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2215\x22\x20height=\x2215\x22\x20fill=\x22black\x22\x20class=\x22bi\x20bi-trash-fill\x22\x20viewBox=\x220\x200\x2016\x2016\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M2.5\x201a1\x201\x200\x200\x200-1\x201v1a1\x201\x200\x200\x200\x201\x201H3v9a2\x202\x200\x200\x200\x202\x202h6a2\x202\x200\x200\x200\x202-2V4h.5a1\x201\x200\x200\x200\x201-1V2a1\x201\x200\x200\x200-1-1H10a1\x201\x200\x200\x200-1-1H7a1\x201\x200\x200\x200-1\x201zm3\x204a.5.5\x200\x200\x201\x20.5.5v7a.5.5\x200\x200\x201-1\x200v-7a.5.5\x200\x200\x201\x20.5-.5M8\x205a.5.5\x200\x200\x201\x20.5.5v7a.5.5\x200\x200\x201-1\x200v-7A.5.5\x200\x200\x201\x208\x205m3\x20.5v7a.5.5\x200\x200\x201-1\x200v-7a.5.5\x200\x200\x201\x201\x200\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20':_0x3e6f56[_0x1cb6ed(0x1a2)]='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://placehold.co/300x150\x22\x20alt=\x22'+_0x5d966a['title']+_0x1cb6ed(0x18d)+_0x5d966a['type']+_0x1cb6ed(0x145)+(_0x5d966a[_0x1cb6ed(0x1b7)]?_0x1cb6ed(0x16a):_0x1cb6ed(0x193))+_0x1cb6ed(0x150)+_0x5d966a['title']+_0x1cb6ed(0x151)+_0x5d966a['progress']+_0x1cb6ed(0x176)+_0x5d966a[_0x1cb6ed(0x1ae)]+_0x1cb6ed(0x1af)+_0x6f53d0+_0x1cb6ed(0x14e)+_0x5d966a[_0x1cb6ed(0x19a)]+_0x1cb6ed(0x162);const _0x33fcd1=_0x3e6f56[_0x1cb6ed(0x189)](_0x1cb6ed(0x149));_0x33fcd1[_0x1cb6ed(0x1a2)]=_0x6f53d0;const _0x5f3c6a=_0x5d966a['tasks'],_0x429a46=Object[_0x1cb6ed(0x1b8)](_0x5f3c6a)['length'],_0x5a69f8=Object[_0x1cb6ed(0x19e)](_0x5f3c6a)[_0x1cb6ed(0x190)](_0x517fae=>_0x517fae)[_0x1cb6ed(0x18a)],_0x431795=_0x5a69f8/_0x429a46*0x64,_0x4dae80=_0x3e6f56[_0x1cb6ed(0x189)](_0x1cb6ed(0x1be));_0x4dae80[_0x1cb6ed(0x160)][_0x1cb6ed(0x1a9)]=_0x431795+'%',db[_0x1cb6ed(0x196)](_0x1cb6ed(0x18c))[_0x1cb6ed(0x1a4)](auth['currentUser']['uid'])[_0x1cb6ed(0x196)](_0x1cb6ed(0x1a3))[_0x1cb6ed(0x1a4)](_0x5d966a[_0x1cb6ed(0x19a)])[_0x1cb6ed(0x185)]({'progress':_0x431795}),_0x431795===0x64&&!_0x5d966a[_0x1cb6ed(0x1b7)]&&toggleMissionCompletion(_0x5d966a[_0x1cb6ed(0x19a)]);});}function toggleTaskCompletion(_0x2f697a,_0x4fe1a2,_0x240f02){const _0x2042b7=a0_0x10a43e;db[_0x2042b7(0x196)](_0x2042b7(0x18c))[_0x2042b7(0x1a4)](auth[_0x2042b7(0x144)][_0x2042b7(0x14f)])['collection']('Missions')['doc'](_0x2f697a)['get']()['then'](_0x38adb0=>{const _0x1ac289=_0x2042b7,_0xa1c36=_0x38adb0[_0x1ac289(0x156)]();return _0xa1c36['tasks'][_0x4fe1a2]=_0x240f02,db[_0x1ac289(0x196)]('Users')['doc'](auth[_0x1ac289(0x144)][_0x1ac289(0x14f)])[_0x1ac289(0x196)]('Missions')[_0x1ac289(0x1a4)](_0x2f697a)[_0x1ac289(0x185)]({'tasks':_0xa1c36[_0x1ac289(0x194)]});})[_0x2042b7(0x175)](()=>{fetchMissions()['then'](renderMission);})[_0x2042b7(0x17e)](_0x32a5ce=>{const _0x102368=_0x2042b7;console[_0x102368(0x1a6)](_0x102368(0x170),_0x32a5ce);});}function toggleMissionCompletion(_0x10c2fb){const _0x20b09e=a0_0x10a43e;db[_0x20b09e(0x196)](_0x20b09e(0x18c))[_0x20b09e(0x1a4)](auth[_0x20b09e(0x144)]['uid'])[_0x20b09e(0x196)](_0x20b09e(0x1a3))[_0x20b09e(0x1a4)](_0x10c2fb)[_0x20b09e(0x197)]()[_0x20b09e(0x175)](_0x4cb6be=>{const _0x5bb54b=_0x20b09e;if(!_0x4cb6be[_0x5bb54b(0x15a)])console[_0x5bb54b(0x1b1)](_0x5bb54b(0x1bd));else{const _0x2b6ea9=_0x4cb6be[_0x5bb54b(0x156)]();if(_0x2b6ea9[_0x5bb54b(0x1b7)]){for(let _0x1a5dcc in _0x2b6ea9[_0x5bb54b(0x194)]){_0x2b6ea9[_0x5bb54b(0x194)][_0x1a5dcc]=![];}const _0x281b70=![];return db['collection']('Users')[_0x5bb54b(0x1a4)](auth[_0x5bb54b(0x144)][_0x5bb54b(0x14f)])[_0x5bb54b(0x196)](_0x5bb54b(0x1a3))[_0x5bb54b(0x1a4)](_0x10c2fb)['update']({'tasks':_0x2b6ea9[_0x5bb54b(0x194)],'completed':_0x281b70,'progress':_0x281b70?0x64:0x0});}else{for(let _0x2ec9ba in _0x2b6ea9[_0x5bb54b(0x194)]){_0x2b6ea9[_0x5bb54b(0x194)][_0x2ec9ba]=!![];}const _0x2398dc=!![];return db[_0x5bb54b(0x196)](_0x5bb54b(0x18c))[_0x5bb54b(0x1a4)](auth['currentUser'][_0x5bb54b(0x14f)])[_0x5bb54b(0x196)](_0x5bb54b(0x1a3))[_0x5bb54b(0x1a4)](_0x10c2fb)[_0x5bb54b(0x185)]({'tasks':_0x2b6ea9[_0x5bb54b(0x194)],'completed':_0x2398dc,'progress':_0x2398dc?0x64:0x0});}}})[_0x20b09e(0x175)](()=>{const _0x49677e=_0x20b09e;fetchMissions()[_0x49677e(0x175)](renderMission);})[_0x20b09e(0x17e)](_0x257464=>{const _0x2c8677=_0x20b09e;console[_0x2c8677(0x1a6)](_0x2c8677(0x18e),_0x257464);});}function fetchMissions(){const _0x441751=a0_0x10a43e;return db[_0x441751(0x196)]('Users')['doc'](auth[_0x441751(0x144)][_0x441751(0x14f)])['collection']('Missions')[_0x441751(0x15c)]('createdAt',_0x441751(0x163))[_0x441751(0x197)]()['then'](_0x2ae803=>{const _0x21fc82=_0x441751,_0x124704=[];return _0x2ae803[_0x21fc82(0x1a8)](_0x1c7820=>{const _0x1fd577=_0x21fc82;_0x124704[_0x1fd577(0x1b2)](_0x1c7820[_0x1fd577(0x156)]());}),_0x124704;})[_0x441751(0x17e)](_0x21a116=>{const _0x3c081e=_0x441751;console[_0x3c081e(0x1a6)](_0x3c081e(0x1b5),_0x21a116);});}function a0_0x234e(){const _0x2ed193=['onAuthStateChanged','firestore','missionID','8pLgDqH','getElementById','currentUser-profile-picture','values','toString','type','fromEntries','innerHTML','Missions','doc','querySelectorAll','error','createElement','forEach','width','1717830VibKRf','left','substr','mission-card\x20bg-','description','</p>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20style=\x22padding-top:\x2020px;\x20font-weight:\x20bold;\x22>Tasks:</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20id=\x22taskList\x22\x20style=\x22list-style-type:\x20none;\x20padding:\x2010px\x22>','floor','log','push','4426740MaftXG','91230kTxXlW','Error\x20fetching\x20missions:\x20','79908czcbCA','completed','keys','set','where','createdAt','textAlign','No\x20such\x20document!','.progress-bar','localeCompare','</ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20justify-content:\x20space-between;\x20margin-top:\x2020px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20onclick=\x22toggleMissionCompletion(\x27','currentUser','\x20•\x20','\x27)\x22\x20class=\x22btn\x20btn-outline-primary\x22>Mark\x20as\x20incomplete</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20style=\x22margin-left:\x205;\x22\x20type=\x22button\x22\x20class=\x22btn\x20btn-outline-danger\x22\x20onclick=\x22deleteMission(\x27','flexDirection','5JbuGgl','#taskList','sort','auth','mission','flex-start','</ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20justify-content:\x20space-between;\x20margin-top:\x2020px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20style=\x22margin-left:\x205;\x22\x20type=\x22button\x22\x20class=\x22btn\x20btn-outline-danger\x22\x20onclick=\x22deleteMission(\x27','uid','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-lg\x20font-semibold\x20mb-1\x22>','</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22w-full\x20bg-gray-300\x20rounded-full\x20h-2.5\x20dark:bg-gray-700\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22bg-blue-600\x20h-2.5\x20rounded-full\x20progress-bar\x22\x20style=\x22width:\x20','yellow','stringify','4811730QOwapI','title','data','join','/signin.html','-100\x20p-4\x20rounded-lg','exists','currentUser-email','orderBy','checked','currentUser-name','appendChild','style','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://placehold.co/300x150\x22\x20alt=\x22','\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2215\x22\x20height=\x2215\x22\x20fill=\x22black\x22\x20class=\x22bi\x20bi-trash-fill\x22\x20viewBox=\x220\x200\x2016\x2016\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M2.5\x201a1\x201\x200\x200\x200-1\x201v1a1\x201\x200\x200\x200\x201\x201H3v9a2\x202\x200\x200\x200\x202\x202h6a2\x202\x200\x200\x200\x202-2V4h.5a1\x201\x200\x200\x200\x201-1V2a1\x201\x200\x200\x200-1-1H10a1\x201\x200\x200\x200-1-1H7a1\x201\x200\x200\x200-1\x201zm3\x204a.5.5\x200\x200\x201\x20.5.5v7a.5.5\x200\x200\x201-1\x200v-7a.5.5\x200\x200\x201\x20.5-.5M8\x205a.5.5\x200\x200\x201\x20.5.5v7a.5.5\x200\x200\x201-1\x200v-7A.5.5\x200\x200\x201\x208\x205m3\x20.5v7a.5.5\x200\x200\x201-1\x200v-7a.5.5\x200\x200\x201\x201\x200\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','asc','%\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20','dataset','parse','6362909ROZnZb','alt','name','Completed','column','now','FieldValue','150aduPfZ','src','Error\x20updating\x20task:\x20','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','onclick','alignItems','location','then','%\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22padding-top:\x2020px;\x22>','Visit\x20your\x20missions\x20page\x20to\x20see\x20your\x20missions.','blue','</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22w-full\x20bg-gray-300\x20rounded-full\x20h-2.5\x20dark:bg-gray-700\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22bg-blue-600\x20h-2.5\x20rounded-full\x22\x20style=\x22width:\x20','entries','>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','href','green','catch','className','1166991SEmxcB','/assets/img/default_user.jpeg','cardColour','Error\x20getting\x20mission:','random','update','map','This\x20is\x20a\x20sample\x20mission.\x20You\x20can\x20edit\x20it\x20or\x20delete\x20it.','progress','querySelector','length','missions-container','Users','\x22\x20class=\x22rounded-lg\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20justify-between\x20items-center\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-sm\x20font-medium\x20text-blue-800\x22>','Error\x20updating\x20mission:\x20','Error\x20deleting\x20mission:\x20','filter','Welcome\x20to\x20your\x20first\x20mission!','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20space-between;\x20padding-bottom:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20class=\x22form-check-input\x22\x20','Incomplete','tasks','Are\x20you\x20sure\x20you\x20want\x20to\x20delete\x20this\x20mission?','collection','get'];a0_0x234e=function(){return _0x2ed193;};return a0_0x234e();}function renderMission(_0x452484){const _0x4142a8=a0_0x10a43e,_0x55d889=document['getElementById']('missions-container');_0x55d889[_0x4142a8(0x1a2)]='',_0x452484[_0x4142a8(0x1a8)](_0x590eb5=>{const _0x3869fd=_0x4142a8,_0x16b031=document['createElement']('div');_0x16b031[_0x3869fd(0x17f)]=_0x3869fd(0x1ad)+_0x590eb5[_0x3869fd(0x182)]+'-100\x20p-4\x20rounded-lg',_0x16b031[_0x3869fd(0x172)]=()=>{openMission(_0x590eb5);},_0x16b031['style']['textAlign']=_0x3869fd(0x1ab),_0x16b031['id']=_0x590eb5['missionID'],_0x16b031[_0x3869fd(0x165)][_0x3869fd(0x14c)]=JSON['stringify'](_0x590eb5),_0x16b031['innerHTML']=_0x3869fd(0x161)+_0x590eb5['title']+_0x3869fd(0x18d)+_0x590eb5['type']+_0x3869fd(0x145)+(_0x590eb5[_0x3869fd(0x1b7)]?_0x3869fd(0x16a):_0x3869fd(0x193))+_0x3869fd(0x150)+_0x590eb5['title']+_0x3869fd(0x179)+_0x590eb5['progress']+_0x3869fd(0x164),_0x55d889[_0x3869fd(0x15f)](_0x16b031),openMission(_0x590eb5);});}function deleteMission(_0xeeb4f3){const _0x5e3a95=a0_0x10a43e;confirm(_0x5e3a95(0x195))&&db[_0x5e3a95(0x196)]('Users')['doc'](auth[_0x5e3a95(0x144)][_0x5e3a95(0x14f)])['collection'](_0x5e3a95(0x1a3))[_0x5e3a95(0x1a4)](_0xeeb4f3)['delete']()['then'](()=>{const _0x377c81=_0x5e3a95;fetchMissions()[_0x377c81(0x175)](renderMission);})[_0x5e3a95(0x17e)](_0x243db8=>{const _0x4b88d8=_0x5e3a95;console[_0x4b88d8(0x1a6)](_0x4b88d8(0x18f),_0x243db8);});}function resetMission(){const _0x1fe919=a0_0x10a43e;let _0x2ca807=generateUniqueId(),_0x32f999=firebase[_0x1fe919(0x199)]()[_0x1fe919(0x196)](_0x1fe919(0x18c))[_0x1fe919(0x1a4)](auth[_0x1fe919(0x144)]['uid'])['collection']('Missions')[_0x1fe919(0x1a4)](_0x2ca807);cardClasses=[_0x1fe919(0x178),_0x1fe919(0x17d),_0x1fe919(0x152)],_0x32f999[_0x1fe919(0x1b9)]({'title':_0x1fe919(0x191),'description':_0x1fe919(0x187),'completed':![],'tokensredeemed':![],'createdAt':firebase['firestore'][_0x1fe919(0x16d)]['serverTimestamp'](),'members':[auth[_0x1fe919(0x144)][_0x1fe919(0x14f)]],'tasks':{'Visit\x20your\x20missions\x20page\x20to\x20see\x20your\x20missions.':![],'Edit\x20your\x20avatar.':![]},'progress':0x0,'type':'Get\x20started','missionID':_0x2ca807,'cardColour':cardClasses[Math[_0x1fe919(0x1b0)](Math[_0x1fe919(0x184)]()*cardClasses[_0x1fe919(0x18a)])]})[_0x1fe919(0x175)](()=>{})['catch'](_0x15b7aa=>{const _0x17bd46=_0x1fe919;console[_0x17bd46(0x1a6)](_0x15b7aa);});}function a0_0x1966(_0x601a37,_0x4dc4eb){const _0x234edf=a0_0x234e();return a0_0x1966=function(_0x1966ad,_0x27e9c3){_0x1966ad=_0x1966ad-0x143;let _0x57f50e=_0x234edf[_0x1966ad];return _0x57f50e;},a0_0x1966(_0x601a37,_0x4dc4eb);}function generateUniqueId(){const _0x46f152=a0_0x10a43e;let _0x520230=Date[_0x46f152(0x16c)]()[_0x46f152(0x19f)](0x24);for(let _0x2d6072=0x0;_0x2d6072<0x5;_0x2d6072++){_0x520230+=Math[_0x46f152(0x184)]()[_0x46f152(0x19f)](0x24)[_0x46f152(0x1ac)](0x2,0x9);}return _0x520230;}