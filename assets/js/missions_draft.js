const a0_0xd2df06=a0_0x1fd7;(function(_0x4c2bc6,_0x1297a2){const _0x3a73ed=a0_0x1fd7,_0x3b5397=_0x4c2bc6();while(!![]){try{const _0x498503=-parseInt(_0x3a73ed(0x20d))/0x1*(parseInt(_0x3a73ed(0x217))/0x2)+parseInt(_0x3a73ed(0x1c8))/0x3*(parseInt(_0x3a73ed(0x1a7))/0x4)+parseInt(_0x3a73ed(0x1bd))/0x5+-parseInt(_0x3a73ed(0x1fc))/0x6*(-parseInt(_0x3a73ed(0x206))/0x7)+-parseInt(_0x3a73ed(0x1ce))/0x8+-parseInt(_0x3a73ed(0x1b2))/0x9*(parseInt(_0x3a73ed(0x1ac))/0xa)+-parseInt(_0x3a73ed(0x216))/0xb*(parseInt(_0x3a73ed(0x1a9))/0xc);if(_0x498503===_0x1297a2)break;else _0x3b5397['push'](_0x3b5397['shift']());}catch(_0x454add){_0x3b5397['push'](_0x3b5397['shift']());}}}(a0_0x113a,0xd13a4));function a0_0x1fd7(_0x1dfe29,_0x73e40f){const _0x113aef=a0_0x113a();return a0_0x1fd7=function(_0x1fd7ca,_0x18e876){_0x1fd7ca=_0x1fd7ca-0x19e;let _0x5a914f=_0x113aef[_0x1fd7ca];return _0x5a914f;},a0_0x1fd7(_0x1dfe29,_0x73e40f);}let db=firebase[a0_0xd2df06(0x1a0)](),auth=firebase[a0_0xd2df06(0x1e2)]();document[a0_0xd2df06(0x1d7)](a0_0xd2df06(0x1d0),function(){const _0x4812c8=a0_0xd2df06;auth[_0x4812c8(0x20f)](function(_0x271ac3){const _0x40cf01=_0x4812c8;if(_0x271ac3){const _0x4a940b=db['collection']('Users')[_0x40cf01(0x1c2)](_0x271ac3[_0x40cf01(0x1eb)]),_0x13c0fb=new Date();_0x4a940b[_0x40cf01(0x1ec)]({'lastActive':_0x13c0fb},{'merge':!![]}),db['collection'](_0x40cf01(0x1ef))['doc'](auth[_0x40cf01(0x213)][_0x40cf01(0x1eb)])[_0x40cf01(0x1bb)]()[_0x40cf01(0x1ff)](_0x331054=>{const _0x1beb8=_0x40cf01;if(_0x331054['exists']){const _0x3565d7=_0x331054['data']();document[_0x1beb8(0x1cb)](_0x1beb8(0x1df))[_0x1beb8(0x210)]=_0x3565d7[_0x1beb8(0x1ad)],document[_0x1beb8(0x1cb)](_0x1beb8(0x1e8))[_0x1beb8(0x210)]=_0x3565d7['email'],document[_0x1beb8(0x1cb)](_0x1beb8(0x1be))[_0x1beb8(0x1da)]=_0x3565d7[_0x1beb8(0x1c5)]==''?_0x1beb8(0x1c9):_0x3565d7[_0x1beb8(0x1c5)],document[_0x1beb8(0x1cb)](_0x1beb8(0x1be))[_0x1beb8(0x1d3)]='Profile\x20picture\x20of\x20'+_0x3565d7['name'];}}),db[_0x40cf01(0x20e)](_0x40cf01(0x1ef))[_0x40cf01(0x1c2)](auth[_0x40cf01(0x213)][_0x40cf01(0x1eb)])[_0x40cf01(0x20e)](_0x40cf01(0x1a2))['orderBy']('createdAt',_0x40cf01(0x1f0))[_0x40cf01(0x1bb)]()[_0x40cf01(0x1ff)](_0x4624f7=>{const _0x3222a2=_0x40cf01;_0x4624f7[_0x3222a2(0x1e0)](_0xe02bec=>{const _0x318e2f=_0x3222a2,_0x44676e=_0xe02bec[_0x318e2f(0x1f4)]();_0x44676e[_0x318e2f(0x20b)]=_0xe02bec['id'],displayMissions(_0x44676e);});}),db[_0x40cf01(0x20e)]('Users')[_0x40cf01(0x1c2)](auth[_0x40cf01(0x213)][_0x40cf01(0x1eb)])[_0x40cf01(0x20e)](_0x40cf01(0x1a2))[_0x40cf01(0x200)](_0x40cf01(0x202),'==','Welcome\x20to\x20your\x20first\x20mission!')[_0x40cf01(0x1bb)]()[_0x40cf01(0x1ff)](_0x14233a=>{const _0x44df94=_0x40cf01;_0x14233a[_0x44df94(0x1e0)](_0x275bc0=>{const _0x57d576=_0x44df94,_0x7bc4fa=_0x275bc0['data']()['tasks']||{};_0x7bc4fa[_0x57d576(0x1d4)]=!![],db[_0x57d576(0x20e)](_0x57d576(0x1ef))[_0x57d576(0x1c2)](auth[_0x57d576(0x213)][_0x57d576(0x1eb)])['collection'](_0x57d576(0x1a2))[_0x57d576(0x1c2)](_0x275bc0['id'])[_0x57d576(0x1e6)]({'tasks':_0x7bc4fa})[_0x57d576(0x1ff)](()=>{const _0x2050e2=_0x57d576;fetchMissions()[_0x2050e2(0x1ff)](renderMission);})[_0x57d576(0x1f5)](_0x34be2c=>{const _0x4eadf3=_0x57d576;console[_0x4eadf3(0x1d1)](_0x34be2c);});});})[_0x40cf01(0x1f5)](_0x13cf99=>{const _0x56e0a2=_0x40cf01;console[_0x56e0a2(0x1d1)](_0x56e0a2(0x1ca),_0x13cf99);}),setTimeout(()=>{const _0x390bb7=_0x40cf01;missionRedeemTokens(auth['currentUser'][_0x390bb7(0x1eb)]);},0xbb8);}else window[_0x40cf01(0x1e5)][_0x40cf01(0x214)]=_0x40cf01(0x1b7);});});function displayMissions(_0x376b93){const _0xccfc2b=a0_0xd2df06,_0x1dedae=document[_0xccfc2b(0x1cb)](_0xccfc2b(0x212)),_0xc6d127=document[_0xccfc2b(0x1c3)](_0xccfc2b(0x1e4));_0xc6d127['className']='mission-card\x20bg-'+_0x376b93[_0xccfc2b(0x19e)]+_0xccfc2b(0x1b8),_0xc6d127[_0xccfc2b(0x1e7)]=()=>{openMission(_0x376b93);},_0xc6d127[_0xccfc2b(0x1d9)][_0xccfc2b(0x1ea)]=_0xccfc2b(0x1cd),_0xc6d127['id']=_0x376b93[_0xccfc2b(0x20b)],_0xc6d127[_0xccfc2b(0x1fd)][_0xccfc2b(0x1a5)]=JSON[_0xccfc2b(0x1e3)](_0x376b93),_0xc6d127[_0xccfc2b(0x210)]=_0xccfc2b(0x1b9)+_0x376b93['title']+_0xccfc2b(0x20a)+_0x376b93[_0xccfc2b(0x1de)]+_0xccfc2b(0x1fb)+(_0x376b93[_0xccfc2b(0x1ae)]?_0xccfc2b(0x1e1):_0xccfc2b(0x20c))+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-lg\x20font-semibold\x20mb-1\x22>'+_0x376b93[_0xccfc2b(0x202)]+'</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22w-full\x20bg-gray-300\x20rounded-full\x20h-2.5\x20dark:bg-gray-700\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22bg-blue-600\x20h-2.5\x20rounded-full\x22\x20style=\x22width:\x20'+_0x376b93[_0xccfc2b(0x1fe)]+_0xccfc2b(0x1ee),_0x1dedae[_0xccfc2b(0x219)](_0xc6d127),openMission(_0x376b93);}function openMission(_0x1b1a59){const _0x17f5b7=a0_0xd2df06;db['collection'](_0x17f5b7(0x1ef))[_0x17f5b7(0x1c2)](auth[_0x17f5b7(0x213)][_0x17f5b7(0x1eb)])[_0x17f5b7(0x20e)](_0x17f5b7(0x1a2))[_0x17f5b7(0x1c2)](_0x1b1a59[_0x17f5b7(0x20b)])[_0x17f5b7(0x1bb)]()[_0x17f5b7(0x1ff)](_0x4d096d=>{const _0xee52e0=_0x17f5b7,_0x4ac1a9=_0x4d096d[_0xee52e0(0x1f4)]();let _0x11cf0b=Object[_0xee52e0(0x1a3)](_0x4ac1a9[_0xee52e0(0x1f2)]);_0x11cf0b['sort']((_0x1ba568,_0x18afa9)=>_0x1ba568[0x0][_0xee52e0(0x1b5)](_0x18afa9[0x0]));let _0x38145e=Object[_0xee52e0(0x1f7)](_0x11cf0b);_0x4ac1a9['tasks']=_0x38145e;});const _0x5205fc=document[_0x17f5b7(0x1b0)](_0x17f5b7(0x1c4));_0x5205fc[_0x17f5b7(0x1e0)](_0x263e12=>{const _0xb56fd5=_0x17f5b7,_0x9e70e3=JSON[_0xb56fd5(0x1c7)](_0x263e12[_0xb56fd5(0x1fd)]['mission']),_0x5e235d=Object[_0xb56fd5(0x1a3)](_0x9e70e3[_0xb56fd5(0x1f2)])[_0xb56fd5(0x1ed)](([_0x598b77,_0x2d0c53])=>_0xb56fd5(0x1f3)+(_0x2d0c53?'checked':'')+'>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x598b77+_0xb56fd5(0x1f1))[_0xb56fd5(0x1f9)]('');_0x263e12[_0xb56fd5(0x1d9)]['display']=_0xb56fd5(0x1a1),_0x263e12[_0xb56fd5(0x1d9)][_0xb56fd5(0x211)]='column',_0x263e12[_0xb56fd5(0x1d9)][_0xb56fd5(0x1db)]=_0xb56fd5(0x1c0),_0x1b1a59=JSON[_0xb56fd5(0x1c7)](_0x263e12['dataset']['mission']);_0x1b1a59[_0xb56fd5(0x1ae)]?_0x263e12['innerHTML']=_0xb56fd5(0x1b9)+_0x1b1a59[_0xb56fd5(0x202)]+_0xb56fd5(0x20a)+_0x1b1a59[_0xb56fd5(0x1de)]+_0xb56fd5(0x1fb)+(_0x1b1a59['completed']?_0xb56fd5(0x1e1):_0xb56fd5(0x20c))+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-lg\x20font-semibold\x20mb-1\x22>'+_0x1b1a59[_0xb56fd5(0x202)]+_0xb56fd5(0x1bf)+_0x1b1a59[_0xb56fd5(0x1fe)]+'%\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22padding-top:\x2020px;\x22>'+_0x1b1a59[_0xb56fd5(0x1af)]+_0xb56fd5(0x1b4)+_0x5e235d+_0xb56fd5(0x1aa)+_0x1b1a59[_0xb56fd5(0x20b)]+_0xb56fd5(0x1f6)+_0x1b1a59[_0xb56fd5(0x20b)]+'\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2215\x22\x20height=\x2215\x22\x20fill=\x22black\x22\x20class=\x22bi\x20bi-trash-fill\x22\x20viewBox=\x220\x200\x2016\x2016\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M2.5\x201a1\x201\x200\x200\x200-1\x201v1a1\x201\x200\x200\x200\x201\x201H3v9a2\x202\x200\x200\x200\x202\x202h6a2\x202\x200\x200\x200\x202-2V4h.5a1\x201\x200\x200\x200\x201-1V2a1\x201\x200\x200\x200-1-1H10a1\x201\x200\x200\x200-1-1H7a1\x201\x200\x200\x200-1\x201zm3\x204a.5.5\x200\x200\x201\x20.5.5v7a.5.5\x200\x200\x201-1\x200v-7a.5.5\x200\x200\x201\x20.5-.5M8\x205a.5.5\x200\x200\x201\x20.5.5v7a.5.5\x200\x200\x201-1\x200v-7A.5.5\x200\x200\x201\x208\x205m3\x20.5v7a.5.5\x200\x200\x201-1\x200v-7a.5.5\x200\x200\x201\x201\x200\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20':_0x263e12['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://placehold.co/300x150\x22\x20alt=\x22'+_0x1b1a59[_0xb56fd5(0x202)]+_0xb56fd5(0x20a)+_0x1b1a59[_0xb56fd5(0x1de)]+_0xb56fd5(0x1fb)+(_0x1b1a59[_0xb56fd5(0x1ae)]?_0xb56fd5(0x1e1):_0xb56fd5(0x20c))+_0xb56fd5(0x1cf)+_0x1b1a59[_0xb56fd5(0x202)]+_0xb56fd5(0x1bf)+_0x1b1a59[_0xb56fd5(0x1fe)]+_0xb56fd5(0x1cc)+_0x1b1a59[_0xb56fd5(0x1af)]+_0xb56fd5(0x1b4)+_0x5e235d+_0xb56fd5(0x1b6)+_0x1b1a59[_0xb56fd5(0x20b)]+_0xb56fd5(0x1d5);const _0x14649e=_0x263e12[_0xb56fd5(0x1c1)]('#taskList');_0x14649e[_0xb56fd5(0x210)]=_0x5e235d;const _0x20e37a=_0x1b1a59['tasks'],_0x16728d=Object[_0xb56fd5(0x1bc)](_0x20e37a)['length'],_0x34abad=Object[_0xb56fd5(0x204)](_0x20e37a)[_0xb56fd5(0x1d6)](_0x21c516=>_0x21c516)[_0xb56fd5(0x1d8)],_0x31405d=_0x34abad/_0x16728d*0x64,_0x16ff97=_0x263e12[_0xb56fd5(0x1c1)]('.progress-bar');_0x16ff97[_0xb56fd5(0x1d9)][_0xb56fd5(0x201)]=_0x31405d+'%',db['collection'](_0xb56fd5(0x1ef))[_0xb56fd5(0x1c2)](auth[_0xb56fd5(0x213)]['uid'])[_0xb56fd5(0x20e)](_0xb56fd5(0x1a2))[_0xb56fd5(0x1c2)](_0x1b1a59['missionID'])[_0xb56fd5(0x1e6)]({'progress':_0x31405d}),_0x31405d===0x64&&!_0x1b1a59[_0xb56fd5(0x1ae)]&&toggleMissionCompletion(_0x1b1a59[_0xb56fd5(0x20b)]);});}function toggleTaskCompletion(_0x5dd09d,_0x35f2ae,_0xd00512){const _0x2ffee5=a0_0xd2df06;db[_0x2ffee5(0x20e)](_0x2ffee5(0x1ef))[_0x2ffee5(0x1c2)](auth[_0x2ffee5(0x213)][_0x2ffee5(0x1eb)])[_0x2ffee5(0x20e)](_0x2ffee5(0x1a2))[_0x2ffee5(0x1c2)](_0x5dd09d)[_0x2ffee5(0x1bb)]()[_0x2ffee5(0x1ff)](_0x10cdf1=>{const _0x28538d=_0x2ffee5,_0x3b2188=_0x10cdf1[_0x28538d(0x1f4)]();return _0x3b2188[_0x28538d(0x1f2)][_0x35f2ae]=_0xd00512,db[_0x28538d(0x20e)]('Users')['doc'](auth[_0x28538d(0x213)][_0x28538d(0x1eb)])[_0x28538d(0x20e)](_0x28538d(0x1a2))[_0x28538d(0x1c2)](_0x5dd09d)[_0x28538d(0x1e6)]({'tasks':_0x3b2188[_0x28538d(0x1f2)]});})[_0x2ffee5(0x1ff)](()=>{const _0x18883d=_0x2ffee5;fetchMissions()[_0x18883d(0x1ff)](renderMission);})['catch'](_0x3448a2=>{const _0x5b1d02=_0x2ffee5;console[_0x5b1d02(0x1d1)](_0x5b1d02(0x1a4),_0x3448a2);});}function toggleMissionCompletion(_0x1ded39){const _0x29c585=a0_0xd2df06;db[_0x29c585(0x20e)]('Users')[_0x29c585(0x1c2)](auth[_0x29c585(0x213)]['uid'])[_0x29c585(0x20e)](_0x29c585(0x1a2))[_0x29c585(0x1c2)](_0x1ded39)[_0x29c585(0x1bb)]()[_0x29c585(0x1ff)](_0x110c35=>{const _0x1f5797=_0x29c585;if(!_0x110c35['exists'])console[_0x1f5797(0x1f8)]('No\x20such\x20document!');else{const _0x418233=_0x110c35[_0x1f5797(0x1f4)]();if(_0x418233[_0x1f5797(0x1ae)]){for(let _0x3ba72c in _0x418233['tasks']){_0x418233[_0x1f5797(0x1f2)][_0x3ba72c]=![];}const _0x440cea=![];return db[_0x1f5797(0x20e)]('Users')[_0x1f5797(0x1c2)](auth['currentUser']['uid'])['collection'](_0x1f5797(0x1a2))[_0x1f5797(0x1c2)](_0x1ded39)[_0x1f5797(0x1e6)]({'tasks':_0x418233[_0x1f5797(0x1f2)],'completed':_0x440cea,'progress':_0x440cea?0x64:0x0});}else{for(let _0x55ede1 in _0x418233['tasks']){_0x418233['tasks'][_0x55ede1]=!![];}const _0x45bb12=!![];return db[_0x1f5797(0x20e)](_0x1f5797(0x1ef))[_0x1f5797(0x1c2)](auth[_0x1f5797(0x213)]['uid'])['collection'](_0x1f5797(0x1a2))[_0x1f5797(0x1c2)](_0x1ded39)[_0x1f5797(0x1e6)]({'tasks':_0x418233[_0x1f5797(0x1f2)],'completed':_0x45bb12,'progress':_0x45bb12?0x64:0x0});}}})['then'](()=>{const _0x4a05ab=_0x29c585;fetchMissions()[_0x4a05ab(0x1ff)](renderMission);})[_0x29c585(0x1f5)](_0x421e4c=>{const _0x46a21c=_0x29c585;console[_0x46a21c(0x1d1)](_0x46a21c(0x218),_0x421e4c);});}function fetchMissions(){const _0xdc4461=a0_0xd2df06;return db[_0xdc4461(0x20e)]('Users')[_0xdc4461(0x1c2)](auth[_0xdc4461(0x213)]['uid'])[_0xdc4461(0x20e)]('Missions')[_0xdc4461(0x215)](_0xdc4461(0x205),_0xdc4461(0x1f0))[_0xdc4461(0x1bb)]()['then'](_0xea259d=>{const _0x3bfc1f=_0xdc4461,_0x3c6d9c=[];return _0xea259d[_0x3bfc1f(0x1e0)](_0x4caf03=>{const _0x186789=_0x3bfc1f;_0x3c6d9c[_0x186789(0x203)](_0x4caf03[_0x186789(0x1f4)]());}),_0x3c6d9c;})[_0xdc4461(0x1f5)](_0x7ea8f0=>{const _0x93b170=_0xdc4461;console[_0x93b170(0x1d1)](_0x93b170(0x1fa),_0x7ea8f0);});}function renderMission(_0x6c1631){const _0x4bb8c2=a0_0xd2df06,_0xdf3047=document[_0x4bb8c2(0x1cb)]('missions-container');_0xdf3047[_0x4bb8c2(0x210)]='',_0x6c1631['forEach'](_0x6c2917=>{const _0x1e7c1e=_0x4bb8c2,_0x82d3ae=document[_0x1e7c1e(0x1c3)](_0x1e7c1e(0x1e4));_0x82d3ae[_0x1e7c1e(0x1b3)]=_0x1e7c1e(0x1a8)+_0x6c2917[_0x1e7c1e(0x19e)]+'-100\x20p-4\x20rounded-lg',_0x82d3ae[_0x1e7c1e(0x1e7)]=()=>{openMission(_0x6c2917);},_0x82d3ae[_0x1e7c1e(0x1d9)][_0x1e7c1e(0x1ea)]=_0x1e7c1e(0x1cd),_0x82d3ae['id']=_0x6c2917[_0x1e7c1e(0x20b)],_0x82d3ae[_0x1e7c1e(0x1fd)]['mission']=JSON['stringify'](_0x6c2917),_0x82d3ae[_0x1e7c1e(0x210)]=_0x1e7c1e(0x1b9)+_0x6c2917['title']+_0x1e7c1e(0x20a)+_0x6c2917['type']+'\x20•\x20'+(_0x6c2917[_0x1e7c1e(0x1ae)]?_0x1e7c1e(0x1e1):'Incomplete')+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-lg\x20font-semibold\x20mb-1\x22>'+_0x6c2917[_0x1e7c1e(0x202)]+'</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22w-full\x20bg-gray-300\x20rounded-full\x20h-2.5\x20dark:bg-gray-700\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22bg-blue-600\x20h-2.5\x20rounded-full\x22\x20style=\x22width:\x20'+_0x6c2917[_0x1e7c1e(0x1fe)]+_0x1e7c1e(0x1ee),_0xdf3047[_0x1e7c1e(0x219)](_0x82d3ae),openMission(_0x6c2917);});}function a0_0x113a(){const _0x31ecb4=['\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2215\x22\x20height=\x2215\x22\x20fill=\x22black\x22\x20class=\x22bi\x20bi-trash-fill\x22\x20viewBox=\x220\x200\x2016\x2016\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M2.5\x201a1\x201\x200\x200\x200-1\x201v1a1\x201\x200\x200\x200\x201\x201H3v9a2\x202\x200\x200\x200\x202\x202h6a2\x202\x200\x200\x200\x202-2V4h.5a1\x201\x200\x200\x200\x201-1V2a1\x201\x200\x200\x200-1-1H10a1\x201\x200\x200\x200-1-1H7a1\x201\x200\x200\x200-1\x201zm3\x204a.5.5\x200\x200\x201\x20.5.5v7a.5.5\x200\x200\x201-1\x200v-7a.5.5\x200\x200\x201\x20.5-.5M8\x205a.5.5\x200\x200\x201\x20.5.5v7a.5.5\x200\x200\x201-1\x200v-7A.5.5\x200\x200\x201\x208\x205m3\x20.5v7a.5.5\x200\x200\x201-1\x200v-7a.5.5\x200\x200\x201\x201\x200\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','filter','addEventListener','length','style','src','alignItems','Error\x20deleting\x20mission:\x20','Are\x20you\x20sure\x20you\x20want\x20to\x20delete\x20this\x20mission?','type','currentUser-name','forEach','Completed','auth','stringify','div','location','update','onclick','currentUser-email','yellow','textAlign','uid','set','map','%\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20','Users','asc','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','tasks','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20space-between;\x20padding-bottom:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20class=\x22form-check-input\x22\x20','data','catch','\x27)\x22\x20class=\x22btn\x20btn-outline-primary\x22>Mark\x20as\x20incomplete</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20style=\x22margin-left:\x205;\x22\x20type=\x22button\x22\x20class=\x22btn\x20btn-outline-danger\x22\x20onclick=\x22deleteMission(\x27','fromEntries','log','join','Error\x20fetching\x20missions:\x20','\x20•\x20','6HoWqID','dataset','progress','then','where','width','title','push','values','createdAt','9641758xEVskM','toString','blue','green','\x22\x20class=\x22rounded-lg\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20justify-between\x20items-center\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-sm\x20font-medium\x20text-blue-800\x22>','missionID','Incomplete','11TtBFPq','collection','onAuthStateChanged','innerHTML','flexDirection','missions-container','currentUser','href','orderBy','561rSTsdy','171846lOisbo','Error\x20updating\x20mission:\x20','appendChild','cardColour','substr','firestore','flex','Missions','entries','Error\x20updating\x20task:\x20','mission','delete','28tHYfBV','mission-card\x20bg-','124608AwJDBL','</ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20justify-content:\x20space-between;\x20margin-top:\x2020px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20onclick=\x22toggleMissionCompletion(\x27','floor','432420KFEdHt','name','completed','description','querySelectorAll','FieldValue','99lNiciC','className','</p>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20style=\x22padding-top:\x2020px;\x20font-weight:\x20bold;\x22>Tasks:</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20id=\x22taskList\x22\x20style=\x22list-style-type:\x20none;\x20padding:\x2010px\x22>','localeCompare','</ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20justify-content:\x20space-between;\x20margin-top:\x2020px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20style=\x22margin-left:\x205;\x22\x20type=\x22button\x22\x20class=\x22btn\x20btn-outline-danger\x22\x20onclick=\x22deleteMission(\x27','/signin.html','-100\x20p-4\x20rounded-lg','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://placehold.co/300x150\x22\x20alt=\x22','Get\x20started','get','keys','6873150KrqKJZ','currentUser-profile-picture','</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22w-full\x20bg-gray-300\x20rounded-full\x20h-2.5\x20dark:bg-gray-700\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22bg-blue-600\x20h-2.5\x20rounded-full\x20progress-bar\x22\x20style=\x22width:\x20','flex-start','querySelector','doc','createElement','.mission-card','profileIMG','This\x20is\x20a\x20sample\x20mission.\x20You\x20can\x20edit\x20it\x20or\x20delete\x20it.','parse','484248YAWGKi','/assets/img/default_user.jpeg','Error\x20getting\x20mission:','getElementById','%\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22padding-top:\x2020px;\x22>','left','8596328ftVwAe','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-lg\x20font-semibold\x20mb-1\x22>','DOMContentLoaded','error','random','alt','Visit\x20your\x20missions\x20page\x20to\x20see\x20your\x20missions.'];a0_0x113a=function(){return _0x31ecb4;};return a0_0x113a();}function deleteMission(_0x1005b5){const _0x2eda79=a0_0xd2df06;confirm(_0x2eda79(0x1dd))&&db[_0x2eda79(0x20e)](_0x2eda79(0x1ef))[_0x2eda79(0x1c2)](auth[_0x2eda79(0x213)][_0x2eda79(0x1eb)])['collection'](_0x2eda79(0x1a2))[_0x2eda79(0x1c2)](_0x1005b5)[_0x2eda79(0x1a6)]()[_0x2eda79(0x1ff)](()=>{fetchMissions()['then'](renderMission);})['catch'](_0x1922d4=>{const _0x1dcc26=_0x2eda79;console[_0x1dcc26(0x1d1)](_0x1dcc26(0x1dc),_0x1922d4);});}function resetMission(){const _0x1ee65b=a0_0xd2df06;let _0x4a4428=generateUniqueId(),_0x31dc16=firebase['firestore']()[_0x1ee65b(0x20e)](_0x1ee65b(0x1ef))[_0x1ee65b(0x1c2)](auth[_0x1ee65b(0x213)][_0x1ee65b(0x1eb)])['collection'](_0x1ee65b(0x1a2))['doc'](_0x4a4428);cardClasses=[_0x1ee65b(0x208),_0x1ee65b(0x209),_0x1ee65b(0x1e9)],_0x31dc16['set']({'title':'Welcome\x20to\x20your\x20first\x20mission!','description':_0x1ee65b(0x1c6),'completed':![],'tokensredeemed':![],'createdAt':firebase[_0x1ee65b(0x1a0)][_0x1ee65b(0x1b1)]['serverTimestamp'](),'members':[auth[_0x1ee65b(0x213)][_0x1ee65b(0x1eb)]],'tasks':{'Visit\x20your\x20missions\x20page\x20to\x20see\x20your\x20missions.':![],'Edit\x20your\x20avatar.':![]},'progress':0x0,'type':_0x1ee65b(0x1ba),'missionID':_0x4a4428,'cardColour':cardClasses[Math[_0x1ee65b(0x1ab)](Math[_0x1ee65b(0x1d2)]()*cardClasses['length'])]})['then'](()=>{})[_0x1ee65b(0x1f5)](_0xba5f39=>{const _0x59ab7b=_0x1ee65b;console[_0x59ab7b(0x1d1)](_0xba5f39);});}function generateUniqueId(){const _0x19d49b=a0_0xd2df06;let _0x37291b=Date['now']()['toString'](0x24);for(let _0x5a16cd=0x0;_0x5a16cd<0x5;_0x5a16cd++){_0x37291b+=Math[_0x19d49b(0x1d2)]()[_0x19d49b(0x207)](0x24)[_0x19d49b(0x19f)](0x2,0x9);}return _0x37291b;}