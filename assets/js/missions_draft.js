const a0_0x522d47=a0_0x5354;(function(_0x4b5cd9,_0x39a5f9){const _0x24cf98=a0_0x5354,_0x196c04=_0x4b5cd9();while(!![]){try{const _0x2af2dd=-parseInt(_0x24cf98(0x125))/0x1*(-parseInt(_0x24cf98(0x115))/0x2)+-parseInt(_0x24cf98(0xed))/0x3+-parseInt(_0x24cf98(0x120))/0x4*(parseInt(_0x24cf98(0xf5))/0x5)+-parseInt(_0x24cf98(0x11f))/0x6+-parseInt(_0x24cf98(0x109))/0x7*(-parseInt(_0x24cf98(0x118))/0x8)+parseInt(_0x24cf98(0x153))/0x9*(parseInt(_0x24cf98(0x12a))/0xa)+-parseInt(_0x24cf98(0xff))/0xb;if(_0x2af2dd===_0x39a5f9)break;else _0x196c04['push'](_0x196c04['shift']());}catch(_0xbe5cae){_0x196c04['push'](_0x196c04['shift']());}}}(a0_0x4a9b,0x822da));function a0_0x5354(_0x544166,_0x3a9902){const _0x4a9bf6=a0_0x4a9b();return a0_0x5354=function(_0x5354bf,_0x538edc){_0x5354bf=_0x5354bf-0xec;let _0x5b6719=_0x4a9bf6[_0x5354bf];return _0x5b6719;},a0_0x5354(_0x544166,_0x3a9902);}let db=firebase[a0_0x522d47(0x151)](),auth=firebase[a0_0x522d47(0x166)]();document['addEventListener']('DOMContentLoaded',function(){auth['onAuthStateChanged'](function(_0x13ad9b){const _0x207c8d=a0_0x5354;if(_0x13ad9b){const _0x22fc72=db[_0x207c8d(0xfd)](_0x207c8d(0xf7))[_0x207c8d(0x162)](_0x13ad9b[_0x207c8d(0x14b)]),_0x16e99e=new Date();_0x22fc72[_0x207c8d(0x158)]({'lastActive':_0x16e99e},{'merge':!![]}),db[_0x207c8d(0xfd)](_0x207c8d(0xf7))[_0x207c8d(0x162)](auth['currentUser'][_0x207c8d(0x14b)])[_0x207c8d(0x10a)]()[_0x207c8d(0x122)](_0x40d2dc=>{const _0xedd9d8=_0x207c8d;if(_0x40d2dc[_0xedd9d8(0xec)]){const _0x34bd61=_0x40d2dc[_0xedd9d8(0x117)]();document['getElementById']('currentUser-name')[_0xedd9d8(0x143)]=_0x34bd61['name'],document[_0xedd9d8(0x113)](_0xedd9d8(0x142))[_0xedd9d8(0x143)]=_0x34bd61[_0xedd9d8(0x139)],document[_0xedd9d8(0x113)](_0xedd9d8(0x13d))['src']=_0x34bd61[_0xedd9d8(0x112)]==''?'/assets/img/default_user.jpeg':_0x34bd61['profileIMG'],document[_0xedd9d8(0x113)](_0xedd9d8(0x13d))[_0xedd9d8(0xee)]=_0xedd9d8(0x152)+_0x34bd61[_0xedd9d8(0x14e)];}}),db['collection'](_0x207c8d(0xf7))[_0x207c8d(0x162)](auth[_0x207c8d(0x146)]['uid'])[_0x207c8d(0xfd)](_0x207c8d(0x12e))[_0x207c8d(0xfa)](_0x207c8d(0xef),_0x207c8d(0x10d))[_0x207c8d(0x10a)]()[_0x207c8d(0x122)](_0x1a1dba=>{const _0x17a1b4=_0x207c8d;_0x1a1dba[_0x17a1b4(0x141)](_0x3e9b89=>{const _0x1b34be=_0x17a1b4,_0x1e920e=_0x3e9b89['data']();_0x1e920e[_0x1b34be(0x145)]=_0x3e9b89['id'],displayMissions(_0x1e920e);});}),db[_0x207c8d(0xfd)](_0x207c8d(0xf7))['doc'](auth['currentUser'][_0x207c8d(0x14b)])[_0x207c8d(0xfd)]('Missions')['where']('title','==',_0x207c8d(0x150))[_0x207c8d(0x10a)]()[_0x207c8d(0x122)](_0x43dfba=>{const _0x58fc2b=_0x207c8d;_0x43dfba[_0x58fc2b(0x141)](_0xf1cf34=>{const _0x2c676c=_0x58fc2b,_0x4c65b1=_0xf1cf34['data']()[_0x2c676c(0x128)]||{};_0x4c65b1['Visit\x20your\x20missions\x20page\x20to\x20see\x20your\x20missions.']=!![],db[_0x2c676c(0xfd)](_0x2c676c(0xf7))[_0x2c676c(0x162)](auth['currentUser']['uid'])['collection'](_0x2c676c(0x12e))[_0x2c676c(0x162)](_0xf1cf34['id'])['update']({'tasks':_0x4c65b1})[_0x2c676c(0x122)](()=>{fetchMissions()['then'](renderMission);})[_0x2c676c(0x11e)](_0x48635b=>{const _0x4a2c8b=_0x2c676c;console[_0x4a2c8b(0x132)](_0x48635b);});});})[_0x207c8d(0x11e)](_0x47dcd7=>{const _0x257ac0=_0x207c8d;console[_0x257ac0(0x132)](_0x257ac0(0xf8),_0x47dcd7);}),setTimeout(()=>{const _0x4000ca=_0x207c8d;missionRedeemTokens(auth[_0x4000ca(0x146)]['uid']);},0xbb8);}else window[_0x207c8d(0x106)][_0x207c8d(0x108)]='/signin.html';});});function displayMissions(_0x49096e){const _0x118629=a0_0x522d47,_0x29e1db=document[_0x118629(0x113)](_0x118629(0xf6)),_0x52f57e=document['createElement'](_0x118629(0x111));_0x52f57e[_0x118629(0x133)]=_0x118629(0x129)+_0x49096e[_0x118629(0x121)]+_0x118629(0x127),_0x52f57e[_0x118629(0xf2)]=()=>{openMission(_0x49096e);},_0x52f57e['style'][_0x118629(0x163)]=_0x118629(0x10f),_0x52f57e['id']=_0x49096e[_0x118629(0x145)],_0x52f57e[_0x118629(0x161)][_0x118629(0x114)]=JSON[_0x118629(0x124)](_0x49096e),_0x52f57e[_0x118629(0x143)]=_0x118629(0x160)+_0x49096e[_0x118629(0xf1)]+'\x22\x20class=\x22rounded-lg\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20justify-between\x20items-center\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-sm\x20font-medium\x20text-blue-800\x22>'+_0x49096e[_0x118629(0x126)]+_0x118629(0x135)+(_0x49096e['completed']?_0x118629(0x159):'Incomplete')+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-lg\x20font-semibold\x20mb-1\x22>'+_0x49096e[_0x118629(0xf1)]+_0x118629(0x134)+_0x49096e[_0x118629(0x13f)]+_0x118629(0xfe),_0x29e1db[_0x118629(0x12b)](_0x52f57e),openMission(_0x49096e);}function openMission(_0x46e304){const _0x46af17=a0_0x522d47;db[_0x46af17(0xfd)](_0x46af17(0xf7))[_0x46af17(0x162)](auth[_0x46af17(0x146)]['uid'])[_0x46af17(0xfd)](_0x46af17(0x12e))[_0x46af17(0x162)](_0x46e304[_0x46af17(0x145)])['get']()['then'](_0x357062=>{const _0x40defb=_0x46af17,_0x58dfe0=_0x357062['data']();let _0x46f437=Object[_0x40defb(0x140)](_0x58dfe0['tasks']);_0x46f437[_0x40defb(0x136)]((_0x1c3df2,_0x13d1fa)=>_0x1c3df2[0x0][_0x40defb(0x15c)](_0x13d1fa[0x0]));let _0x5df4a1=Object[_0x40defb(0x148)](_0x46f437);_0x58dfe0[_0x40defb(0x128)]=_0x5df4a1;});const _0x363c65=document[_0x46af17(0x123)](_0x46af17(0x15f));_0x363c65[_0x46af17(0x141)](_0x53cca5=>{const _0x11b6e8=_0x46af17,_0x461ae4=JSON[_0x11b6e8(0x12d)](_0x53cca5['dataset']['mission']),_0x43d5f6=Object[_0x11b6e8(0x140)](_0x461ae4[_0x11b6e8(0x128)])[_0x11b6e8(0x149)](([_0x31dcc4,_0x16ebac])=>_0x11b6e8(0x157)+(_0x16ebac?_0x11b6e8(0x11b):'')+_0x11b6e8(0x14c)+_0x31dcc4+_0x11b6e8(0x101))[_0x11b6e8(0x15d)]('');_0x53cca5[_0x11b6e8(0x100)][_0x11b6e8(0x11c)]=_0x11b6e8(0x119),_0x53cca5[_0x11b6e8(0x100)][_0x11b6e8(0x102)]='column',_0x53cca5['style'][_0x11b6e8(0x131)]=_0x11b6e8(0xfc),_0x46e304=JSON[_0x11b6e8(0x12d)](_0x53cca5[_0x11b6e8(0x161)][_0x11b6e8(0x114)]);_0x46e304[_0x11b6e8(0x13b)]?_0x53cca5[_0x11b6e8(0x143)]=_0x11b6e8(0x160)+_0x46e304[_0x11b6e8(0xf1)]+_0x11b6e8(0x10e)+_0x46e304[_0x11b6e8(0x126)]+_0x11b6e8(0x135)+(_0x46e304[_0x11b6e8(0x13b)]?_0x11b6e8(0x159):_0x11b6e8(0xf9))+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-lg\x20font-semibold\x20mb-1\x22>'+_0x46e304[_0x11b6e8(0xf1)]+_0x11b6e8(0x15e)+_0x46e304[_0x11b6e8(0x13f)]+_0x11b6e8(0x104)+_0x46e304[_0x11b6e8(0x11d)]+_0x11b6e8(0xf4)+_0x43d5f6+_0x11b6e8(0x107)+_0x46e304[_0x11b6e8(0x145)]+_0x11b6e8(0x164)+_0x46e304[_0x11b6e8(0x145)]+_0x11b6e8(0x13e):_0x53cca5[_0x11b6e8(0x143)]=_0x11b6e8(0x160)+_0x46e304[_0x11b6e8(0xf1)]+'\x22\x20class=\x22rounded-lg\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20justify-between\x20items-center\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-sm\x20font-medium\x20text-blue-800\x22>'+_0x46e304[_0x11b6e8(0x126)]+_0x11b6e8(0x135)+(_0x46e304[_0x11b6e8(0x13b)]?_0x11b6e8(0x159):_0x11b6e8(0xf9))+_0x11b6e8(0x165)+_0x46e304[_0x11b6e8(0xf1)]+_0x11b6e8(0x15e)+_0x46e304[_0x11b6e8(0x13f)]+_0x11b6e8(0x104)+_0x46e304[_0x11b6e8(0x11d)]+_0x11b6e8(0xf4)+_0x43d5f6+_0x11b6e8(0x138)+_0x46e304[_0x11b6e8(0x145)]+_0x11b6e8(0x13e);const _0x42cfd8=_0x53cca5[_0x11b6e8(0x11a)]('#taskList');_0x42cfd8[_0x11b6e8(0x143)]=_0x43d5f6;const _0x3e60cc=_0x46e304[_0x11b6e8(0x128)],_0x7aeb77=Object[_0x11b6e8(0x13c)](_0x3e60cc)[_0x11b6e8(0x10b)],_0x277a3e=Object[_0x11b6e8(0x14f)](_0x3e60cc)[_0x11b6e8(0x155)](_0x7fcd6a=>_0x7fcd6a)['length'],_0x473659=_0x277a3e/_0x7aeb77*0x64,_0x9b9247=_0x53cca5[_0x11b6e8(0x11a)](_0x11b6e8(0x15a));_0x9b9247[_0x11b6e8(0x100)][_0x11b6e8(0x130)]=_0x473659+'%',db[_0x11b6e8(0xfd)](_0x11b6e8(0xf7))[_0x11b6e8(0x162)](auth[_0x11b6e8(0x146)]['uid'])['collection'](_0x11b6e8(0x12e))['doc'](_0x46e304[_0x11b6e8(0x145)])['update']({'progress':_0x473659}),_0x473659===0x64&&!_0x46e304['completed']&&toggleMissionCompletion(_0x46e304[_0x11b6e8(0x145)]);});}function toggleTaskCompletion(_0x4bbdbd,_0x37b883,_0x5874ec){const _0x4addd=a0_0x522d47;db[_0x4addd(0xfd)](_0x4addd(0xf7))['doc'](auth[_0x4addd(0x146)][_0x4addd(0x14b)])[_0x4addd(0xfd)]('Missions')['doc'](_0x4bbdbd)[_0x4addd(0x10a)]()[_0x4addd(0x122)](_0x4f8c14=>{const _0x18243b=_0x4addd,_0x116b5e=_0x4f8c14[_0x18243b(0x117)]();return _0x116b5e[_0x18243b(0x128)][_0x37b883]=_0x5874ec,db['collection'](_0x18243b(0xf7))[_0x18243b(0x162)](auth['currentUser'][_0x18243b(0x14b)])[_0x18243b(0xfd)](_0x18243b(0x12e))[_0x18243b(0x162)](_0x4bbdbd)['update']({'tasks':_0x116b5e[_0x18243b(0x128)]});})[_0x4addd(0x122)](()=>{const _0x57c41a=_0x4addd;fetchMissions()[_0x57c41a(0x122)](renderMission);})[_0x4addd(0x11e)](_0x565452=>{const _0x5aa1af=_0x4addd;console[_0x5aa1af(0x132)](_0x5aa1af(0x12f),_0x565452);});}function toggleMissionCompletion(_0x338d58){const _0x32f987=a0_0x522d47;db['collection'](_0x32f987(0xf7))[_0x32f987(0x162)](auth[_0x32f987(0x146)][_0x32f987(0x14b)])[_0x32f987(0xfd)](_0x32f987(0x12e))[_0x32f987(0x162)](_0x338d58)['get']()[_0x32f987(0x122)](_0xac38a0=>{const _0x3693b7=_0x32f987;if(!_0xac38a0[_0x3693b7(0xec)])console[_0x3693b7(0xf0)]('No\x20such\x20document!');else{const _0x1a392c=_0xac38a0[_0x3693b7(0x117)]();if(_0x1a392c[_0x3693b7(0x13b)]){for(let _0x6a4fb in _0x1a392c[_0x3693b7(0x128)]){_0x1a392c['tasks'][_0x6a4fb]=![];}const _0x123344=![];return db[_0x3693b7(0xfd)](_0x3693b7(0xf7))['doc'](auth[_0x3693b7(0x146)][_0x3693b7(0x14b)])[_0x3693b7(0xfd)](_0x3693b7(0x12e))[_0x3693b7(0x162)](_0x338d58)['update']({'tasks':_0x1a392c[_0x3693b7(0x128)],'completed':_0x123344,'progress':_0x123344?0x64:0x0});}else{for(let _0x5ddd66 in _0x1a392c['tasks']){_0x1a392c[_0x3693b7(0x128)][_0x5ddd66]=!![];}const _0x418873=!![];return db[_0x3693b7(0xfd)](_0x3693b7(0xf7))['doc'](auth[_0x3693b7(0x146)][_0x3693b7(0x14b)])['collection'](_0x3693b7(0x12e))[_0x3693b7(0x162)](_0x338d58)[_0x3693b7(0x116)]({'tasks':_0x1a392c[_0x3693b7(0x128)],'completed':_0x418873,'progress':_0x418873?0x64:0x0});}}})[_0x32f987(0x122)](()=>{const _0x8f6e22=_0x32f987;fetchMissions()[_0x8f6e22(0x122)](renderMission);})[_0x32f987(0x11e)](_0x12efe6=>{const _0x230d5f=_0x32f987;console['error'](_0x230d5f(0xf3),_0x12efe6);});}function fetchMissions(){const _0x39e626=a0_0x522d47;return db[_0x39e626(0xfd)]('Users')[_0x39e626(0x162)](auth[_0x39e626(0x146)][_0x39e626(0x14b)])[_0x39e626(0xfd)]('Missions')[_0x39e626(0xfa)](_0x39e626(0xef),_0x39e626(0x10d))[_0x39e626(0x10a)]()[_0x39e626(0x122)](_0x59c76c=>{const _0xde9937=_0x39e626,_0x4d97c7=[];return _0x59c76c[_0xde9937(0x141)](_0xef001f=>{const _0x5b8883=_0xde9937;_0x4d97c7[_0x5b8883(0x10c)](_0xef001f[_0x5b8883(0x117)]());}),_0x4d97c7;})[_0x39e626(0x11e)](_0x5db582=>{const _0x2a898f=_0x39e626;console['error'](_0x2a898f(0xfb),_0x5db582);});}function renderMission(_0x489da1){const _0xe187fd=a0_0x522d47,_0x11676d=document[_0xe187fd(0x113)](_0xe187fd(0xf6));_0x11676d[_0xe187fd(0x143)]='',_0x489da1[_0xe187fd(0x141)](_0x5e0e08=>{const _0x1a17c0=_0xe187fd,_0x1d5dd7=document[_0x1a17c0(0x15b)](_0x1a17c0(0x111));_0x1d5dd7['className']=_0x1a17c0(0x129)+_0x5e0e08['cardColour']+_0x1a17c0(0x127),_0x1d5dd7[_0x1a17c0(0xf2)]=()=>{openMission(_0x5e0e08);},_0x1d5dd7['style']['textAlign']='left',_0x1d5dd7['id']=_0x5e0e08[_0x1a17c0(0x145)],_0x1d5dd7[_0x1a17c0(0x161)][_0x1a17c0(0x114)]=JSON['stringify'](_0x5e0e08),_0x1d5dd7[_0x1a17c0(0x143)]=_0x1a17c0(0x160)+_0x5e0e08[_0x1a17c0(0xf1)]+_0x1a17c0(0x10e)+_0x5e0e08[_0x1a17c0(0x126)]+_0x1a17c0(0x135)+(_0x5e0e08[_0x1a17c0(0x13b)]?_0x1a17c0(0x159):_0x1a17c0(0xf9))+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-lg\x20font-semibold\x20mb-1\x22>'+_0x5e0e08[_0x1a17c0(0xf1)]+_0x1a17c0(0x134)+_0x5e0e08[_0x1a17c0(0x13f)]+_0x1a17c0(0xfe),_0x11676d[_0x1a17c0(0x12b)](_0x1d5dd7),openMission(_0x5e0e08);});}function deleteMission(_0x9b1fe3){const _0x6688a4=a0_0x522d47;confirm(_0x6688a4(0x137))&&db[_0x6688a4(0xfd)](_0x6688a4(0xf7))[_0x6688a4(0x162)](auth['currentUser'][_0x6688a4(0x14b)])[_0x6688a4(0xfd)](_0x6688a4(0x12e))['doc'](_0x9b1fe3)[_0x6688a4(0x156)]()[_0x6688a4(0x122)](()=>{const _0x3fc99c=_0x6688a4;fetchMissions()[_0x3fc99c(0x122)](renderMission);})[_0x6688a4(0x11e)](_0x355bfc=>{const _0x5063c8=_0x6688a4;console[_0x5063c8(0x132)](_0x5063c8(0x13a),_0x355bfc);});}function resetMission(){const _0x3c25ac=a0_0x522d47;let _0x39cb15=generateUniqueId(),_0x264f8a=firebase[_0x3c25ac(0x151)]()[_0x3c25ac(0xfd)]('Users')[_0x3c25ac(0x162)](auth[_0x3c25ac(0x146)][_0x3c25ac(0x14b)])[_0x3c25ac(0xfd)]('Missions')[_0x3c25ac(0x162)](_0x39cb15);cardClasses=[_0x3c25ac(0x154),'green',_0x3c25ac(0x103)],_0x264f8a[_0x3c25ac(0x158)]({'title':_0x3c25ac(0x150),'description':_0x3c25ac(0x14d),'completed':![],'tokensredeemed':![],'createdAt':firebase[_0x3c25ac(0x151)][_0x3c25ac(0x105)][_0x3c25ac(0x110)](),'members':[auth['currentUser'][_0x3c25ac(0x14b)]],'tasks':{'Visit\x20your\x20missions\x20page\x20to\x20see\x20your\x20missions.':![],'Edit\x20your\x20avatar.':![]},'progress':0x0,'type':'Get\x20started','missionID':_0x39cb15,'cardColour':cardClasses[Math[_0x3c25ac(0x14a)](Math[_0x3c25ac(0x147)]()*cardClasses['length'])]})[_0x3c25ac(0x122)](()=>{})[_0x3c25ac(0x11e)](_0x34050a=>{const _0x1bef1a=_0x3c25ac;console[_0x1bef1a(0x132)](_0x34050a);});}function a0_0x4a9b(){const _0x422bc0=['flexDirection','yellow','%\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22padding-top:\x2020px;\x22>','FieldValue','location','</ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20justify-content:\x20space-between;\x20margin-top:\x2020px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20onclick=\x22toggleMissionCompletion(\x27','href','635341YCBKlh','get','length','push','asc','\x22\x20class=\x22rounded-lg\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20justify-between\x20items-center\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-sm\x20font-medium\x20text-blue-800\x22>','left','serverTimestamp','div','profileIMG','getElementById','mission','4yXBVbU','update','data','56TqBeJJ','flex','querySelector','checked','display','description','catch','5441970KFuYnm','52PGYkUG','cardColour','then','querySelectorAll','stringify','215504xZpwnr','type','-100\x20p-4\x20rounded-lg','tasks','mission-card\x20bg-','5270OZlJba','appendChild','now','parse','Missions','Error\x20updating\x20task:\x20','width','alignItems','error','className','</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22w-full\x20bg-gray-300\x20rounded-full\x20h-2.5\x20dark:bg-gray-700\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22bg-blue-600\x20h-2.5\x20rounded-full\x22\x20style=\x22width:\x20','\x20•\x20','sort','Are\x20you\x20sure\x20you\x20want\x20to\x20delete\x20this\x20mission?','</ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20justify-content:\x20space-between;\x20margin-top:\x2020px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20style=\x22margin-left:\x205;\x22\x20type=\x22button\x22\x20class=\x22btn\x20btn-outline-danger\x22\x20onclick=\x22deleteMission(\x27','email','Error\x20deleting\x20mission:\x20','completed','keys','currentUser-profile-picture','\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2215\x22\x20height=\x2215\x22\x20fill=\x22black\x22\x20class=\x22bi\x20bi-trash-fill\x22\x20viewBox=\x220\x200\x2016\x2016\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M2.5\x201a1\x201\x200\x200\x200-1\x201v1a1\x201\x200\x200\x200\x201\x201H3v9a2\x202\x200\x200\x200\x202\x202h6a2\x202\x200\x200\x200\x202-2V4h.5a1\x201\x200\x200\x200\x201-1V2a1\x201\x200\x200\x200-1-1H10a1\x201\x200\x200\x200-1-1H7a1\x201\x200\x200\x200-1\x201zm3\x204a.5.5\x200\x200\x201\x20.5.5v7a.5.5\x200\x200\x201-1\x200v-7a.5.5\x200\x200\x201\x20.5-.5M8\x205a.5.5\x200\x200\x201\x20.5.5v7a.5.5\x200\x200\x201-1\x200v-7A.5.5\x200\x200\x201\x208\x205m3\x20.5v7a.5.5\x200\x200\x201-1\x200v-7a.5.5\x200\x200\x201\x201\x200\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','progress','entries','forEach','currentUser-email','innerHTML','substr','missionID','currentUser','random','fromEntries','map','floor','uid','>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','This\x20is\x20a\x20sample\x20mission.\x20You\x20can\x20edit\x20it\x20or\x20delete\x20it.','name','values','Welcome\x20to\x20your\x20first\x20mission!','firestore','Profile\x20picture\x20of\x20','16722pJOQcS','blue','filter','delete','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20space-between;\x20padding-bottom:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20class=\x22form-check-input\x22\x20','set','Completed','.progress-bar','createElement','localeCompare','join','</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22w-full\x20bg-gray-300\x20rounded-full\x20h-2.5\x20dark:bg-gray-700\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22bg-blue-600\x20h-2.5\x20rounded-full\x20progress-bar\x22\x20style=\x22width:\x20','.mission-card','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://placehold.co/300x150\x22\x20alt=\x22','dataset','doc','textAlign','\x27)\x22\x20class=\x22btn\x20btn-outline-primary\x22>Mark\x20as\x20incomplete</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20style=\x22margin-left:\x205;\x22\x20type=\x22button\x22\x20class=\x22btn\x20btn-outline-danger\x22\x20onclick=\x22deleteMission(\x27','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-lg\x20font-semibold\x20mb-1\x22>','auth','exists','441012xfDGBF','alt','createdAt','log','title','onclick','Error\x20updating\x20mission:\x20','</p>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20style=\x22padding-top:\x2020px;\x20font-weight:\x20bold;\x22>Tasks:</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20id=\x22taskList\x22\x20style=\x22list-style-type:\x20none;\x20padding:\x2010px\x22>','56480QcYEuQ','missions-container','Users','Error\x20getting\x20mission:','Incomplete','orderBy','Error\x20fetching\x20missions:\x20','flex-start','collection','%\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20','3426038xCDEiF','style','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20'];a0_0x4a9b=function(){return _0x422bc0;};return a0_0x4a9b();}function generateUniqueId(){const _0x259cfc=a0_0x522d47;let _0x339bdc=Date[_0x259cfc(0x12c)]()['toString'](0x24);for(let _0x31180a=0x0;_0x31180a<0x5;_0x31180a++){_0x339bdc+=Math['random']()['toString'](0x24)[_0x259cfc(0x144)](0x2,0x9);}return _0x339bdc;}