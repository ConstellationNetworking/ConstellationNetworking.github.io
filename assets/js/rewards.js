const a0_0xd0d962=a0_0x8616;(function(_0x2fa28a,_0x93ee6f){const _0x27e855=a0_0x8616,_0x2864d3=_0x2fa28a();while(!![]){try{const _0x5bf0aa=-parseInt(_0x27e855(0x87))/0x1*(parseInt(_0x27e855(0x94))/0x2)+parseInt(_0x27e855(0x7b))/0x3+-parseInt(_0x27e855(0x88))/0x4*(parseInt(_0x27e855(0xbc))/0x5)+parseInt(_0x27e855(0x8b))/0x6*(-parseInt(_0x27e855(0xa9))/0x7)+parseInt(_0x27e855(0x93))/0x8*(parseInt(_0x27e855(0xbd))/0x9)+parseInt(_0x27e855(0xb2))/0xa*(parseInt(_0x27e855(0x91))/0xb)+-parseInt(_0x27e855(0x90))/0xc*(-parseInt(_0x27e855(0xa0))/0xd);if(_0x5bf0aa===_0x93ee6f)break;else _0x2864d3['push'](_0x2864d3['shift']());}catch(_0x4b03bf){_0x2864d3['push'](_0x2864d3['shift']());}}}(a0_0xb41b,0x98bd7));function a0_0x8616(_0x488a1f,_0x4f30a5){const _0xb41bbc=a0_0xb41b();return a0_0x8616=function(_0x86162d,_0x4a3d5e){_0x86162d=_0x86162d-0x77;let _0x15237d=_0xb41bbc[_0x86162d];return _0x15237d;},a0_0x8616(_0x488a1f,_0x4f30a5);}function a0_0xb41b(){const _0x2faa30=['doc','where','src','91Etgdpo','data','Novacoins:\x20$','dataset','catch','img','update','DOMContentLoaded','/assets/img/default_user.jpeg','201050HSKhBX','delete','appendChild','novacoins','className','collection','location','set','smooth','Users','20135eboDcu','22779RjQQhM','then','limit','docs','scrollTo','addEventListener','getBoundingClientRect','2206074WyTQuu','button','innerHTML','name','add','.png','currentUser','item','Error\x20updating\x20novacoins','Error\x20querying\x20redeemed\x20items','createElement','reload','703102JSIMid','1044FQlLMg','textContent','onclick','211638gTLAZe','error','get','onAuthStateChanged','user-novacoins','1451364hfhogh','121ufsGot','text-lg\x20font-bold','3272HzttXy','2mMntuF','getElementById','Redeemed_Items','profileIMG','Unable\x20to\x20sell\x20item.\x20Please\x20try\x20again\x20later.','uid','Sell','Successfully\x20Redeemed\x20','myrewards-items','forEach','auth','replace','91PPCerf','pageYOffset','redeem','mb-2\x20rounded-md\x20bg-white','exists','Error\x20deleting\x20redeemed\x20item'];a0_0xb41b=function(){return _0x2faa30;};return a0_0xb41b();}let db=firebase['firestore'](),auth=firebase[a0_0xd0d962(0x9e)]();function smoothScrollAboveElement(_0x8cc4a2,_0x28fbc9){const _0x3f0be6=a0_0xd0d962,_0x27020a=document['getElementById'](_0x8cc4a2);if(_0x27020a){const _0x2e78e4=_0x27020a[_0x3f0be6(0x7a)](),_0x2b3a45=_0x2e78e4['top']+window[_0x3f0be6(0xa1)];window[_0x3f0be6(0x78)]({'top':_0x2b3a45-_0x28fbc9,'behavior':_0x3f0be6(0xba)});}}function sell(_0x162a20,_0x1ab422){const _0x543788=a0_0xd0d962;confirm('Are\x20you\x20sure\x20you\x20want\x20to\x20sell\x20'+_0x162a20+'?')&&db[_0x543788(0xb7)](_0x543788(0xbb))[_0x543788(0xa6)](auth['currentUser']['uid'])[_0x543788(0xb7)](_0x543788(0x96))[_0x543788(0xa7)](_0x543788(0x82),'==',_0x162a20)[_0x543788(0xbf)](0x1)[_0x543788(0x8d)]()['then'](_0x160b4c=>{const _0x5e66ee=_0x543788;if(!_0x160b4c['empty']){const _0x5a71bb=_0x160b4c[_0x5e66ee(0x77)][0x0];db[_0x5e66ee(0xb7)](_0x5e66ee(0xbb))[_0x5e66ee(0xa6)](auth['currentUser'][_0x5e66ee(0x99)])[_0x5e66ee(0xb7)](_0x5e66ee(0x96))[_0x5e66ee(0xa6)](_0x5a71bb['id'])[_0x5e66ee(0xb3)]()[_0x5e66ee(0xbe)](()=>{const _0x3de955=_0x5e66ee;db[_0x3de955(0xb7)](_0x3de955(0xbb))[_0x3de955(0xa6)](auth[_0x3de955(0x81)][_0x3de955(0x99)])[_0x3de955(0x8d)]()[_0x3de955(0xbe)](_0x58e387=>{const _0x26ab38=_0x3de955;if(_0x58e387[_0x26ab38(0xa4)]){const _0x42ca8f=_0x58e387[_0x26ab38(0xaa)]();db[_0x26ab38(0xb7)](_0x26ab38(0xbb))['doc'](auth[_0x26ab38(0x81)][_0x26ab38(0x99)])['update']({'novacoins':_0x42ca8f[_0x26ab38(0xb5)]+parseInt(_0x1ab422)})[_0x26ab38(0xbe)](()=>{const _0xf5cf02=_0x26ab38;location[_0xf5cf02(0x86)]();})[_0x26ab38(0xad)](_0x3c5b40=>{const _0x1f9f67=_0x26ab38;console['error'](_0x1f9f67(0x83),_0x3c5b40),alert(_0x1f9f67(0x98));});}})[_0x3de955(0xad)](_0x268686=>{const _0x194af6=_0x3de955;console['error']('Error\x20retrieving\x20user\x20document',_0x268686),alert(_0x194af6(0x98));});})[_0x5e66ee(0xad)](_0x369463=>{const _0x1c00fb=_0x5e66ee;console[_0x1c00fb(0x8c)](_0x1c00fb(0xa5),_0x369463),alert('Unable\x20to\x20sell\x20item.\x20Please\x20try\x20again\x20later.');});}else alert('No\x20such\x20item\x20to\x20sell.');})[_0x543788(0xad)](_0x5becb9=>{const _0x31552e=_0x543788;console[_0x31552e(0x8c)](_0x31552e(0x84),_0x5becb9),alert(_0x31552e(0x98));});}function redeem(_0x53a366,_0x11c851){const _0x3f0fb2=a0_0xd0d962;db[_0x3f0fb2(0xb7)]('Users')['doc'](auth[_0x3f0fb2(0x81)]['uid'])[_0x3f0fb2(0x8d)]()[_0x3f0fb2(0xbe)](_0x3501a2=>{const _0xe36960=_0x3f0fb2;if(_0x3501a2[_0xe36960(0xa4)]){const _0x26f572=_0x3501a2[_0xe36960(0xaa)]();_0x26f572['novacoins']>=parseInt(_0x11c851)?(db[_0xe36960(0xb7)]('Users')[_0xe36960(0xa6)](auth[_0xe36960(0x81)][_0xe36960(0x99)])[_0xe36960(0xaf)]({'novacoins':_0x26f572[_0xe36960(0xb5)]-parseInt(_0x11c851)}),document[_0xe36960(0x95)](_0xe36960(0x8f))[_0xe36960(0x7d)]='$'+(_0x26f572[_0xe36960(0xb5)]-parseInt(_0x11c851)),db[_0xe36960(0xb7)](_0xe36960(0xbb))[_0xe36960(0xa6)](auth[_0xe36960(0x81)]['uid'])[_0xe36960(0xb7)](_0xe36960(0x96))[_0xe36960(0x7f)]({'item':_0x53a366,'novacoins':parseInt(_0x11c851),'redeemedAt':new Date()})[_0xe36960(0xbe)](()=>{const _0x1819cf=_0xe36960;alert(_0x1819cf(0x9b)+_0x53a366+'!'),location[_0x1819cf(0x86)]();})['catch'](_0x192905=>{console['error'](_0x192905);})):alert('You\x20don\x27t\x20have\x20enough\x20astral\x20tokens\x20to\x20redeem!');}});}document[a0_0xd0d962(0x79)](a0_0xd0d962(0xb0),function(){const _0x1ad65f=a0_0xd0d962;auth[_0x1ad65f(0x8e)](function(_0x5acbbc){const _0x184a92=_0x1ad65f;if(_0x5acbbc){const _0x1f3c91=db[_0x184a92(0xb7)](_0x184a92(0xbb))[_0x184a92(0xa6)](_0x5acbbc[_0x184a92(0x99)]),_0x202622=new Date();_0x1f3c91[_0x184a92(0xb9)]({'lastActive':_0x202622},{'merge':!![]}),_0x1f3c91[_0x184a92(0x8d)]()[_0x184a92(0xbe)](_0x22f7c3=>{const _0x43fa87=_0x184a92;if(_0x22f7c3['exists']){const _0x52127a=_0x22f7c3['data']();document[_0x43fa87(0x95)]('user-profile-img')['src']=_0x52127a[_0x43fa87(0x97)]==''?_0x43fa87(0xb1):_0x52127a[_0x43fa87(0x97)],document[_0x43fa87(0x95)](_0x43fa87(0x8f))['innerText']='$'+_0x52127a[_0x43fa87(0xb5)];}}),_0x1f3c91[_0x184a92(0xb7)](_0x184a92(0x96))[_0x184a92(0x8d)]()[_0x184a92(0xbe)](_0x3e36c7=>{const _0x514245=_0x184a92;_0x3e36c7[_0x514245(0x9d)](_0x12abdc=>{const _0x6f426b=_0x514245,_0x174e95=_0x12abdc[_0x6f426b(0xaa)](),_0x4ddc96=document[_0x6f426b(0x85)]('div');_0x4ddc96[_0x6f426b(0xb6)]='bg-[#2B2B2B]\x20p-4\x20rounded-md';const _0x180b00=document[_0x6f426b(0x85)](_0x6f426b(0xae));_0x180b00[_0x6f426b(0xa8)]='/assets/img/rewards/'+_0x174e95['item']['toLowerCase']()[_0x6f426b(0x9f)](/ /g,'_')+_0x6f426b(0x80),_0x180b00['className']=_0x6f426b(0xa3),_0x180b00['alt']=_0x174e95[_0x6f426b(0x82)],_0x4ddc96[_0x6f426b(0xb4)](_0x180b00);const _0xde8873=document[_0x6f426b(0x85)]('h3');_0xde8873['className']=_0x6f426b(0x92),_0xde8873[_0x6f426b(0x89)]=_0x174e95[_0x6f426b(0x82)],_0x4ddc96[_0x6f426b(0xb4)](_0xde8873);const _0x1c4972=document[_0x6f426b(0x85)]('p');_0x1c4972[_0x6f426b(0xb6)]='text-sm\x20text-gray-300',_0x1c4972[_0x6f426b(0x89)]=_0x6f426b(0xab)+_0x174e95[_0x6f426b(0xb5)],_0x4ddc96['appendChild'](_0x1c4972);const _0x5e5f8a=document[_0x6f426b(0x85)](_0x6f426b(0x7c));_0x5e5f8a['className']='bg-red-600\x20text-sm\x20px-3\x20py-1\x20mt-3\x20rounded-md\x20hover:bg-red-700\x20duration-300',_0x5e5f8a[_0x6f426b(0x89)]=_0x6f426b(0x9a),_0x5e5f8a[_0x6f426b(0xac)][_0x6f426b(0x7e)]=_0x174e95[_0x6f426b(0x82)],_0x5e5f8a[_0x6f426b(0xac)][_0x6f426b(0xa2)]=_0x174e95['novacoins'],_0x5e5f8a[_0x6f426b(0x8a)]=function(){const _0x21016b=_0x6f426b;sell(_0x174e95[_0x21016b(0x82)],_0x174e95[_0x21016b(0xb5)]);},_0x5e5f8a[_0x6f426b(0x89)]=_0x6f426b(0x9a),_0x4ddc96[_0x6f426b(0xb4)](_0x5e5f8a),document[_0x6f426b(0x95)](_0x6f426b(0x9c))[_0x6f426b(0xb4)](_0x4ddc96);});});}else window[_0x184a92(0xb8)]['href']='/signin.html';});});