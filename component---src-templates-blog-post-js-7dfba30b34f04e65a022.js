(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{153:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return g});a(174);var r=a(7),i=a.n(r),n=a(0),s=a.n(n),o=a(167),l=a(176),d=a.n(l),c=a(170),u=a(154),f=a.n(u),p=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.data.site.siteMetadata.author,r=this.props.pageContext,i=r.previous,n=r.next;return s.a.createElement(c.a,{location:this.props.location,title:e.frontmatter.title,description:e.excerpt},s.a.createElement("div",{className:f.a.author},s.a.createElement(d.a,{fixed:this.props.data.avatar.childImageSharp.fixed,alt:a,style:{width:40,height:40,display:"block",opacity:.5},imgStyle:{borderRadius:"50%"}}),s.a.createElement(o.a,{to:"/"},s.a.createElement("h2",{className:f.a.siteTitle},t))),s.a.createElement("article",{className:f.a.article},s.a.createElement("h1",{className:f.a.articleTitle},e.frontmatter.title),s.a.createElement("small",null,e.frontmatter.date),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),s.a.createElement("hr",{style:{}}),s.a.createElement("nav",{className:f.a.footerNav},i&&s.a.createElement(o.a,{className:f.a.previous,to:i.fields.slug,rel:"prev"},"« ",i.frontmatter.title),n&&s.a.createElement(o.a,{className:f.a.next,to:n.fields.slug,rel:"next"},n.frontmatter.title," »"))))},t}(s.a.Component);t.default=p;var g="2454716571"},167:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(169);var d=i.a.createContext({}),c=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},168:function(e,t,a){"use strict";var r=a(171),i=a(0),n=a.n(i),s=a(4),o=a.n(s),l=a(178),d=a.n(l);function c(e){var t=e.description,a=e.lang,i=e.meta,s=e.title,o=r.data.site,l=t;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(i)})}c.defaultProps={lang:"en",meta:[],description:""},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=c},169:function(e,t,a){var r;e.exports=(r=a(175))&&r.default||r},170:function(e,t,a){"use strict";var r=a(177),i=a.n(r),n=a(7),s=a.n(n),o=a(0),l=a.n(o),d=a(168),c=a(151),u=a.n(c),f=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).state={opened:!1},t.toggleOpenSlider=function(){t.setState(function(e){return{opened:!e.opened}})},t}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.description,r=e.children;return l.a.createElement("div",{className:u.a.layout},l.a.createElement(d.a,{title:t,description:a}),r)},i()(t,[{key:"isHomePage",get:function(){return"/"===this.props.location.pathname}}]),t}(l.a.Component);t.a=f},171:function(e){e.exports={data:{site:{siteMetadata:{title:"三洋的小站",author:"三洋"}}}}},172:function(e,t,a){var r=a(11),i=a(18),n=a(19),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},174:function(e,t,a){"use strict";a(172)("fixed",function(e){return function(){return e(this,"tt","","")}})},175:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(57),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},176:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(35)),o=r(a(74)),l=r(a(75)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,m=h&&window.IntersectionObserver,y=new WeakMap;var b=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},v=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+r+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+o+l+a+i+t+s+n+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},S=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},f,{onLoad:s,onError:c,ref:t,loading:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});S.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var w=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&m&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=b(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,h=e.fixed,m=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,w=e.itemProp,E=e.loading,L=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,l.default)({opacity:L?1:0,transition:R?"opacity "+y+"ms":"none"},o),O="boolean"==typeof m?"lightgray":m,N={transitionDelay:y+"ms"},z=(0,l.default)({opacity:this.state.imgLoaded?0:1},R&&N,o,f),x={title:t,alt:this.state.isVisible?"":a,style:z,className:p};if(g){var T=g;return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),O&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:O,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&N)}),T.base64&&d.default.createElement(S,(0,l.default)({src:T.base64},x)),T.tracedSVG&&d.default.createElement(S,(0,l.default)({src:T.tracedSVG},x)),this.state.isVisible&&d.default.createElement("picture",null,T.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:T.srcSetWebp,sizes:T.sizes}),d.default.createElement(S,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,l.default)({alt:a,title:t,loading:E},T))}}))}if(h){var C=h,q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:C.width,height:C.height},n);return"inherit"===n.display&&delete q.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(C.srcSet)},O&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:O,width:C.width,opacity:this.state.imgLoaded?0:1,height:C.height},R&&N)}),C.base64&&d.default.createElement(S,(0,l.default)({src:C.base64},x)),C.tracedSVG&&d.default.createElement(S,(0,l.default)({src:C.tracedSVG},x)),this.state.isVisible&&d.default.createElement("picture",null,C.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),d.default.createElement(S,{alt:a,title:t,width:C.width,height:C.height,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,l.default)({alt:a,title:t,loading:E},C))}}))}return null},t}(d.default.Component);w.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var E=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),L=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});w.propTypes={resolutions:E,sizes:L,fixed:E,fluid:L,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var R=w;t.default=R}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-7dfba30b34f04e65a022.js.map