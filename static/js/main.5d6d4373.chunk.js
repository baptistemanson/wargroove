(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(35)},20:function(e,t,a){},22:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),l=a.n(i),o=(a(20),a(2)),c=a(3),s=a(5),d=a(4),m=a(6),f=(a(22),a(10)),u=a(11),h=a.n(u),g=(a(24),a(1)),p=a.n(g),E=a(13),v=a.n(E),C=(a(33),"M23,42.3458062 L23,43 C22.8324032,42.8918531 22.6657366,42.783572 22.5,42.6751566 C22.3342634,42.783572 22.1675968,42.8918531 22,43 L22,42.3458062 C11.9786237,35.6985173 5.43629569,28.5489806 2.37301587,20.8971963 C-0.791005291,12.9937695 -0.791005291,6.02803738 2.37301587,0 L23,0 L42.6269841,0 C45.7910053,6.02803738 45.7910053,12.9937695 42.6269841,20.8971963 C39.5637043,28.5489806 33.0213763,35.6985173 23,42.3458062 Z"),S=["Soldier","Spearman","Dog"],y={Soldier:100,Spearman:150,Dog:200},k={Soldier:{Soldier:55,Spearman:35,Dog:45},Spearman:{Soldier:75,Spearman:55,Dog:80},Dog:{Soldier:75,Spearman:45,Dog:65}},b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={attacker:S[0],attackerDefense:1,attackerLife:10,isCrit:!1,defender:S[0],defenderDefense:1,defenderLife:10},a._onSelect=function(e){return function(t){a.setState(Object(f.a)({},e,t.value))}},a._onStarChange=function(e){return function(t){a.setState(Object(f.a)({},e,t))}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.attacker,n=t.attackerDefense,i=t.attackerLife,l=t.isCrit,o=t.defender,c=t.defenderDefense,s=t.defenderLife,d=i/10*k[a][o]/100*(1-.1*(c-1)*s/10);l&&(d*=1.5);var m=y[o]*Math.min(s/10,d),f=10*s-k[a][o]<=0?0:y[a]*(10*s-k[a][o])/100*(1-.1*(n-1)*i/10)*k[o][a]/100,u=Math.min(f,100,y[a]*i/10);return r.a.createElement("form",{style:{width:"100%"}},r.a.createElement("div",{style:{maring:22}},"Attacker ",r.a.createElement("div",{style:{flexDirection:"row",display:"flex",alignItems:"center",justifyContent:"space-evenly"}},r.a.createElement(h.a,{className:"dropdown",options:S,onChange:this._onSelect("attacker"),value:a,placeholder:"Select an attacker"}),r.a.createElement(p.a,{name:"attackerDefense",numberOfStars:5,rating:n,starDimension:"20px",starRatedColor:"white",starEmptyColor:"black",svgIconPath:C,changeRating:this._onStarChange("attackerDefense")})),r.a.createElement("div",{style:{margin:20}},r.a.createElement("div",null,"Life"),r.a.createElement(p.a,{name:"attackerLife",numberOfStars:10,starDimension:"20px",starRatedColor:"white",starEmptyColor:"black",rating:i,changeRating:this._onStarChange("attackerLife")}))),r.a.createElement("div",null,"Defender ",r.a.createElement("div",{style:{flexDirection:"row",display:"flex",alignItems:"center",justifyContent:"space-evenly"}},r.a.createElement(h.a,{options:S,className:"dropdown",onChange:this._onSelect("defender"),value:o,placeholder:"Select an defender"}),r.a.createElement(p.a,{name:"defenderDefense",numberOfStars:5,starDimension:"20px",rating:c,starRatedColor:"white",starEmptyColor:"black",svgIconPath:C,changeRating:this._onStarChange("defenderDefense")})),r.a.createElement("div",{style:{margin:20}},r.a.createElement("div",null,"Life"),r.a.createElement(p.a,{name:"defenderLife",numberOfStars:10,starDimension:"20px",starRatedColor:"white",starEmptyColor:"black",rating:s,changeRating:this._onStarChange("defenderLife")}))),r.a.createElement("div",{style:{margin:20}},"Is critical?",r.a.createElement("div",{style:{padding:10}},r.a.createElement(v.a,{label:"Critical",checked:l,onChange:function(t){e.setState({isCrit:!e.state.isCrit})}}))),r.a.createElement("div",null,r.a.createElement("div",null,"Attack Value: ",r.a.createElement("b",null,m.toFixed(0))),r.a.createElement("div",null,"Counter attack Cost: ",r.a.createElement("b",null,u.toFixed(0))),r.a.createElement("div",{style:{fontSize:22}},"Balance Attack: ",r.a.createElement("b",null,(m-u).toFixed(0)))))}}]),t}(r.a.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{style:{width:"70%",maxWidth:300},alt:"logo",src:"logo.png"}),r.a.createElement("h1",null,"Damage calculator"),r.a.createElement(b,null),r.a.createElement("div",{style:{marginTop:25,fontSize:8}},"Copyright Baptiste Manson")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.5d6d4373.chunk.js.map