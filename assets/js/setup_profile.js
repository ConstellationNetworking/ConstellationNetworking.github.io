const a0_0x158f67=a0_0x10b2;(function(_0x476ce9,_0x32d955){const _0x59a129=a0_0x10b2,_0x34e3a4=_0x476ce9();while(!![]){try{const _0x3a02fd=-parseInt(_0x59a129(0xfa))/0x1*(parseInt(_0x59a129(0xe0))/0x2)+parseInt(_0x59a129(0xfd))/0x3*(parseInt(_0x59a129(0x107))/0x4)+-parseInt(_0x59a129(0xea))/0x5*(-parseInt(_0x59a129(0xc8))/0x6)+parseInt(_0x59a129(0x101))/0x7+-parseInt(_0x59a129(0x110))/0x8*(-parseInt(_0x59a129(0xf1))/0x9)+parseInt(_0x59a129(0xf7))/0xa*(-parseInt(_0x59a129(0xd9))/0xb)+-parseInt(_0x59a129(0x10c))/0xc;if(_0x3a02fd===_0x32d955)break;else _0x34e3a4['push'](_0x34e3a4['shift']());}catch(_0x4b2444){_0x34e3a4['push'](_0x34e3a4['shift']());}}}(a0_0x44fa,0xcb7b8));let db=firebase[a0_0x158f67(0xcf)](),auth=firebase[a0_0x158f67(0xc7)](),useDefaultImageFlag=![],usedDefaultImage=![];function validateForm(){const _0x5634a6=a0_0x158f67;document[_0x5634a6(0xe1)](_0x5634a6(0xc2))['addEventListener']('change',_0x483144=>{const _0x435ab3=_0x5634a6,_0x3b4488=_0x483144['target'][_0x435ab3(0xc3)][0x0],_0x30903c=new FileReader();_0x30903c['addEventListener'](_0x435ab3(0xfc),_0xc9c3f1=>{const _0x535588=_0x435ab3;document['querySelector'](_0x535588(0xd3))['src']=_0xc9c3f1[_0x535588(0xcb)][_0x535588(0xee)];}),_0x3b4488&&_0x30903c[_0x435ab3(0xeb)](_0x3b4488);});}function useDefaultImage(){const _0x418a6f=a0_0x158f67,_0x26dff6=firebase[_0x418a6f(0xe9)]()[_0x418a6f(0xd6)](),_0x1326ca=firebase[_0x418a6f(0xc7)](),_0x13245a=firebase[_0x418a6f(0xcf)](),_0x5b32e8='/assets/img/default_user.jpeg';fetch(_0x5b32e8)[_0x418a6f(0xd8)](_0x1a93f4=>_0x1a93f4[_0x418a6f(0x10d)]())['then'](_0x15c600=>{const _0x5bf4c5=_0x418a6f,_0x16fb52=_0x26dff6[_0x5bf4c5(0xca)](_0x5bf4c5(0xcd)+_0x1326ca['currentUser'][_0x5bf4c5(0xed)]+_0x5bf4c5(0xf9));return _0x16fb52[_0x5bf4c5(0xe4)](_0x15c600);})[_0x418a6f(0xd8)](_0x46d537=>_0x46d537[_0x418a6f(0xd6)][_0x418a6f(0xda)]())['then'](_0x37a67e=>{const _0x57e894=_0x418a6f;return _0x13245a[_0x57e894(0xd2)]('Users')[_0x57e894(0x108)](_0x1326ca[_0x57e894(0xce)]['uid'])[_0x57e894(0xc6)]({'profileIMG':_0x37a67e});})[_0x418a6f(0xd8)](()=>{const _0x41ecf8=_0x418a6f;console[_0x41ecf8(0xc0)](_0x41ecf8(0xf3)),document['querySelector'](_0x41ecf8(0xd3))['src']=_0x5b32e8;})[_0x418a6f(0xcc)](_0x43c6d3=>{console['error']('Error\x20setting\x20default\x20picture:',_0x43c6d3),alert('Error\x20setting\x20default\x20picture.\x20Please\x20try\x20again\x20later.');});}function submitProfile(){const _0x432b83=a0_0x158f67,_0x20ff17=document[_0x432b83(0xe1)](_0x432b83(0xc2)),_0x3ead18=firebase[_0x432b83(0xc7)](),_0x31dc3e=firebase['firestore']();if(useDefaultImageFlag)useDefaultImage(_0x3ead18,_0x31dc3e);else{const _0x3b7164=_0x20ff17['files'][0x0];console['log'](usedDefaultImage);const _0x52cfc4=_0x31dc3e[_0x432b83(0xd2)]('Users')[_0x432b83(0x108)](_0x3ead18['currentUser'][_0x432b83(0xed)]);_0x52cfc4[_0x432b83(0xf0)]()[_0x432b83(0xd8)](_0x3970ea=>{const _0x34794e=_0x432b83;if(_0x3970ea[_0x34794e(0x10e)]){const _0x1efc60=_0x3970ea[_0x34794e(0xbe)]();if(_0x3b7164){document['getElementById'](_0x34794e(0xf6))[_0x34794e(0xbf)]=_0x34794e(0xc4);const _0xe29755=new FileReader();_0xe29755[_0x34794e(0xdc)]=function(_0x5004d4){const _0x257891=_0x34794e,_0xbcb571=new Image();_0xbcb571[_0x257891(0xdc)]=function(){const _0x4b3769=_0x257891;_0xbcb571['width']===_0xbcb571['height']?uploadProfilePicture(_0x3b7164,_0x3ead18,_0x31dc3e):(alert(_0x4b3769(0xdb)),document[_0x4b3769(0xe1)](_0x4b3769(0xf6))[_0x4b3769(0xba)]=_0x4b3769(0x103));},_0xbcb571[_0x257891(0xd0)]=function(){const _0x224bff=_0x257891;alert('There\x20was\x20an\x20error\x20reading\x20the\x20image.'),document[_0x224bff(0xe1)](_0x224bff(0xf6))[_0x224bff(0xba)]=_0x224bff(0x103);},_0xbcb571[_0x257891(0xc1)]=_0x5004d4['target']['result'];},_0xe29755[_0x34794e(0xd0)]=function(){const _0x2b028e=_0x34794e;alert(_0x2b028e(0x10a)),document[_0x2b028e(0xe1)]('submitButton')[_0x2b028e(0xba)]=_0x2b028e(0x103);},_0xe29755['readAsDataURL'](_0x3b7164);}else{if(_0x1efc60[_0x34794e(0x109)])updateUserProfile(_0x1efc60[_0x34794e(0x109)],_0x3ead18,_0x31dc3e);else{if(usedDefaultImage){const _0x37ce3e=_0x34794e(0xd4);fetch(_0x37ce3e)['then'](_0x602d2b=>_0x602d2b[_0x34794e(0x10d)]())[_0x34794e(0xd8)](_0x50b992=>{const _0x5e88a1=_0x34794e,_0x30e00d=new File([_0x50b992],_0x5e88a1(0x100),{'type':_0x5e88a1(0xb9)});uploadProfilePicture(_0x30e00d,_0x3ead18,_0x31dc3e);});}else alert(_0x34794e(0xff)),document[_0x34794e(0xe1)]('submitButton')[_0x34794e(0xba)]=_0x34794e(0x103);}}}});}}function updateUserProfile(_0x40e76b,_0x77052f,_0x2dcdc2){const _0xc43c85=a0_0x158f67,_0x6dad13=document[_0xc43c85(0xe1)](_0xc43c85(0x111)),_0x188717=document[_0xc43c85(0xe1)](_0xc43c85(0xf4));!_0x188717['value'][_0xc43c85(0xde)]()&&(_0x188717[_0xc43c85(0x102)]='They\x27re\x20still\x20thinking\x20of\x20a\x20bio...');if(_0x77052f[_0xc43c85(0xce)]){const _0x4f952e=_0x2dcdc2[_0xc43c85(0xd2)]('Users')[_0xc43c85(0x108)](_0x77052f['currentUser']['uid']);document['getElementById'](_0xc43c85(0xf6))[_0xc43c85(0xbf)]=_0xc43c85(0x106),_0x4f952e[_0xc43c85(0xc6)]({'name':_0x6dad13[_0xc43c85(0x102)],'bio':_0x188717[_0xc43c85(0x102)],'profileIMG':_0x40e76b})[_0xc43c85(0xd8)](()=>{const _0x4c438d=_0xc43c85;console['log'](_0x4c438d(0xdd)),setTimeout(()=>{const _0x247629=_0x4c438d;document[_0x247629(0xe1)]('submitButton')[_0x247629(0xbf)]=_0x247629(0x10f),window[_0x247629(0xe2)][_0x247629(0xef)]='/account.html?action=setupProfile';},0x3e8);})['catch'](_0x42d573=>{const _0x11aab5=_0xc43c85;alert(_0x11aab5(0xe7)),console['error'](_0x11aab5(0x10b),_0x42d573);});}else console[_0xc43c85(0x105)](_0xc43c85(0xbd)),alert(_0xc43c85(0xd7));}function a0_0x10b2(_0x5469ff,_0x325cc0){const _0x44fa75=a0_0x44fa();return a0_0x10b2=function(_0x10b2fb,_0x572a4a){_0x10b2fb=_0x10b2fb-0xb9;let _0x26cf97=_0x44fa75[_0x10b2fb];return _0x26cf97;},a0_0x10b2(_0x5469ff,_0x325cc0);}function uploadProfilePicture(_0x51dde6,_0x4c2bb3,_0x56b01b){const _0x222a7a=a0_0x158f67,_0x48c0a8=firebase[_0x222a7a(0xe9)]()[_0x222a7a(0xd6)](),_0x444e69=_0x51dde6['name'][_0x222a7a(0xbb)]('.')[_0x222a7a(0xd1)](),_0x1ed16c=_0x4c2bb3['currentUser'][_0x222a7a(0xed)]+'.'+_0x444e69,_0x3be670=_0x48c0a8[_0x222a7a(0xca)]('users_profilePic/'+_0x1ed16c);document[_0x222a7a(0xe1)](_0x222a7a(0xf6))[_0x222a7a(0xbf)]=_0x222a7a(0xdf),_0x3be670['put'](_0x51dde6)[_0x222a7a(0xd8)](_0x42a5d5=>{const _0x34c21e=_0x222a7a;return _0x42a5d5[_0x34c21e(0xd6)][_0x34c21e(0xda)]();})[_0x222a7a(0xd8)](_0x44cc96=>{return updateUserProfile(_0x44cc96,_0x4c2bb3,_0x56b01b);})[_0x222a7a(0xcc)](_0xdca80a=>{const _0x19333f=_0x222a7a;alert(_0x19333f(0xc9)),console[_0x19333f(0x105)](_0x19333f(0x112),_0xdca80a);});}function a0_0x44fa(){const _0x26d786=['image/jpeg','innerHTML','split','use-default-image','User\x20is\x20not\x20authenticated','data','innerText','log','src','profile-picture-picker','files','loading...','addEventListener','update','auth','6sYqpZO','Error\x20uploading\x20profile\x20picture.\x20Please\x20try\x20again\x20later.','child','target','catch','users_profilePic/','currentUser','firestore','onerror','pop','collection','.profile-picture-picker-image','/assets/img/default_user.jpeg','Users','ref','User\x20is\x20not\x20authenticated.\x20Please\x20log\x20in\x20and\x20try\x20again.','then','22ZHjLod','getDownloadURL','Please\x20upload\x20a\x20square\x20image.','onload','Profile\x20updated\x20with\x20new\x20image','trim','uploading...','62vXcBIO','getElementById','location','click','put','Using\x20default\x20image!','name','Error\x20updating\x20profile.\x20Please\x20try\x20again\x20later.','edit-profile-userid','storage','2591395obSqvB','readAsDataURL','/signin.html','uid','result','href','get','297CwIpyy','edit-profile-email','Updated\x20profile\x20with\x20default\x20image','bio','email','submitButton','466540WoQpjU','onAuthStateChanged','.jpeg','3367JGLFYV','querySelector','load','21iKGZXj','preventDefault','Please\x20upload\x20a\x20profile\x20picture,\x20or\x20use\x20default.','default_user.jpeg','9559949eQOTyR','value','takeoff\x20<span\x20style=\x22padding-left:\x205px;\x22>🚀</span>','set','error','saving...','805624ddyiOC','doc','profileIMG','There\x20was\x20an\x20error\x20reading\x20the\x20file.','Error\x20updating\x20profile:','41261232mxerBd','blob','exists','done!','285032pfwCZI','edit-profile-full-name','Error\x20uploading\x20profile\x20picture:'];a0_0x44fa=function(){return _0x26d786;};return a0_0x44fa();}document[a0_0x158f67(0xc5)]('DOMContentLoaded',()=>{const _0x1d846b=a0_0x158f67;let _0x5a6a7c=firebase[_0x1d846b(0xc7)](),_0x21c259=firebase['firestore']();const _0x566951=document[_0x1d846b(0xe1)]('edit-profile-full-name'),_0x31a694=document[_0x1d846b(0xe1)](_0x1d846b(0xe8)),_0x2d2349=document[_0x1d846b(0xe1)](_0x1d846b(0xf2)),_0x277552=document[_0x1d846b(0xe1)]('bio'),_0x591862=document[_0x1d846b(0xe1)](_0x1d846b(0xf6)),_0x18ed9d=document[_0x1d846b(0xe1)](_0x1d846b(0xbc));_0x591862[_0x1d846b(0xc5)](_0x1d846b(0xe3),_0x34ecb5=>{const _0x30e17a=_0x1d846b;_0x34ecb5[_0x30e17a(0xfe)](),useDefaultImageFlag=![],submitProfile();}),_0x18ed9d[_0x1d846b(0xc5)](_0x1d846b(0xe3),()=>{const _0x44862e=_0x1d846b;useDefaultImageFlag=!![],usedDefaultImage=!![],alert(_0x44862e(0xe5)),submitProfile();}),_0x5a6a7c[_0x1d846b(0xf8)](function(_0x22c020){const _0x341802=_0x1d846b;if(_0x22c020){validateForm();const _0x10e951=_0x21c259[_0x341802(0xd2)](_0x341802(0xd5))['doc'](_0x22c020[_0x341802(0xed)]),_0x101ea0=new Date();_0x10e951[_0x341802(0x104)]({'lastActive':_0x101ea0},{'merge':!![]});const _0x546cea=_0x21c259['collection'](_0x341802(0xd5))[_0x341802(0x108)](_0x5a6a7c[_0x341802(0xce)][_0x341802(0xed)]);_0x546cea[_0x341802(0xf0)]()['then'](_0x5d4f37=>{const _0x2ad1ff=_0x341802;if(_0x5d4f37[_0x2ad1ff(0x10e)]){const _0x502fd2=_0x5d4f37[_0x2ad1ff(0xbe)]();_0x566951[_0x2ad1ff(0x102)]=_0x502fd2[_0x2ad1ff(0xe6)],_0x31a694[_0x2ad1ff(0x102)]=_0x502fd2['senderId'],_0x2d2349[_0x2ad1ff(0x102)]=_0x502fd2[_0x2ad1ff(0xf5)],bio['value']&&(bio[_0x2ad1ff(0x102)]=_0x502fd2[_0x2ad1ff(0xf4)]),console[_0x2ad1ff(0xc0)](_0x502fd2[_0x2ad1ff(0x109)]),document[_0x2ad1ff(0xfb)](_0x2ad1ff(0xd3))[_0x2ad1ff(0xc1)]=_0x502fd2[_0x2ad1ff(0x109)]==''?'https://placeholder.co/100x100':_0x502fd2[_0x2ad1ff(0x109)];}});}else alert('Cannot\x20get\x20current\x20user\x20details.\x20Please\x20sign\x20in\x20first\x20or\x20refresh\x20the\x20page.'),window[_0x341802(0xe2)]['href']=_0x341802(0xec);});});