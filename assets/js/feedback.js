const a0_0xda6cfd=a0_0x2459;(function(_0x87bd07,_0xd18a9f){const _0x28d97a=a0_0x2459,_0x262e13=_0x87bd07();while(!![]){try{const _0x3785f7=parseInt(_0x28d97a(0x18a))/0x1+-parseInt(_0x28d97a(0x175))/0x2*(-parseInt(_0x28d97a(0x174))/0x3)+parseInt(_0x28d97a(0x17d))/0x4+-parseInt(_0x28d97a(0x194))/0x5*(-parseInt(_0x28d97a(0x17a))/0x6)+parseInt(_0x28d97a(0x199))/0x7*(parseInt(_0x28d97a(0x19b))/0x8)+-parseInt(_0x28d97a(0x18f))/0x9+-parseInt(_0x28d97a(0x19c))/0xa;if(_0x3785f7===_0xd18a9f)break;else _0x262e13['push'](_0x262e13['shift']());}catch(_0x1086bd){_0x262e13['push'](_0x262e13['shift']());}}}(a0_0x4c7d,0x9d6ea));let auth=firebase[a0_0xda6cfd(0x170)](),db=firebase['firestore']();function a0_0x2459(_0x1dc432,_0x289f71){const _0x4c7d2=a0_0x4c7d();return a0_0x2459=function(_0x2459e5,_0x25ae4d){_0x2459e5=_0x2459e5-0x168;let _0x3bcb9c=_0x4c7d2[_0x2459e5];return _0x3bcb9c;},a0_0x2459(_0x1dc432,_0x289f71);}document[a0_0xda6cfd(0x16e)]('DOMContentLoaded',()=>{const _0x18a810=a0_0xda6cfd,_0x27a63b=document['getElementById'](_0x18a810(0x196)),_0x4f5ebb=document['getElementById']('bugs-issues-no'),_0x2411be=document[_0x18a810(0x177)](_0x18a810(0x169)),_0x3b9912=()=>{const _0x4cd04d=_0x18a810;_0x27a63b[_0x4cd04d(0x16a)]?_0x2411be[_0x4cd04d(0x188)]['display']='block':_0x2411be[_0x4cd04d(0x188)][_0x4cd04d(0x16f)]=_0x4cd04d(0x173);};_0x27a63b[_0x18a810(0x16e)](_0x18a810(0x183),_0x3b9912),_0x4f5ebb[_0x18a810(0x16e)]('change',_0x3b9912),document[_0x18a810(0x177)](_0x18a810(0x179))[_0x18a810(0x16e)](_0x18a810(0x197),async _0x1044d9=>{_0x1044d9['preventDefault']();});});function submitFeedback(){const _0x41811f=a0_0xda6cfd,_0x2ac9e7=document['getElementById']('bugs-issues-yes'),_0x38d750=document[_0x41811f(0x177)](_0x41811f(0x178)),_0x56a133=document[_0x41811f(0x177)](_0x41811f(0x169));auth['onAuthStateChanged'](function(_0x1f0e1d){const _0x523e7e=_0x41811f,_0x3c2027=document[_0x523e7e(0x191)](_0x523e7e(0x180))?.[_0x523e7e(0x168)]['textContent'],_0x160654=document[_0x523e7e(0x191)](_0x523e7e(0x180))?.[_0x523e7e(0x168)]['textContent'],_0x1a0cf9=document[_0x523e7e(0x177)](_0x523e7e(0x18b))[_0x523e7e(0x172)][_0x523e7e(0x187)](),_0x5c5838=document[_0x523e7e(0x191)](_0x523e7e(0x193))?.[_0x523e7e(0x168)]['textContent'],_0x8e79c1=_0x2ac9e7['checked']?document['getElementById'](_0x523e7e(0x16d))[_0x523e7e(0x172)][_0x523e7e(0x187)]():'No\x20bugs\x20encountered.',_0x9d15ef=document[_0x523e7e(0x191)](_0x523e7e(0x17f))?.[_0x523e7e(0x168)][_0x523e7e(0x195)],_0xdb78f1=document[_0x523e7e(0x191)](_0x523e7e(0x18c))?.[_0x523e7e(0x168)][_0x523e7e(0x195)];if(!_0x3c2027||!_0x160654||!_0x5c5838||!_0x9d15ef||!_0xdb78f1||_0x1a0cf9===''){alert(_0x523e7e(0x182));return;}if(_0x2ac9e7['checked']&&_0x8e79c1===''){alert('Please\x20describe\x20the\x20bugs\x20encountered\x20or\x20select\x20\x27No\x27\x20if\x20no\x20bugs\x20were\x20found.');return;}const _0x582c7e={'intuitive':_0x3c2027,'mostUsefulPage':_0x160654,'unnecessaryFeatures':_0x1a0cf9,'encounteredBugs':_0x5c5838,'bugs':_0x8e79c1,'frequency':_0x9d15ef,'visualDesignRating':_0xdb78f1,'reportedUser':auth['currentUser'][_0x523e7e(0x17e)]};console[_0x523e7e(0x18e)]('Submitting\x20feedback:\x20',_0x582c7e),db[_0x523e7e(0x171)](_0x523e7e(0x186))[_0x523e7e(0x19a)](_0x582c7e)['then'](()=>{const _0x324f60=_0x523e7e,_0x5ccb92=db[_0x324f60(0x171)]('Users')[_0x324f60(0x18d)](auth['currentUser'][_0x324f60(0x16b)]);_0x5ccb92[_0x324f60(0x17b)]()['then'](_0x3c47f4=>{const _0x553bb4=_0x324f60;_0x3c47f4[_0x553bb4(0x185)]&&(data=_0x3c47f4['data'](),_0x5ccb92['update']({'novacoins':data['novacoins']+=0x64,'completedAccountFeedbackForm':!![]})[_0x553bb4(0x198)](()=>{const _0x47c8ca=_0x553bb4;alert(_0x47c8ca(0x16c)),window[_0x47c8ca(0x176)]=_0x47c8ca(0x192);})[_0x553bb4(0x184)](_0x54ed13=>{const _0x135d3f=_0x553bb4;console[_0x135d3f(0x190)]('Error\x20submitting\x20feedback:\x20',_0x54ed13),alert(_0x135d3f(0x181));}));});})[_0x523e7e(0x184)](_0x6edb5a=>{const _0x52c083=_0x523e7e;console[_0x52c083(0x190)](_0x52c083(0x189),_0x6edb5a),alert(_0x52c083(0x17c));});});}function a0_0x4c7d(){const _0x15c167=['input[name=\x22design\x22]:checked','doc','log','4138911eWDhRT','error','querySelector','/create_avatar.html','input[name=\x22bugs-issues\x22]:checked','5bAjvRr','textContent','bugs-issues-yes','submit','then','363811YxuhEL','add','72IegUui','26718070GEIfxz','nextElementSibling','section:bugs-encountered','checked','uid','Feedback\x20successfully\x20submitted!\x20You\x20have\x20redeemed\x20100\x20novacoins.','bugs-encountered','addEventListener','display','auth','collection','value','none','33FnaBNW','139538BZRTUQ','location','getElementById','bugs-issues-no','form','5465604GUhTGv','get','There\x20was\x20an\x20error\x20submitting\x20your\x20feedback.\x20Please\x20try\x20again.','1499492QmUqUJ','email','input[name=\x22frequency\x22]:checked','input[name=\x22intuitive\x22]:checked','There\x20was\x20an\x20error\x20redeeming\x20novcacoins..\x20Please\x20try\x20again.','Please\x20fill\x20out\x20all\x20required\x20fields\x20before\x20submitting\x20the\x20form.','change','catch','exists','FeedbackData','trim','style','Error\x20submitting\x20feedback:\x20','1255505MIZLXT','unnecessary'];a0_0x4c7d=function(){return _0x15c167;};return a0_0x4c7d();}