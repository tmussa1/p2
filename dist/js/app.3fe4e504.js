(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],u=0,f=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),s=a.n(n);s.a},"04e9":function(t,e,a){},"09c4":function(t,e,a){},4678:function(t,e,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=r(t);return a(e)}function r(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=r,t.exports=s,s.id="4678"},"4eca":function(t,e,a){"use strict";var n=a("6224"),s=a.n(n);s.a},"559f":function(t,e,a){"use strict";var n=a("b394"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],o={name:"App",data:function(){return{}}},i=o,c=(a("034f"),a("2877")),l=Object(c["a"])(i,s,r,!1,null,null,null),d=l.exports,u=(a("4989"),a("f9e3"),a("2dd8"),a("5f5b")),f=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar"),a("div",{staticClass:"row"},[a("b-card-group",{attrs:{deck:""}},t._l(t.wordData.words,(function(e){return a("div",{key:e.category,staticClass:"col-lg-3 col-md-3 col-sm-3 col-xs-12"},[a("b-row",{staticClass:"card-indv"},[a("b-card",{staticClass:"text-center",attrs:{"bg-variant":"success","text-variant":"black"}},[a("b-card-text",[t._v("Category - "+t._s(e.category))]),a("router-link",{attrs:{to:{name:"Game",params:{category:e.category}}}},[a("b-button",{attrs:{variant:"primary"}},[t._v("Let's play")])],1)],1)],1)],1)})),0)],1)],1)},h=[],m={data:{words:[{category:"Career",wordList:["Academic","Accounting","Accuracy","Achievement","Administration","Advancement","Affiliation","Affordable","Alternatives","Analysis","Aplomb","Appreciation","Appropriate","Ardent","Array","Assembly","Associate","Association","Astute","Attentive","Attitude","Audition","Awareness"]},{category:"Chicken",wordList:["Banty","Barbecue","Barn","Beak","Bedding","Breast","Breed","Broiler","Brown","Buff"]},{category:"Stock Market",wordList:["Accrue","Acquisition","Actuary","Aggressive","Allocation","Analyze","Annual","Annuity","Approach","Arbitrage","Ask","Assets","Auction","Audit","Averaging","Earn","Earnings","Economy","Efficient","Elasticity","Emerging","Enterprise","Entrepreneur","Equilibrium","Exchange","Expectation"]},{category:"Arts",wordList:["Talent","Tapestry","Tatting","Teaching","Technique","Toy","Trade","Trapunto","Tricks"]},{category:"Crime",wordList:["Capture","Case","Caution","Chase","Cheat","Civil","Claim","Coercion","Collusion","Combat","Commission","Commit","Complaint","Complication","Conduct","Confession","Connection","Conspiracy","Contact","Contacts","Contempt","Control","Controversial","Conviction","Cops","Coroner","Corruption","Counsel","Counterfeit","Court","Theft","Crime","Criminal","Criminology","Cuffs","Custody"]},{category:"Emergency",wordList:["Damage","Death","Destruction","Detect","Dig","Direction","Dirty","Dispatch","Drama"]},{category:"Cancer",wordList:["Imagery","Immunology","Impairment","Important","Improvements","Inadequate","Information","Informed","Infusion","Inherit","Innovations","Insecticide","Insurance","Intense","International","Intervention","Invade","Invasive","Invasive","Irrational","Issues"]},{category:"Texas life",wordList:["Habitat","Hardy","Harsh","Haul","Herd","Hero","Hides","Hike","Hillside","Historic","Homestead","Horseback","Horses","Hospitable","Hostility","Hunger","Hunt"]},{category:"Education",wordList:["Ranking","Reading","Recall","Reception","Recognition","Registration","Relatives","Relief","Relief","Remember","Remembrance","Research","Result","Retail","Reunion","Risers"]},{category:"Climate Change",wordList:["Calamity","Canyon","Capacity","Catastrophe","Category","Celebration","Celestial","Cepheids","Ceremony","Chemicals","Chemistry","Choked","Climate","Coastal","Color","Combustible","Commercial","Commercialism","Commitment","Community","Condensation","Conference","Confidence","Conflagration","Confluence","Conservation","Conserve","Conspicuous","Consume","Consumption","Contamination","Contiguous","Continent","Continental crust","Contribution","Conviction","Corrosion","County","Crater","Creation","Creature","Crops","Crowd","Crucial","Crust","Culture","Curb","Current","Cyclone","Cynicism"]},{category:"Football",wordList:["Call","Carrier","Catches","Caution","Center","Champion","Charisma","Cheers","Clipping","Coach","Collegiate","Commercials","Competition","Conditioning","Conference","Conference","Confidence","Confrontation","Consecutive","Contract","Cornerback","Courageous","Cowhide","Crossbar","Crowd","Crush"]},{category:"Beauty",wordList:["Facial","Fancy","Fashionable","Features","Fingertip","Finish","Fitness","Fix","Flair","Fluff","Focus","Foil","Formula","Formulation","Foundation","Fragrance","Frosting","Fungus"]}]}},b=m,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-navbar",{attrs:{type:"dark",variant:"dark"}},[a("router-link",{attrs:{to:"/categories"}},[a("b-navbar-brand",{attrs:{id:"nav-home"}},[t._v("Categories")])],1),a("b-navbar",{attrs:{variant:"faded",type:"light"}},[a("router-link",{attrs:{to:{name:"stats"}}},[a("b-navbar-brand",[t._v("Scores")])],1)],1),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-form",[a("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Filter categories"},model:{value:t.searchWord,callback:function(e){t.searchWord=e},expression:"searchWord"}}),a("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"},on:{click:t.searchCategory}},[t._v("Search")])],1)],1)],1)],1)],1)},C=[],y={data:function(){return{wordData:b.data,searchWord:""}},methods:{searchCategory:function(){this.$router.push({path:"/categories/"+this.searchWord})}}},g=y,j=(a("9f0b"),Object(c["a"])(g,v,C,!1,null,"728cd5cf",null)),w=j.exports,k={data:function(){return{wordData:b.data}},components:{NavBar:w}},_=k,A=(a("559f"),Object(c["a"])(_,p,h,!1,null,"230d3ca3",null)),x=A.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("NavBar"),a("h3",[t._v("Category - "+t._s(t.category))]),a("b-card",{staticClass:"card-top",attrs:{title:"Name a word for","body-class":"text-center","header-tag":"nav"}},[t.noData&&!t.dataLoaded?a("b-card-text",{staticClass:"hints"},[t._v(" Sorry, there is no defintion available for the selected word or category "),a("div",{staticClass:"spacer"}),a("router-link",{attrs:{to:"/categories"}},[a("b-button",{attrs:{variant:"danger",id:"go-back"}},[t._v("Try a different category")])],1)],1):t._e(),a("div",{staticClass:"hint-cards"},[t.hintone?a("b-card-text",{staticClass:"hints"},[a("span",[t._v("- "+t._s(t.hintone))])]):t._e(),t.hinttwo?a("b-card-text",{staticClass:"hints"},[a("span",[t._v("- "+t._s(t.hinttwo))])]):t._e(),t.hintthree?a("b-card-text",{staticClass:"hints"},[a("span",[t._v("- "+t._s(t.hintthree))])]):t._e()],1),t.hintone||t.hinttwo||t.hintthree?a("div",[t.showFailure?a("div",{attrs:{id:"fail-alerter"}},[a("div",{class:t.alertFailure,attrs:{role:"alert"}},[t._v(" Incorrect answer. You have "),a("span",{attrs:{id:"word-ans"}},[t._v(t._s(t.attemptLeft))]),t._v(" more attempts and the correct answer will be displayed ")])]):t._e(),t.showSuccess?a("div",{attrs:{id:"success-alerter"}},[a("div",{class:t.alertSuccess,attrs:{role:"alert"}},[t._v(" Congratulations, your response was correct! Click "),a("span",{attrs:{id:"word-ans"}},[t._v("Play Again")]),t._v(" or choose a different category ")])]):t._e(),t.countBiggerThanThree?a("div",{attrs:{id:"answer-alerter"}},[a("div",{class:t.alertAnswer,attrs:{role:"alert"}},[t._v(" You have attempted "),a("span",{attrs:{id:"word-ans"}},[t._v("3")]),t._v(" times. The correct answer is "),a("span",{attrs:{id:"word-ans"}},[t._v(t._s(t.randomWord))]),t._v(" Click "),a("span",{attrs:{id:"word-ans"}},[t._v("Play Again")]),t._v(" to continue playing ")])]):t._e(),a("b-form-input",{staticClass:"col-md-4",attrs:{placeholder:"Enter your answer"},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}}),a("b-button",{attrs:{variant:"primary",id:"sub-button"},on:{click:t.submitAnswer}},[t._v("Submit Answer")]),a("div",{staticClass:"row"},[a("b-button",{staticClass:"again-button",attrs:{variant:"danger"},on:{click:t.replayGame}},[t._v("Play Again")])],1)],1):t._e()],1)],1)},L=[],E=(a("498a"),a("bc3a")),F=a.n(E),z=(a("96cf"),a("1da1"));a("ed18").config();var S={data:{config:{apiKey:"AIzaSyCln3KIwDdox4jpHt0DaHDFK9L6u_vVc60",authDomain:"e28-flashcard.firebaseio.com",databaseURL:"http://e28-flashcard.firebaseio.com",projectId:"e28-flashcard"}}},D=S,T=a("59ca"),B=(a("e71f"),D.data.config);b.data;function H(t,e){T["apps"].length||T["initializeApp"](B);var a=T["firestore"](),n={name:t,dob:e,wins:0,losses:0};O("users","name",t).then((function(t){t.shift()||a.collection("users").add(n).then((function(t){console.log("Word document Document written"+t)})).catch((function(t){console.error("Unable to add document: ",t)}))}))}function O(t,e,a){return R.apply(this,arguments)}function R(){return R=Object(z["a"])(regeneratorRuntime.mark((function t(e,a,n){var s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return T["apps"].length||T["initializeApp"](B),s=T["firestore"](),t.next=4,s.collection(e).where(a,"==",n).get();case 4:return r=t.sent,t.abrupt("return",r.docs);case 6:case"end":return t.stop()}}),t)}))),R.apply(this,arguments)}function W(t,e,a){T["apps"].length||T["initializeApp"](B);var n=T["firestore"]();n.collection(t).doc(e).update(a)}function P(t,e){O("users","name",t).then((function(t){var a=t.shift();W("users",a.id,{wins:parseInt(e)})}))}function N(t,e){O("users","name",t).then((function(t){var a=t.shift();W("users",a.id,{losses:parseInt(e)})}))}function $(t){return O("users","name",t).then((function(t){var e=t.shift(),a=e.data().wins,n=e.data().losses;return{wins:a,losses:n}}))}a("ed18").config();var G={data:function(){return{wordData:b.data,randomWord:"",category:this.$route.params.category,hintone:"",hinttwo:"",hintthree:"",answer:"",showFailure:!1,showSuccess:!1,alertFailure:"alert alert-danger col-md-8",alertSuccess:"alert alert-success col-md-8",alertAnswer:"alert alert-secondary col-md-8",attemptCount:0,attemptLeft:3,countBiggerThanThree:!1,dataLoaded:!1,noData:!1,winCount:null,lossCount:null}},methods:{pickWord:function(){for(var t=0;t<this.wordData.words.length;t++)if(this.wordData.words[t].category.trim().toLowerCase()==this.category.trim().toLowerCase()){var e=this.wordData.words[t].wordList,a=Math.floor(Math.random()*e.length);this.randomWord=e[a]}},populateHint:function(){var t=this;F()({method:"GET",url:"https://wordsapiv1.p.rapidapi.com/words/"+this.randomWord,headers:{"content-type":"application/octet-stream","x-rapidapi-host":"wordsapiv1.p.rapidapi.com","x-rapidapi-key":"169747aad1msh07dad38656a2cc0p1efdcfjsn5c4794016ec3"}}).then((function(e){t.dataLoaded=!0,t.noData=!1,t.hintone=null==e.data.results[0]?"":e.data.results[0].definition,t.hinttwo=null==e.data.results[1]?"":e.data.results[1].definition,t.hintthree=null==e.data.results[2]?"":e.data.results[2].definition})).catch((function(e){t.dataLoaded=!1,t.noData=!0,console.log(e)}))},replayGame:function(){this.showFailure=!1,this.attemptCount=0,this.attemptLeft=3,this.countBiggerThanThree=!1,this.pickWord(),this.populateHint(),this.showSuccess=!1,document.getElementById("sub-button").disabled=!1,this.answer=""},submitAnswer:function(){this.randomWord.trim().toLowerCase()==this.answer.trim().toLowerCase()?(this.showFailure=!1,this.showSuccess=!0,document.getElementById("sub-button").disabled=!0,this.winCount+=1,P(this.playerName,this.winCount)):(this.showFailure=!0,this.showSuccess=!1,this.attemptCount+=1,this.attemptLeft-=1),this.answer=""}},created:function(){this.pickWord(),this.populateHint()},watch:{attemptCount:function(){3==this.attemptCount&&(this.countBiggerThanThree=!0,this.showFailure=!1,this.showSuccess=!1,document.getElementById("sub-button").disabled=!0,this.lossCount+=1,N(this.playerName,this.lossCount))}},computed:{playerName:function(){return localStorage.getItem("player")}},mounted:function(){var t=this;$(this.playerName).then((function(e){t.winCount=e.wins,t.lossCount=e.losses}))},components:{NavBar:w}},M=G,q=(a("ac97"),Object(c["a"])(M,I,L,!1,null,"38a992eb",null)),U=q.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("NavBar"),a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"spacer"}),a("b-button",{attrs:{variant:"success",id:"game-button"},on:{click:t.playGame}},[t._v("Choose a Category")])],1)],1)},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"chartDiv"}},[a("canvas",{attrs:{id:"player-statistics"}})])}],Y=a("30ef"),V=a.n(Y),Z={type:"bar",data:{labels:["Wins","Losses"],datasets:[{label:"Statistics",data:[0,0],backgroundColor:["rgba(123, 239, 178, 1)","rgba(54,73,93,.5)"],borderColor:["#36495d","#36495d"],borderWidth:1}]},options:{responsive:!0,lineTension:1,scales:{yAxes:[{ticks:{beginAtZero:!0,padding:25}}]}}},Q=Z,X={data:function(){return{winningStatistics:Q,winCount:null,lossCount:null}},methods:{formChart:function(t){var e=document.getElementById("player-statistics");new V.a(e,{type:t.type,data:t.data,options:t.options})},playGame:function(){this.$router.push({path:"/categories"})}},mounted:function(){var t=this;$(this.playerName).then((function(e){t.winCount=e.wins,t.lossCount=e.losses,t.winningStatistics.data.datasets[0].data[0]=t.winCount,t.winningStatistics.data.datasets[0].data[1]=t.lossCount,t.formChart(t.winningStatistics)}))},components:{NavBar:w},computed:{playerName:function(){return localStorage.getItem("player")}}},tt=X,et=(a("4eca"),Object(c["a"])(tt,K,J,!1,null,"b3db500c",null)),at=et.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-navbar",{attrs:{type:"dark",variant:"dark"}},[a("b-navbar-nav",[a("router-link",{staticClass:"log-text",attrs:{to:"/"}},[a("b-nav-item",[t._v("Log In")])],1)],1)],1),a("div",{staticClass:"col-md-4",attrs:{id:"name-dob"}},[a("label",{attrs:{for:"player-name"}},[t._v("What's your name?")]),a("b-form-input",{attrs:{id:"player-name",placeholder:"Enter your name"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.savePlayer(e)}},model:{value:t.playername,callback:function(e){t.playername=e},expression:"playername"}}),a("label",{attrs:{for:"datepicker-placeholder"}},[t._v("What's your birthday?")]),a("b-form-datepicker",{attrs:{id:"datepicker-placeholder",placeholder:"Choose a date",local:"en"},model:{value:t.birthdate,callback:function(e){t.birthdate=e},expression:"birthdate"}}),a("b-button",{attrs:{variant:"primary",id:"save-player"},on:{click:t.savePlayer}},[t._v("Let's Play")])],1)],1)},st=[],rt={data:function(){return{playername:"",birthdate:""}},methods:{savePlayer:function(){H(this.playername,this.birthdate),localStorage.setItem("player",this.playername),this.$router.push({name:"HomePage"})}}},ot=rt,it=(a("7ce0"),Object(c["a"])(ot,nt,st,!1,null,"6bdfcd5f",null)),ct=it.exports;n["default"].config.productionTip=!1,n["default"].use(u["a"]),n["default"].use(f["a"]);var lt=[{path:"/categories",name:"HomePage",props:!0,component:x},{path:"/categories/:category",name:"Game",props:!0,component:U},{path:"/stats",name:"stats",props:!0,component:at},{path:"/",name:"logIn",props:!0,component:ct},{path:"*",component:ct}],dt=new f["a"]({routes:lt,mode:"history"});new n["default"]({router:dt,render:function(t){return t(d)}}).$mount("#app")},6224:function(t,e,a){},"7ce0":function(t,e,a){"use strict";var n=a("04e9"),s=a.n(n);s.a},"85ec":function(t,e,a){},"9f0b":function(t,e,a){"use strict";var n=a("dfac"),s=a.n(n);s.a},ac97:function(t,e,a){"use strict";var n=a("09c4"),s=a.n(n);s.a},b394:function(t,e,a){},dfac:function(t,e,a){}});
//# sourceMappingURL=app.3fe4e504.js.map