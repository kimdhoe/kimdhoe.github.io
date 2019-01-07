(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{180:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"query",function(){return h});n(85),n(86);var a=n(7),r=n.n(a),l=n(0),c=n.n(l),i=n(51),o=n(199),s=n.n(o),u=n(200),m=n(187),d=function(t){function n(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))||this).canvas=c.a.createRef(),e}r()(n,t);var a=n.prototype;return a.componentDidMount=function(){var e=this.canvas.current.getContext("2d");e.fillStyle="white",e.fillRect(0,0,524,393);var t=p({width:524,height:393,rows:5,cols:10});t.forEach(function(n){var a=n.x,r=n.y;t.forEach(function(t){t.x===a&&t.y===r||(e.beginPath(),e.moveTo(a,r),e.lineTo(t.x,t.y),e.lineWidth=s.a.range(.1,.2),e.strokeStyle="#666",e.stroke())})})},a.render=function(){return e.createElement(m.a,null,e.createElement("div",null,e.createElement("h2",{style:{textAlign:"center"}},"[Sol Lewitt] Wall Drawing #118 (1971)"),e.createElement("div",{className:f.art},e.createElement("canvas",{ref:this.canvas,width:524,height:393})),e.createElement("div",{className:f.labelWrapper},e.createElement("div",{className:f.label},e.createElement("p",{className:f.artist},"SOL LEWITT"),e.createElement("p",{className:f.artwork},e.createElement("span",{className:f.italic},"Wall drawing"),", dhk.party"),e.createElement("p",{className:f.medium},"Digital (HTML5 Canvas)"))),e.createElement("p",{className:f.paragraph},"이 작품에 대한 솔 르윗의 지시사항은 다음과 같다."),e.createElement("p",{className:f.instruction},e.createElement("blockquote",{className:f.instructionContent},"On a wall surface, any",e.createElement("br",null),"continuous stretch of wall,",e.createElement("br",null),"using a hard pencil, place",e.createElement("br",null),"fifty points at random.",e.createElement("br",null),"The points should be evenly",e.createElement("br",null),"distributed over the area",e.createElement("br",null),"of the wall. All of the",e.createElement("br",null),"points should be connected",e.createElement("br",null),"by straight lines.",e.createElement("br",null),e.createElement("br",null),"연속적으로 이어져있는 벽면 위에 단단한 연필을 이용해서 쉰 개의 점을 무작위로 배치하라.",e.createElement("br",null),"점들은 벽면 공간에 걸쳐 고르게 분포되어야 한다.",e.createElement("br",null),"모든 점들은 직선으로 이어져야 한다.",e.createElement("br",null))),e.createElement("p",null,e.createElement("ul",null,e.createElement("li",null,"선들의 두께가 다 일정하지 않도록 미세하게 차이를 두었다."),e.createElement("li",null,"점들이 고르게 분포되어 보이도록 10 x 5 그리드를 만들고 각 셀 안에서 점의 위치를 무작위로 배정했다.")))))},n}(c.a.Component),f={art:Object(i.css)({margin:"40px 0",textAlign:"center"}),labelWrapper:Object(i.css)({display:"flex",justifyContent:"center"}),label:Object(i.css)({marginBottom:"30px"}),artist:Object(i.css)({margin:0,padding:0,fontWeight:"bold",textDecoration:"underline"}),artwork:Object(i.css)({margin:0,padding:0}),medium:Object(i.css)({margin:0,padding:0}),italic:Object(i.css)({fontStyle:"italic"}),paragraph:Object(i.css)({}),instruction:Object(i.css)({}),instructionContent:Object(i.css)({paddingLeft:"20px",borderLeft:"solid 7px #f1f3f5",fontFamily:"monospace",fontSize:"1.1em"}),code:Object(i.css)({})},p=function(e){for(var t=e.width,n=e.height,a=e.rows,r=void 0===a?5:a,l=e.cols,c=void 0===l?10:l,i=[],o=(t-0)/c,m=(n-0)/r,d=0;d<r;d++)for(var f=0;f<c;f++){var p=Object(u.lerp)(0+o*f,0+o*(f+1),s.a.range(.2,.8)),h=Object(u.lerp)(0+m*d,0+m*(d+1),s.a.range(.2,.8));i.push({x:p,y:h})}return i};t.default=d;var h="622906627"}.call(this,n(84))},185:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),l=n(4),c=n.n(l),i=n(184),o=n.n(i);n.d(t,"Link",function(){return o.a}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"navigate",function(){return i.navigate}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var s=n(186),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var m=n(37);n.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),f=function(t){return e.createElement(d.Consumer,null,function(n){return t.data||n[t.query]&&n[t.query].data?(t.render||t.children)(t.data?t.data.data:n[t.query].data):e.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}}.call(this,n(84))},186:function(e,t,n){var a;e.exports=(a=n(189))&&a.default||a},187:function(e,t,n){"use strict";(function(e){var a=n(188),r=(n(0),n(185)),l=n(51),c=n(190),i=n(191);n(194),n(192);t.a=function(t){var n=t.children;return e.createElement(r.StaticQuery,{query:"3892401927",render:function(t){return e.createElement("div",{className:o},e.createElement(c.a,{title:t.site.siteMetadata.title}),e.createElement("main",{className:s},n),e.createElement(i.a,null))},data:a})};var o=Object(l.css)({display:"flex",minHeight:"100vh",flexDirection:"column",margin:"0 auto"}),s=Object(l.css)({flex:1,margin:"0 auto",padding:"0 1em",maxWidth:"760px"})}).call(this,n(84))},188:function(e){e.exports={data:{site:{siteMetadata:{title:"dhk.party"}}}}},189:function(e,t,n){"use strict";n.r(t);n(52);var a=n(0),r=n.n(a),l=n(4),c=n.n(l),i=n(55),o=n(2),s=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},190:function(e,t,n){"use strict";(function(e){n(0);var a=n(185),r=n(51);t.a=function(t){var n=t.title,r=t.children;return e.createElement("header",{className:l},e.createElement("h1",{className:c},e.createElement(a.Link,{className:i,to:"/"},n)),r)};var l=Object(r.css)({position:"relative",zIndex:9,margin:"1em auto",padding:"0 1em",width:"100%",maxWidth:"960px"}),c=Object(r.css)({fontFamily:"Georgia",fontWeight:400,fontStyle:"italic",fontSize:"27px"}),i=Object(r.css)({display:"block",margin:"0.8em 0 1.424em 0",color:"black",textDecoration:"none"})}).call(this,n(84))},191:function(e,t,n){"use strict";(function(e){n(0),n(185);var a=n(51);t.a=function(){return e.createElement("footer",{className:r},e.createElement("p",null,e.createElement("small",null,e.createElement("a",{className:l,href:"mailto:kimdhoe1@gmail.com"},"kimdhoe1@gmail.com"))))};var r=Object(a.css)({marginTop:"4em",textAlign:"center"}),l=Object(a.css)({letterSpacing:"0.7px",fontFamily:"Georgia",fontStyle:"italic",textDecoration:"none",color:"#777"})}).call(this,n(84))},192:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-art-sol-118-js-0f071ee2ca062bd10eea.js.map