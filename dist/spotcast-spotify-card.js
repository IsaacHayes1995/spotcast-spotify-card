(()=>{"use strict";const t=t=>{let e;const i=new Set,r=(t,r)=>{const o="function"==typeof t?t(e):t;if(!Object.is(o,e)){const t=e;e=(null!=r?r:"object"!=typeof o||null===o)?o:Object.assign({},e,o),i.forEach((i=>i(e,t)))}},o=()=>e,s={setState:r,getState:o,getInitialState:()=>a,subscribe:t=>(i.add(t),()=>i.delete(t))},a=e=t(r,o,s);return s};var e;!function(t){t.INITIAL="INITIAL",t.START="START",t.FAILED="FAILED",t.FINISHED="FINISHED",t.RETRIEVING="RETRIEVING"}(e||(e={}));const i=(r=t=>({hass:null,setHass:e=>t({hass:e}),config:null,setConfig:e=>t({config:e}),retrieveState:e.INITIAL,setRetrieveState:e=>t({retrieveState:e})}),r?t(r):t);var r;const o=i.getInitialState();const s=globalThis,a=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),c=new WeakMap;class l{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(a&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=c.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&c.set(e,t))}return t}toString(){return this.cssText}}const d=(t,e)=>{if(a)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),r=s.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=i.cssText,t.appendChild(e)}},h=a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new l("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:p,defineProperty:b,getOwnPropertyDescriptor:u,getOwnPropertyNames:f,getOwnPropertySymbols:g,getPrototypeOf:m}=Object,w=globalThis,v=w.trustedTypes,y=v?v.emptyScript:"",k=w.reactiveElementPolyfillSupport,$=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},x=(t,e)=>!p(t,e),S={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),w.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=S){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&b(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:o}=u(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return r?.call(this)},set(e){const s=r?.call(this);o.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??S}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=m(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...f(t),...g(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return d(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:_).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=r,this[r]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??x)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[$("elementProperties")]=new Map,A[$("finalized")]=new Map,k?.({ReactiveElement:A}),(w.reactiveElementVersions??=[]).push("2.0.4");const E=globalThis,C=E.trustedTypes,z=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,T="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,R="?"+P,U=`<${R}>`,O=document,I=()=>O.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,H=t=>M(t)||"function"==typeof t?.[Symbol.iterator],j="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,F=/>/g,W=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,B=/"/g,q=/^(?:script|style|textarea|title)$/i,J=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),Z=J(1),G=(J(2),J(3),Symbol.for("lit-noChange")),Y=Symbol.for("lit-nothing"),K=new WeakMap,Q=O.createTreeWalker(O,129);function X(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==z?z.createHTML(e):e}const tt=(t,e)=>{const i=t.length-1,r=[];let o,s=2===e?"<svg>":3===e?"<math>":"",a=L;for(let e=0;e<i;e++){const i=t[e];let n,c,l=-1,d=0;for(;d<i.length&&(a.lastIndex=d,c=a.exec(i),null!==c);)d=a.lastIndex,a===L?"!--"===c[1]?a=D:void 0!==c[1]?a=F:void 0!==c[2]?(q.test(c[2])&&(o=RegExp("</"+c[2],"g")),a=W):void 0!==c[3]&&(a=W):a===W?">"===c[0]?(a=o??L,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,n=c[1],a=void 0===c[3]?W:'"'===c[3]?B:V):a===B||a===V?a=W:a===D||a===F?a=L:(a=W,o=void 0);const h=a===W&&t[e+1].startsWith("/>")?" ":"";s+=a===L?i+U:l>=0?(r.push(n),i.slice(0,l)+T+i.slice(l)+P+h):i+P+(-2===l?e:h)}return[X(t,s+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class et{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let o=0,s=0;const a=t.length-1,n=this.parts,[c,l]=tt(t,e);if(this.el=et.createElement(c,i),Q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=Q.nextNode())&&n.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(T)){const e=l[s++],i=r.getAttribute(t).split(P),a=/([.?@])?(.*)/.exec(e);n.push({type:1,index:o,name:a[2],strings:i,ctor:"."===a[1]?at:"?"===a[1]?nt:"@"===a[1]?ct:st}),r.removeAttribute(t)}else t.startsWith(P)&&(n.push({type:6,index:o}),r.removeAttribute(t));if(q.test(r.tagName)){const t=r.textContent.split(P),e=t.length-1;if(e>0){r.textContent=C?C.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],I()),Q.nextNode(),n.push({type:2,index:++o});r.append(t[e],I())}}}else if(8===r.nodeType)if(r.data===R)n.push({type:2,index:o});else{let t=-1;for(;-1!==(t=r.data.indexOf(P,t+1));)n.push({type:7,index:o}),t+=P.length-1}o++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function it(t,e,i=t,r){if(e===G)return e;let o=void 0!==r?i._$Co?.[r]:i._$Cl;const s=N(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),void 0===s?o=void 0:(o=new s(t),o._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=o:i._$Cl=o),void 0!==o&&(e=it(t,o._$AS(t,e.values),o,r)),e}class rt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??O).importNode(e,!0);Q.currentNode=r;let o=Q.nextNode(),s=0,a=0,n=i[0];for(;void 0!==n;){if(s===n.index){let e;2===n.type?e=new ot(o,o.nextSibling,this,t):1===n.type?e=new n.ctor(o,n.name,n.strings,this,t):6===n.type&&(e=new lt(o,this,t)),this._$AV.push(e),n=i[++a]}s!==n?.index&&(o=Q.nextNode(),s++)}return Q.currentNode=O,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class ot{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=it(this,t,e),N(t)?t===Y||null==t||""===t?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==G&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):H(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Y&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=et.createElement(X(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new rt(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new et(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const o of t)r===e.length?e.push(i=new ot(this.O(I()),this.O(I()),this,this.options)):i=e[r],i._$AI(o),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class st{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,o){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Y}_$AI(t,e=this,i,r){const o=this.strings;let s=!1;if(void 0===o)t=it(this,t,e,0),s=!N(t)||t!==this._$AH&&t!==G,s&&(this._$AH=t);else{const r=t;let a,n;for(t=o[0],a=0;a<o.length-1;a++)n=it(this,r[i+a],e,a),n===G&&(n=this._$AH[a]),s||=!N(n)||n!==this._$AH[a],n===Y?t=Y:t!==Y&&(t+=(n??"")+o[a+1]),this._$AH[a]=n}s&&!r&&this.j(t)}j(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class at extends st{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Y?void 0:t}}class nt extends st{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Y)}}class ct extends st{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){if((t=it(this,t,e,0)??Y)===G)return;const i=this._$AH,r=t===Y&&i!==Y||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==Y&&(i===Y||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class lt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){it(this,t)}}const dt=E.litHtmlPolyfillSupport;dt?.(et,ot),(E.litHtmlVersions??=[]).push("3.2.1");class ht extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const r=i?.renderBefore??e;let o=r._$litPart$;if(void 0===o){const t=i?.renderBefore??null;r._$litPart$=o=new ot(e.insertBefore(I(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return G}}ht._$litElement$=!0,ht.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ht});const pt=globalThis.litElementPolyfillSupport;pt?.({LitElement:ht});(globalThis.litElementVersions??=[]).push("4.1.1");const bt=((t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1]),t[0]);return new l(i,t,n)})`
*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}/*
! tailwindcss v3.4.16 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}

:root,
[data-theme] {
  background-color: var(--fallback-b1,oklch(var(--b1)/1));
  color: var(--fallback-bc,oklch(var(--bc)/1));
}

@supports not (color: oklch(0% 0 0)) {

  :root {
    color-scheme: light;
    --fallback-p: #491eff;
    --fallback-pc: #d4dbff;
    --fallback-s: #ff41c7;
    --fallback-sc: #fff9fc;
    --fallback-a: #00cfbd;
    --fallback-ac: #00100d;
    --fallback-n: #2b3440;
    --fallback-nc: #d7dde4;
    --fallback-b1: #ffffff;
    --fallback-b2: #e5e6e6;
    --fallback-b3: #e5e6e6;
    --fallback-bc: #1f2937;
    --fallback-in: #00b3f0;
    --fallback-inc: #000000;
    --fallback-su: #00ca92;
    --fallback-suc: #000000;
    --fallback-wa: #ffc22d;
    --fallback-wac: #000000;
    --fallback-er: #ff6f70;
    --fallback-erc: #000000;
  }

  @media (prefers-color-scheme: dark) {

    :root {
      color-scheme: dark;
      --fallback-p: #7582ff;
      --fallback-pc: #050617;
      --fallback-s: #ff71cf;
      --fallback-sc: #190211;
      --fallback-a: #00c7b5;
      --fallback-ac: #000e0c;
      --fallback-n: #2a323c;
      --fallback-nc: #a6adbb;
      --fallback-b1: #1d232a;
      --fallback-b2: #191e24;
      --fallback-b3: #15191e;
      --fallback-bc: #a6adbb;
      --fallback-in: #00b3f0;
      --fallback-inc: #000000;
      --fallback-su: #00ca92;
      --fallback-suc: #000000;
      --fallback-wa: #ffc22d;
      --fallback-wac: #000000;
      --fallback-er: #ff6f70;
      --fallback-erc: #000000;
    }
  }
}

html {
  -webkit-tap-highlight-color: transparent;
}

* {
  scrollbar-color: color-mix(in oklch, currentColor 35%, transparent) transparent;
}

*:hover {
  scrollbar-color: color-mix(in oklch, currentColor 60%, transparent) transparent;
}

ha-card {
  color-scheme: light;
  --in: 72.06% 0.191 231.6;
  --su: 64.8% 0.150 160;
  --wa: 84.71% 0.199 83.87;
  --er: 71.76% 0.221 22.18;
  --pc: 89.824% 0.06192 275.75;
  --ac: 15.352% 0.0368 183.61;
  --inc: 0% 0 0;
  --suc: 0% 0 0;
  --wac: 0% 0 0;
  --erc: 0% 0 0;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --p: 49.12% 0.3096 275.75;
  --s: 69.71% 0.329 342.55;
  --sc: 98.71% 0.0106 342.55;
  --a: 76.76% 0.184 183.61;
  --n: 32.1785% 0.02476 255.701624;
  --nc: 89.4994% 0.011585 252.096176;
  --b1: 100% 0 0;
  --b2: 96.1151% 0 0;
  --b3: 92.4169% 0.00108 197.137559;
  --bc: 27.8078% 0.029596 256.847952;
}

@media (prefers-color-scheme: dark) {

  ha-card {
    color-scheme: dark;
    --in: 72.06% 0.191 231.6;
    --su: 64.8% 0.150 160;
    --wa: 84.71% 0.199 83.87;
    --er: 71.76% 0.221 22.18;
    --pc: 13.138% 0.0392 275.75;
    --sc: 14.96% 0.052 342.55;
    --ac: 14.902% 0.0334 183.61;
    --inc: 0% 0 0;
    --suc: 0% 0 0;
    --wac: 0% 0 0;
    --erc: 0% 0 0;
    --rounded-box: 1rem;
    --rounded-btn: 0.5rem;
    --rounded-badge: 1.9rem;
    --animation-btn: 0.25s;
    --animation-input: .2s;
    --btn-focus-scale: 0.95;
    --border-btn: 1px;
    --tab-border: 1px;
    --tab-radius: 0.5rem;
    --p: 65.69% 0.196 275.75;
    --s: 74.8% 0.26 342.55;
    --a: 74.51% 0.167 183.61;
    --n: 31.3815% 0.021108 254.139175;
    --nc: 74.6477% 0.0216 264.435964;
    --b1: 25.3267% 0.015896 252.417568;
    --b2: 23.2607% 0.013807 253.100675;
    --b3: 21.1484% 0.01165 254.087939;
    --bc: 74.6477% 0.0216 264.435964;
  }
}

[data-theme=light] {
  color-scheme: light;
  --in: 72.06% 0.191 231.6;
  --su: 64.8% 0.150 160;
  --wa: 84.71% 0.199 83.87;
  --er: 71.76% 0.221 22.18;
  --pc: 89.824% 0.06192 275.75;
  --ac: 15.352% 0.0368 183.61;
  --inc: 0% 0 0;
  --suc: 0% 0 0;
  --wac: 0% 0 0;
  --erc: 0% 0 0;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --p: 49.12% 0.3096 275.75;
  --s: 69.71% 0.329 342.55;
  --sc: 98.71% 0.0106 342.55;
  --a: 76.76% 0.184 183.61;
  --n: 32.1785% 0.02476 255.701624;
  --nc: 89.4994% 0.011585 252.096176;
  --b1: 100% 0 0;
  --b2: 96.1151% 0 0;
  --b3: 92.4169% 0.00108 197.137559;
  --bc: 27.8078% 0.029596 256.847952;
}

[data-theme=dark] {
  color-scheme: dark;
  --in: 72.06% 0.191 231.6;
  --su: 64.8% 0.150 160;
  --wa: 84.71% 0.199 83.87;
  --er: 71.76% 0.221 22.18;
  --pc: 13.138% 0.0392 275.75;
  --sc: 14.96% 0.052 342.55;
  --ac: 14.902% 0.0334 183.61;
  --inc: 0% 0 0;
  --suc: 0% 0 0;
  --wac: 0% 0 0;
  --erc: 0% 0 0;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --p: 65.69% 0.196 275.75;
  --s: 74.8% 0.26 342.55;
  --a: 74.51% 0.167 183.61;
  --n: 31.3815% 0.021108 254.139175;
  --nc: 74.6477% 0.0216 264.435964;
  --b1: 25.3267% 0.015896 252.417568;
  --b2: 23.2607% 0.013807 253.100675;
  --b3: 21.1484% 0.01165 254.087939;
  --bc: 74.6477% 0.0216 264.435964;
}
  .avatar {
  position: relative;
  display: inline-flex;
}
  .avatar > div {
  display: block;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}
  .avatar img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
  .avatar.placeholder > div {
  display: flex;
  align-items: center;
  justify-content: center;
}
  .badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-duration: 200ms;
  height: 1.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: fit-content;
  padding-left: 0.563rem;
  padding-right: 0.563rem;
  border-radius: var(--rounded-badge, 1.9rem);
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));
  --tw-text-opacity: 1;
  color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));
}
  @media (hover:hover) {

  .table tr.hover:hover,
  .table tr.hover:nth-child(even):hover {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));
  }
}
  .card {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: var(--rounded-box, 1rem);
}
  .card:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
  .card figure {
  display: flex;
  align-items: center;
  justify-content: center;
}
  .card.image-full {
  display: grid;
}
  .card.image-full:before {
  position: relative;
  content: "";
  z-index: 10;
  border-radius: var(--rounded-box, 1rem);
  --tw-bg-opacity: 1;
  background-color: var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));
  opacity: 0.75;
}
  .card.image-full:before,
    .card.image-full > * {
  grid-column-start: 1;
  grid-row-start: 1;
}
  .card.image-full > figure img {
  height: 100%;
  object-fit: cover;
}
  .card.image-full > .card-body {
  position: relative;
  z-index: 20;
  --tw-text-opacity: 1;
  color: var(--fallback-nc,oklch(var(--nc)/var(--tw-text-opacity)));
}
  .mask {
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
}
  :where(.menu li) .badge {
  justify-self: end;
}
  .table {
  position: relative;
  width: 100%;
  border-radius: var(--rounded-box, 1rem);
  text-align: left;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
  .table :where(.table-pin-rows thead tr) {
  position: sticky;
  top: 0px;
  z-index: 1;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));
}
  .table :where(.table-pin-rows tfoot tr) {
  position: sticky;
  bottom: 0px;
  z-index: 1;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));
}
  .table :where(.table-pin-cols tr th) {
  position: sticky;
  left: 0px;
  right: 0px;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));
}
  .avatar-group :where(.avatar) {
  overflow: hidden;
  border-radius: 9999px;
  border-width: 4px;
  --tw-border-opacity: 1;
  border-color: var(--fallback-b1,oklch(var(--b1)/var(--tw-border-opacity)));
}
  .badge-ghost {
  --tw-border-opacity: 1;
  border-color: var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));
  --tw-text-opacity: 1;
  color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));
}
  @keyframes button-pop {

  0% {
    transform: scale(var(--btn-focus-scale, 0.98));
  }

  40% {
    transform: scale(1.02);
  }

  100% {
    transform: scale(1);
  }
}
  .card :where(figure:first-child) {
  overflow: hidden;
  border-start-start-radius: inherit;
  border-start-end-radius: inherit;
  border-end-start-radius: unset;
  border-end-end-radius: unset;
}
  .card :where(figure:last-child) {
  overflow: hidden;
  border-start-start-radius: unset;
  border-start-end-radius: unset;
  border-end-start-radius: inherit;
  border-end-end-radius: inherit;
}
  .card:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}
  .card.bordered {
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));
}
  .card.compact .card-body {
  padding: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
  .card.image-full :where(figure) {
  overflow: hidden;
  border-radius: inherit;
}
  @keyframes checkmark {

  0% {
    background-position-y: 5px;
  }

  50% {
    background-position-y: -2px;
  }

  100% {
    background-position-y: 0;
  }
}
  .mask-squircle {
  mask-image: url("data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100 0C20 0 0 20 0 100s20 100 100 100 100-20 100-100S180 0 100 0Z'/%3e%3c/svg%3e");
}
  @keyframes modal-pop {

  0% {
    opacity: 0;
  }
}
  @keyframes progress-loading {

  50% {
    background-position-x: -115%;
  }
}
  @keyframes radiomark {

  0% {
    box-shadow: 0 0 0 12px var(--fallback-b1,oklch(var(--b1)/1)) inset,
      0 0 0 12px var(--fallback-b1,oklch(var(--b1)/1)) inset;
  }

  50% {
    box-shadow: 0 0 0 3px var(--fallback-b1,oklch(var(--b1)/1)) inset,
      0 0 0 3px var(--fallback-b1,oklch(var(--b1)/1)) inset;
  }

  100% {
    box-shadow: 0 0 0 4px var(--fallback-b1,oklch(var(--b1)/1)) inset,
      0 0 0 4px var(--fallback-b1,oklch(var(--b1)/1)) inset;
  }
}
  @keyframes rating-pop {

  0% {
    transform: translateY(-0.125em);
  }

  40% {
    transform: translateY(-0.125em);
  }

  100% {
    transform: translateY(0);
  }
}
  .skeleton {
  border-radius: var(--rounded-box, 1rem);
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b3,oklch(var(--b3)/var(--tw-bg-opacity)));
  will-change: background-position;
  animation: skeleton 1.8s ease-in-out infinite;
  background-image: linear-gradient(
    105deg,
    transparent 0%,
    transparent 40%,
    var(--fallback-b1,oklch(var(--b1)/1)) 50%,
    transparent 60%,
    transparent 100%
  );
  background-size: 200% auto;
  background-repeat: no-repeat;
  background-position-x: -50%;
}
  @media (prefers-reduced-motion) {

  .skeleton {
    animation-duration: 15s;
  }
}
  @keyframes skeleton {

  from {
    background-position: 150%;
  }

  to {
    background-position: -50%;
  }
}
  .table:where([dir="rtl"], [dir="rtl"] *) {
  text-align: right;
}
  .table :where(th, td) {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  vertical-align: middle;
}
  .table tr.active,
  .table tr.active:nth-child(even),
  .table-zebra tbody tr:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));
}
  .table :where(thead tr, tbody tr:not(:last-child), tbody tr:first-child:last-child) {
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-bottom-color: var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));
}
  .table :where(thead, tfoot) {
  white-space: nowrap;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 700;
  color: var(--fallback-bc,oklch(var(--bc)/0.6));
}
  .table :where(tfoot) {
  border-top-width: 1px;
  --tw-border-opacity: 1;
  border-top-color: var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));
}
  @keyframes toast-pop {

  0% {
    transform: scale(0.9);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
  .badge-sm {
  height: 1rem;
  font-size: 0.75rem;
  line-height: 1rem;
  padding-left: 0.438rem;
  padding-right: 0.438rem;
}
  .avatar.online:before {
  content: "";
  position: absolute;
  z-index: 10;
  display: block;
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-su,oklch(var(--su)/var(--tw-bg-opacity)));
  outline-style: solid;
  outline-width: 2px;
  outline-color: var(--fallback-b1,oklch(var(--b1)/1));
  width: 15%;
  height: 15%;
  top: 7%;
  right: 7%;
}
  .avatar.offline:before {
  content: "";
  position: absolute;
  z-index: 10;
  display: block;
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b3,oklch(var(--b3)/var(--tw-bg-opacity)));
  outline-style: solid;
  outline-width: 2px;
  outline-color: var(--fallback-b1,oklch(var(--b1)/1));
  width: 15%;
  height: 15%;
  top: 7%;
  right: 7%;
}
  .static {
  position: static;
}
  .flex {
  display: flex;
}
  .table {
  display: table;
}
  .h-12 {
  height: 3rem;
}
  .h-32 {
  height: 8rem;
}
  .h-4 {
  height: 1rem;
}
  .w-12 {
  width: 3rem;
}
  .w-28 {
  width: 7rem;
}
  .w-52 {
  width: 13rem;
}
  .w-full {
  width: 100%;
}
  .flex-col {
  flex-direction: column;
}
  .items-center {
  align-items: center;
}
  .gap-3 {
  gap: 0.75rem;
}
  .gap-4 {
  gap: 1rem;
}
  .overflow-x-auto {
  overflow-x: auto;
}
  .text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
  .font-bold {
  font-weight: 700;
}
  .opacity-50 {
  opacity: 0.5;
}
`,ut=t=>{let e=[];function i(i,r){t=r?i:Object.assign(Object.assign({},t),i);let o=e;for(let e=0;e<o.length;e++)o[e](t)}return{get state(){return t},action(e){function r(t){i(t,!1)}return function(){let i=[t];for(let t=0;t<arguments.length;t++)i.push(arguments[t]);let o=e.apply(this,i);if(null!=o)return o instanceof Promise?o.then(r):r(o)}},setState:i,clearState(){t=void 0},subscribe:t=>(e.push(t),()=>{!function(t){let i=[];for(let r=0;r<e.length;r++)e[r]===t?t=null:i.push(e[r]);e=i}(t)})}},ft=(t,e,i,r,o={unsubGrace:!0})=>{if(t[e])return t[e];let s,a,n=0,c=ut();const l=()=>{if(!i)throw new Error("Collection does not support refresh");return i(t).then((t=>c.setState(t,!0)))},d=()=>l().catch((e=>{if(t.connected)throw e})),h=()=>{a=void 0,s&&s.then((t=>{t()})),c.clearState(),t.removeEventListener("ready",l),t.removeEventListener("disconnected",p)},p=()=>{a&&(clearTimeout(a),h())};return t[e]={get state(){return c.state},refresh:l,subscribe(e){n++,1===n&&(()=>{if(void 0!==a)return clearTimeout(a),void(a=void 0);r&&(s=r(t,c)),i&&(t.addEventListener("ready",d),d()),t.addEventListener("disconnected",p)})();const l=c.subscribe(e);return void 0!==c.state&&setTimeout((()=>e(c.state)),0),()=>{l(),n--,n||(o.unsubGrace?a=setTimeout(h,5e3):h())}}},t[e]};function gt(t,e){if(void 0===t)return null;const{domain:i,service:r}=e.data,o=t[i];if(!o||!(r in o))return null;const s={};return Object.keys(o).forEach((t=>{t!==r&&(s[t]=o[t])})),{[i]:s}}const mt=((t,e,i=!1)=>{let r;return function(...o){const s=this,a=i&&!r;clearTimeout(r),r=setTimeout((()=>{r=void 0,i||t.apply(s,o)}),e),a&&t.apply(s,o)}})(((t,e)=>wt(t).then((t=>e.setState(t,!0)))),5e3),wt=t=>t.sendMessagePromise({type:"get_services"}),vt=(t,e)=>Promise.all([t.subscribeEvents((i=>function(t,e,i){var r;const o=e.state;if(void 0===o)return;const{domain:s,service:a}=i.data;if(!(null===(r=o.domain)||void 0===r?void 0:r.service)){const t=Object.assign(Object.assign({},o[s]),{[a]:{description:"",fields:{}}});e.setState({[s]:t})}mt(t,e)}(t,e,i)),"service_registered"),t.subscribeEvents(e.action(gt),"service_removed")]).then((t=>()=>t.forEach((t=>t())))),yt=t=>ft(t,"_srv",wt,vt);class kt{static getTemplate(){return Z`
            <div class="overflow-x-auto">
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>
                            1
                        </th>
                        <td>
                            <div class="flex items-center gap-3">
                                <div class="avatar">
                                    <div class="mask mask-squircle h-12 w-12">
                                        <img
                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                        alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">Hart Hagerty</div>
                                    <div class="text-sm opacity-50">United States</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Zemlak, Daniel and Leannon
                            <br />
                            <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
                        </td>
                    </tr>

                    <!-- foot -->
                    <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                    </tfoot>
                </table>
            </div>`}}var $t=function(t,e,i,r){var o,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(a=(s<3?o(a):s>3?o(e,i,a):o(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};console.info("Spotcast spotify card with zustand, lit and tailwind, tracks endpoint");let _t=class extends ht{static{this.styles=bt}constructor(){super(),this.retrieveState=o.retrieveState,i.subscribe((t=>{this.retrieveState=t.retrieveState}))}set hass(t){o.setHass(t)}setConfig(t){o.setConfig(t)}connectedCallback(){super.connectedCallback()}isSpotcastInstalled(){return!!this.hass?.connection&&void 0!==yt(this.hass.connection).state.spotcast}render(){return Z`
      <ha-card header="Spotcast spotify card">
        <div class="card-content">${kt.getTemplate()}</div>
      </ha-card>
    `}static getConfigElement(){return document.createElement("spotcast-spotify-card-editor")}static getStubConfig(){return{header:"Test"}}};_t=$t([(t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)})("spotcast-spotify-card")],_t);customElements.get("spotcast-spotify-card")||customElements.define("spotcast-spotify-card",_t),new class{constructor(){console.log("spotcastwebsocket constructor"),i.subscribe((async t=>{if(t.hass&&(this._hass=t.hass),console.log("state.retrieveState",t.retrieveState),t.retrieveState===e.INITIAL&&t.hass&&t.config){o.setRetrieveState(e.RETRIEVING);await this.fetchDevices(),await this.fetchPlayer(),await this.fetchChromecasts();var i=await this.fetchCategories(),r=(await this.fetchPlaylists("mikeve97",i.categories[0].name),await this.fetchView(),await this.fetchSearch("mikeve97","This is adele","playlist"),await this.fetchTracks("mikeve97","37i9dQZF1E8KQMxdQmr5oL"));await this.fetchLikedMedia();console.log(r),o.setRetrieveState(e.FINISHED)}}))}async _callWebSocket(t,e={}){const i={type:t,...e};console.log(`Calling method ${t} with payload ${JSON.stringify(i)}`);try{return await this._hass.callWS(i)}catch(e){throw new Error(`Failed to fetch ${t} (payload: ${JSON.stringify(i)}): ${JSON.stringify(e)}`)}}async fetchDevices(t){const e=await this._callWebSocket("spotcast/devices",{account:t});return console.log("Devices fetched:",e),e}async fetchPlayer(t){const e=await this._callWebSocket("spotcast/player",{account:t});return console.log("Current player fetched:",e),e}async fetchChromecasts(){const t=await this._callWebSocket("spotcast/castdevices");return console.log("Chromecast devices fetched:",t),t}async fetchCategories(t){const e=await this._callWebSocket("spotcast/categories",{account:t});return console.log("Categories fetched:",e),e}async fetchPlaylists(t,e){const i=await this._callWebSocket("spotcast/playlists",{account:t,category:e});return console.log("Playlists fetched:",i),i}async fetchView(t,e="recently-played"){const i=await this._callWebSocket("spotcast/view",{account:t,url:e,limit:20});return console.log("View fetched:",i),i}async fetchSearch(t,e="",i="playlist"){const r=await this._callWebSocket("spotcast/search",{account:t,query:e,searchType:i});return console.log("Search results fetched:",r),r}async fetchTracks(t,e=""){const i=await this._callWebSocket("spotcast/tracks",{account:t,playlistId:e});return console.log("tracks fetched:",i),i}async fetchLikedMedia(t){const e=await this._callWebSocket("spotcast/liked_media",{account:t});return console.log("tracks fetched:",e),e}},new class{constructor(){console.log("spotcastwebsocket constructor"),i.subscribe((async t=>{t.hass&&(this._hass=t.hass),t.retrieveState===e.INITIAL&&t.hass&&t.config&&await this.likeMedia(["spotify:track:716qIdh6lLnhoYvvZXFYlJ"])}))}async likeMedia(t,e){console.log("liking media:",t),await this._hass.callService("spotcast","like_media",{account:e,spotify_uris:t})}},window.customCards=window.customCards||[],window.customCards.push({type:"spotcast-spotify-card",name:"Spotcast spotify card",description:"Spotify card for the spotcast component"})})();