const a0_0x5b1b35=a0_0x31e7;(function(_0x55e6ea,_0x45ceac){const _0x32a711=a0_0x31e7,_0x3afc3e=_0x55e6ea();while(!![]){try{const _0x2ab77e=-parseInt(_0x32a711(0x1b4))/0x1*(-parseInt(_0x32a711(0x195))/0x2)+-parseInt(_0x32a711(0x193))/0x3*(parseInt(_0x32a711(0x1a7))/0x4)+parseInt(_0x32a711(0x179))/0x5*(parseInt(_0x32a711(0x1af))/0x6)+-parseInt(_0x32a711(0x175))/0x7*(parseInt(_0x32a711(0x171))/0x8)+parseInt(_0x32a711(0x140))/0x9+parseInt(_0x32a711(0x18b))/0xa+parseInt(_0x32a711(0x1ae))/0xb*(parseInt(_0x32a711(0x16a))/0xc);if(_0x2ab77e===_0x45ceac)break;else _0x3afc3e['push'](_0x3afc3e['shift']());}catch(_0x38176e){_0x3afc3e['push'](_0x3afc3e['shift']());}}}(a0_0xf2c4,0xb1199));let db=firebase[a0_0x5b1b35(0x165)](),auth=firebase['auth']();function a0_0x31e7(_0x4b60e9,_0x28a387){const _0xf2c4ca=a0_0xf2c4();return a0_0x31e7=function(_0x31e7d6,_0x29e2b5){_0x31e7d6=_0x31e7d6-0x138;let _0x3614e4=_0xf2c4ca[_0x31e7d6];return _0x3614e4;},a0_0x31e7(_0x4b60e9,_0x28a387);}document['addEventListener'](a0_0x5b1b35(0x17b),function(){const _0x294ae2=a0_0x5b1b35;auth[_0x294ae2(0x14c)](function(_0xd3df03){const _0x506a67=_0x294ae2;if(_0xd3df03){const _0x62c65c=db['collection']('Users')['doc'](_0xd3df03[_0x506a67(0x13a)]),_0x523b3a=new Date();_0x62c65c[_0x506a67(0x180)]({'lastActive':_0x523b3a},{'merge':!![]}),db[_0x506a67(0x15c)](_0x506a67(0x1a3))[_0x506a67(0x1a1)](auth[_0x506a67(0x1a0)][_0x506a67(0x13a)])[_0x506a67(0x1ab)]()[_0x506a67(0x19b)](_0x4df8d6=>{const _0x58a650=_0x506a67;if(_0x4df8d6['exists']){const _0x27436b=_0x4df8d6[_0x58a650(0x156)]();document['getElementById']('currentUser-name')[_0x58a650(0x176)]=_0x27436b[_0x58a650(0x169)],document[_0x58a650(0x149)](_0x58a650(0x198))[_0x58a650(0x176)]=_0x27436b[_0x58a650(0x157)],document[_0x58a650(0x149)](_0x58a650(0x17f))[_0x58a650(0x14f)]=_0x27436b[_0x58a650(0x18c)]==''?_0x58a650(0x174):_0x27436b[_0x58a650(0x18c)],document[_0x58a650(0x149)]('currentUser-profile-picture')[_0x58a650(0x155)]=_0x58a650(0x18a)+_0x27436b[_0x58a650(0x169)];}}),db[_0x506a67(0x15c)](_0x506a67(0x1a3))['doc'](auth[_0x506a67(0x1a0)][_0x506a67(0x13a)])[_0x506a67(0x15c)](_0x506a67(0x1b8))['orderBy']('createdAt',_0x506a67(0x162))['get']()[_0x506a67(0x19b)](_0x2a3ab3=>{const _0x110578=_0x506a67;_0x2a3ab3[_0x110578(0x15b)](_0x28e6c6=>{const _0x35ce3b=_0x110578,_0x2641ae=_0x28e6c6[_0x35ce3b(0x156)]();_0x2641ae['missionID']=_0x28e6c6['id'],displayMissions(_0x2641ae);});}),db['collection']('Users')[_0x506a67(0x1a1)](auth[_0x506a67(0x1a0)]['uid'])[_0x506a67(0x15c)](_0x506a67(0x1b8))[_0x506a67(0x14a)]('title','==',_0x506a67(0x1b7))[_0x506a67(0x1ab)]()['then'](_0x573146=>{_0x573146['forEach'](_0x1fea9c=>{const _0x94404a=a0_0x31e7,_0x1b1d53=_0x1fea9c['data']()[_0x94404a(0x161)]||{};_0x1b1d53['Visit\x20your\x20missions\x20page\x20to\x20see\x20your\x20missions.']=!![],db[_0x94404a(0x15c)](_0x94404a(0x1a3))[_0x94404a(0x1a1)](auth[_0x94404a(0x1a0)][_0x94404a(0x13a)])[_0x94404a(0x15c)](_0x94404a(0x1b8))[_0x94404a(0x1a1)](_0x1fea9c['id'])['update']({'tasks':_0x1b1d53})[_0x94404a(0x19b)](()=>{const _0x3a021d=_0x94404a;fetchMissions()[_0x3a021d(0x19b)](renderMission);})[_0x94404a(0x18e)](_0x4bcfa2=>{console['error'](_0x4bcfa2);});});})['catch'](_0x4334a9=>{const _0x451599=_0x506a67;console[_0x451599(0x14b)](_0x451599(0x170),_0x4334a9);}),setTimeout(()=>{const _0x3f0bb9=_0x506a67;missionRedeemTokens(auth[_0x3f0bb9(0x1a0)][_0x3f0bb9(0x13a)]);},0xbb8);}else window[_0x506a67(0x16f)][_0x506a67(0x199)]=_0x506a67(0x16c);});});function displayMissions(_0x187c18){const _0x15480f=a0_0x5b1b35,_0x2f5203=document[_0x15480f(0x149)](_0x15480f(0x13d)),_0x483a8d=document['createElement'](_0x15480f(0x177));_0x483a8d[_0x15480f(0x185)]=_0x15480f(0x19c)+_0x187c18[_0x15480f(0x144)]+_0x15480f(0x13f),_0x483a8d[_0x15480f(0x15a)]=()=>{openMission(_0x187c18);},_0x483a8d[_0x15480f(0x16b)]['textAlign']=_0x15480f(0x17c),_0x483a8d['id']=_0x187c18[_0x15480f(0x1b3)],_0x483a8d['dataset'][_0x15480f(0x164)]=JSON[_0x15480f(0x146)](_0x187c18),_0x483a8d['innerHTML']=_0x15480f(0x1a5)+_0x187c18['title']+'\x22\x20class=\x22rounded-lg\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20justify-between\x20items-center\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-sm\x20font-medium\x20text-blue-800\x22>'+_0x187c18[_0x15480f(0x1a6)]+_0x15480f(0x13b)+(_0x187c18[_0x15480f(0x13c)]?_0x15480f(0x1b1):_0x15480f(0x17e))+_0x15480f(0x14e)+_0x187c18[_0x15480f(0x183)]+'</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22w-full\x20bg-gray-300\x20rounded-full\x20h-2.5\x20dark:bg-gray-700\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22bg-blue-600\x20h-2.5\x20rounded-full\x22\x20style=\x22width:\x20'+_0x187c18[_0x15480f(0x16d)]+_0x15480f(0x14d),_0x2f5203[_0x15480f(0x147)](_0x483a8d),openMission(_0x187c18);}function openMission(_0x380535){const _0x51d1ef=a0_0x5b1b35;db[_0x51d1ef(0x15c)](_0x51d1ef(0x1a3))['doc'](auth[_0x51d1ef(0x1a0)]['uid'])[_0x51d1ef(0x15c)]('Missions')[_0x51d1ef(0x1a1)](_0x380535[_0x51d1ef(0x1b3)])[_0x51d1ef(0x1ab)]()[_0x51d1ef(0x19b)](_0x24a121=>{const _0x25c051=_0x51d1ef,_0x599aa2=_0x24a121[_0x25c051(0x156)]();let _0x161f5e=Object['entries'](_0x599aa2['tasks']);_0x161f5e[_0x25c051(0x17a)]((_0x52a240,_0x33e234)=>_0x52a240[0x0][_0x25c051(0x173)](_0x33e234[0x0]));let _0x5aca6a=Object[_0x25c051(0x141)](_0x161f5e);_0x599aa2[_0x25c051(0x161)]=_0x5aca6a;});const _0x3c6c04=document[_0x51d1ef(0x143)](_0x51d1ef(0x1a9));_0x3c6c04[_0x51d1ef(0x15b)](_0x4292c4=>{const _0x1958e4=_0x51d1ef,_0x5455c9=JSON[_0x1958e4(0x1ad)](_0x4292c4[_0x1958e4(0x191)]['mission']),_0x18aa4d=Object[_0x1958e4(0x196)](_0x5455c9[_0x1958e4(0x161)])[_0x1958e4(0x138)](([_0x2d9076,_0x513b8d])=>_0x1958e4(0x154)+(_0x513b8d?_0x1958e4(0x153):'')+_0x1958e4(0x151)+_0x2d9076+_0x1958e4(0x139))[_0x1958e4(0x13e)]('');_0x4292c4[_0x1958e4(0x16b)]['display']=_0x1958e4(0x1b0),_0x4292c4[_0x1958e4(0x16b)][_0x1958e4(0x150)]='column',_0x4292c4[_0x1958e4(0x16b)][_0x1958e4(0x1a4)]=_0x1958e4(0x166),_0x380535=JSON[_0x1958e4(0x1ad)](_0x4292c4[_0x1958e4(0x191)][_0x1958e4(0x164)]);_0x380535[_0x1958e4(0x13c)]?_0x4292c4[_0x1958e4(0x176)]=_0x1958e4(0x1a5)+_0x380535[_0x1958e4(0x183)]+'\x22\x20class=\x22rounded-lg\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20justify-between\x20items-center\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-sm\x20font-medium\x20text-blue-800\x22>'+_0x380535[_0x1958e4(0x1a6)]+_0x1958e4(0x13b)+(_0x380535['completed']?_0x1958e4(0x1b1):_0x1958e4(0x17e))+_0x1958e4(0x14e)+_0x380535[_0x1958e4(0x183)]+_0x1958e4(0x189)+_0x380535[_0x1958e4(0x16d)]+'%\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22padding-top:\x2020px;\x22>'+_0x380535[_0x1958e4(0x187)]+'</p>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20style=\x22padding-top:\x2020px;\x20font-weight:\x20bold;\x22>Tasks:</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20id=\x22taskList\x22\x20style=\x22list-style-type:\x20none;\x20padding:\x2010px\x22>'+_0x18aa4d+_0x1958e4(0x16e)+_0x380535[_0x1958e4(0x1b3)]+_0x1958e4(0x1b6)+_0x380535['missionID']+_0x1958e4(0x159):_0x4292c4[_0x1958e4(0x176)]=_0x1958e4(0x1a5)+_0x380535[_0x1958e4(0x183)]+'\x22\x20class=\x22rounded-lg\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20justify-between\x20items-center\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-sm\x20font-medium\x20text-blue-800\x22>'+_0x380535[_0x1958e4(0x1a6)]+'\x20•\x20'+(_0x380535[_0x1958e4(0x13c)]?_0x1958e4(0x1b1):_0x1958e4(0x17e))+_0x1958e4(0x14e)+_0x380535[_0x1958e4(0x183)]+_0x1958e4(0x189)+_0x380535[_0x1958e4(0x16d)]+_0x1958e4(0x186)+_0x380535[_0x1958e4(0x187)]+'</p>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20style=\x22padding-top:\x2020px;\x20font-weight:\x20bold;\x22>Tasks:</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20id=\x22taskList\x22\x20style=\x22list-style-type:\x20none;\x20padding:\x2010px\x22>'+_0x18aa4d+_0x1958e4(0x142)+_0x380535[_0x1958e4(0x1b3)]+'\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2215\x22\x20height=\x2215\x22\x20fill=\x22black\x22\x20class=\x22bi\x20bi-trash-fill\x22\x20viewBox=\x220\x200\x2016\x2016\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M2.5\x201a1\x201\x200\x200\x200-1\x201v1a1\x201\x200\x200\x200\x201\x201H3v9a2\x202\x200\x200\x200\x202\x202h6a2\x202\x200\x200\x200\x202-2V4h.5a1\x201\x200\x200\x200\x201-1V2a1\x201\x200\x200\x200-1-1H10a1\x201\x200\x200\x200-1-1H7a1\x201\x200\x200\x200-1\x201zm3\x204a.5.5\x200\x200\x201\x20.5.5v7a.5.5\x200\x200\x201-1\x200v-7a.5.5\x200\x200\x201\x20.5-.5M8\x205a.5.5\x200\x200\x201\x20.5.5v7a.5.5\x200\x200\x201-1\x200v-7A.5.5\x200\x200\x201\x208\x205m3\x20.5v7a.5.5\x200\x200\x201-1\x200v-7a.5.5\x200\x200\x201\x201\x200\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';const _0x507a24=_0x4292c4[_0x1958e4(0x158)](_0x1958e4(0x19a));_0x507a24[_0x1958e4(0x176)]=_0x18aa4d;const _0x5bc962=_0x380535['tasks'],_0x332d5f=Object[_0x1958e4(0x1b5)](_0x5bc962)[_0x1958e4(0x19e)],_0x397567=Object[_0x1958e4(0x15f)](_0x5bc962)[_0x1958e4(0x1b2)](_0x554f5a=>_0x554f5a)[_0x1958e4(0x19e)],_0x5163d7=_0x397567/_0x332d5f*0x64,_0xf6d685=_0x4292c4[_0x1958e4(0x158)]('.progress-bar');_0xf6d685['style'][_0x1958e4(0x17d)]=_0x5163d7+'%',db[_0x1958e4(0x15c)](_0x1958e4(0x1a3))[_0x1958e4(0x1a1)](auth['currentUser'][_0x1958e4(0x13a)])[_0x1958e4(0x15c)](_0x1958e4(0x1b8))['doc'](_0x380535['missionID'])['update']({'progress':_0x5163d7}),_0x5163d7===0x64&&!_0x380535[_0x1958e4(0x13c)]&&toggleMissionCompletion(_0x380535[_0x1958e4(0x1b3)]);});}function toggleTaskCompletion(_0x46105f,_0x41fc0b,_0xa0eb12){const _0x3853c6=a0_0x5b1b35;db[_0x3853c6(0x15c)](_0x3853c6(0x1a3))[_0x3853c6(0x1a1)](auth[_0x3853c6(0x1a0)][_0x3853c6(0x13a)])[_0x3853c6(0x15c)]('Missions')[_0x3853c6(0x1a1)](_0x46105f)[_0x3853c6(0x1ab)]()['then'](_0xf64b68=>{const _0x460c4d=_0x3853c6,_0x3e9eff=_0xf64b68[_0x460c4d(0x156)]();return _0x3e9eff[_0x460c4d(0x161)][_0x41fc0b]=_0xa0eb12,db[_0x460c4d(0x15c)]('Users')['doc'](auth[_0x460c4d(0x1a0)][_0x460c4d(0x13a)])[_0x460c4d(0x15c)](_0x460c4d(0x1b8))[_0x460c4d(0x1a1)](_0x46105f)['update']({'tasks':_0x3e9eff[_0x460c4d(0x161)]});})['then'](()=>{const _0x23c5e7=_0x3853c6;fetchMissions()[_0x23c5e7(0x19b)](renderMission);})[_0x3853c6(0x18e)](_0x5159b4=>{const _0x5a28f9=_0x3853c6;console[_0x5a28f9(0x14b)](_0x5a28f9(0x160),_0x5159b4);});}function toggleMissionCompletion(_0x125ec3){const _0x51c5ee=a0_0x5b1b35;db['collection'](_0x51c5ee(0x1a3))[_0x51c5ee(0x1a1)](auth[_0x51c5ee(0x1a0)][_0x51c5ee(0x13a)])['collection'](_0x51c5ee(0x1b8))['doc'](_0x125ec3)[_0x51c5ee(0x1ab)]()[_0x51c5ee(0x19b)](_0x50fbc4=>{const _0x5002b5=_0x51c5ee;if(!_0x50fbc4[_0x5002b5(0x148)])console[_0x5002b5(0x1a2)](_0x5002b5(0x18d));else{const _0xf2a6d1=_0x50fbc4[_0x5002b5(0x156)]();if(_0xf2a6d1[_0x5002b5(0x13c)]){for(let _0x274d2 in _0xf2a6d1[_0x5002b5(0x161)]){_0xf2a6d1[_0x5002b5(0x161)][_0x274d2]=![];}const _0x47461b=![];return db[_0x5002b5(0x15c)](_0x5002b5(0x1a3))[_0x5002b5(0x1a1)](auth[_0x5002b5(0x1a0)][_0x5002b5(0x13a)])[_0x5002b5(0x15c)]('Missions')['doc'](_0x125ec3)[_0x5002b5(0x145)]({'tasks':_0xf2a6d1['tasks'],'completed':_0x47461b,'progress':_0x47461b?0x64:0x0});}else{for(let _0x43a8f8 in _0xf2a6d1[_0x5002b5(0x161)]){_0xf2a6d1[_0x5002b5(0x161)][_0x43a8f8]=!![];}const _0x4cc0d9=!![];return db[_0x5002b5(0x15c)]('Users')[_0x5002b5(0x1a1)](auth[_0x5002b5(0x1a0)][_0x5002b5(0x13a)])[_0x5002b5(0x15c)](_0x5002b5(0x1b8))[_0x5002b5(0x1a1)](_0x125ec3)[_0x5002b5(0x145)]({'tasks':_0xf2a6d1['tasks'],'completed':_0x4cc0d9,'progress':_0x4cc0d9?0x64:0x0});}}})['then'](()=>{const _0x15f085=_0x51c5ee;fetchMissions()[_0x15f085(0x19b)](renderMission);})['catch'](_0x4de6b4=>{const _0x3b58e2=_0x51c5ee;console[_0x3b58e2(0x14b)]('Error\x20updating\x20mission:\x20',_0x4de6b4);});}function fetchMissions(){const _0x35efdf=a0_0x5b1b35;return db['collection'](_0x35efdf(0x1a3))[_0x35efdf(0x1a1)](auth[_0x35efdf(0x1a0)][_0x35efdf(0x13a)])[_0x35efdf(0x15c)](_0x35efdf(0x1b8))[_0x35efdf(0x15d)](_0x35efdf(0x152),_0x35efdf(0x162))[_0x35efdf(0x1ab)]()['then'](_0x2e41ed=>{const _0x32fc72=_0x35efdf,_0x52701a=[];return _0x2e41ed[_0x32fc72(0x15b)](_0x524d4c=>{const _0x3389ec=_0x32fc72;_0x52701a[_0x3389ec(0x168)](_0x524d4c['data']());}),_0x52701a;})[_0x35efdf(0x18e)](_0x2c1a63=>{const _0x579351=_0x35efdf;console['error'](_0x579351(0x18f),_0x2c1a63);});}function a0_0xf2c4(){const _0x11698b=['>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','createdAt','checked','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20space-between;\x20padding-bottom:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20class=\x22form-check-input\x22\x20','alt','data','email','querySelector','\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2215\x22\x20height=\x2215\x22\x20fill=\x22black\x22\x20class=\x22bi\x20bi-trash-fill\x22\x20viewBox=\x220\x200\x2016\x2016\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M2.5\x201a1\x201\x200\x200\x200-1\x201v1a1\x201\x200\x200\x200\x201\x201H3v9a2\x202\x200\x200\x200\x202\x202h6a2\x202\x200\x200\x200\x202-2V4h.5a1\x201\x200\x200\x200\x201-1V2a1\x201\x200\x200\x200-1-1H10a1\x201\x200\x200\x200-1-1H7a1\x201\x200\x200\x200-1\x201zm3\x204a.5.5\x200\x200\x201\x20.5.5v7a.5.5\x200\x200\x201-1\x200v-7a.5.5\x200\x200\x201\x20.5-.5M8\x205a.5.5\x200\x200\x201\x20.5.5v7a.5.5\x200\x200\x201-1\x200v-7A.5.5\x200\x200\x201\x208\x205m3\x20.5v7a.5.5\x200\x200\x201-1\x200v-7a.5.5\x200\x200\x201\x201\x200\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','onclick','forEach','collection','orderBy','Are\x20you\x20sure\x20you\x20want\x20to\x20delete\x20this\x20mission?','values','Error\x20updating\x20task:\x20','tasks','asc','serverTimestamp','mission','firestore','flex-start','random','push','name','156dWTYzs','style','/signin.html','progress','</ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20justify-content:\x20space-between;\x20margin-top:\x2020px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20onclick=\x22toggleMissionCompletion(\x27','location','Error\x20getting\x20mission:','11407432CMeOHy','yellow','localeCompare','/assets/img/default_user.jpeg','7OibVBJ','innerHTML','div','toString','684115HeEwaN','sort','DOMContentLoaded','left','width','Incomplete','currentUser-profile-picture','set','textAlign','\x22\x20class=\x22rounded-lg\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20justify-between\x20items-center\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-sm\x20font-medium\x20text-blue-800\x22>','title','delete','className','%\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22padding-top:\x2020px;\x22>','description','substr','</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22w-full\x20bg-gray-300\x20rounded-full\x20h-2.5\x20dark:bg-gray-700\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22bg-blue-600\x20h-2.5\x20rounded-full\x20progress-bar\x22\x20style=\x22width:\x20','Profile\x20picture\x20of\x20','969380EIbIGv','profileIMG','No\x20such\x20document!','catch','Error\x20fetching\x20missions:\x20','</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22w-full\x20bg-gray-300\x20rounded-full\x20h-2.5\x20dark:bg-gray-700\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22bg-blue-600\x20h-2.5\x20rounded-full\x22\x20style=\x22width:\x20','dataset','createElement','4273869yKOMCW','Get\x20started','2192356NjZeNX','entries','now','currentUser-email','href','#taskList','then','mission-card\x20bg-','floor','length','FieldValue','currentUser','doc','log','Users','alignItems','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://placehold.co/300x150\x22\x20alt=\x22','type','4sFjqRN','Error\x20deleting\x20mission:\x20','.mission-card','green','get','blue','parse','793056fMGZdJ','6xWjDZK','flex','Completed','filter','missionID','1JaqGOL','keys','\x27)\x22\x20class=\x22btn\x20btn-outline-primary\x22>Mark\x20as\x20incomplete</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20style=\x22margin-left:\x205;\x22\x20type=\x22button\x22\x20class=\x22btn\x20btn-outline-danger\x22\x20onclick=\x22deleteMission(\x27','Welcome\x20to\x20your\x20first\x20mission!','Missions','map','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','uid','\x20•\x20','completed','missions-container','join','-100\x20p-4\x20rounded-lg','11778894KiKeRT','fromEntries','</ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20justify-content:\x20space-between;\x20margin-top:\x2020px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20style=\x22margin-left:\x205;\x22\x20type=\x22button\x22\x20class=\x22btn\x20btn-outline-danger\x22\x20onclick=\x22deleteMission(\x27','querySelectorAll','cardColour','update','stringify','appendChild','exists','getElementById','where','error','onAuthStateChanged','%\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-lg\x20font-semibold\x20mb-1\x22>','src','flexDirection'];a0_0xf2c4=function(){return _0x11698b;};return a0_0xf2c4();}function renderMission(_0x45b601){const _0x25d5df=a0_0x5b1b35,_0x26e763=document[_0x25d5df(0x149)](_0x25d5df(0x13d));_0x26e763[_0x25d5df(0x176)]='',_0x45b601[_0x25d5df(0x15b)](_0x1399d7=>{const _0x4b5e09=_0x25d5df,_0x32e97d=document[_0x4b5e09(0x192)](_0x4b5e09(0x177));_0x32e97d[_0x4b5e09(0x185)]='mission-card\x20bg-'+_0x1399d7[_0x4b5e09(0x144)]+'-100\x20p-4\x20rounded-lg',_0x32e97d['onclick']=()=>{openMission(_0x1399d7);},_0x32e97d[_0x4b5e09(0x16b)][_0x4b5e09(0x181)]=_0x4b5e09(0x17c),_0x32e97d['id']=_0x1399d7['missionID'],_0x32e97d['dataset'][_0x4b5e09(0x164)]=JSON[_0x4b5e09(0x146)](_0x1399d7),_0x32e97d['innerHTML']=_0x4b5e09(0x1a5)+_0x1399d7[_0x4b5e09(0x183)]+_0x4b5e09(0x182)+_0x1399d7[_0x4b5e09(0x1a6)]+_0x4b5e09(0x13b)+(_0x1399d7[_0x4b5e09(0x13c)]?_0x4b5e09(0x1b1):_0x4b5e09(0x17e))+_0x4b5e09(0x14e)+_0x1399d7[_0x4b5e09(0x183)]+_0x4b5e09(0x190)+_0x1399d7['progress']+_0x4b5e09(0x14d),_0x26e763[_0x4b5e09(0x147)](_0x32e97d),openMission(_0x1399d7);});}function deleteMission(_0x19991f){const _0x3313fd=a0_0x5b1b35;confirm(_0x3313fd(0x15e))&&db['collection'](_0x3313fd(0x1a3))[_0x3313fd(0x1a1)](auth[_0x3313fd(0x1a0)][_0x3313fd(0x13a)])[_0x3313fd(0x15c)](_0x3313fd(0x1b8))[_0x3313fd(0x1a1)](_0x19991f)[_0x3313fd(0x184)]()[_0x3313fd(0x19b)](()=>{const _0x5d084a=_0x3313fd;fetchMissions()[_0x5d084a(0x19b)](renderMission);})[_0x3313fd(0x18e)](_0x248a14=>{const _0x21cb8f=_0x3313fd;console[_0x21cb8f(0x14b)](_0x21cb8f(0x1a8),_0x248a14);});}function resetMission(){const _0x33dc69=a0_0x5b1b35;let _0x4e40eb=generateUniqueId(),_0x157600=firebase[_0x33dc69(0x165)]()[_0x33dc69(0x15c)](_0x33dc69(0x1a3))['doc'](auth['currentUser']['uid'])['collection'](_0x33dc69(0x1b8))[_0x33dc69(0x1a1)](_0x4e40eb);cardClasses=[_0x33dc69(0x1ac),_0x33dc69(0x1aa),_0x33dc69(0x172)],_0x157600[_0x33dc69(0x180)]({'title':'Welcome\x20to\x20your\x20first\x20mission!','description':'This\x20is\x20a\x20sample\x20mission.\x20You\x20can\x20edit\x20it\x20or\x20delete\x20it.','completed':![],'tokensredeemed':![],'createdAt':firebase[_0x33dc69(0x165)][_0x33dc69(0x19f)][_0x33dc69(0x163)](),'members':[auth['currentUser'][_0x33dc69(0x13a)]],'tasks':{'Visit\x20your\x20missions\x20page\x20to\x20see\x20your\x20missions.':![],'Edit\x20your\x20avatar.':![]},'progress':0x0,'type':_0x33dc69(0x194),'missionID':_0x4e40eb,'cardColour':cardClasses[Math[_0x33dc69(0x19d)](Math[_0x33dc69(0x167)]()*cardClasses[_0x33dc69(0x19e)])]})[_0x33dc69(0x19b)](()=>{})[_0x33dc69(0x18e)](_0x4f51a4=>{const _0x34e51f=_0x33dc69;console[_0x34e51f(0x14b)](_0x4f51a4);});}function generateUniqueId(){const _0x406dfa=a0_0x5b1b35;let _0x4e18fe=Date[_0x406dfa(0x197)]()[_0x406dfa(0x178)](0x24);for(let _0x82370f=0x0;_0x82370f<0x5;_0x82370f++){_0x4e18fe+=Math[_0x406dfa(0x167)]()[_0x406dfa(0x178)](0x24)[_0x406dfa(0x188)](0x2,0x9);}return _0x4e18fe;}