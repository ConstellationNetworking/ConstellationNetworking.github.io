function a0_0x19f6(_0x2b17ec,_0x245257){const _0x40a17e=a0_0x40a1();return a0_0x19f6=function(_0x19f6af,_0x3d5b4b){_0x19f6af=_0x19f6af-0x12e;let _0x562082=_0x40a17e[_0x19f6af];return _0x562082;},a0_0x19f6(_0x2b17ec,_0x245257);}const a0_0x47d92d=a0_0x19f6;function a0_0x40a1(){const _0x509087=['cursor','doc','currentUser-email','5hUBGIy','exists','p-4','490242sqWzul','currentUser','replace','profileIMG','data','div','forEach','location','max-w-sm\x20bg-white\x20border\x20border-gray-200\x20rounded-lg\x20shadow-md','delete','text-gray-600','pageYOffset','7663513PUKaZZ','Users','scrollTo','1977370CJnKcj','textContent','213AFxZWn','currentUser-profile-picture','auth','innerHTML','collection','uid','Redeemed_Items','novacoins:\x20','You\x20don\x27t\x20have\x20enough\x20astral\x20tokens\x20to\x20redeem!','then','Sell','appendChild','img','name','error','className','addEventListener','20668VwLAzu','update','rounded-t-lg','novacoins','Profile\x20picture\x20of\x20','Unable\x20to\x20sell\x20item.\x20Please\x20try\x20again\x20later.','item','395873NKEtZq','102529fCCkgv','/signin.html','myrewards-items','onAuthStateChanged','redeem','get','135152uiolhX','createElement','9aRoVOd','184KtClUw','none','textDecoration','getElementById','top','onclick','reload','href','available-novacoins','DOMContentLoaded','catch','email','style','Error\x20deleting\x20redeemed\x20item','smooth','Are\x20you\x20sure\x20you\x20want\x20to\x20sell\x20'];a0_0x40a1=function(){return _0x509087;};return a0_0x40a1();}(function(_0x25f45b,_0x2eaf8a){const _0x5cd53f=a0_0x19f6,_0x1442c6=_0x25f45b();while(!![]){try{const _0x503654=parseInt(_0x5cd53f(0x173))/0x1+-parseInt(_0x5cd53f(0x131))/0x2+parseInt(_0x5cd53f(0x15b))/0x3*(-parseInt(_0x5cd53f(0x16c))/0x4)+-parseInt(_0x5cd53f(0x147))/0x5*(-parseInt(_0x5cd53f(0x14a))/0x6)+parseInt(_0x5cd53f(0x174))/0x7*(-parseInt(_0x5cd53f(0x134))/0x8)+parseInt(_0x5cd53f(0x133))/0x9*(-parseInt(_0x5cd53f(0x159))/0xa)+parseInt(_0x5cd53f(0x156))/0xb;if(_0x503654===_0x2eaf8a)break;else _0x1442c6['push'](_0x1442c6['shift']());}catch(_0x53eebc){_0x1442c6['push'](_0x1442c6['shift']());}}}(a0_0x40a1,0x3219c));let db=firebase['firestore'](),auth=firebase[a0_0x47d92d(0x15d)]();function smoothScrollAboveElement(_0x2a5090,_0x257701){const _0x7257e6=a0_0x47d92d,_0x174e8e=document[_0x7257e6(0x137)](_0x2a5090);if(_0x174e8e){const _0x21db48=_0x174e8e['getBoundingClientRect'](),_0x21ceda=_0x21db48[_0x7257e6(0x138)]+window[_0x7257e6(0x155)];window[_0x7257e6(0x158)]({'top':_0x21ceda-_0x257701,'behavior':_0x7257e6(0x142)});}}function sell(_0x14e542,_0x238940){const _0x42f54f=a0_0x47d92d;confirm(_0x42f54f(0x143)+_0x14e542+'?')&&db[_0x42f54f(0x15f)](_0x42f54f(0x157))[_0x42f54f(0x145)](auth[_0x42f54f(0x14b)][_0x42f54f(0x160)])[_0x42f54f(0x15f)](_0x42f54f(0x161))['where'](_0x42f54f(0x172),'==',_0x14e542)[_0x42f54f(0x130)]()[_0x42f54f(0x164)](_0x126a5f=>{const _0x4c55e8=_0x42f54f;_0x126a5f[_0x4c55e8(0x150)](_0x48c748=>{const _0x5046d9=_0x4c55e8;db['collection']('Users')['doc'](auth['currentUser'][_0x5046d9(0x160)])['collection']('Redeemed_Items')['doc'](_0x48c748['id'])[_0x5046d9(0x153)]()[_0x5046d9(0x164)](()=>{const _0x200213=_0x5046d9;db['collection'](_0x200213(0x157))['doc'](auth[_0x200213(0x14b)][_0x200213(0x160)])['get']()['then'](_0x49a4fb=>{const _0x361433=_0x200213;if(_0x49a4fb[_0x361433(0x148)]){const _0x290282=_0x49a4fb[_0x361433(0x14e)]();db[_0x361433(0x15f)](_0x361433(0x157))[_0x361433(0x145)](auth[_0x361433(0x14b)]['uid'])[_0x361433(0x16d)]({'novacoins':_0x290282[_0x361433(0x16f)]+=parseInt(_0x238940)})['then'](()=>{location['reload']();})[_0x361433(0x13e)](_0x3084b0=>{const _0x4f83de=_0x361433;console[_0x4f83de(0x169)]('Error\x20deleting\x20redeemed\x20item',_0x3084b0),alert(_0x4f83de(0x171));});}})[_0x200213(0x13e)](_0x2863be=>{const _0x3e5f4a=_0x200213;console[_0x3e5f4a(0x169)](_0x3e5f4a(0x141),_0x2863be),alert(_0x3e5f4a(0x171));});})[_0x5046d9(0x13e)](_0x228e66=>{const _0x4c097b=_0x5046d9;console[_0x4c097b(0x169)](_0x4c097b(0x141),_0x228e66),alert(_0x4c097b(0x171));});});});}function redeem(_0x329bad,_0x36bfa8){const _0x552d1c=a0_0x47d92d;db[_0x552d1c(0x15f)]('Users')[_0x552d1c(0x145)](auth[_0x552d1c(0x14b)][_0x552d1c(0x160)])[_0x552d1c(0x130)]()[_0x552d1c(0x164)](_0x3e6315=>{const _0x567c06=_0x552d1c;if(_0x3e6315[_0x567c06(0x148)]){const _0x4a4a5b=_0x3e6315[_0x567c06(0x14e)]();_0x4a4a5b['novacoins']>=parseInt(_0x36bfa8)?(db[_0x567c06(0x15f)](_0x567c06(0x157))[_0x567c06(0x145)](auth[_0x567c06(0x14b)][_0x567c06(0x160)])[_0x567c06(0x16d)]({'novacoins':_0x4a4a5b[_0x567c06(0x16f)]-parseInt(_0x36bfa8)}),document[_0x567c06(0x137)](_0x567c06(0x13c))['innerHTML']=_0x4a4a5b['novacoins']-parseInt(_0x36bfa8),db[_0x567c06(0x15f)](_0x567c06(0x157))[_0x567c06(0x145)](auth[_0x567c06(0x14b)][_0x567c06(0x160)])[_0x567c06(0x15f)](_0x567c06(0x161))['add']({'item':_0x329bad,'novacoins':parseInt(_0x36bfa8),'redeemedAt':new Date()})[_0x567c06(0x164)](()=>{const _0x2a4abb=_0x567c06;alert('Successfully\x20Redeemed\x20'+_0x329bad+'!'),location[_0x2a4abb(0x13a)]();})[_0x567c06(0x13e)](_0x57d963=>{const _0x3bcfb8=_0x567c06;console[_0x3bcfb8(0x169)](_0x57d963);})):alert(_0x567c06(0x163));}});}document[a0_0x47d92d(0x16b)](a0_0x47d92d(0x13d),function(){const _0x35123c=a0_0x47d92d;auth[_0x35123c(0x12e)](function(_0x4dab6f){const _0x27ae7c=_0x35123c;if(_0x4dab6f){const _0x31e9a8=db[_0x27ae7c(0x15f)](_0x27ae7c(0x157))[_0x27ae7c(0x145)](_0x4dab6f[_0x27ae7c(0x160)]),_0x5e0a6d=new Date();_0x31e9a8['set']({'lastActive':_0x5e0a6d},{'merge':!![]}),db[_0x27ae7c(0x15f)](_0x27ae7c(0x157))['doc'](auth['currentUser'][_0x27ae7c(0x160)])[_0x27ae7c(0x130)]()['then'](_0x4973e4=>{const _0x23bc89=_0x27ae7c;if(_0x4973e4['exists']){const _0x3b5137=_0x4973e4['data']();document[_0x23bc89(0x137)]('currentUser-name')['innerHTML']=_0x3b5137['name'],document[_0x23bc89(0x137)](_0x23bc89(0x146))[_0x23bc89(0x15e)]=_0x3b5137[_0x23bc89(0x13f)],document['getElementById'](_0x23bc89(0x15c))['src']=_0x3b5137[_0x23bc89(0x14d)]==''?'/assets/img/default_user.jpeg':_0x3b5137[_0x23bc89(0x14d)],document[_0x23bc89(0x137)]('currentUser-profile-picture')['alt']=_0x23bc89(0x170)+_0x3b5137['name'],document[_0x23bc89(0x137)](_0x23bc89(0x13c))['innerHTML']=_0x3b5137[_0x23bc89(0x16f)];}}),db[_0x27ae7c(0x15f)](_0x27ae7c(0x157))[_0x27ae7c(0x145)](auth[_0x27ae7c(0x14b)][_0x27ae7c(0x160)])[_0x27ae7c(0x15f)]('Redeemed_Items')[_0x27ae7c(0x130)]()['then'](_0x2d1bae=>{const _0x1ceda0=_0x27ae7c;_0x2d1bae[_0x1ceda0(0x150)](_0x213215=>{const _0x308f51=_0x1ceda0,_0x3d58dc=_0x213215[_0x308f51(0x14e)](),_0x5870aa=document[_0x308f51(0x132)](_0x308f51(0x14f));_0x5870aa['className']=_0x308f51(0x152);const _0x5400f1=document['createElement'](_0x308f51(0x167));_0x5400f1[_0x308f51(0x16a)]=_0x308f51(0x16e),_0x5400f1['src']='/assets/img/rewards/'+_0x3d58dc['item']['toLowerCase']()[_0x308f51(0x14c)](/ /g,'_')+'.png',_0x5870aa[_0x308f51(0x166)](_0x5400f1);const _0x4be847=document[_0x308f51(0x132)](_0x308f51(0x14f));_0x4be847[_0x308f51(0x16a)]=_0x308f51(0x149),_0x5870aa[_0x308f51(0x166)](_0x4be847);const _0x1d8e40=document[_0x308f51(0x132)]('h5');_0x1d8e40['className']='mb-2\x20text-xl\x20font-bold\x20tracking-tight\x20text-gray-900',_0x1d8e40['textContent']=_0x3d58dc[_0x308f51(0x172)],_0x4be847['appendChild'](_0x1d8e40);const _0x2924d8=document['createElement']('p');_0x2924d8[_0x308f51(0x16a)]=_0x308f51(0x154),_0x2924d8[_0x308f51(0x15a)]=_0x308f51(0x162)+_0x3d58dc['novacoins'],_0x4be847['appendChild'](_0x2924d8);const _0x25e0b6=document[_0x308f51(0x132)]('Sell');_0x25e0b6[_0x308f51(0x16a)]='inline-flex\x20items-center\x20px-3\x20py-2\x20text-sm\x20font-medium\x20text-center\x20text-white\x20bg-red-700\x20rounded-lg\x20hover:bg-red-800\x20focus:ring-4\x20focus:outline-none\x20focus:ring-blue-300\x20dark:bg-blue-600\x20dark:hover:bg-blue-700\x20dark:focus:ring-blue-800\x20mt-10',_0x25e0b6['style'][_0x308f51(0x136)]=_0x308f51(0x135),_0x25e0b6[_0x308f51(0x140)][_0x308f51(0x144)]='pointer',_0x25e0b6['dataset'][_0x308f51(0x168)]=_0x3d58dc[_0x308f51(0x172)],_0x25e0b6['dataset'][_0x308f51(0x12f)]=_0x3d58dc['novacoins'],_0x25e0b6[_0x308f51(0x139)]=function(){const _0x3cc013=_0x308f51;sell(_0x3d58dc[_0x3cc013(0x172)],_0x3d58dc[_0x3cc013(0x16f)]);},_0x25e0b6['textContent']=_0x308f51(0x165),_0x4be847[_0x308f51(0x166)](_0x25e0b6),document[_0x308f51(0x137)](_0x308f51(0x176))[_0x308f51(0x166)](_0x5870aa);});});}else window[_0x27ae7c(0x151)][_0x27ae7c(0x13b)]=_0x27ae7c(0x175);});});