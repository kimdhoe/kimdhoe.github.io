(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{179:function(e,t,n){"use strict";n.r(t),function(e){var a=n(7),r=n.n(a),i=(n(201),n(85),n(86),n(203),n(204),n(0)),l=n.n(i),o=(n(205),n(199)),c=n.n(o),u=n(200),s=n(209),d=n(187),h=function(e){for(var t=e.count,n=e.margin,a=e.width,r=e.height,i=[],l=0;l<t;l++)for(var o=0;o<t;o++){var c=l/(t-1),s=o/(t-1),d=Object(u.lerp)(n,a-n,c),h=Object(u.lerp)(n,r-n,s);i.push({x:d,y:h})}return i},f=function(e,t,n,a){var r=[],i=e.concat(),l=function(){var e=i[0].y,l=(i=c.a.shuffle(i)).shift(),o=i.shift();if(l.y===o.y)return i.every(function(t){return t.y===e})?"break":"continue";var u=t-n,s={color:c.a.pick(a),path:[{x:l.x,y:u},l,o,{x:o.x,y:u}],averageY:(l.y+o.y)/2};r.push(s)};e:for(;i.length>=2;){switch(l()){case"break":break e;case"continue":continue}}return r.sort(function(e,t){return e.averageY-t.averageY}),r},m=function(t){function n(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))||this).canvas=l.a.createRef(),e}r()(n,t);var a=n.prototype;return a.componentDidMount=function(){var e=this.canvas.current.getContext("2d"),t=c.a.rangeFloor(1,6),n=c.a.shuffle(c.a.pick(s)).slice(0,t),a=h({width:524,height:524,count:6,margin:0}),r=f(a,524,0,n);e.globalAlpha=1,e.fillStyle="white",e.fillRect(0,0,524,524),r.forEach(function(t){var n=t.path,a=t.color;e.beginPath(),n.forEach(function(t){var n=t.x,a=t.y;e.lineTo(n,a)}),e.closePath(),e.globalAlpha=.85,e.fillStyle=a,e.fill(),e.lineWidth=10,e.lineJoin=e.lineCap="round",e.globalAlpha=1,e.strokeStyle="white",e.stroke()})},a.render=function(){return e.createElement(d.a,null,e.createElement("div",null,e.createElement("h2",null,"Generative art"),e.createElement("h3",{style:{fontWeight:400,fontSize:"1.0em",fontStyle:"italic"}},"코드로 솔 르윗(Sol LeWitt) 스타일의 지시사항 해석하기"),e.createElement("canvas",{ref:this.canvas,width:524,height:524}),e.createElement("blockquote",{style:{fontStyle:"italic"}},"저건 나라도 그릴 수 있겠는데..."),e.createElement("p",null,"차마 입 밖으로 내진 않더라도 선과 면으로 이루어진 미니멀한 추상 미술작품들 앞에 서면 한번씩 뇌까려봄직한 말이다. 아래의 이미지는 그런 생각을 개발자로서 실천에 옮겨 본 것이다. 미리 주어진 지시사항을 Canvas API를 이용해 코드로 해석한 결과를 보이려는 것이지 어줍잖게 예술가 행세를 하려는 것은 아니니 오해는 마시라. 재미난 프로젝트 아이디어를 소개하기 위해 남기는 글이니 시도해보시는 분은 공유 바란다."),e.createElement("blockquote",{style:{fontStyle:"italic"}},'An example of a Sol LeWitt inspired "Wall Drawing" using a simple generative algorithm. The instructions for this mural:',e.createElement("ul",null,e.createElement("li",null,"Using a 6x6 grid of evenly spaced points"),e.createElement("li",null,"Connect two random points on the grid; forming a trapezoid with two parallel sides extending down"),e.createElement("li",null,"Fill the trapezoid with a colour, then stroke with the background colour"),e.createElement("li",null,"Find another two random points and repeat; continuing until all grid are exhausted"),e.createElement("li",null,"Layer the shapes by the average Y position of their two grid points"))),e.createElement("p",null,"위 지시사항은 Matt DesLauriers가 자신의 워크숍에서 사용한 연습용 예시로, 솔 르윗이라는 미국 현대작가의 스타일을 흉내낸 것이다."),e.createElement("p",null,"솔 르윗은 개념 예술과 미니멀리즘 작품으로 잘 알려진 미국의 작가이다. 이 작가의 특징은 본인이 직접 작품을 완성하는 것이 아니라 전시 장소에서 작품을 만들 수 있도록 지시사항만을 전달한다는 점이다. 예를 들면 이런 식이다."),e.createElement("blockquote",{style:{fontStyle:"italic"}},e.createElement("p",null,"Wall Drawing #391 (1983)"),e.createElement("p",null,"Two-part drawing. The two walls are each divided horizontally and vertically into four equal parts. First wall: 12-inch (30 cm) bands of lines in four directions, one direction in each part, drawn in black India ink. Second wall: Same, but with four colors drawn in India ink and color ink washes."),e.createElement("a",{href:"https://solvingsol.com/solutions"},"Solving Sol")),e.createElement("p",null,"프론트 개발자로서 솔 르윗이라는 작가가 유난히 반가운 것은 우리가 전시 설치 기사가 되어 시각적인 결과물을 만들어내는 연습을 하기에 최상의 자료를 제공하기 때문이다. 혹시 비슷한 생각을 가진 분이 있다면 이미 Solving Sol이라는 프로젝트가 있으니 확인해보시면 되겠다."),e.createElement("p",null,"단순하고 해석의 여지가 충분히 있는 지시들이기 때문에 누가 어떻게 설치하느냐에 따라 다른 작품이 나오는 재미가 있다. 혹시 코드로 해석해보는 동료 개발자가 있다면 결과물을 공유해주시면 감사하겠다.")))},n}(l.a.Component);t.default=m}.call(this,n(84))},185:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return h}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),l=n.n(i),o=n(184),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var u=n(186),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(37);n.d(t,"parsePath",function(){return d.a});var h=r.a.createContext({}),f=function(t){return e.createElement(h.Consumer,null,function(n){return t.data||n[t.query]&&n[t.query].data?(t.render||t.children)(t.data?t.data.data:n[t.query].data):e.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}}.call(this,n(84))},186:function(e,t,n){var a;e.exports=(a=n(189))&&a.default||a},187:function(e,t,n){"use strict";(function(e){var a=n(188),r=(n(0),n(185)),i=n(51),l=n(190),o=n(191);n(194),n(192);t.a=function(t){var n=t.children;return e.createElement(r.StaticQuery,{query:"3892401927",render:function(t){return e.createElement("div",{className:c},e.createElement(l.a,{title:t.site.siteMetadata.title}),e.createElement("main",{className:u},n),e.createElement(o.a,null))},data:a})};var c=Object(i.css)({display:"flex",minHeight:"100vh",flexDirection:"column",margin:"0 auto"}),u=Object(i.css)({flex:1,margin:"0 auto",padding:"0 1em",maxWidth:"760px"})}).call(this,n(84))},188:function(e){e.exports={data:{site:{siteMetadata:{title:"dhk.party"}}}}},189:function(e,t,n){"use strict";n.r(t);n(52);var a=n(0),r=n.n(a),i=n(4),l=n.n(i),o=n(55),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=u},190:function(e,t,n){"use strict";(function(e){n(0);var a=n(185),r=n(51);t.a=function(t){var n=t.title,r=t.children;return e.createElement("header",{className:i},e.createElement("h1",{className:l},e.createElement(a.Link,{className:o,to:"/"},n)),r)};var i=Object(r.css)({position:"relative",zIndex:9,margin:"1em auto",padding:"0 1em",width:"100%",maxWidth:"960px"}),l=Object(r.css)({fontFamily:"Georgia",fontWeight:400,fontStyle:"italic"}),o=Object(r.css)({display:"block",margin:"0.8em 0 1.424em 0",color:"black",textDecoration:"none"})}).call(this,n(84))},191:function(e,t,n){"use strict";(function(e){n(0),n(185);var a=n(51);t.a=function(){return e.createElement("footer",{className:r},e.createElement("p",null,e.createElement("small",null,e.createElement("a",{className:i,href:"mailto:kimdhoe1@gmail.com"},"kimdhoe1@gmail.com"))))};var r=Object(a.css)({marginTop:"4em",textAlign:"center"}),i=Object(a.css)({letterSpacing:"0.7px",fontFamily:"Georgia",fontStyle:"italic",textDecoration:"none",color:"#777"})}).call(this,n(84))},192:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-art-code-art-js-0387fe260f29dc597057.js.map