const a0_0x1857ff=a0_0xaf10;(function(_0x4a060e,_0x5357aa){const _0x2a148f=a0_0xaf10,_0x320246=_0x4a060e();while(!![]){try{const _0x311e27=parseInt(_0x2a148f(0xaf))/0x1*(parseInt(_0x2a148f(0xf3))/0x2)+parseInt(_0x2a148f(0xd8))/0x3+parseInt(_0x2a148f(0xcb))/0x4+parseInt(_0x2a148f(0xe8))/0x5*(parseInt(_0x2a148f(0xe3))/0x6)+-parseInt(_0x2a148f(0xfd))/0x7*(-parseInt(_0x2a148f(0x91))/0x8)+parseInt(_0x2a148f(0xbd))/0x9+parseInt(_0x2a148f(0x103))/0xa*(-parseInt(_0x2a148f(0xe6))/0xb);if(_0x311e27===_0x5357aa)break;else _0x320246['push'](_0x320246['shift']());}catch(_0x39f71b){_0x320246['push'](_0x320246['shift']());}}}(a0_0x8077,0x772c2));let db=firebase[a0_0x1857ff(0xea)](),auth=firebase[a0_0x1857ff(0xd2)]();document['addEventListener'](a0_0x1857ff(0xc3),function(){const _0x39044=a0_0x1857ff;auth[_0x39044(0xd6)](function(_0x3436ba){const _0x8e5616=_0x39044;if(_0x3436ba){const _0x14d56b=db[_0x8e5616(0xbb)]('Users')[_0x8e5616(0xc9)](_0x3436ba['uid']),_0x10ff5f=new Date();_0x14d56b[_0x8e5616(0x94)]({'lastActive':_0x10ff5f},{'merge':!![]}),db[_0x8e5616(0xbb)]('Users')['doc'](auth[_0x8e5616(0xb5)]['uid'])['get']()['then'](_0x38b538=>{const _0x26b607=_0x8e5616;if(_0x38b538[_0x26b607(0xa1)]){const _0x2b95a2=_0x38b538[_0x26b607(0xf7)]();document[_0x26b607(0xd7)]('user-profile-img')[_0x26b607(0x95)]=_0x2b95a2['profileIMG']==''?_0x26b607(0xb8):_0x2b95a2[_0x26b607(0xb0)],document[_0x26b607(0xd7)]('user-profile-img')[_0x26b607(0xb9)]=_0x26b607(0xb1)+_0x2b95a2[_0x26b607(0xce)];}}),db[_0x8e5616(0xbb)](_0x8e5616(0x9a))[_0x8e5616(0xc9)](auth[_0x8e5616(0xb5)][_0x8e5616(0x97)])['collection']('Missions')['orderBy'](_0x8e5616(0xa0),_0x8e5616(0xab))[_0x8e5616(0x9f)]()[_0x8e5616(0xaa)](_0x594464=>{const _0x402e16=_0x8e5616;_0x594464[_0x402e16(0xf0)](_0x10a8c5=>{const _0xcfe59=_0x402e16,_0x55268e=_0x10a8c5[_0xcfe59(0xf7)]();_0x55268e[_0xcfe59(0xb2)]=_0x10a8c5['id'],displayMissions(_0x55268e);});}),db[_0x8e5616(0xbb)](_0x8e5616(0x9a))['doc'](auth['currentUser'][_0x8e5616(0x97)])[_0x8e5616(0xbb)](_0x8e5616(0xdd))[_0x8e5616(0xc1)](_0x8e5616(0xf1),'==','Welcome\x20to\x20your\x20first\x20mission!')[_0x8e5616(0x9f)]()[_0x8e5616(0xaa)](_0xc5c106=>{const _0x31fe6f=_0x8e5616;_0xc5c106[_0x31fe6f(0xf0)](_0x27adba=>{const _0x17528d=_0x31fe6f,_0x32d04b=_0x27adba[_0x17528d(0xf7)]()[_0x17528d(0x102)]||{};_0x32d04b[_0x17528d(0xd4)]=!![],db[_0x17528d(0xbb)]('Users')[_0x17528d(0xc9)](auth[_0x17528d(0xb5)][_0x17528d(0x97)])['collection'](_0x17528d(0xdd))['doc'](_0x27adba['id'])[_0x17528d(0xf8)]({'tasks':_0x32d04b})[_0x17528d(0xaa)](()=>{const _0x3bbf9d=_0x17528d;fetchMissions()[_0x3bbf9d(0xaa)](renderMission);})[_0x17528d(0x101)](_0x5bc7a5=>{const _0x21e2d5=_0x17528d;console[_0x21e2d5(0xed)](_0x5bc7a5);});});})['catch'](_0x52bbb6=>{const _0x42bb4c=_0x8e5616;console[_0x42bb4c(0xed)]('Error\x20getting\x20mission:',_0x52bbb6);}),setTimeout(()=>{const _0x3b4dda=_0x8e5616;missionRedeemTokens(auth['currentUser'][_0x3b4dda(0x97)]);},0x3e8);}else window[_0x8e5616(0xc7)][_0x8e5616(0xc8)]=_0x8e5616(0x93);});});function displayMissions(_0x40677c){const _0x1b9d4a=a0_0x1857ff,_0x149738=document[_0x1b9d4a(0xd7)](_0x1b9d4a(0xa6)),_0x14f650=document[_0x1b9d4a(0xd7)]('completed-missions-container');if(!_0x40677c['completed']){const _0x303e4a=document[_0x1b9d4a(0xae)]('div');_0x303e4a[_0x1b9d4a(0xee)]=_0x1b9d4a(0xcd),_0x303e4a[_0x1b9d4a(0xf9)]=()=>{openMission(_0x40677c);},_0x303e4a[_0x1b9d4a(0xd0)][_0x1b9d4a(0xc6)]=_0x1b9d4a(0xe2),_0x303e4a['id']=_0x40677c[_0x1b9d4a(0xb2)],_0x303e4a[_0x1b9d4a(0xdc)]['mission']=JSON[_0x1b9d4a(0x9d)](_0x40677c),_0x303e4a[_0x1b9d4a(0xd1)]='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20justify-between\x20items-center\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-sm\x20font-medium\x20text-blue-400\x22>'+_0x40677c[_0x1b9d4a(0xd3)]+_0x1b9d4a(0xa4)+(_0x40677c['completed']?'Completed':_0x1b9d4a(0x9b))+_0x1b9d4a(0xdf)+_0x40677c[_0x1b9d4a(0xf1)]+_0x1b9d4a(0xe4)+_0x40677c[_0x1b9d4a(0xa3)]+'%\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20',_0x149738[_0x1b9d4a(0xe1)](_0x303e4a),openMission(_0x40677c);}else{const _0x5e480b=document[_0x1b9d4a(0xae)](_0x1b9d4a(0xe9));_0x5e480b[_0x1b9d4a(0xee)]=_0x1b9d4a(0xcd),_0x5e480b[_0x1b9d4a(0xf9)]=()=>{openMission(_0x40677c);},_0x5e480b[_0x1b9d4a(0xd0)]['textAlign']=_0x1b9d4a(0xe2),_0x5e480b['id']=_0x40677c[_0x1b9d4a(0xb2)],_0x5e480b[_0x1b9d4a(0xdc)][_0x1b9d4a(0xbe)]=JSON[_0x1b9d4a(0x9d)](_0x40677c),_0x5e480b[_0x1b9d4a(0xd1)]=_0x1b9d4a(0xc4)+_0x40677c[_0x1b9d4a(0xd3)]+_0x1b9d4a(0xa4)+(_0x40677c[_0x1b9d4a(0xbf)]?_0x1b9d4a(0xfe):'Incomplete')+_0x1b9d4a(0xdf)+_0x40677c[_0x1b9d4a(0xf1)]+_0x1b9d4a(0xe4)+_0x40677c[_0x1b9d4a(0xa3)]+'%\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20',_0x14f650['appendChild'](_0x5e480b),openMission(_0x40677c);}}function openMission(_0x10861a){const _0x1b713d=a0_0x1857ff;db['collection'](_0x1b713d(0x9a))[_0x1b713d(0xc9)](auth[_0x1b713d(0xb5)][_0x1b713d(0x97)])['collection'](_0x1b713d(0xdd))[_0x1b713d(0xc9)](_0x10861a[_0x1b713d(0xb2)])[_0x1b713d(0x9f)]()[_0x1b713d(0xaa)](_0x1594c0=>{const _0x43e8b9=_0x1b713d,_0xea6a4=_0x1594c0[_0x43e8b9(0xf7)]();let _0x2b99dc=Object[_0x43e8b9(0xb7)](_0xea6a4[_0x43e8b9(0x102)]);_0x2b99dc['sort']((_0x2dc9b3,_0x4f260f)=>_0x2dc9b3[0x0]['localeCompare'](_0x4f260f[0x0]));let _0xad2b86=Object['fromEntries'](_0x2b99dc);_0xea6a4[_0x43e8b9(0x102)]=_0xad2b86;});const _0x55d97d=document[_0x1b713d(0xb3)](_0x1b713d(0x96));_0x55d97d[_0x1b713d(0xf0)](_0x45f601=>{const _0x21b09d=_0x1b713d,_0x4f9a22=JSON[_0x21b09d(0x92)](_0x45f601[_0x21b09d(0xdc)]['mission']),_0x1308bc=Object[_0x21b09d(0xb7)](_0x4f9a22[_0x21b09d(0x102)])['map'](([_0x7fc2b3,_0x1344a1])=>_0x21b09d(0xde)+(_0x1344a1?_0x21b09d(0xc5):'')+_0x21b09d(0x104)+_0x7fc2b3+_0x21b09d(0xd9))[_0x21b09d(0xff)]('');_0x45f601['style'][_0x21b09d(0xf6)]=_0x21b09d(0xe7),_0x45f601[_0x21b09d(0xd0)][_0x21b09d(0xcf)]=_0x21b09d(0xb4),_0x45f601[_0x21b09d(0xd0)][_0x21b09d(0xb6)]=_0x21b09d(0xec),_0x10861a=JSON[_0x21b09d(0x92)](_0x45f601[_0x21b09d(0xdc)][_0x21b09d(0xbe)]);_0x10861a['completed']?_0x45f601[_0x21b09d(0xd1)]='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20justify-between\x20items-center\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-sm\x20font-medium\x20text-blue-400\x22>'+_0x10861a[_0x21b09d(0xd3)]+_0x21b09d(0xa4)+(_0x10861a[_0x21b09d(0xbf)]?'Completed':'Incomplete')+_0x21b09d(0xdf)+_0x10861a[_0x21b09d(0xf1)]+_0x21b09d(0xda)+_0x10861a[_0x21b09d(0xa3)]+_0x21b09d(0xf4)+_0x10861a[_0x21b09d(0x9e)]+_0x21b09d(0xac)+_0x1308bc+_0x21b09d(0xd5)+_0x10861a[_0x21b09d(0xb2)]+'\x27)\x22\x20class=\x22border-2\x20border-blue-600\x20px-2\x20py-1.5\x20rounded-md\x20text-blue-500\x20hover:text-white\x20hover:bg-blue-600\x20duration-200\x22>Mark\x20as\x20incomplete</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22ml-2\x20border-2\x20border-red-500\x20px-3\x20py-1.5\x20rounded-md\x20hover:text-white\x20hover:bg-red-500\x20duration-200\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2215\x22\x20height=\x2215\x22\x20fill=\x22white\x22\x20class=\x22bi\x20bi-trash-fill\x22\x20viewBox=\x220\x200\x2016\x2016\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M2.5\x201a1\x201\x200\x200\x200-1\x201v1a1\x201\x200\x200\x200\x201\x201H3v9a2\x202\x200\x200\x200\x202\x202h6a2\x202\x200\x200\x200\x202-2V4h.5a1\x201\x200\x200\x200\x201-1V2a1\x201\x200\x200\x200-1-1H10a1\x201\x200\x200\x200-1-1H7a1\x201\x200\x200\x200-1\x201zm3\x204a.5.5\x200\x200\x201\x20.5.5v7a.5.5\x200\x200\x201-1\x200v-7a.5.5\x200\x200\x201\x20.5-.5M8\x205a.5.5\x200\x200\x201\x20.5.5v7a.5.5\x200\x200\x201-1\x200v-7A.5.5\x200\x200\x201\x208\x205m3\x20.5v7a.5.5\x200\x200\x201-1\x200v-7a.5.5\x200\x200\x201\x201\x200\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20':_0x45f601[_0x21b09d(0xd1)]=_0x21b09d(0xc4)+_0x10861a[_0x21b09d(0xd3)]+_0x21b09d(0xa4)+(_0x10861a[_0x21b09d(0xbf)]?_0x21b09d(0xfe):_0x21b09d(0x9b))+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-lg\x20font-semibold\x20mb-1\x22>'+_0x10861a[_0x21b09d(0xf1)]+_0x21b09d(0xda)+_0x10861a['progress']+'%\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22padding-top:\x2020px;\x22>'+_0x10861a[_0x21b09d(0x9e)]+_0x21b09d(0xac)+_0x1308bc+_0x21b09d(0xe5);const _0x2dad84=_0x45f601[_0x21b09d(0xf2)]('#taskList');_0x2dad84[_0x21b09d(0xd1)]=_0x1308bc;const _0x24aa38=_0x10861a['tasks'],_0x141039=Object['keys'](_0x24aa38)[_0x21b09d(0x99)],_0x1fda77=Object['values'](_0x24aa38)[_0x21b09d(0xa7)](_0x16f7f2=>_0x16f7f2)[_0x21b09d(0x99)],_0x53df1b=_0x1fda77/_0x141039*0x64,_0x286a66=_0x45f601[_0x21b09d(0xf2)](_0x21b09d(0xef));_0x286a66[_0x21b09d(0xd0)][_0x21b09d(0xa9)]=_0x53df1b+'%',db[_0x21b09d(0xbb)](_0x21b09d(0x9a))[_0x21b09d(0xc9)](auth[_0x21b09d(0xb5)][_0x21b09d(0x97)])['collection'](_0x21b09d(0xdd))[_0x21b09d(0xc9)](_0x10861a[_0x21b09d(0xb2)])[_0x21b09d(0xf8)]({'progress':_0x53df1b}),_0x53df1b===0x64&&!_0x10861a[_0x21b09d(0xbf)]&&toggleMissionCompletion(_0x10861a[_0x21b09d(0xb2)]);});}function toggleTaskCompletion(_0x13c101,_0x26cee6,_0x219c67){const _0x58afb0=a0_0x1857ff;db[_0x58afb0(0xbb)]('Users')[_0x58afb0(0xc9)](auth['currentUser'][_0x58afb0(0x97)])['collection'](_0x58afb0(0xdd))[_0x58afb0(0xc9)](_0x13c101)[_0x58afb0(0x9f)]()[_0x58afb0(0xaa)](_0x11c6fa=>{const _0xcb3953=_0x58afb0,_0x30c0b4=_0x11c6fa[_0xcb3953(0xf7)]();return _0x30c0b4[_0xcb3953(0x102)][_0x26cee6]=_0x219c67,db[_0xcb3953(0xbb)](_0xcb3953(0x9a))[_0xcb3953(0xc9)](auth[_0xcb3953(0xb5)]['uid'])['collection'](_0xcb3953(0xdd))[_0xcb3953(0xc9)](_0x13c101)['update']({'tasks':_0x30c0b4[_0xcb3953(0x102)]});})['then'](()=>{const _0x470e64=_0x58afb0;fetchMissions()[_0x470e64(0xaa)](renderMission);})[_0x58afb0(0x101)](_0x166b20=>{const _0x2cef6f=_0x58afb0;console[_0x2cef6f(0xed)](_0x2cef6f(0xa2),_0x166b20);});}function a0_0xaf10(_0x3469f4,_0x37c89e){const _0x807719=a0_0x8077();return a0_0xaf10=function(_0xaf1047,_0xbcf934){_0xaf1047=_0xaf1047-0x91;let _0x1d0ac2=_0x807719[_0xaf1047];return _0x1d0ac2;},a0_0xaf10(_0x3469f4,_0x37c89e);}function toggleMissionCompletion(_0x3f1f70){const _0x27d68b=a0_0x1857ff;db[_0x27d68b(0xbb)](_0x27d68b(0x9a))[_0x27d68b(0xc9)](auth[_0x27d68b(0xb5)]['uid'])[_0x27d68b(0xbb)]('Missions')[_0x27d68b(0xc9)](_0x3f1f70)[_0x27d68b(0x9f)]()[_0x27d68b(0xaa)](_0x1d30c3=>{const _0x149743=_0x27d68b;if(!_0x1d30c3[_0x149743(0xa1)])console[_0x149743(0xcc)](_0x149743(0xfb));else{const _0x2ade64=_0x1d30c3[_0x149743(0xf7)]();if(_0x2ade64[_0x149743(0xbf)]){for(let _0x175525 in _0x2ade64[_0x149743(0x102)]){_0x2ade64[_0x149743(0x102)][_0x175525]=![];}const _0xe27cb2=![];return db['collection']('Users')['doc'](auth[_0x149743(0xb5)][_0x149743(0x97)])['collection'](_0x149743(0xdd))[_0x149743(0xc9)](_0x3f1f70)[_0x149743(0xf8)]({'tasks':_0x2ade64[_0x149743(0x102)],'completed':_0xe27cb2,'progress':_0xe27cb2?0x64:0x0});}else{for(let _0x1eb3b0 in _0x2ade64[_0x149743(0x102)]){_0x2ade64[_0x149743(0x102)][_0x1eb3b0]=!![];}const _0x3238ab=!![];return db['collection'](_0x149743(0x9a))['doc'](auth['currentUser'][_0x149743(0x97)])[_0x149743(0xbb)](_0x149743(0xdd))[_0x149743(0xc9)](_0x3f1f70)[_0x149743(0xf8)]({'tasks':_0x2ade64['tasks'],'completed':_0x3238ab,'progress':_0x3238ab?0x64:0x0});}}})[_0x27d68b(0xaa)](()=>{const _0x738cef=_0x27d68b;fetchMissions()[_0x738cef(0xaa)](renderMission);})[_0x27d68b(0x101)](_0x2d93b3=>{const _0x4df4f3=_0x27d68b;console['error'](_0x4df4f3(0x100),_0x2d93b3);});}function fetchMissions(){const _0x3508d0=a0_0x1857ff;return db[_0x3508d0(0xbb)](_0x3508d0(0x9a))[_0x3508d0(0xc9)](auth[_0x3508d0(0xb5)][_0x3508d0(0x97)])[_0x3508d0(0xbb)](_0x3508d0(0xdd))[_0x3508d0(0xfc)](_0x3508d0(0xa0),_0x3508d0(0xab))[_0x3508d0(0x9f)]()[_0x3508d0(0xaa)](_0x4b40fe=>{const _0x459100=[];return _0x4b40fe['forEach'](_0x3f4edd=>{const _0x3db02e=a0_0xaf10;_0x459100[_0x3db02e(0xa8)](_0x3f4edd[_0x3db02e(0xf7)]());}),_0x459100;})[_0x3508d0(0x101)](_0x4a9910=>{const _0x14fc88=_0x3508d0;console['error'](_0x14fc88(0xc2),_0x4a9910);});}function renderMission(_0x3428f0){const _0x161391=a0_0x1857ff,_0x37209d=document['getElementById'](_0x161391(0xa6));_0x37209d[_0x161391(0xd1)]='',_0x3428f0[_0x161391(0xf0)](_0x4dd923=>{const _0xb1d1e0=_0x161391;if(!_0x4dd923[_0xb1d1e0(0xbf)]){const _0x45189f=document[_0xb1d1e0(0xae)](_0xb1d1e0(0xe9));_0x45189f[_0xb1d1e0(0xee)]=_0xb1d1e0(0xcd),_0x45189f[_0xb1d1e0(0xf9)]=()=>{openMission(_0x4dd923);},_0x45189f['style'][_0xb1d1e0(0xc6)]='left',_0x45189f['id']=_0x4dd923['missionID'],_0x45189f[_0xb1d1e0(0xdc)][_0xb1d1e0(0xbe)]=JSON['stringify'](_0x4dd923),_0x45189f[_0xb1d1e0(0xd1)]='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20justify-between\x20items-center\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-sm\x20font-medium\x20text-blue-400\x22>'+_0x4dd923[_0xb1d1e0(0xd3)]+_0xb1d1e0(0xa4)+(_0x4dd923[_0xb1d1e0(0xbf)]?_0xb1d1e0(0xfe):'Incomplete')+_0xb1d1e0(0xdf)+_0x4dd923[_0xb1d1e0(0xf1)]+_0xb1d1e0(0xe4)+_0x4dd923[_0xb1d1e0(0xa3)]+_0xb1d1e0(0xba),_0x37209d[_0xb1d1e0(0xe1)](_0x45189f),openMission(_0x4dd923);}else{const _0x2dbc58=document[_0xb1d1e0(0xd7)]('completed-missions-container');_0x2dbc58[_0xb1d1e0(0xd1)]='';const _0x170e44=document[_0xb1d1e0(0xae)]('div');_0x170e44[_0xb1d1e0(0xee)]=_0xb1d1e0(0xcd),_0x170e44['onclick']=()=>{openMission(_0x4dd923);},_0x170e44[_0xb1d1e0(0xd0)]['textAlign']=_0xb1d1e0(0xe2),_0x170e44['id']=_0x4dd923[_0xb1d1e0(0xb2)],_0x170e44[_0xb1d1e0(0xdc)][_0xb1d1e0(0xbe)]=JSON['stringify'](_0x4dd923),_0x170e44[_0xb1d1e0(0xd1)]='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20justify-between\x20items-center\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-sm\x20font-medium\x20text-blue-400\x22>'+_0x4dd923[_0xb1d1e0(0xd3)]+_0xb1d1e0(0xa4)+(_0x4dd923[_0xb1d1e0(0xbf)]?_0xb1d1e0(0xfe):_0xb1d1e0(0x9b))+_0xb1d1e0(0xdf)+_0x4dd923[_0xb1d1e0(0xf1)]+_0xb1d1e0(0xe4)+_0x4dd923[_0xb1d1e0(0xa3)]+_0xb1d1e0(0xba),_0x2dbc58[_0xb1d1e0(0xe1)](_0x170e44),openMission(_0x4dd923);}});}function a0_0x8077(){const _0x474c4d=['random','createElement','2974pJwpvr','profileIMG','Profile\x20picture\x20of\x20','missionID','querySelectorAll','column','currentUser','alignItems','entries','/assets/img/default_user.jpeg','alt','%\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20','collection','floor','6143697oVcckY','mission','completed','Welcome\x20to\x20your\x20first\x20mission!','where','Error\x20fetching\x20missions:\x20','DOMContentLoaded','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20justify-between\x20items-center\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-sm\x20font-medium\x20text-blue-400\x22>','checked','textAlign','location','href','doc','Get\x20started','779804VWOSPM','log','mission-card\x20bg-[#2B2B2B]\x20p-4\x20rounded-lg','name','flexDirection','style','innerHTML','auth','type','Visit\x20your\x20missions\x20page\x20to\x20see\x20your\x20missions.','</ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20justify-content:\x20space-between;\x20margin-top:\x2020px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20onclick=\x22toggleMissionCompletion(\x27','onAuthStateChanged','getElementById','1712820mDQdEC','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22w-full\x20bg-gray-300\x20rounded-full\x20h-2.5\x20dark:bg-gray-700\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22bg-blue-600\x20h-2.5\x20rounded-full\x20progress-bar\x22\x20style=\x22width:\x20','toString','dataset','Missions','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20space-between;\x20padding-bottom:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20class=\x22form-check-input\x22\x20','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-lg\x20font-semibold\x20mb-1\x22>','delete','appendChild','left','1566xxVKrr','</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22w-full\x20bg-gray-300\x20rounded-full\x20h-2.5\x20dark:bg-gray-700\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22bg-blue-600\x20h-2.5\x20rounded-full\x22\x20style=\x22width:\x20','</ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20justify-content:\x20space-between;\x20margin-top:\x2020px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22ml-2\x20border-2\x20border-red-500\x20px-3\x20py-2\x20rounded-md\x20hover:text-white\x20hover:bg-red-500\x20duration-200\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2215\x22\x20height=\x2215\x22\x20fill=\x22white\x22\x20class=\x22bi\x20bi-trash-fill\x22\x20viewBox=\x220\x200\x2016\x2016\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M2.5\x201a1\x201\x200\x200\x200-1\x201v1a1\x201\x200\x200\x200\x201\x201H3v9a2\x202\x200\x200\x200\x202\x202h6a2\x202\x200\x200\x200\x202-2V4h.5a1\x201\x200\x200\x200\x201-1V2a1\x201\x200\x200\x200-1-1H10a1\x201\x200\x200\x200-1-1H7a1\x201\x200\x200\x200-1\x201zm3\x204a.5.5\x200\x200\x201\x20.5.5v7a.5.5\x200\x200\x201-1\x200v-7a.5.5\x200\x200\x201\x20.5-.5M8\x205a.5.5\x200\x200\x201\x20.5.5v7a.5.5\x200\x200\x201-1\x200v-7A.5.5\x200\x200\x201\x208\x205m3\x20.5v7a.5.5\x200\x200\x201-1\x200v-7a.5.5\x200\x200\x201\x201\x200\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','14449611XipWGo','flex','14480waJOis','div','firestore','Are\x20you\x20sure\x20you\x20want\x20to\x20delete\x20this\x20mission?','flex-start','error','className','.progress-bar','forEach','title','querySelector','58XLRppN','%\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22padding-top:\x2020px;\x22>','blue','display','data','update','onclick','serverTimestamp','No\x20such\x20document!','orderBy','1924314sXZoNq','Completed','join','Error\x20updating\x20mission:\x20','catch','tasks','20YGbgjg','>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','24NHpVZR','parse','/signin.html','set','src','.mission-card','uid','yellow','length','Users','Incomplete','now','stringify','description','get','createdAt','exists','Error\x20updating\x20task:\x20','progress','\x20•\x20','green','missions-container','filter','push','width','then','asc','</p>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20style=\x22padding-top:\x2020px;\x20font-weight:\x20bold;\x22>Tasks:</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20id=\x22taskList\x22\x20style=\x22list-style-type:\x20none;\x20padding:\x2010px\x22>'];a0_0x8077=function(){return _0x474c4d;};return a0_0x8077();}function deleteMission(_0x236d32){const _0x26f7a3=a0_0x1857ff;confirm(_0x26f7a3(0xeb))&&db[_0x26f7a3(0xbb)](_0x26f7a3(0x9a))[_0x26f7a3(0xc9)](auth[_0x26f7a3(0xb5)]['uid'])[_0x26f7a3(0xbb)](_0x26f7a3(0xdd))['doc'](_0x236d32)[_0x26f7a3(0xe0)]()[_0x26f7a3(0xaa)](()=>{const _0x26cc23=_0x26f7a3;fetchMissions()[_0x26cc23(0xaa)](renderMission);})[_0x26f7a3(0x101)](_0x495ba5=>{const _0x158d98=_0x26f7a3;console[_0x158d98(0xed)]('Error\x20deleting\x20mission:\x20',_0x495ba5);});}function resetMission(){const _0x17acdd=a0_0x1857ff;let _0x27011e=generateUniqueId(),_0x5864d9=firebase[_0x17acdd(0xea)]()[_0x17acdd(0xbb)](_0x17acdd(0x9a))[_0x17acdd(0xc9)](auth['currentUser'][_0x17acdd(0x97)])[_0x17acdd(0xbb)](_0x17acdd(0xdd))[_0x17acdd(0xc9)](_0x27011e);cardClasses=[_0x17acdd(0xf5),_0x17acdd(0xa5),_0x17acdd(0x98)],_0x5864d9[_0x17acdd(0x94)]({'title':_0x17acdd(0xc0),'description':'This\x20is\x20a\x20sample\x20mission.\x20You\x20can\x20edit\x20it\x20or\x20delete\x20it.','completed':![],'tokensredeemed':![],'createdAt':firebase[_0x17acdd(0xea)]['FieldValue'][_0x17acdd(0xfa)](),'members':[auth[_0x17acdd(0xb5)][_0x17acdd(0x97)]],'tasks':{'Visit\x20your\x20missions\x20page\x20to\x20see\x20your\x20missions.':![],'Edit\x20your\x20avatar.':![]},'progress':0x0,'type':_0x17acdd(0xca),'missionID':_0x27011e,'cardColour':cardClasses[Math[_0x17acdd(0xbc)](Math['random']()*cardClasses[_0x17acdd(0x99)])]})[_0x17acdd(0xaa)](()=>{})['catch'](_0x424ef9=>{const _0xd3363d=_0x17acdd;console[_0xd3363d(0xed)](_0x424ef9);});}function generateUniqueId(){const _0x1eaeff=a0_0x1857ff;let _0x2d3469=Date[_0x1eaeff(0x9c)]()[_0x1eaeff(0xdb)](0x24);for(let _0x479e94=0x0;_0x479e94<0x5;_0x479e94++){_0x2d3469+=Math[_0x1eaeff(0xad)]()['toString'](0x24)['substr'](0x2,0x9);}return _0x2d3469;}