(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{32:function(e,a,t){},47:function(e,a,t){},66:function(e,a,t){e.exports=t(84)},71:function(e,a,t){},75:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},81:function(e,a,t){},84:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),s=t(22),c=t.n(s),m=t(57),l=t(20),r=(t(71),t(8)),o=t(7),d=t(9),p=t(10),E=t(11),v=t(39),h=t.n(v),u=t(49),N=(t(32),t(104)),w=t(18),g=(t(47),function(e){return function(a){return"translate3d(0, ".concat(15*Math.sin(a+2*e*Math.PI/1.6),"px, 0)")}});function b(){var e=Object(w.b)({to:function(){var e=Object(u.a)(h.a.mark((function e(a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,a({radians:2*Math.PI});case 3:e.next=0;break;case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),from:{radians:0},config:{duration:3500},reset:!0}).radians;return i.a.createElement(i.a.Fragment,null,i.a.createElement(w.a.div,{key:0,className:"script-bf-box",style:{transform:e.interpolate(g(0))}}),i.a.createElement(w.a.div,{key:1,className:"script-bf-box1",style:{transform:e.interpolate(g(1))}}),i.a.createElement(w.a.div,{key:2,className:"script-bf-box2",style:{transform:e.interpolate(g(2))}}),i.a.createElement(w.a.div,{key:3,className:"script-bf-box3",style:{transform:e.interpolate(g(3))}}),i.a.createElement(w.a.div,{key:4,className:"script-bf-box4",style:{transform:e.interpolate(g(4))}}),i.a.createElement(w.a.div,{key:5,className:"script-bf-box5",style:{transform:e.interpolate(g(5))}}),i.a.createElement(w.a.div,{key:6,className:"script-bf-box6",style:{transform:e.interpolate(g(6))}}))}var f=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(i)))).state={visible:window.home},t}return Object(E.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement(N.a,{in:this.state.visible,timeout:2e3},i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"wrap"},i.a.createElement("h1",{className:"big"},"Welcome"),i.a.createElement("h1",{className:"big"},"to"),i.a.createElement("h1",{className:"big"},"Nodarby's Portfolio!")),i.a.createElement("div",{className:"piano"},i.a.createElement(b,null))))}}]),a}(i.a.Component),j=t(36),y=function(e,a){return[-(a-window.innerHeight/2)/20,(e-window.innerWidth/2)/20,1.1]},k=function(e,a,t){return"perspective(600px) rotateX(".concat(e,"deg) rotateY(").concat(a,"deg) scale(").concat(t,")")};function O(){var e=Object(w.b)((function(){return{xys:[0,0,1],config:{mass:5,tension:350,friction:40}}})),a=Object(j.a)(e,2),t=a[0],n=a[1];return i.a.createElement(w.a.div,{className:"card",onMouseMove:function(e){var a=e.clientX,t=e.clientY;return n({xys:y(a,t)})},onMouseLeave:function(){return n({xys:[0,0,1]})},style:{transform:t.xys.interpolate(k)}})}var x=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(i)))).state={visible:window.profile,width:500},t}return Object(E.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({width:window.innerWidth}),window.addEventListener("resize",(function(){e.setState({width:window.innerWidth})}))}},{key:"render",value:function(){return this.state.width>=400?i.a.createElement(N.a,{in:this.state.visible,timeout:2e3},i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"wrap"},i.a.createElement("h2",{className:"main"},"Personal Information"),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"eng"},"Name"),"\uff1a",i.a.createElement("div",{className:"jap-in"},"\u91ce\u7530 \u670b\u5b8f")),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"eng"},"Birthday"),"\uff1a",i.a.createElement("div",{className:"jap-in"},"1998/10/5")),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"eng"},"University"),"\uff1a",i.a.createElement("div",{className:"jap-in"},"\u540d\u53e4\u5c4b\u5927\u5b66 \u60c5\u5831\u5b66\u90e8")),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"eng"},"Certificate"),"\uff1a",i.a.createElement("div",{className:"jap-in"},"\u5fdc\u7528\u60c5\u5831\u6280\u8853\u8005, \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30b9\u30da\u30b7\u30e3\u30ea\u30b9\u30c8"))),i.a.createElement("div",{className:"wrap"},i.a.createElement("h2",{className:"main"},"Commonly used Icon"),i.a.createElement(O,null)),i.a.createElement("div",{className:"wrap"},i.a.createElement("h2",{className:"main"},"Career"),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"jap"},"2017\u5e743\u6708 \u3000\u3000\u3000\u3000\u3000\u611b\u77e5\u770c\u7acb\u660e\u548c\u9ad8\u7b49\u5b66\u6821\u5352\u696d")),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"jap"},"2017\u5e744\u6708 \u3000\u3000\u3000\u3000\u3000\u540d\u53e4\u5c4b\u5927\u5b66\u3000\u60c5\u5831\u5b66\u90e8\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u79d1\u5b66\u79d1\u5165\u5b66")),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"jap"},"2018\u5e7410\u6708\u3000\u3000\u3000\u3000\u3000\u5fdc\u7528\u60c5\u5831\u6280\u8853\u8005\uff08\u56fd\u5bb6\u8cc7\u683c\uff09\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u53d6\u5f97")),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"jap"},"2018\u5e7411\u6708\u3000\u3000\u3000\u3000\u3000OthloHack2018 \u6700\u512a\u79c0\u8cde\u30fb\u30b5\u30a4\u30d0\u30fc\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u8cde\u30fbMisoca\u8cde")),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"jap"},"2019\u5e744\u6708 \u3000\u3000\u3000\u3000\u3000\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30b9\u30da\u30b7\u30e3\u30ea\u30b9\u30c8\uff08\u56fd\u5bb6\u8cc7\u683c\uff09\u3000\u53d6\u5f97")),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"jap"},"2019\u5e746\u6708\u301c\u73fe\u5728\u3000 \u3000\u30b9\u30da\u30fc\u30b924\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3\u30ba IT\u30a4\u30f3\u30bf\u30fc\u30f3")),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"jap"},"2019\u5e749\u6708 \u3000\u3000\u3000\u3000\u3000teamLab \u5c31\u696d\u578b\u30b5\u30de\u30fc\u30a4\u30f3\u30bf\u30fc\u30f3(\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9)"))),i.a.createElement("div",{className:"wrap"},i.a.createElement("h2",{className:"main"},"Hobby"),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"jap"},"\u30fb\u30c7\u30a3\u30ba\u30cb\u30fc\u30ea\u30be\u30fc\u30c8\u306b\u884c\u304f\uff08\u540d\u53e4\u5c4b\u304b\u3089\u884c\u304f\u3068\u4ea4\u901a\u8cbb\u304c\u304b\u3055\u3080\uff09")),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"jap"},"\u30fb\u30dc\u30fc\u30c9\u30b2\u30fc\u30e0\uff08\u6226\u7565\u6027\u3068\u304b\u5fc3\u7406\u7684\u99c6\u3051\u5f15\u304d\u304c\u3042\u308b\u3068\u306a\u304a\u826f\u3057\uff09"))))):i.a.createElement(N.a,{in:this.state.visible,timeout:2e3},i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"wrap"},i.a.createElement("h2",{className:"main"},"Personal Information"),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"wrap-s"},i.a.createElement("div",{className:"eng_line"},"Name")),i.a.createElement("div",{className:"jap-m"},"\u91ce\u7530 \u670b\u5b8f")),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"wrap-s"},i.a.createElement("div",{className:"eng_line"},"Birthday")),i.a.createElement("div",{className:"jap-m"},"1998/10/5")),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"wrap-s"},i.a.createElement("div",{className:"eng_line"},"University")),i.a.createElement("div",{className:"jap-m"},"\u540d\u53e4\u5c4b\u5927\u5b66 \u60c5\u5831\u5b66\u90e8")),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"wrap-s"},i.a.createElement("div",{className:"eng_line"},"Certificate")),i.a.createElement("div",{className:"jap-m"},"\u5fdc\u7528\u60c5\u5831\u6280\u8853\u8005, \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30b9\u30da\u30b7\u30e3\u30ea\u30b9\u30c8"))),i.a.createElement("div",{className:"wrap"},i.a.createElement("h2",{className:"main"},"Commonly used Icon"),i.a.createElement(O,null)),i.a.createElement("div",{className:"wrap"},i.a.createElement("h2",{className:"main"},"Career"),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"wrap-ss"},i.a.createElement("div",{className:"jap"},"2017\u5e743\u6708")),i.a.createElement("div",{className:"wrap-s"},i.a.createElement("div",{className:"jap"},"\u611b\u77e5\u770c\u7acb\u660e\u548c\u9ad8\u7b49\u5b66\u6821\u5352\u696d"))),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"wrap-ss"},i.a.createElement("div",{className:"jap"},"2017\u5e744\u6708")),i.a.createElement("div",{className:"wrap-s"},i.a.createElement("div",{className:"jap"},"\u540d\u53e4\u5c4b\u5927\u5b66\u3000\u60c5\u5831\u5b66\u90e8\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u79d1\u5b66\u79d1\u5165\u5b66"))),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"jap"},"2018\u5e7410\u6708"),i.a.createElement("div",{className:"wrap-s"},i.a.createElement("div",{className:"jap"},"\u5fdc\u7528\u60c5\u5831\u6280\u8853\u8005\uff08\u56fd\u5bb6\u8cc7\u683c)\u53d6\u5f97"))),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"wrap-ss"},i.a.createElement("div",{className:"jap"},"2018\u5e7411\u6708")),i.a.createElement("div",{className:"wrap-s"},i.a.createElement("div",{className:"jap"},"OthloHack2018 \u6700\u512a\u79c0\u8cde\u30fb\u30b5\u30a4\u30d0\u30fc\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u8cde\u30fbMisoca\u8cde"))),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"wrap-ss"},i.a.createElement("div",{className:"jap"},"2019\u5e744\u6708")),i.a.createElement("div",{className:"wrap-s"},i.a.createElement("div",{className:"jap"},"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30b9\u30da\u30b7\u30e3\u30ea\u30b9\u30c8\uff08\u56fd\u5bb6\u8cc7\u683c\uff09\u3000\u53d6\u5f97"))),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"wrap-ss"},i.a.createElement("div",{className:"jap"},"2019\u5e746\u6708\u301c\u73fe\u5728")),i.a.createElement("div",{className:"wrap-s"},i.a.createElement("div",{className:"jap"},"\u30b9\u30da\u30fc\u30b924\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3\u30ba IT\u30a4\u30f3\u30bf\u30fc\u30f3"))),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"wrap-ss"},i.a.createElement("div",{className:"jap"},"2019\u5e749\u6708")),i.a.createElement("div",{className:"wrap-s"},i.a.createElement("div",{className:"jap"},"teamLab \u5c31\u696d\u578b\u30b5\u30de\u30fc\u30a4\u30f3\u30bf\u30fc\u30f3(\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9)")))),i.a.createElement("div",{className:"wrap"},i.a.createElement("h2",{className:"main"},"Hobby"),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"jap"},"\u30fb\u30c7\u30a3\u30ba\u30cb\u30fc\u30ea\u30be\u30fc\u30c8\u306b\u884c\u304f"),i.a.createElement("div",{className:"jap"},"\uff08\u540d\u53e4\u5c4b\u304b\u3089\u884c\u304f\u3068\u4ea4\u901a\u8cbb\u304c\u304b\u3055\u3080\uff09")),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"jap"},"\u30fb\u30dc\u30fc\u30c9\u30b2\u30fc\u30e0"),i.a.createElement("div",{className:"jap"},"\uff08\u6226\u7565\u6027\u3068\u304b\u5fc3\u7406\u7684\u99c6\u3051\u5f15\u304d\u304c\u3042\u308b\u3068\u306a\u304a\u826f\u3057\uff09")))))}}]),a}(i.a.Component),C=(t(75),t(105)),L=t(115),R=t(106),W=Object(C.a)({card:{maxWidth:350,minWidth:100},media:{height:150},cont:{height:60,textAlign:"left"}});function A(e){var a=W();return i.a.createElement(L.a,{className:a.card},i.a.createElement(L.a,null,i.a.createElement(R.a,{className:a.media,image:e.image,title:"Contemplative Reptile"})))}var T="Rails(Ruby)",P="\u30b5\u30fc\u30d0\u30b5\u30a4\u30c9\u3068\u3057\u3066\u3001teamLab\u30b5\u30de\u30fc\u30a4\u30f3\u30bf\u30fc\u30f32019\u3067\u4f7f\u7528\u3002",S="/static/images/rails_logo.png",U="/static/images/rails_maru.png",B="React Native",M="\u30b9\u30da\u30fc\u30b9\uff12\uff14\u30b3\u30df\u30cb\u30e5\u30b1\u30fc\u30b7\u30e7\u30f3\u30ba\u306eIT\u30a4\u30f3\u30bf\u30fc\u30f3\u751f\u3068\u3057\u3066\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u4e2d\u3002",I="/static/images/react-native.png",_="Python",z="\u5b66\u90e81\u5e74\u6b21\u306b\u7fd2\u5f97\u3002\u8b1b\u7fa9\u5185\u3067\u6570\u5024\u89e3\u6790\u3084\u6a5f\u68b0\u5b66\u7fd2\u7b49\u306b\u5229\u7528\u3002",F="/static/images/Python.png",H="/static/images/ac.png",D="React",J="React Native\u3067\u306e\u7d4c\u9a13\u3092\u5143\u306b\u5229\u7528\u3092\u958b\u59cb\u3002\u3053\u306e\u30dd\u30fc\u30c8\u30d5\u30a9\u30ea\u30aa\u30b5\u30a4\u30c8\u3082React\u3092\u7528\u3044\u305f\u3002",K="/static/images/react-dev-tools-logo.jpg",X="/static/images/react.png",Y="Node.js",$="",q="/static/images/nodejs-1.png",G="/static/images/nodemaru.png",Q="Firebase",V="Authorization, CloudFunctions, Firestore\u3092\u4e2d\u5fc3\u306b\u5229\u7528\u7d4c\u9a13\u3042\u308a\u3002",Z="/static/images/firebase.png",ee="/static/images/f1.png",ae=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(i)))).state={visible:window.skill,width:500},t}return Object(E.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({width:window.innerWidth}),window.addEventListener("resize",(function(){e.setState({width:window.innerWidth})}))}},{key:"render",value:function(){return this.state.width>=900?i.a.createElement(N.a,{in:this.state.visible,timeout:2e3},i.a.createElement("div",{className:"App"},i.a.createElement("h2",{className:"main"},"Skill"),i.a.createElement("div",{className:"set"},i.a.createElement("div",{className:"item-skill"},i.a.createElement(A,{name:T,states:P,image:S})),i.a.createElement("div",{className:"item-skill"},i.a.createElement(A,{name:B,states:M,image:I})),i.a.createElement("div",{className:"item-skill"},i.a.createElement(A,{name:_,states:z,image:F}))),i.a.createElement("div",{className:"set"},i.a.createElement("div",{className:"item-skill"},i.a.createElement(A,{name:D,states:J,image:K})),i.a.createElement("div",{className:"item-skill"},i.a.createElement(A,{name:Y,states:$,image:q})),i.a.createElement("div",{className:"item-skill"},i.a.createElement(A,{name:Q,states:V,image:Z}))))):this.state.width>=550&&this.state.width<900?i.a.createElement(N.a,{in:this.state.visible,timeout:2e3},i.a.createElement("div",{className:"App"},i.a.createElement("h2",{className:"main"},"Skill"),i.a.createElement("div",{className:"set2"},i.a.createElement("div",{className:"item2-skill"},i.a.createElement(A,{name:T,states:P,image:S})),i.a.createElement("div",{className:"item2-skill"},i.a.createElement(A,{name:B,states:M,image:I}))),i.a.createElement("div",{className:"set2"},i.a.createElement("div",{className:"item2-skill"},i.a.createElement(A,{name:_,states:z,image:F})),i.a.createElement("div",{className:"item2-skill"},i.a.createElement(A,{name:D,states:J,image:K}))),i.a.createElement("div",{className:"set2"},i.a.createElement("div",{className:"item2-skill"},i.a.createElement(A,{name:Y,states:$,image:q})),i.a.createElement("div",{className:"item2-skill"},i.a.createElement(A,{name:Q,states:V,image:Z}))))):i.a.createElement(N.a,{in:this.state.visible,timeout:2e3},i.a.createElement("div",{className:"App"},i.a.createElement("h2",{className:"main"},"Skill"),i.a.createElement("div",{className:"item3"},i.a.createElement(A,{name:T,states:P,image:U})),i.a.createElement("div",{className:"item3"},i.a.createElement(A,{name:B,states:M,image:I})),i.a.createElement("div",{className:"item3"},i.a.createElement(A,{name:_,states:z,image:H})),i.a.createElement("div",{className:"item3"},i.a.createElement(A,{name:D,states:J,image:X})),i.a.createElement("div",{className:"item3"},i.a.createElement(A,{name:Y,states:$,image:G})),i.a.createElement("div",{className:"item3"},i.a.createElement(A,{name:Q,states:V,image:ee}))))}}]),a}(i.a.Component),te=(t(77),t(17)),ne=t(107),ie=t(110),se=t(109),ce=t(3),me=t(108),le=t(54),re=t.n(le),oe=(t(78),Object(C.a)((function(e){return{card:{maxWidth:800,minWidth:100},media:{height:300},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}})));function de(e){var a=oe(),t=i.a.useState(!1),n=Object(j.a)(t,2),s=n[0],c=n[1];return i.a.createElement(L.a,{className:a.card},i.a.createElement(ne.a,null,i.a.createElement(R.a,{className:a.media,image:e.image,title:"Contemplative Reptile"})),i.a.createElement(ne.a,null,i.a.createElement("div",{className:"jap-big"},e.name),i.a.createElement("div",{className:"button"},i.a.createElement(me.a,{size:"medium",color:"primary",className:Object(ce.a)(a.expand,Object(te.a)({},a.expandOpen,s)),onClick:function(){c(!s)},"aria-expanded":s,"aria-label":"show more"},i.a.createElement(re.a,null)))),i.a.createElement(se.a,{in:s,timeout:"auto",unmountOnExit:!0},i.a.createElement(ne.a,null,i.a.createElement("div",{className:"jap_line"},i.a.createElement(ie.a,{variant:"h5",style:{paddingBottom:10}},"\u30d7\u30ed\u30c0\u30af\u30c8\u6982\u8981")),i.a.createElement(ie.a,{paragraph:!0,style:{paddingBottom:20}},i.a.createElement("div",{className:"jap-center"},e.main)),i.a.createElement("div",{className:"jap_line"},i.a.createElement(ie.a,{variant:"h5",style:{paddingBottom:10}},"\u4f7f\u7528\u6280\u8853")),i.a.createElement(ie.a,{paragraph:!0,style:{paddingBottom:20}},i.a.createElement("div",{className:"jap-center"},e.tec)),i.a.createElement("div",{className:"jap_line"},i.a.createElement(ie.a,{variant:"h5",style:{paddingBottom:10}},"github")),i.a.createElement(ie.a,{paragraph:!0,style:{paddingBottom:20}},i.a.createElement("a",{className:"jap-center",href:e.github,style:{paddingBottom:20}},e.githubText)),i.a.createElement("div",{className:"jap_line"},i.a.createElement(ie.a,{variant:"h5",style:{paddingBottom:10}},"\u30ea\u30f3\u30af")),i.a.createElement("a",{className:"jap-center",href:e.URL,style:{paddingBottom:20}},e.URLtext))))}var pe="\u4e00\u591c\u4eba\u72fc",Ee="/static/images/oojinro2.png",ve="/static/images/oojinro.png",he="\u4e00\u591c\u9650\u308a\u306e\u4eba\u72fc\u30b2\u30fc\u30e0\u30a2\u30d7\u30ea\u3002\u8907\u6570\u4eba\u3067\u90e8\u5c4b\u756a\u53f7\u3092\u6307\u5b9a\u3057\u30b2\u30fc\u30e0\u3092\u59cb\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002",ue="Node.js\u3092\u7528\u3044\u3066\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3092\u62c5\u5f53\u3002WebSocket\u3092\u7528\u3044\u305f\u5b9f\u88c5\u3067\u3001\u901a\u4fe1\u304c\u5b89\u5b9a\u3057\u3066\u3044\u308b",Ne="https://github.com/nodarby/oojinro",we="https://github.com/nodarby/oojinro",ge="http://oojinro.online/",be="oojinro.online",fe="\u6587\u54b2\u307f",je="/static/images/humiemi2.png",ye="/static/images/humiemi.png",ke="\u624b\u7d19\u306e\u5199\u771f\u3092\u64ae\u308b\u3068\u6587\u7ae0\u3092\u753b\u50cf\u89e3\u6790\u3057\u3001\u6587\u8108\u306b\u9069\u3057\u305f\u82b1\u3092\u30aa\u30b9\u30b9\u30e1\u3057\u3066\u304f\u308c\u308b\u30d7\u30ed\u30c0\u30af\u30c8\u3002\u6587\u8108\u306e\u89e3\u6790\u3001\u82b1\u306e\u9078\u629e\u306b\u306f\u6a5f\u68b0\u5b66\u7fd2\u3092\u7528\u3044\u3066\u3044\u308b\u3002OthloHack2018\u3067\u6700\u512a\u79c0\u8cde\u3092\u3044\u305f\u3060\u3044\u305f\u3002",Oe="flask\u3092\u7528\u3044\u3066\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3092\u62c5\u5f53\u3002",xe="https://github.com/nodarby/othlohack2018-2",Ce="https://github.com/nodarby/othlohack2018-2",Le="https://nagoyastartupnews.jp/hackathon-othlohack2018/",Re="OthloHack2018\u7d39\u4ecb\u30da\u30fc\u30b8",We="\u30dd\u30fc\u30c8\u30d5\u30a9\u30ea\u30aa\u30b5\u30a4\u30c8",Ae="/static/images/portfolio.png",Te="/static/images/portfolio.png",Pe="\u91ce\u7530\u670b\u5b8f\u306e\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u307e\u3068\u3081\u305f\u30b5\u30a4\u30c8\u3002\u521d\u306e\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0\u306f\u5927\u5909\u3060\u3063\u305f\u304c\u975e\u5e38\u306b\u826f\u3044\u7d4c\u9a13\u3068\u306a\u3063\u305f\u3002",Se="React\u3092\u7528\u30443\u65e5\u307b\u3069\u3067\u4f5c\u6210\u3002",Ue="https://github.com/nodarby/portfolio",Be="https://github.com/nodarby/portfolio",Me="https://noda-portfolio.herokuapp.com/",Ie="noda-portfolio.herokuapp.com",_e=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(i)))).state={width:500,visible:window.works},t}return Object(E.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({width:window.innerWidth}),window.addEventListener("resize",(function(){e.setState({width:window.innerWidth})}))}},{key:"render",value:function(){return this.state.width>=850?i.a.createElement(N.a,{in:this.state.visible,timeout:2e3},i.a.createElement("div",{className:"App"},i.a.createElement("h2",{className:"main"},"Works"),i.a.createElement("div",{className:"item"},i.a.createElement(de,{name:pe,image:Ee,main:he,tec:ue,github:Ne,githubText:we,URL:ge,URLtext:be})),i.a.createElement("div",{className:"item"},i.a.createElement(de,{name:fe,image:je,main:ke,tec:Oe,github:xe,githubText:Ce,URL:Le,URLtext:Re})),i.a.createElement("div",{className:"item"},i.a.createElement(de,{name:We,image:Ae,main:Pe,tec:Se,github:Ue,githubText:Be,URL:Me,URLtext:Ie})))):i.a.createElement(N.a,{in:this.state.visible,timeout:2e3},i.a.createElement("div",{className:"App"},i.a.createElement("h2",{className:"main"},"Works"),i.a.createElement("div",{className:"item2"},i.a.createElement(de,{name:pe,image:ve,main:he,tec:ue,github:Ne,githubText:we,URL:ge,URLtext:be})),i.a.createElement("div",{className:"item2"},i.a.createElement(de,{name:fe,image:ye,main:ke,tec:Oe,github:xe,githubText:Ce,URL:Le,URLtext:Re})),i.a.createElement("div",{className:"item2"},i.a.createElement(de,{name:We,image:Te,main:Pe,tec:Se,github:Ue,githubText:Be,URL:Me,URLtext:Ie}))))}}]),a}(i.a.Component),ze=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(i)))).state={visible:window.contact},t}return Object(E.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(N.a,{in:this.state.visible,timeout:2e3},i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"wrap"},i.a.createElement("h2",{className:"main"},"Contact"),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"jap-in"}," \u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"),"\uff1a",i.a.createElement("div",{className:"eng"}," noda.tomohiro@h.mbox.nagoya-u.ac.jp")),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"jap-in"}," github"),"\u3000\u3000\u3000\u3000\uff1a",i.a.createElement("a",{className:"eng_line",href:"https://github.com/nodarby"},"https://github.com/nodarby"))))))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Fe=t(112),He=t(114),De=t(113),Je=t(58),Ke=t(111),Xe=(t(81),Object(Je.a)({typography:{fontSize:18,fontFamily:["Arvo","sans-serif"].join(",")}})),Ye=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(i)))).state={width:window.innerWidth},t.handleToHomePage=function(){window.home=!0,window.profile=!1,window.skill=!1,window.works=!1,window.contact=!1,t.props.history.push("/")},t.handleToProfilePage=function(){window.home=!1,window.profile=!0,window.skill=!1,window.works=!1,window.contact=!1,t.props.history.push("/profile")},t.handleToSkillPage=function(){window.home=!1,window.profile=!1,window.skill=!0,window.works=!1,window.contact=!1,t.props.history.push("/skill")},t.handleToWorksPage=function(){window.home=!1,window.profile=!1,window.skill=!1,window.works=!0,window.contact=!1,t.props.history.push("/works")},t.handleToContactPage=function(){window.home=!1,window.profile=!1,window.skill=!1,window.works=!1,window.contact=!0,t.props.history.push("/contact")},t}return Object(E.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){e.setState({width:window.innerWidth})}))}},{key:"render",value:function(){return Xe=this.state.width>=600?Object(Je.a)({typography:{fontSize:18,fontFamily:["Arvo","sans-serif"].join(",")}}):this.state.width>=400&&this.state.width<600?Object(Je.a)({typography:{fontSize:13,fontFamily:["Arvo","sans-serif"].join(",")}}):Object(Je.a)({typography:{fontSize:10,fontFamily:["Arvo","sans-serif"].join(",")}}),i.a.createElement(Ke.a,{theme:Xe},i.a.createElement("div",{className:"tab"},i.a.createElement(Fe.a,{item:!0},i.a.createElement(De.a,{fullWidth:!0,"aria-label":"full width outlined button group",className:"bar"},i.a.createElement(He.a,{onClick:this.handleToHomePage,className:"button"},"HOME"),i.a.createElement(He.a,{onClick:this.handleToProfilePage},"PROFILE"),i.a.createElement(He.a,{onClick:this.handleToSkillPage},"SKILL"),i.a.createElement(He.a,{onClick:this.handleToWorksPage},"WORKS"),i.a.createElement(He.a,{onClick:this.handleToContactPage},"CONTACT")))))}}]),a}(i.a.Component),$e=Object(l.e)(Ye);window.home=!0,window.profile=!0,window.skill=!0,window.works=!0,window.contact=!0,c.a.render(i.a.createElement(m.a,null,i.a.createElement($e,null),i.a.createElement(l.a,{exact:!0,path:"/",component:f}),i.a.createElement(l.a,{path:"/profile",component:x}),i.a.createElement(l.a,{path:"/skill",component:ae}),i.a.createElement(l.a,{path:"/works",component:_e}),i.a.createElement(l.a,{path:"/contact",component:ze})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[66,1,2]]]);
//# sourceMappingURL=main.7eefd4c9.chunk.js.map