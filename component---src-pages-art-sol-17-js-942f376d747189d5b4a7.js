(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{188:function(e,t,n){"use strict";n.r(t),function(e){n(88);var a=n(7),r=n.n(a),i=(n(86),n(0)),o=n.n(i),s=n(53),c=n(204),l=function(t){function n(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))||this).canvas=o.a.createRef(),e}r()(n,t);var a=n.prototype;return a.componentDidMount=function(){var e=this.canvas.current.getContext("2d"),t=Math.sqrt(2*Math.pow(512,2))/2;e.fillStyle="white",e.fillRect(0,0,512,512),e.save(),e.translate(256,-256),e.rotate(Math.PI/4),u(e,t),e.restore(),e.save(),e.translate(0,512),e.rotate(Math.PI/-4),u(e,t),e.restore(),e.save(),e.translate(256,256),e.rotate(Math.PI/-4),d(e,t),e.restore(),e.save(),f(e,t),e.restore()},a.render=function(){return e.createElement(c.a,null,e.createElement("div",null,e.createElement("h2",{style:{textAlign:"center"}},"[Sol LeWitt] Wall Drawing #17 (1969)"),e.createElement("div",{className:p.art},e.createElement("canvas",{ref:this.canvas,width:512,height:512})),e.createElement("div",{className:p.labelWrapper},e.createElement("div",{className:p.label},e.createElement("p",{className:p.artist},"SOL LEWITT"),e.createElement("p",{className:p.artwork},e.createElement("span",{className:p.italic},"Wall drawing"),", dhk.party"),e.createElement("p",{className:p.medium},"Digital (HTML5 Canvas)"))),e.createElement("p",{className:p.paragraph},"이 작품에 대한 솔 르윗의 지시사항은 다음과 같다."),e.createElement("blockquote",{className:p.instructionContent},"Four-part drawing with a different line direction in each part.",e.createElement("br",null),e.createElement("br",null),"각기 다른 방향의 선을 가진 네 부분으로 이루어진 드로잉."),e.createElement("p",null,"정사각형의 벽면에 대각선 두 개를 그어 사등분한 후 선을 그려넣었다.")))},n}(o.a.Component),u=function(e,t){for(var n=[],a=0;a<=t;a+=4)n.push([{x:a,y:0},{x:a,y:t}]);n.forEach(function(t){var n=t[0],a=t[1];e.beginPath(),e.moveTo(n.x,n.y),e.lineTo(a.x,a.y),e.strokeStyle="#777",e.lineWidth=1,e.stroke()})},d=function(e,t){for(var n=[],a=4/Math.cos(Math.PI/4),r=0;r<=t;r+=a)n.push([{x:r,y:0},{x:0,y:r}]);n.forEach(function(t){var n=t[0],a=t[1];e.beginPath(),e.moveTo(n.x,n.y),e.lineTo(a.x,a.y),e.strokeStyle="#777",e.lineWidth=1,e.stroke()})},f=function(e,t){for(var n=[],a=2*Math.sqrt(Math.pow(t,2)/2),r=0;r<=a;r+=4){var i=r;r>a/2&&(i=a-r),n.push([{x:0,y:r},{x:i,y:r}])}n.forEach(function(t){var n=t[0],a=t[1];e.beginPath(),e.moveTo(n.x,n.y),e.lineTo(a.x,a.y),e.strokeStyle="#777",e.lineWidth=1,e.stroke()})},p={art:Object(s.css)({margin:"40px 0",textAlign:"center"}),labelWrapper:Object(s.css)({display:"flex",justifyContent:"center"}),label:Object(s.css)({marginBottom:"30px"}),artist:Object(s.css)({margin:0,padding:0,fontWeight:"bold",textDecoration:"underline"}),artwork:Object(s.css)({margin:0,padding:0}),medium:Object(s.css)({margin:0,padding:0}),italic:Object(s.css)({fontStyle:"italic"}),paragraph:Object(s.css)({}),instruction:Object(s.css)({}),instructionContent:Object(s.css)({paddingLeft:"20px",borderLeft:"solid 7px #f1f3f5",fontFamily:"monospace",fontSize:"1.1em"}),code:Object(s.css)({})};t.default=l}.call(this,n(87))},201:function(e,t,n){"use strict";var a=n(40);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(212)),i=a(n(58)),o=a(n(7)),s=a(n(56)),c=a(n(57)),l=a(n(4)),u=a(n(0)),d=n(14),f=n(202);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:l.default.string,activeStyle:l.default.object},m=function(e){function t(t){var n;n=e.call(this)||this,(0,c.default)((0,s.default)((0,s.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,s.default)((0,s.default)(n))),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,o=void 0===a?this.defaultGetProps:a,s=t.onClick,c=t.onMouseEnter,l=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,m=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=p(n);return u.default.createElement(d.Link,(0,i.default)({to:v,state:l,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){c&&c(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:l,replace:h})),!0}},m))},t}(u.default.Component);m.propTypes=(0,i.default)({},h,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var v=m;t.default=v;var g=function(e,t){window.___navigate(p(e),t)};t.navigate=g;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},202:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});n(86);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(201),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(203),u=n.n(l);n.d(t,"PageRenderer",function(){return u.a});var d=n(39);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(t){return e.createElement(f.Consumer,null,function(n){return t.data||n[t.query]&&n[t.query].data?(t.render||t.children)(t.data?t.data.data:n[t.query].data):e.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}}.call(this,n(87))},203:function(e,t,n){var a;e.exports=(a=n(206))&&a.default||a},204:function(e,t,n){"use strict";var a=n(86),r=n(205),i=(n(0),n(202)),o=n(207),s=n(208);n(211),n(209);t.a=function(e){var t=e.children;return Object(a.b)(i.StaticQuery,{query:"3892401927",render:function(e){return Object(a.b)("div",{css:c},Object(a.b)(o.a,{title:e.site.siteMetadata.title}),Object(a.b)("main",{css:l},t),Object(a.b)(s.a,null))},data:r})};var c={name:"3cfldf",styles:"display:flex;min-height:100vh;flex-direction:column;margin:0 auto;"},l={name:"1715jjh",styles:"flex:1;margin:0 auto;padding:0 1em;width:100%;max-width:760px;"}},205:function(e){e.exports={data:{site:{siteMetadata:{title:"dhk.party"}}}}},206:function(e,t,n){"use strict";n.r(t);n(54);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(55),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},207:function(e,t,n){"use strict";(function(e){n(86),n(0);var a=n(202),r=n(53);t.a=function(t){var n=t.title,r=t.children;return e.createElement("header",{className:i},e.createElement("h1",{className:o},e.createElement(a.Link,{className:s,to:"/"},n)),r)};var i=Object(r.css)({position:"relative",zIndex:9,margin:"1em auto",padding:"0 1em",width:"100%",maxWidth:"960px"}),o=Object(r.css)({fontFamily:"Georgia",fontWeight:400,fontStyle:"italic",fontSize:"27px"}),s=Object(r.css)({display:"block",margin:"0.8em 0 1.424em 0",color:"black",textDecoration:"none"})}).call(this,n(87))},208:function(e,t,n){"use strict";(function(e){n(86),n(0);var a=n(53);t.a=function(){return e.createElement("footer",{className:r},e.createElement("p",null,e.createElement("small",null,e.createElement("a",{className:i,href:"mailto:kimdhoe1@gmail.com"},"kimdhoe1@gmail.com"))))};var r=Object(a.css)({marginTop:"4em",textAlign:"center"}),i=Object(a.css)({letterSpacing:"0.7px",fontFamily:"Georgia",fontStyle:"italic",textDecoration:"none",color:"#777"})}).call(this,n(87))},209:function(e,t,n){},211:function(e,t,n){},212:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}}}]);
//# sourceMappingURL=component---src-pages-art-sol-17-js-942f376d747189d5b4a7.js.map