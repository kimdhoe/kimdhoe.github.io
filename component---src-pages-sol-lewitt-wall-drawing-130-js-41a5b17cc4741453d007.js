(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{204:function(e,t,a){"use strict";a.r(t),function(e){var n=a(7),r=a.n(n),i=(a(88),a(0)),o=a.n(i),s=a(54),c=a(223),l=function(t){function a(){for(var e,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))||this).canvas=o.a.createRef(),e.state={width:0,height:0},e}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=this;this.setState({width:500,height:500},function(){var t=e.canvas.current.getContext("2d");t.fillStyle="white",t.fillRect(0,0,500,500);for(var a=0;a<=500;a+=25)t.beginPath(),t.moveTo(a,0),t.lineTo(a,500),t.lineWidth=1.5,t.strokeStyle="black",t.stroke();for(var n=0;n<=500;n+=25)t.beginPath(),t.moveTo(0,n),t.lineTo(500,n),t.lineWidth=1.5,t.strokeStyle="black",t.stroke();d(t,500,500),t.save(),t.translate(250,250),t.rotate(Math.PI/2),t.translate(-250,-250),d(t,500,500),t.restore(),t.save(),t.translate(250,250),t.rotate(Math.PI/2*2),t.translate(-250,-250),d(t,500,500),t.restore(),t.save(),t.translate(250,250),t.rotate(Math.PI/2*3),t.translate(-250,-250),d(t,500,500),t.restore()})},n.render=function(){var t=this.state,a=t.width,n=t.height;return e.createElement(c.a,null,e.createElement("div",null,e.createElement("h2",{style:{textAlign:"center"}},"[Sol LeWitt] Wall Drawing #122 (1972)"),e.createElement("div",{className:u.art},e.createElement("canvas",{ref:this.canvas,width:a,height:n})),e.createElement("div",{className:u.labelWrapper},e.createElement("div",{className:u.label},e.createElement("p",{className:u.artist},"SOL LEWITT"),e.createElement("p",{className:u.artwork},e.createElement("span",{className:u.italic},"Wall drawing"),", dhk.party"),e.createElement("p",{className:u.medium},"Digital (HTML5 Canvas)"))),e.createElement("blockquote",{className:u.instructionContent},"All combinations of two lines crossing, placed at random, using arcs from corners and sides, straight, not straight and broken lines.")))},a}(o.a.Component),u={art:Object(s.css)({margin:"40px 0",textAlign:"center"}),labelWrapper:Object(s.css)({display:"flex",justifyContent:"center"}),label:Object(s.css)({marginBottom:"30px"}),artist:Object(s.css)({margin:0,padding:0,fontWeight:"bold",textDecoration:"underline"}),artwork:Object(s.css)({margin:0,padding:0}),medium:Object(s.css)({margin:0,padding:0}),italic:Object(s.css)({fontStyle:"italic"}),paragraph:Object(s.css)({}),instruction:Object(s.css)({}),instructionContent:Object(s.css)({paddingLeft:"20px",borderLeft:"solid 7px #f1f3f5",fontFamily:"monospace",fontSize:"1.1em"}),code:Object(s.css)({})},d=function(e,t,a){for(var n=Math.max(t,a),r=Math.sqrt(2*n*n),i=0;i<=r;i+=25)e.beginPath(),e.arc(0,0,i,Math.PI/-2,Math.PI/2),e.lineWidth=1.5,e.strokeStyle="black",e.stroke()};t.default=l}.call(this,a(89))},220:function(e,t,a){"use strict";var n=a(41);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(231)),i=n(a(59)),o=n(a(7)),s=n(a(57)),c=n(a(58)),l=n(a(4)),u=n(a(0)),d=a(14),f=a(221);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:l.default.string,activeStyle:l.default.object},m=function(e){function t(t){var a;a=e.call(this)||this,(0,c.default)((0,s.default)((0,s.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,o=void 0===n?this.defaultGetProps:n,s=t.onClick,c=t.onMouseEnter,l=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,m=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=p(a);return u.default.createElement(d.Link,(0,i.default)({to:v,state:l,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){c&&c(e),___loader.hovering((0,f.parsePath)(a).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(a,{state:l,replace:h})),!0}},m))},t}(u.default.Component);m.propTypes=(0,i.default)({},h,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var v=m;t.default=v;var g=function(e,t){window.___navigate(p(e),t)};t.navigate=g;var b=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=b;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),b(e)}},221:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});a(88);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(220),c=a.n(s);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var l=a(222),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var d=a(40);a.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(t){return e.createElement(f.Consumer,null,function(a){return t.data||a[t.query]&&a[t.query].data?(t.render||t.children)(t.data?t.data.data:a[t.query].data):e.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}}.call(this,a(89))},222:function(e,t,a){var n;e.exports=(n=a(225))&&n.default||n},223:function(e,t,a){"use strict";var n=a(88),r=a(224),i=(a(0),a(221)),o=a(226),s=a(227);a(230),a(228);t.a=function(e){var t=e.children;return Object(n.c)(i.StaticQuery,{query:"3892401927",render:function(e){return Object(n.c)("div",{css:c},Object(n.c)(o.a,{title:e.site.siteMetadata.title}),Object(n.c)("main",{css:l},t),Object(n.c)(s.a,null))},data:r})};var c={name:"3cfldf",styles:"display:flex;min-height:100vh;flex-direction:column;margin:0 auto;"},l={name:"bw40gk",styles:"flex:1;margin:0 auto;padding:0 1em;width:100%;max-width:960px;"}},224:function(e){e.exports={data:{site:{siteMetadata:{title:"dhk.party"}}}}},225:function(e,t,a){"use strict";a.r(t);a(55);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(56),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},226:function(e,t,a){"use strict";(function(e){a(88),a(0);var n=a(221),r=a(54);t.a=function(t){var a=t.title,r=t.children;return e.createElement("header",{className:i},e.createElement("h1",{className:o},e.createElement(n.Link,{className:s,to:"/"},a)),r)};var i=Object(r.css)({position:"relative",zIndex:9,margin:"1em auto",padding:"0 1em",width:"100%",maxWidth:"960px"}),o=Object(r.css)({fontFamily:"Georgia",fontWeight:400,fontStyle:"italic",fontSize:"27px"}),s=Object(r.css)({display:"block",margin:"0.8em 0 1.424em 0",color:"black",textDecoration:"none"})}).call(this,a(89))},227:function(e,t,a){"use strict";(function(e){a(88),a(0);var n=a(54);t.a=function(){return e.createElement("footer",{className:r},e.createElement("p",null,e.createElement("small",null,e.createElement("a",{className:i,href:"mailto:kimdhoe1@gmail.com"},"kimdhoe1@gmail.com"))))};var r=Object(n.css)({marginTop:"4em",textAlign:"center"}),i=Object(n.css)({letterSpacing:"0.7px",fontFamily:"Georgia",fontStyle:"italic",textDecoration:"none",color:"#777"})}).call(this,a(89))},228:function(e,t,a){},230:function(e,t,a){},231:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}}}]);
//# sourceMappingURL=component---src-pages-sol-lewitt-wall-drawing-130-js-41a5b17cc4741453d007.js.map