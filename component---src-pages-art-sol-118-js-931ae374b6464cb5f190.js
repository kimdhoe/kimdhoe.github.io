(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{183:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"query",function(){return h});n(86),n(85);var r=n(7),a=n.n(r),i=n(0),c=n.n(i),l=n(51),o=n(204),u=n.n(o),s=n(203),m=n(192),f=function(t){function n(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).canvas=c.a.createRef(),e}a()(n,t);var r=n.prototype;return r.componentDidMount=function(){var e=this.canvas.current.getContext("2d");e.fillStyle="white",e.fillRect(0,0,524,393);var t=d({width:524,height:393,rows:5,cols:10});t.forEach(function(n){var r=n.x,a=n.y;t.forEach(function(t){t.x===r&&t.y===a||(e.beginPath(),e.moveTo(r,a),e.lineTo(t.x,t.y),e.lineWidth=u.a.range(.1,.2),e.strokeStyle="#666",e.stroke())})})},r.render=function(){return e.createElement(m.a,null,e.createElement("div",null,e.createElement("h2",{style:{textAlign:"center"}},"[Sol LeWitt] Wall Drawing #118 (1971)"),e.createElement("div",{className:p.art},e.createElement("canvas",{ref:this.canvas,width:524,height:393})),e.createElement("div",{className:p.labelWrapper},e.createElement("div",{className:p.label},e.createElement("p",{className:p.artist},"SOL LEWITT"),e.createElement("p",{className:p.artwork},e.createElement("span",{className:p.italic},"Wall drawing"),", dhk.party"),e.createElement("p",{className:p.medium},"Digital (HTML5 Canvas)"))),e.createElement("p",{className:p.paragraph},"이 작품에 대한 솔 르윗의 지시사항은 다음과 같다."),e.createElement("p",{className:p.instruction},e.createElement("blockquote",{className:p.instructionContent},"On a wall surface, any",e.createElement("br",null),"continuous stretch of wall,",e.createElement("br",null),"using a hard pencil, place",e.createElement("br",null),"fifty points at random.",e.createElement("br",null),"The points should be evenly",e.createElement("br",null),"distributed over the area",e.createElement("br",null),"of the wall. All of the",e.createElement("br",null),"points should be connected",e.createElement("br",null),"by straight lines.",e.createElement("br",null),e.createElement("br",null),"연속적으로 이어져있는 벽면 위에 단단한 연필을 이용해서 쉰 개의 점을 무작위로 배치하라.",e.createElement("br",null),"점들은 벽면 공간에 걸쳐 고르게 분포되어야 한다.",e.createElement("br",null),"모든 점들은 직선으로 이어져야 한다.",e.createElement("br",null))),e.createElement("p",null,e.createElement("ul",null,e.createElement("li",null,"선들의 두께가 다 일정하지 않도록 미세하게 차이를 두었다."),e.createElement("li",null,"점들이 고르게 분포되어 보이도록 10 x 5 그리드를 만들고 각 셀 안에서 점의 위치를 무작위로 배정했다.")))))},n}(c.a.Component),p={art:Object(l.css)({margin:"40px 0",textAlign:"center"}),labelWrapper:Object(l.css)({display:"flex",justifyContent:"center"}),label:Object(l.css)({marginBottom:"30px"}),artist:Object(l.css)({margin:0,padding:0,fontWeight:"bold",textDecoration:"underline"}),artwork:Object(l.css)({margin:0,padding:0}),medium:Object(l.css)({margin:0,padding:0}),italic:Object(l.css)({fontStyle:"italic"}),paragraph:Object(l.css)({}),instruction:Object(l.css)({}),instructionContent:Object(l.css)({paddingLeft:"20px",borderLeft:"solid 7px #f1f3f5",fontFamily:"monospace",fontSize:"1.1em"}),code:Object(l.css)({})},d=function(e){for(var t=e.width,n=e.height,r=e.rows,a=void 0===r?5:r,i=e.cols,c=void 0===i?10:i,l=[],o=(t-0)/c,m=(n-0)/a,f=0;f<a;f++)for(var p=0;p<c;p++){var d=Object(s.lerp)(0+o*p,0+o*(p+1),u.a.range(.2,.8)),h=Object(s.lerp)(0+m*f,0+m*(f+1),u.a.range(.2,.8));l.push({x:d,y:h})}return l};t.default=f;var h="622906627"}.call(this,n(84))},190:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"graphql",function(){return d}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var r=n(0),a=n.n(r),i=n(4),c=n.n(i),l=n(189),o=n.n(l);n.d(t,"Link",function(){return o.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(191),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var m=n(37);n.d(t,"parsePath",function(){return m.a});var f=a.a.createContext({}),p=function(t){return e.createElement(f.Consumer,null,function(n){return t.data||n[t.query]&&n[t.query].data?(t.render||t.children)(t.data?t.data.data:n[t.query].data):e.createElement("div",null,"Loading (StaticQuery)")})};function d(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}}.call(this,n(84))},191:function(e,t,n){var r;e.exports=(r=n(194))&&r.default||r},192:function(e,t,n){"use strict";(function(e){var r=n(193),a=(n(0),n(190)),i=n(51),c=n(195),l=n(196);n(199),n(197);t.a=function(t){var n=t.children;return e.createElement(a.StaticQuery,{query:"3892401927",render:function(t){return e.createElement("div",{className:o},e.createElement(c.a,{title:t.site.siteMetadata.title}),e.createElement("main",{className:u},n),e.createElement(l.a,null))},data:r})};var o=Object(i.css)({display:"flex",minHeight:"100vh",flexDirection:"column",margin:"0 auto"}),u=Object(i.css)({flex:1,margin:"0 auto",padding:"0 1em",maxWidth:"760px"})}).call(this,n(84))},193:function(e){e.exports={data:{site:{siteMetadata:{title:"dhk.party"}}}}},194:function(e,t,n){"use strict";n.r(t);n(52);var r=n(0),a=n.n(r),i=n(4),c=n.n(i),l=n(53),o=n(2),u=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},195:function(e,t,n){"use strict";(function(e){n(0);var r=n(190),a=n(51);t.a=function(t){var n=t.title,a=t.children;return e.createElement("header",{className:i},e.createElement("h1",{className:c},e.createElement(r.Link,{className:l,to:"/"},n)),a)};var i=Object(a.css)({position:"relative",zIndex:9,margin:"1em auto",padding:"0 1em",width:"100%",maxWidth:"960px"}),c=Object(a.css)({fontFamily:"Georgia",fontWeight:400,fontStyle:"italic",fontSize:"27px"}),l=Object(a.css)({display:"block",margin:"0.8em 0 1.424em 0",color:"black",textDecoration:"none"})}).call(this,n(84))},196:function(e,t,n){"use strict";(function(e){n(0),n(190);var r=n(51);t.a=function(){return e.createElement("footer",{className:a},e.createElement("p",null,e.createElement("small",null,e.createElement("a",{className:i,href:"mailto:kimdhoe1@gmail.com"},"kimdhoe1@gmail.com"))))};var a=Object(r.css)({marginTop:"4em",textAlign:"center"}),i=Object(r.css)({letterSpacing:"0.7px",fontFamily:"Georgia",fontStyle:"italic",textDecoration:"none",color:"#777"})}).call(this,n(84))},197:function(e,t,n){},203:function(e,t,n){var r=n(202),a=Number.EPSILON;function i(e,t,n){return t<n?e<t?t:e>n?n:e:e<n?n:e>t?t:e}function c(e,t,n){return e*(1-n)+t*n}function l(e,t,n){return Math.abs(e-t)<a?0:(n-e)/(t-e)}function o(e,t){return t=r(t,0),"number"==typeof e&&isFinite(e)?e:t}function u(e){if("number"!=typeof e)throw new TypeError("Expected dims argument");return function(t,n){var a;n=r(n,0),null==t?a=n:"number"==typeof t&&isFinite(t)&&(a=t);var i,c=[];if(null==a)for(i=0;i<e;i++)c[i]=o(t[i],n);else for(i=0;i<e;i++)c[i]=a;return c}}function s(e,t,n,r){if(r=r||[],e.length!==t.length)throw new TypeError("min and max array are expected to have the same length");for(var a=0;a<e.length;a++)r[a]=c(e[a],t[a],n);return r}function m(e,t){if("number"!=typeof(e=r(e,0)))throw new TypeError("Expected n argument to be a number");for(var n=[],a=0;a<e;a++)n.push(t);return n}function f(e,t){return(e%t+t)%t}function p(e,t,n,r){return c(e,t,1-Math.exp(-n*r))}e.exports={mod:f,fract:function(e){return e-Math.floor(e)},sign:function(e){return e>0?1:e<0?-1:0},degToRad:function(e){return e*Math.PI/180},radToDeg:function(e){return 180*e/Math.PI},wrap:function(e,t,n){if("number"!=typeof t||"number"!=typeof n)throw new TypeError('Must specify "to" and "from" arguments as numbers');if(t>n){var r=t;t=n,n=r}var a=n-t;return 0===a?n:e-a*Math.floor((e-t)/a)},pingPong:function(e,t){return e=f(e,2*t),t-Math.abs(e-t)},linspace:function(e,t){if("number"!=typeof(e=r(e,0)))throw new TypeError("Expected n argument to be a number");"boolean"==typeof(t=t||{})&&(t={endpoint:!0});var n=r(t.offset,0);return t.endpoint?m(e).map(function(t,r){return e<=1?0:(r+n)/(e-1)}):m(e).map(function(t,r){return(r+n)/e})},lerp:c,lerpArray:s,inverseLerp:l,lerpFrames:function(e,t,n){t=i(t,0,1);var r=e.length-1,a=t*r,l=Math.floor(a),o=a-l,u=Math.min(l+1,r),m=e[l%e.length],f=e[u%e.length];if("number"==typeof m&&"number"==typeof f)return c(m,f,o);if(Array.isArray(m)&&Array.isArray(f))return s(m,f,o,n);throw new TypeError("Mismatch in value type of two array elements: "+l+" and "+u)},clamp:i,clamp01:function(e){return i(e,0,1)},smoothstep:function(e,t,n){var r=i(l(e,t,n),0,1);return r*r*(3-2*r)},damp:p,dampArray:function(e,t,n,r,a){a=a||[];for(var i=0;i<e.length;i++)a[i]=p(e[i],t[i],n,r);return a},mapRange:function(e,t,n,r,i,c){if(Math.abs(t-n)<a)return r;var l=(e-t)/(n-t)*(i-r)+r;return c&&(i<r?l<i?l=i:l>r&&(l=r):l>i?l=i:l<r&&(l=r)),l},expand2D:u(2),expand3D:u(3),expand4D:u(4)}}}]);
//# sourceMappingURL=component---src-pages-art-sol-118-js-931ae374b6464cb5f190.js.map