(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(35)},26:function(e,t,n){},32:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),l=n(38),i=(n(26),n(5)),u=n(6),s=n(8),m=n(7),h=n(9),p=n(36),d=n(40),b=n(37),f=n(39),j=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("small",null,"Click the links below."),r.a.createElement("h3",null,r.a.createElement(p.a,{to:"/about"},"About Page")),r.a.createElement("h3",null,r.a.createElement(p.a,{to:"/random-gif"},"Random GIF")))}}]),t}(a.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"This is a website to demonstrate deploying to many different services!"),r.a.createElement("iframe",{title:"youtube",width:"560",height:"315",src:"https://www.youtube.com/embed/-THM2R4MJ98",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}}]),t}(a.Component),O=n(13),w=n.n(O),y=n(17),g="https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=funny&rating=PG",v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={url:"https://media.giphy.com/media/l3nWhI38IWDofyDrW/giphy-downsized.gif"},n.componentDidMount=Object(y.a)(w.a.mark(function e(){var t,a;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(g);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n.setState({url:a.data.image_original_url});case 7:case"end":return e.stop()}},e,this)})),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.url;return r.a.createElement("div",null,r.a.createElement("img",{src:e,alt:"gif"}))}}]),t}(a.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"error"},"Not Found."))}}]),t}(a.Component),x=(n(32),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.location.pathname;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Welcome to ",r.a.createElement("span",{role:"img","aria-label":"101"},"\ud83d\udcaf + 1\u20e3")," ways!"),"/"!==e?r.a.createElement("h3",null,r.a.createElement(p.a,{to:"/"},"Go Home")):null,r.a.createElement(d.a,null,r.a.createElement(b.a,{exact:!0,path:"/",component:j}),r.a.createElement(b.a,{exact:!0,path:"/about",component:E}),r.a.createElement(b.a,{exact:!0,path:"/random-gif",component:v}),r.a.createElement(b.a,{path:"*",component:k})),r.a.createElement("section",null,r.a.createElement("img",{className:"counter",src:"https://ht-ct.now.sh/counters/ghpages",alt:"views"})))}}]),t}(a.Component)),C=Object(f.a)(x);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.a,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.8858b22f.chunk.js.map