(this.webpackJsonpopenquiz=this.webpackJsonpopenquiz||[]).push([[0],{198:function(e,t,a){e.exports=a(343)},217:function(e,t,a){},316:function(e,t,a){},337:function(e,t,a){},343:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),l=a.n(i),c=(a(203),a(69)),o=a.n(c),u={apiKey:"AIzaSyAuOf94KCcW2oTI3gUitSD35tWsPggP0Z0",authDomain:"openquiz-29cc5.firebaseapp.com",databaseURL:"https://openquiz-29cc5.firebaseio.com",projectId:"openquiz-29cc5",storageBucket:"openquiz-29cc5.appspot.com",messagingSenderId:"164997608299",appId:"1:164997608299:web:356365bf263b879e7a122e",measurementId:"G-BVJGHYMEWD"},s=c.initializeApp(u);c.analytics();var d=s,m=a(189),p=a(24),f=a(30),E=a(44),b=(a(217),a(344)),h=a(58),v=a(348),y=a(353),g=a(349),w=a(175),S=a.n(w);function O(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),a=(t[0],t[1],Object(f.b)());return r.a.createElement(S.a,{uiConfig:{signInFlow:"popup",signInOptions:[o.a.auth.GoogleAuthProvider.PROVIDER_ID,{provider:o.a.auth.PhoneAuthProvider.PROVIDER_ID,defaultCountry:"91"}],callbacks:{signInSuccessWithAuthResult:function(e){var t=e.additionalUserInfo.isNewUser;return console.log(e),t&&a({type:"NEW_USER_LOGIN",payload:e.additionalUserInfo.profile}),!0}}},firebaseAuth:d.auth()})}var j=a(356),U=a(357),A=a(358),I=a(95);var k=function(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),a=t[0],i=t[1];return Object(f.c)((function(e){return e.auth})),Object(f.b)(),Object(n.useEffect)((function(){}),[]),r.a.createElement("div",{id:"container"},r.a.createElement(I.Fade,null,r.a.createElement("nav",{id:"top-nav"},r.a.createElement("span",{id:"logo"},"OPEN QUIZ"),r.a.createElement("div",{id:"links"},r.a.createElement(j.a,{style:{fontSize:"30px"}}),r.a.createElement(U.a,{style:{fontSize:"30px",marginLeft:"5px"}})))),r.a.createElement(b.a,null),r.a.createElement("div",{id:"middle"},r.a.createElement(I.Fade,{left:!0},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}},r.a.createElement(A.a,{spin:!0,style:{fontSize:"60px"}}),r.a.createElement("span",{id:"logo-middle"},"OPEN QUIZ"))),r.a.createElement(I.Fade,{right:!0},r.a.createElement("div",{id:"middle-btn-grp"},r.a.createElement("h1",{style:{color:"#3959a2"}},"Want to Earn Money ?"),r.a.createElement("p",null,"Have you ever thought earning money would be so easy ?",r.a.createElement("br",null),"Earn by just winning various QUIZ matches"),r.a.createElement(h.a,{type:"primary",shape:"round",onClick:function(){return i(!0)}},"GET STARTED")))),r.a.createElement(b.a,null),r.a.createElement(I.Fade,{bottom:!0},r.a.createElement("div",{id:"card-grp"},r.a.createElement(v.a,{title:"Earn Real Money",hoverable:!0,style:{margin:5}},"Free Website to MAKE MONEY for trying Free apps! Earn real money by completing simple quiz inside the website. Easily make free money !."),r.a.createElement(v.a,{title:"Increase General Knowledge",hoverable:!0,style:{margin:5}},"Even in the age of Google, general knowledge still matters. These awesome web-site will help you to expand your general knowledge from alot of quizzes."),r.a.createElement(v.a,{title:"1000+ Quiz Question",hoverable:!0,style:{margin:5}},"We have 1000 + trivia based MCQ's questions and True/False Questions as well which are available in three difficulty."))),r.a.createElement(b.a,null),r.a.createElement("div",{id:"stats"},r.a.createElement(y.a,{title:"Active Users",value:11289}),r.a.createElement(y.a,{title:"Amount Paid to Users",value:12598.54,precision:2,prefix:"$"})),r.a.createElement(b.a,null),r.a.createElement("div",{id:"footer"},r.a.createElement("span",null,"Product by @Codified Coder")),r.a.createElement(g.a,{title:"Login ",centered:!0,visible:a,onOk:function(){return i(!1)},onCancel:function(){return i(!1)}},r.a.createElement(O,null)))},C=(a(316),a(345));function x(){return r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}},r.a.createElement(C.a,{size:"large"}))}var R=a(351),T=a(354),_=a(360),z=a(359),P=a(361),D=a(362),W=a(346),F=a(350),G=a(352);function H(){var e=Object(f.c)((function(e){return e.auth.user})),t=Object(n.useState)(0),a=Object(E.a)(t,2),i=a[0],l=a[1];return Object(n.useEffect)((function(){var t=0;null!==e.email&&(t+=4),null!==e.displayName&&(t+=4),null!==e.phoneNumber&&(t+=2),l(10*t)}),[]),r.a.createElement("div",{id:"profile-menu"},r.a.createElement("div",{id:"profile-top"},r.a.createElement(W.a,{size:80},"Image"),r.a.createElement(F.a,{type:"circle",percent:i})),r.a.createElement(b.a,null),r.a.createElement("div",null,r.a.createElement(G.a,{size:"large",placeholder:"Enter Username",prefix:r.a.createElement(z.a,null)})))}function N(){return r.a.createElement("div",{id:"rewards-menu"},"Rewards Page")}function q(){return r.a.createElement("div",null,"Refer and earn")}var L=R.a.SubMenu;function Q(e){var t,a=Object(n.useState)("profile"),i=Object(E.a)(a,2),l=i[0],c=i[1];return r.a.createElement(T.a,{width:"70%",placement:"right",closable:!0,onClose:function(){return e.setProfileVisible(!1)},visible:e.profileVisible},r.a.createElement(R.a,{onClick:function(e){c(e.key)},selectedKeys:[l],mode:"horizontal"},r.a.createElement(L,{title:"Profile",icon:r.a.createElement(_.a,null)},r.a.createElement(R.a.ItemGroup,{title:"Settings"},r.a.createElement(R.a.Item,{key:"profile",icon:r.a.createElement(z.a,null)},"Profile"),r.a.createElement(R.a.Item,{key:"logout",icon:r.a.createElement(P.a,null),onClick:function(){return d.auth().signOut(),void(window.location.href="/")}},"Logout"))),r.a.createElement(L,{title:"Rewards",icon:r.a.createElement(D.a,null)},r.a.createElement(R.a.Item,{key:"rewards"},"Rewards Coins"),r.a.createElement(R.a.Item,{key:"refer"},"Refer and Earn"))),(t=l,{profile:r.a.createElement(H,null),rewards:r.a.createElement(N,null),refer:r.a.createElement(q,null)}[t]))}var V=a(193);function B(e){var t=Object(f.c)((function(e){return e.auth.user}));return r.a.createElement("div",{id:"navbar"},r.a.createElement("h1",{style:{fontSize:"40px",fontFamily:"Galada",color:"#002766"}},e.title),r.a.createElement("div",{id:"navbar-grp"},r.a.createElement("h3",{style:{marginRight:"25px"}},t.displayName),r.a.createElement(V.a,{placement:"topLeft",title:"Profile"},r.a.createElement(h.a,{shape:"round",onClick:function(){return e.setProfileVisible(!0)},style:{marginRight:"15px"},icon:r.a.createElement(z.a,null)}))))}function M(){Object(f.b)();var e=Object(f.c)((function(e){return e.auth})),t=Object(n.useState)(!1),a=Object(E.a)(t,2),i=a[0],l=a[1],c=Object(n.useState)("DASHBOARD"),o=Object(E.a)(c,2),u=o[0];o[1];return Object(n.useEffect)((function(){e.newUser}),[]),r.a.createElement("div",null,e.isAuth?r.a.createElement("div",{id:"dashboard"},r.a.createElement(B,{title:u,setProfileVisible:l}),r.a.createElement(Q,{profileVisible:i,setProfileVisible:l})):r.a.createElement(x,null))}var K=a(355);var Z=function(){var e=Object(f.c)((function(e){return e.auth})),t=Object(f.b)();return Object(n.useEffect)((function(){d.auth().onAuthStateChanged((function(e){e?t({type:"REQUEST_AUTH_SUCCESS",payload:e.providerData[0]}):(t({type:"AUTH_FAILED"}),K.a.info({message:"Hi Buddy",description:"Click on Get Started and start earning money",onClick:function(){K.a.destroy()},placement:"bottomLeft"}))}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(m.a,null,e.isAuth?r.a.createElement("span",null,r.a.createElement(p.a,{to:"/dashboard"})):null,r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",exact:!0},r.a.createElement(k,null)),r.a.createElement(p.b,{path:"/dashboard"},r.a.createElement(M,null)))))};a(337),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=a(48),Y=a(196),$={user:null};var X={isAuth:!1,user:null,error:!1,newUser:!1};var ee=Object(J.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_SUCCESS":return{user:t.payload,isAuth:!0,error:!1,newUser:!1};case"AUTH_FAILED":return{user:null,isAuth:!1,error:!1,newUser:!1};case"AUTH_SUCCESS_FIRST":return{user:t.payload,isAuth:!0,error:!1,newUser:!0};default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return Object(Y.a)({},t.payload);case"RESET_USER":return{user:null};default:return e}}}),te=a(190),ae=a(194),ne=a(34),re=a.n(ne),ie=a(41),le=a(347),ce=re.a.mark(de),oe=re.a.mark(me),ue=re.a.mark(pe),se=d.firestore();function de(e){return re.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(ie.c)({type:"AUTH_SUCCESS",payload:e.payload});case 2:return t.next=4,Object(ie.c)({type:"GET_USER_DATA",payload:e.payload.uid});case 4:K.a.success({message:"Welcome",description:"Start Earning money , Click here to play quiz",onClick:function(){K.a.destroy()},placement:"bottomRight"});case 5:case"end":return t.stop()}}),ce)}function me(e){var t;return re.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.next=3,Object(ie.c)({type:"AUTH_SUCCESS_FIRST",payload:t});case 3:se.collection("users").doc(t.id).set({coins:500,referrals:[],refferedBy:"",uid:t.id,verified:!1,lastQuiz:""}).then((function(e){console.log("Document written with ID: ",e)})).catch((function(e){console.error("Error adding document: ",e)})),"updatable",le.a.loading({content:"Adding 500 Sign In Coins...",key:"updatable"}),setTimeout((function(){le.a.success({content:"Added!",key:"updatable",duration:3})}),6e3);case 7:case"end":return a.stop()}}),oe)}function pe(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ie.d)("REQUEST_AUTH_SUCCESS",de);case 2:return e.next=4,Object(ie.d)("NEW_USER_LOGIN",me);case 4:case"end":return e.stop()}}),ue)}var fe=re.a.mark(ve),Ee=re.a.mark(ye),be=d.firestore(),he=function(e){return be.collection("users").doc(e).get().then((function(e){return e.data()}))};function ve(e){var t;return re.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(ie.b)(he,e.payload);case 2:if(!(t=a.sent)){a.next=7;break}return a.next=6,Object(ie.c)({type:"SET_USER",payload:t});case 6:t.verified||K.a.warn({message:"Your Profile is not verified",description:"Update your profile to 100% and get extra 500 Bonus Points",onClick:function(){K.a.destroy()},placement:"bottomRight"});case 7:case"end":return a.stop()}}),fe)}function ye(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ie.d)("GET_USER_DATA",ve);case 2:case"end":return e.stop()}}),Ee)}var ge=re.a.mark(we);function we(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ie.a)([pe(),ye()]);case 2:case"end":return e.stop()}}),ge)}var Se=Object(ae.a)(),Oe=Object(J.createStore)(ee,Object(te.composeWithDevTools)(Object(J.applyMiddleware)(Se)));Se.run(we);var je=Oe;l.a.render(r.a.createElement(f.a,{store:je},r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[198,1,2]]]);
//# sourceMappingURL=main.ca7923a6.chunk.js.map