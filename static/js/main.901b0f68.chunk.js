(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(2),c=a.n(s),r=a(6),i=a.n(r),n=(a(14),a(0)),l=function(){return Object(n.jsxs)("header",{className:"app__header",children:[Object(n.jsx)("h1",{className:"app__title",children:Object(n.jsxs)("a",{href:"#",children:[Object(n.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(n.jsx)("nav",{className:"app__menu",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"Characters"})}),"/",Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"Comics"})})]})})]})},o=a(3),j=a(7),m=a(9),h=a(8),d=(a(16),a.p+"static/media/mjolnir.61f31e18.png"),b=a(1),u=a.n(b),O=a(4),x=function e(){var t=this;Object(o.a)(this,e),this._apiBase="https://gateway.marvel.com:443/v1/public/",this._apiKey="apikey=bf4b1e02c75089ac0a385d34bb8e42bc",this.getResource=function(){var e=Object(O.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(O.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._apiBase,"characters?limit=9&offset=210&").concat(t._apiKey));case 2:return a=e.sent,e.abrupt("return",a.data.results.map(t._transformCharacter));case 4:case"end":return e.stop()}}),e)}))),this.getCharacter=function(){var e=Object(O.a)(u.a.mark((function e(a){var s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._apiBase,"characters/").concat(a,"?").concat(t._apiKey));case 2:return s=e.sent,e.abrupt("return",t._transformCharacter(s.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformCharacter=function(e){return{name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url}}},f=function(){return Object(n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(n.jsx)("g",{transform:"translate(80,50)",children:Object(n.jsx)("g",{transform:"rotate(0)",children:Object(n.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"1",children:[Object(n.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(n.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(n.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(n.jsx)("g",{transform:"rotate(45)",children:Object(n.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.875",children:[Object(n.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(n.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(n.jsx)("g",{transform:"translate(50,80)",children:Object(n.jsx)("g",{transform:"rotate(90)",children:Object(n.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.75",children:[Object(n.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(n.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(n.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(n.jsx)("g",{transform:"rotate(135)",children:Object(n.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.625",children:[Object(n.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(n.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(n.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(n.jsx)("g",{transform:"rotate(180)",children:Object(n.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.5",children:[Object(n.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(n.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(n.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(n.jsx)("g",{transform:"rotate(225)",children:Object(n.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.375",children:[Object(n.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(n.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(n.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(n.jsx)("g",{transform:"rotate(270)",children:Object(n.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.25",children:[Object(n.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(n.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(n.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(n.jsx)("g",{transform:"rotate(315)",children:Object(n.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.125",children:[Object(n.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(n.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})},p=a.p+"static/media/error.42292aa1.gif",_=function(){return Object(n.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:p,alt:"Error"})},g=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={char:{},loading:!0,error:!1},s.marvelService=new x,s.onCharLoaded=function(e){s.setState({char:e,loading:!1})},s.onCharLoading=function(){s.setState({loading:!0})},s.onError=function(){s.setState({loading:!1,error:!0})},s.updateChar=function(){var e=Math.floor(400*Math.random()+1011e3);s.onCharLoading(),s.marvelService.getCharacter(e).then(s.onCharLoaded).catch(s.onError)},s.updateChar(),s}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.updateChar(),this.timeId=setTimeout(this.updateChar,3e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timeId)}},{key:"render",value:function(){var e=this.state,t=e.char,a=e.loading,s=e.error,c=s?Object(n.jsx)(_,{}):null,r=a?Object(n.jsx)(f,{}):null,i=a||s?null:Object(n.jsx)(y,{char:t});return Object(n.jsxs)("div",{className:"randomchar",children:[c,r,i,Object(n.jsxs)("div",{className:"randomchar__static",children:[Object(n.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(n.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(n.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(n.jsx)("button",{onClick:this.updateChar,className:"button button__main",children:Object(n.jsx)("div",{className:"inner",children:"try it"})}),Object(n.jsx)("img",{src:d,alt:"mjolnir",className:"randomchar__decoration"})]})]})}}]),a}(s.Component),y=function(e){var t=e.char,a=t.name,s=t.description,c=t.thumbnail,r=t.homepage,i=t.wiki,l={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===c&&(l={objectFit:"contain"}),Object(n.jsxs)("div",{className:"randomchar__block",children:[Object(n.jsx)("img",{src:c,alt:"Random character",className:"randomchar__img",style:l}),Object(n.jsxs)("div",{className:"randomchar__info",children:[Object(n.jsx)("p",{className:"randomchar__name",children:a}),Object(n.jsx)("p",{className:"randomchar__descr",children:s}),Object(n.jsxs)("div",{className:"randomchar__btns",children:[Object(n.jsx)("a",{href:r,className:"button button__main",children:Object(n.jsx)("div",{className:"inner",children:"homepage"})}),Object(n.jsx)("a",{href:i,className:"button button__secondary",children:Object(n.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},v=g,N=(a(18),a.p+"static/media/abyss.93d211d3.jpg"),k=function(){return Object(n.jsxs)("div",{className:"char__list",children:[Object(n.jsxs)("ul",{className:"char__grid",children:[Object(n.jsxs)("li",{className:"char__item",children:[Object(n.jsx)("img",{src:N,alt:"abyss"}),Object(n.jsx)("div",{className:"char__name",children:"Abyss"})]}),Object(n.jsxs)("li",{className:"char__item char__item_selected",children:[Object(n.jsx)("img",{src:N,alt:"abyss"}),Object(n.jsx)("div",{className:"char__name",children:"Abyss"})]}),Object(n.jsxs)("li",{className:"char__item",children:[Object(n.jsx)("img",{src:N,alt:"abyss"}),Object(n.jsx)("div",{className:"char__name",children:"Abyss"})]}),Object(n.jsxs)("li",{className:"char__item",children:[Object(n.jsx)("img",{src:N,alt:"abyss"}),Object(n.jsx)("div",{className:"char__name",children:"Abyss"})]}),Object(n.jsxs)("li",{className:"char__item",children:[Object(n.jsx)("img",{src:N,alt:"abyss"}),Object(n.jsx)("div",{className:"char__name",children:"Abyss"})]}),Object(n.jsxs)("li",{className:"char__item",children:[Object(n.jsx)("img",{src:N,alt:"abyss"}),Object(n.jsx)("div",{className:"char__name",children:"Abyss"})]}),Object(n.jsxs)("li",{className:"char__item",children:[Object(n.jsx)("img",{src:N,alt:"abyss"}),Object(n.jsx)("div",{className:"char__name",children:"Abyss"})]}),Object(n.jsxs)("li",{className:"char__item",children:[Object(n.jsx)("img",{src:N,alt:"abyss"}),Object(n.jsx)("div",{className:"char__name",children:"Abyss"})]}),Object(n.jsxs)("li",{className:"char__item",children:[Object(n.jsx)("img",{src:N,alt:"abyss"}),Object(n.jsx)("div",{className:"char__name",children:"Abyss"})]})]}),Object(n.jsx)("button",{className:"button button__main button__long",children:Object(n.jsx)("div",{className:"inner",children:"load more"})})]})},C=(a(19),a.p+"static/media/thor.533e3a5e.jpeg"),T=function(){return Object(n.jsxs)("div",{className:"char__info",children:[Object(n.jsxs)("div",{className:"char__basics",children:[Object(n.jsx)("img",{src:C,alt:"abyss"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"char__info-name",children:"thor"}),Object(n.jsxs)("div",{className:"char__btns",children:[Object(n.jsx)("a",{href:"#",className:"button button__main",children:Object(n.jsx)("div",{className:"inner",children:"homepage"})}),Object(n.jsx)("a",{href:"#",className:"button button__secondary",children:Object(n.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(n.jsx)("div",{className:"char__descr",children:"In Norse mythology, Loki is a god or j\xf6tunn (or both). Loki is the son of F\xe1rbauti and Laufey, and the brother of Helblindi and B\xfdleistr. By the j\xf6tunn Angrbo\xf0a, Loki is the father of Hel, the wolf Fenrir, and the world serpent J\xf6rmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Sva\xf0ilfari as the father, Loki gave birth\u2014in the form of a mare\u2014to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of V\xe1li in the Prose Edda."}),Object(n.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(n.jsxs)("ul",{className:"char__comics-list",children:[Object(n.jsx)("li",{className:"char__comics-item",children:"All-Winners Squad: Band of Heroes (2011) #3"}),Object(n.jsx)("li",{className:"char__comics-item",children:"Alpha Flight (1983) #50"}),Object(n.jsx)("li",{className:"char__comics-item",children:"Amazing Spider-Man (1999) #503"}),Object(n.jsx)("li",{className:"char__comics-item",children:"Amazing Spider-Man (1999) #504"}),Object(n.jsx)("li",{className:"char__comics-item",children:"AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)"}),Object(n.jsx)("li",{className:"char__comics-item",children:"Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)"}),Object(n.jsx)("li",{className:"char__comics-item",children:"Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)"}),Object(n.jsx)("li",{className:"char__comics-item",children:"Vengeance (2011) #4"}),Object(n.jsx)("li",{className:"char__comics-item",children:"Avengers (1963) #1"}),Object(n.jsx)("li",{className:"char__comics-item",children:"Avengers (1996) #1"})]})]})},w=a.p+"static/media/vision.067d4ae1.png",A=function(){return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(l,{}),Object(n.jsxs)("main",{children:[Object(n.jsx)(v,{}),Object(n.jsxs)("div",{className:"char__content",children:[Object(n.jsx)(k,{}),Object(n.jsx)(T,{})]}),Object(n.jsx)("img",{className:"bg-decoration",src:w,alt:"vision"})]})]})};a(20);i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(A,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.901b0f68.chunk.js.map