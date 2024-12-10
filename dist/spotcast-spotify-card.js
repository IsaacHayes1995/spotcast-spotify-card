(()=>{"use strict";const t=t=>{let e;const o=new Set,r=(t,r)=>{const a="function"==typeof t?t(e):t;if(!Object.is(a,e)){const t=e;e=(null!=r?r:"object"!=typeof a||null===a)?a:Object.assign({},e,a),o.forEach((o=>o(e,t)))}},a=()=>e,i={setState:r,getState:a,getInitialState:()=>n,subscribe:t=>(o.add(t),()=>o.delete(t))},n=e=t(r,a,i);return i};var e;!function(t){t.INITIAL="INITIAL",t.START="START",t.FAILED="FAILED",t.FINISHED="FINISHED",t.RETRIEVING="RETRIEVING"}(e||(e={}));const o=(r=t=>({hass:null,setHass:e=>t({hass:e}),config:null,setConfig:e=>t({config:e}),retrieveState:e.INITIAL,setRetrieveState:e=>t({retrieveState:e})}),r?t(r):t);var r;const a=o.getInitialState();const i=globalThis,n=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),l=new WeakMap;class c{constructor(t,e,o){if(this._$cssResult$=!0,o!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=l.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&l.set(e,t))}return t}toString(){return this.cssText}}const d=(t,e)=>{if(n)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const o of e){const e=document.createElement("style"),r=i.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=o.cssText,t.appendChild(e)}},h=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new c("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:b,defineProperty:p,getOwnPropertyDescriptor:u,getOwnPropertyNames:f,getOwnPropertySymbols:m,getPrototypeOf:g}=Object,w=globalThis,v=w.trustedTypes,y=v?v.emptyScript:"",k=w.reactiveElementPolyfillSupport,x=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},_=(t,e)=>!b(t,e),A={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),w.litPropertyMetadata??=new WeakMap;class S extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(t,o,e);void 0!==r&&p(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){const{get:r,set:a}=u(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return r?.call(this)},set(e){const i=r?.call(this);a.call(this,e),this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const t=this.properties,e=[...f(t),...m(t)];for(const o of e)this.createProperty(o,t[o])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,o]of e)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const o=this._$Eu(t,e);void 0!==o&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Eu(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return d(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EC(t,e){const o=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,o);if(void 0!==r&&!0===o.reflect){const a=(void 0!==o.converter?.toAttribute?o.converter:$).toAttribute(e,o.type);this._$Em=t,null==a?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(t,e){const o=this.constructor,r=o._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=o.getPropertyOptions(r),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=r,this[r]=a.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,o){if(void 0!==t){if(o??=this.constructor.getPropertyOptions(t),!(o.hasChanged??_)(this[t],e))return;this.P(t,e,o)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,o){this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,o]of t)!0!==o.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[x("elementProperties")]=new Map,S[x("finalized")]=new Map,k?.({ReactiveElement:S}),(w.reactiveElementVersions??=[]).push("2.0.4");const E=globalThis,C=E.trustedTypes,z=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,T="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,R="?"+P,U=`<${R}>`,I=document,M=()=>I.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,j=Array.isArray,H=t=>j(t)||"function"==typeof t?.[Symbol.iterator],N="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,W=/>/g,F=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,V=/"/g,Y=/^(?:script|style|textarea|title)$/i,q=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),Z=q(1),X=(q(2),q(3),Symbol.for("lit-noChange")),J=Symbol.for("lit-nothing"),G=new WeakMap,K=I.createTreeWalker(I,129);function Q(t,e){if(!j(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==z?z.createHTML(e):e}const tt=(t,e)=>{const o=t.length-1,r=[];let a,i=2===e?"<svg>":3===e?"<math>":"",n=L;for(let e=0;e<o;e++){const o=t[e];let s,l,c=-1,d=0;for(;d<o.length&&(n.lastIndex=d,l=n.exec(o),null!==l);)d=n.lastIndex,n===L?"!--"===l[1]?n=D:void 0!==l[1]?n=W:void 0!==l[2]?(Y.test(l[2])&&(a=RegExp("</"+l[2],"g")),n=F):void 0!==l[3]&&(n=F):n===F?">"===l[0]?(n=a??L,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,s=l[1],n=void 0===l[3]?F:'"'===l[3]?V:B):n===V||n===B?n=F:n===D||n===W?n=L:(n=F,a=void 0);const h=n===F&&t[e+1].startsWith("/>")?" ":"";i+=n===L?o+U:c>=0?(r.push(s),o.slice(0,c)+T+o.slice(c)+P+h):o+P+(-2===c?e:h)}return[Q(t,i+(t[o]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class et{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let a=0,i=0;const n=t.length-1,s=this.parts,[l,c]=tt(t,e);if(this.el=et.createElement(l,o),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=K.nextNode())&&s.length<n;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(T)){const e=c[i++],o=r.getAttribute(t).split(P),n=/([.?@])?(.*)/.exec(e);s.push({type:1,index:a,name:n[2],strings:o,ctor:"."===n[1]?nt:"?"===n[1]?st:"@"===n[1]?lt:it}),r.removeAttribute(t)}else t.startsWith(P)&&(s.push({type:6,index:a}),r.removeAttribute(t));if(Y.test(r.tagName)){const t=r.textContent.split(P),e=t.length-1;if(e>0){r.textContent=C?C.emptyScript:"";for(let o=0;o<e;o++)r.append(t[o],M()),K.nextNode(),s.push({type:2,index:++a});r.append(t[e],M())}}}else if(8===r.nodeType)if(r.data===R)s.push({type:2,index:a});else{let t=-1;for(;-1!==(t=r.data.indexOf(P,t+1));)s.push({type:7,index:a}),t+=P.length-1}a++}}static createElement(t,e){const o=I.createElement("template");return o.innerHTML=t,o}}function ot(t,e,o=t,r){if(e===X)return e;let a=void 0!==r?o._$Co?.[r]:o._$Cl;const i=O(e)?void 0:e._$litDirective$;return a?.constructor!==i&&(a?._$AO?.(!1),void 0===i?a=void 0:(a=new i(t),a._$AT(t,o,r)),void 0!==r?(o._$Co??=[])[r]=a:o._$Cl=a),void 0!==a&&(e=ot(t,a._$AS(t,e.values),a,r)),e}class rt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,r=(t?.creationScope??I).importNode(e,!0);K.currentNode=r;let a=K.nextNode(),i=0,n=0,s=o[0];for(;void 0!==s;){if(i===s.index){let e;2===s.type?e=new at(a,a.nextSibling,this,t):1===s.type?e=new s.ctor(a,s.name,s.strings,this,t):6===s.type&&(e=new ct(a,this,t)),this._$AV.push(e),s=o[++n]}i!==s?.index&&(a=K.nextNode(),i++)}return K.currentNode=I,r}p(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class at{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,r){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ot(this,t,e),O(t)?t===J||null==t||""===t?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==X&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):H(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==J&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(I.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:o}=t,r="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=et.createElement(Q(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new rt(r,this),o=t.u(this.options);t.p(e),this.T(o),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new et(t)),e}k(t){j(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const a of t)r===e.length?e.push(o=new at(this.O(M()),this.O(M()),this,this.options)):o=e[r],o._$AI(a),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,r,a){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=a,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=J}_$AI(t,e=this,o,r){const a=this.strings;let i=!1;if(void 0===a)t=ot(this,t,e,0),i=!O(t)||t!==this._$AH&&t!==X,i&&(this._$AH=t);else{const r=t;let n,s;for(t=a[0],n=0;n<a.length-1;n++)s=ot(this,r[o+n],e,n),s===X&&(s=this._$AH[n]),i||=!O(s)||s!==this._$AH[n],s===J?t=J:t!==J&&(t+=(s??"")+a[n+1]),this._$AH[n]=s}i&&!r&&this.j(t)}j(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class nt extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===J?void 0:t}}class st extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==J)}}class lt extends it{constructor(t,e,o,r,a){super(t,e,o,r,a),this.type=5}_$AI(t,e=this){if((t=ot(this,t,e,0)??J)===X)return;const o=this._$AH,r=t===J&&o!==J||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==J&&(o===J||r);r&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ct{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){ot(this,t)}}const dt=E.litHtmlPolyfillSupport;dt?.(et,at),(E.litHtmlVersions??=[]).push("3.2.1");class ht extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{const r=o?.renderBefore??e;let a=r._$litPart$;if(void 0===a){const t=o?.renderBefore??null;r._$litPart$=a=new at(e.insertBefore(M(),t),t,void 0,o??{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return X}}ht._$litElement$=!0,ht.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ht});const bt=globalThis.litElementPolyfillSupport;bt?.({LitElement:ht});(globalThis.litElementVersions??=[]).push("4.1.1");const pt=((t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,o,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1]),t[0]);return new c(o,t,s)})`
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
  @media (hover:hover) {

  .menu li > *:not(ul, .menu-title, details, .btn):active,
.menu li > *:not(ul, .menu-title, details, .btn).active,
.menu li > details > summary:active {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));
    --tw-text-opacity: 1;
    color: var(--fallback-nc,oklch(var(--nc)/var(--tw-text-opacity)));
  }

  .table tr.hover:hover,
  .table tr.hover:nth-child(even):hover {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));
  }
}
  .btn {
  display: inline-flex;
  height: 3rem;
  min-height: 3rem;
  flex-shrink: 0;
  cursor: pointer;
  user-select: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-radius: var(--rounded-btn, 0.5rem);
  border-color: transparent;
  border-color: oklch(var(--btn-color, var(--b2)) / var(--tw-border-opacity));
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1em;
  gap: 0.5rem;
  font-weight: 600;
  text-decoration-line: none;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  border-width: var(--border-btn, 1px);
  transition-property: color, background-color, border-color, opacity, box-shadow, transform;
  --tw-text-opacity: 1;
  color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  outline-color: var(--fallback-bc,oklch(var(--bc)/1));
  background-color: oklch(var(--btn-color, var(--b2)) / var(--tw-bg-opacity));
  --tw-bg-opacity: 1;
  --tw-border-opacity: 1;
}
  .btn-disabled,
  .btn[disabled],
  .btn:disabled {
  pointer-events: none;
}
  :where(.btn:is(input[type="checkbox"])),
:where(.btn:is(input[type="radio"])) {
  width: auto;
  appearance: none;
}
  .btn:is(input[type="checkbox"]):after,
.btn:is(input[type="radio"]):after {
  --tw-content: attr(aria-label);
  content: var(--tw-content);
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
  .divider {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  margin-top: 1rem;
  margin-bottom: 1rem;
  height: 1rem;
  white-space: nowrap;
}
  .divider:before,
  .divider:after {
  height: 0.125rem;
  width: 100%;
  flex-grow: 1;
  --tw-content: '';
  content: var(--tw-content);
  background-color: var(--fallback-bc,oklch(var(--bc)/0.1));
}
  .dropdown {
  position: relative;
  display: inline-block;
}
  .dropdown > *:not(summary):focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
  .dropdown .dropdown-content {
  position: absolute;
}
  .dropdown:is(:not(details)) .dropdown-content {
  visibility: hidden;
  opacity: 0;
  transform-origin: top;
  --tw-scale-x: .95;
  --tw-scale-y: .95;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-duration: 200ms;
}
  .dropdown-end .dropdown-content {
  inset-inline-end: 0px;
}
  .dropdown-left .dropdown-content {
  bottom: auto;
  inset-inline-end: 100%;
  top: 0px;
  transform-origin: right;
}
  .dropdown-right .dropdown-content {
  bottom: auto;
  inset-inline-start: 100%;
  top: 0px;
  transform-origin: left;
}
  .dropdown-bottom .dropdown-content {
  bottom: auto;
  top: 100%;
  transform-origin: top;
}
  .dropdown-top .dropdown-content {
  bottom: 100%;
  top: auto;
  transform-origin: bottom;
}
  .dropdown-end.dropdown-right .dropdown-content {
  bottom: 0px;
  top: auto;
}
  .dropdown-end.dropdown-left .dropdown-content {
  bottom: 0px;
  top: auto;
}
  .dropdown.dropdown-open .dropdown-content,
.dropdown:not(.dropdown-hover):focus .dropdown-content,
.dropdown:focus-within .dropdown-content {
  visibility: visible;
  opacity: 1;
}
  @media (hover: hover) {

  .dropdown.dropdown-hover:hover .dropdown-content {
    visibility: visible;
    opacity: 1;
  }

  .btn:hover {
    --tw-border-opacity: 1;
    border-color: var(--fallback-b3,oklch(var(--b3)/var(--tw-border-opacity)));
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b3,oklch(var(--b3)/var(--tw-bg-opacity)));
  }

  @supports (color: color-mix(in oklab, black, black)) {

    .btn:hover {
      background-color: color-mix(
            in oklab,
            oklch(var(--btn-color, var(--b2)) / var(--tw-bg-opacity, 1)) 90%,
            black
          );
      border-color: color-mix(
            in oklab,
            oklch(var(--btn-color, var(--b2)) / var(--tw-border-opacity, 1)) 90%,
            black
          );
    }
  }

  @supports not (color: oklch(0% 0 0)) {

    .btn:hover {
      background-color: var(--btn-color, var(--fallback-b2));
      border-color: var(--btn-color, var(--fallback-b2));
    }
  }

  .btn.glass:hover {
    --glass-opacity: 25%;
    --glass-border-opacity: 15%;
  }

  .btn-ghost:hover {
    border-color: transparent;
  }

  @supports (color: oklch(0% 0 0)) {

    .btn-ghost:hover {
      background-color: var(--fallback-bc,oklch(var(--bc)/0.2));
    }
  }

  .btn-disabled:hover,
    .btn[disabled]:hover,
    .btn:disabled:hover {
    --tw-border-opacity: 0;
    background-color: var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));
    --tw-bg-opacity: 0.2;
    color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));
    --tw-text-opacity: 0.2;
  }

  @supports (color: color-mix(in oklab, black, black)) {

    .btn:is(input[type="checkbox"]:checked):hover, .btn:is(input[type="radio"]:checked):hover {
      background-color: color-mix(in oklab, var(--fallback-p,oklch(var(--p)/1)) 90%, black);
      border-color: color-mix(in oklab, var(--fallback-p,oklch(var(--p)/1)) 90%, black);
    }
  }

  .dropdown.dropdown-hover:hover .dropdown-content {
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  :where(.menu li:not(.menu-title, .disabled) > *:not(ul, details, .menu-title)):not(.active, .btn):hover, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):not(.active, .btn):hover {
    cursor: pointer;
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  @supports (color: oklch(0% 0 0)) {

    :where(.menu li:not(.menu-title, .disabled) > *:not(ul, details, .menu-title)):not(.active, .btn):hover, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):not(.active, .btn):hover {
      background-color: var(--fallback-bc,oklch(var(--bc)/0.1));
    }
  }
}
  .dropdown:is(details) summary::-webkit-details-marker {
  display: none;
}
  .join .dropdown .join-item:first-child:not(:last-child),
  .join *:first-child:not(:last-child) .dropdown .join-item {
  border-start-end-radius: inherit;
  border-end-end-radius: inherit;
}
  .mask {
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
}
  .menu {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.5rem;
}
  .menu :where(li ul) {
  position: relative;
  white-space: nowrap;
  margin-inline-start: 1rem;
  padding-inline-start: 0.5rem;
}
  .menu :where(li:not(.menu-title) > *:not(ul, details, .menu-title, .btn)), .menu :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
  display: grid;
  grid-auto-flow: column;
  align-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  grid-auto-columns: minmax(auto, max-content) auto max-content;
  user-select: none;
}
  .menu li.disabled {
  cursor: not-allowed;
  user-select: none;
  color: var(--fallback-bc,oklch(var(--bc)/0.3));
}
  .menu :where(li > .menu-dropdown:not(.menu-dropdown-show)) {
  display: none;
}
  :where(.menu li) {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;
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
  @media (prefers-reduced-motion: no-preference) {

  .btn {
    animation: button-pop var(--animation-btn, 0.25s) ease-out;
  }
}
  .btn:active:hover,
  .btn:active:focus {
  animation: button-pop 0s ease-out;
  transform: scale(var(--btn-focus-scale, 0.97));
}
  @supports not (color: oklch(0% 0 0)) {

  .btn {
    background-color: var(--btn-color, var(--fallback-b2));
    border-color: var(--btn-color, var(--fallback-b2));
  }
}
  .btn:focus-visible {
  outline-style: solid;
  outline-width: 2px;
  outline-offset: 2px;
}
  .btn.glass {
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  outline-color: currentColor;
}
  .btn.glass.btn-active {
  --glass-opacity: 25%;
  --glass-border-opacity: 15%;
}
  .btn-ghost {
  border-width: 1px;
  border-color: transparent;
  background-color: transparent;
  color: currentColor;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  outline-color: currentColor;
}
  .btn-ghost.btn-active {
  border-color: transparent;
  background-color: var(--fallback-bc,oklch(var(--bc)/0.2));
}
  .btn.btn-disabled,
  .btn[disabled],
  .btn:disabled {
  --tw-border-opacity: 0;
  background-color: var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));
  --tw-bg-opacity: 0.2;
  color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));
  --tw-text-opacity: 0.2;
}
  .btn:is(input[type="checkbox"]:checked),
.btn:is(input[type="radio"]:checked) {
  --tw-border-opacity: 1;
  border-color: var(--fallback-p,oklch(var(--p)/var(--tw-border-opacity)));
  --tw-bg-opacity: 1;
  background-color: var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity)));
  --tw-text-opacity: 1;
  color: var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)));
}
  .btn:is(input[type="checkbox"]:checked):focus-visible, .btn:is(input[type="radio"]:checked):focus-visible {
  outline-color: var(--fallback-p,oklch(var(--p)/1));
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
  .divider:not(:empty) {
  gap: 1rem;
}
  .dropdown.dropdown-open .dropdown-content,
.dropdown:focus .dropdown-content,
.dropdown:focus-within .dropdown-content {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
  .join > :where(*:not(:first-child)):is(.btn) {
  margin-inline-start: calc(var(--border-btn) * -1);
}
  .mask-squircle {
  mask-image: url("data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100 0C20 0 0 20 0 100s20 100 100 100 100-20 100-100S180 0 100 0Z'/%3e%3c/svg%3e");
}
  :where(.menu li:empty) {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));
  opacity: 0.1;
  margin: 0.5rem 1rem;
  height: 1px;
}
  .menu :where(li ul):before {
  position: absolute;
  bottom: 0.75rem;
  inset-inline-start: 0px;
  top: 0.75rem;
  width: 1px;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));
  opacity: 0.1;
  content: "";
}
  .menu :where(li:not(.menu-title) > *:not(ul, details, .menu-title, .btn)),
.menu :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
  border-radius: var(--rounded-btn, 0.5rem);
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: start;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-duration: 200ms;
  text-wrap: balance;
}
  :where(.menu li:not(.menu-title, .disabled) > *:not(ul, details, .menu-title)):not(summary, .active, .btn).focus, :where(.menu li:not(.menu-title, .disabled) > *:not(ul, details, .menu-title)):not(summary, .active, .btn):focus, :where(.menu li:not(.menu-title, .disabled) > *:not(ul, details, .menu-title)):is(summary):not(.active, .btn):focus-visible, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):not(summary, .active, .btn).focus, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):not(summary, .active, .btn):focus, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):is(summary):not(.active, .btn):focus-visible {
  cursor: pointer;
  background-color: var(--fallback-bc,oklch(var(--bc)/0.1));
  --tw-text-opacity: 1;
  color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));
  outline: 2px solid transparent;
  outline-offset: 2px;
}
  .menu li > *:not(ul, .menu-title, details, .btn):active,
.menu li > *:not(ul, .menu-title, details, .btn).active,
.menu li > details > summary:active {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));
  --tw-text-opacity: 1;
  color: var(--fallback-nc,oklch(var(--nc)/var(--tw-text-opacity)));
}
  .menu :where(li > details > summary)::-webkit-details-marker {
  display: none;
}
  .menu :where(li > details > summary):after,
.menu :where(li > .menu-dropdown-toggle):after {
  justify-self: end;
  display: block;
  margin-top: -0.5rem;
  height: 0.5rem;
  width: 0.5rem;
  transform: rotate(45deg);
  transition-property: transform, margin-top;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  content: "";
  transform-origin: 75% 75%;
  box-shadow: 2px 2px;
  pointer-events: none;
}
  .menu :where(li > details[open] > summary):after,
.menu :where(li > .menu-dropdown-toggle.menu-dropdown-show):after {
  transform: rotate(225deg);
  margin-top: 0;
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
  .glass,
  .glass.btn-active {
  border: none;
  backdrop-filter: blur(var(--glass-blur, 40px));
  background-color: transparent;
  background-image: linear-gradient(
        135deg,
        rgb(255 255 255 / var(--glass-opacity, 30%)) 0%,
        rgb(0 0 0 / 0%) 100%
      ),
      linear-gradient(
        var(--glass-reflex-degree, 100deg),
        rgb(255 255 255 / var(--glass-reflex-opacity, 10%)) 25%,
        rgb(0 0 0 / 0%) 25%
      );
  box-shadow: 0 0 0 1px rgb(255 255 255 / var(--glass-border-opacity, 10%)) inset,
      0 0 0 2px rgb(0 0 0 / 5%);
  text-shadow: 0 1px rgb(0 0 0 / var(--glass-text-shadow-opacity, 5%));
}
  @media (hover: hover) {

  .glass.btn-active {
    border: none;
    backdrop-filter: blur(var(--glass-blur, 40px));
    background-color: transparent;
    background-image: linear-gradient(
          135deg,
          rgb(255 255 255 / var(--glass-opacity, 30%)) 0%,
          rgb(0 0 0 / 0%) 100%
        ),
        linear-gradient(
          var(--glass-reflex-degree, 100deg),
          rgb(255 255 255 / var(--glass-reflex-opacity, 10%)) 25%,
          rgb(0 0 0 / 0%) 25%
        );
    box-shadow: 0 0 0 1px rgb(255 255 255 / var(--glass-border-opacity, 10%)) inset,
        0 0 0 2px rgb(0 0 0 / 5%);
    text-shadow: 0 1px rgb(0 0 0 / var(--glass-text-shadow-opacity, 5%));
  }
}
  .btn-xs {
  height: 1.5rem;
  min-height: 1.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-size: 0.75rem;
}
  .btn-square:where(.btn-xs) {
  height: 1.5rem;
  width: 1.5rem;
  padding: 0px;
}
  .btn-circle:where(.btn-xs) {
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 9999px;
  padding: 0px;
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
  .join.join-vertical > :where(*:not(:first-child)):is(.btn) {
  margin-top: calc(var(--border-btn) * -1);
}
  .join.join-horizontal > :where(*:not(:first-child)):is(.btn) {
  margin-inline-start: calc(var(--border-btn) * -1);
  margin-top: 0px;
}
  .static {
  position: static;
}
  .z-\\[1\\] {
  z-index: 1;
}
  .m-1 {
  margin: 0.25rem;
}
  .mb-\\[-40px\\] {
  margin-bottom: -40px;
}
  .ml-auto {
  margin-left: auto;
}
  .flex {
  display: flex;
}
  .table {
  display: table;
}
  .size-5 {
  width: 1.25rem;
  height: 1.25rem;
}
  .h-12 {
  height: 3rem;
}
  .h-16 {
  height: 4rem;
}
  .h-32 {
  height: 8rem;
}
  .h-4 {
  height: 1rem;
}
  .max-h-\\[470px\\] {
  max-height: 470px;
}
  .max-h-\\[60px\\] {
  max-height: 60px;
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
  .items-end {
  align-items: flex-end;
}
  .items-center {
  align-items: center;
}
  .justify-between {
  justify-content: space-between;
}
  .gap-2 {
  gap: 0.5rem;
}
  .gap-3 {
  gap: 0.75rem;
}
  .gap-4 {
  gap: 1rem;
}
  .overflow-y-auto {
  overflow-y: auto;
}
  .overflow-x-hidden {
  overflow-x: hidden;
}
  .rounded-box {
  border-radius: var(--rounded-box, 1rem);
}
  .rounded-lg {
  border-radius: 0.5rem;
}
  .border-b {
  border-bottom-width: 1px;
}
  .border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity, 1));
}
  .bg-base-100 {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity, 1)));
}
  .p-2 {
  padding: 0.5rem;
}
  .p-3 {
  padding: 0.75rem;
}
  .pb-2 {
  padding-bottom: 0.5rem;
}
  .text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}
  .text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
  .text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
  .font-bold {
  font-weight: 700;
}
  .text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity, 1));
}
  .text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}
  .opacity-50 {
  opacity: 0.5;
}
  .shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
  .duration-200 {
  transition-duration: 200ms;
}
  .ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
  .hover\\:bg-primary\\/10:hover {
  background-color: var(--fallback-p,oklch(var(--p)/0.1));
}
`,ut=t=>{let e=[];function o(o,r){t=r?o:Object.assign(Object.assign({},t),o);let a=e;for(let e=0;e<a.length;e++)a[e](t)}return{get state(){return t},action(e){function r(t){o(t,!1)}return function(){let o=[t];for(let t=0;t<arguments.length;t++)o.push(arguments[t]);let a=e.apply(this,o);if(null!=a)return a instanceof Promise?a.then(r):r(a)}},setState:o,clearState(){t=void 0},subscribe:t=>(e.push(t),()=>{!function(t){let o=[];for(let r=0;r<e.length;r++)e[r]===t?t=null:o.push(e[r]);e=o}(t)})}},ft=(t,e,o,r,a={unsubGrace:!0})=>{if(t[e])return t[e];let i,n,s=0,l=ut();const c=()=>{if(!o)throw new Error("Collection does not support refresh");return o(t).then((t=>l.setState(t,!0)))},d=()=>c().catch((e=>{if(t.connected)throw e})),h=()=>{n=void 0,i&&i.then((t=>{t()})),l.clearState(),t.removeEventListener("ready",c),t.removeEventListener("disconnected",b)},b=()=>{n&&(clearTimeout(n),h())};return t[e]={get state(){return l.state},refresh:c,subscribe(e){s++,1===s&&(()=>{if(void 0!==n)return clearTimeout(n),void(n=void 0);r&&(i=r(t,l)),o&&(t.addEventListener("ready",d),d()),t.addEventListener("disconnected",b)})();const c=l.subscribe(e);return void 0!==l.state&&setTimeout((()=>e(l.state)),0),()=>{c(),s--,s||(a.unsubGrace?n=setTimeout(h,5e3):h())}}},t[e]};function mt(t,e){if(void 0===t)return null;const{domain:o,service:r}=e.data,a=t[o];if(!a||!(r in a))return null;const i={};return Object.keys(a).forEach((t=>{t!==r&&(i[t]=a[t])})),{[o]:i}}const gt=((t,e,o=!1)=>{let r;return function(...a){const i=this,n=o&&!r;clearTimeout(r),r=setTimeout((()=>{r=void 0,o||t.apply(i,a)}),e),n&&t.apply(i,a)}})(((t,e)=>wt(t).then((t=>e.setState(t,!0)))),5e3),wt=t=>t.sendMessagePromise({type:"get_services"}),vt=(t,e)=>Promise.all([t.subscribeEvents((o=>function(t,e,o){var r;const a=e.state;if(void 0===a)return;const{domain:i,service:n}=o.data;if(!(null===(r=a.domain)||void 0===r?void 0:r.service)){const t=Object.assign(Object.assign({},a[i]),{[n]:{description:"",fields:{}}});e.setState({[i]:t})}gt(t,e)}(t,e,o)),"service_registered"),t.subscribeEvents(e.action(mt),"service_removed")]).then((t=>()=>t.forEach((t=>t())))),yt=t=>ft(t,"_srv",wt,vt);class kt{static getTemplate(){const t=Array.from({length:10},((t,e)=>e+1));return Z`
            <div class="max-h-[470px] w-full overflow-y-auto overflow-x-hidden mb-[-40px]">
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${t.map((t=>Z`
                                <tr class="hover:bg-primary/10 ease-in-out duration-200 h-16">
                                    <th>${t}</th>
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
                                    </td>
                                    <td>
                                        <div class="dropdown dropdown-end">
                                            <div tabindex="0" role="button" class="btn btn-ghost m-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                                                    <path d="M3 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM8.5 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM15.5 8.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
                                                </svg>
                                            </div>
                                            <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                                <li><a>Item 1</a></li>
                                                <li><a>Item 2</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            `))}
                    </tbody>
                </table>
            </div>
        `}}class xt{static getTemplate(){return Z`
            <div class="flex justify-between items-end border-b border-gray-300 pb-2">
                <h1 class="text-4xl font-bold">Recently played</h1>
                <span class="text-lg ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-shuffle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.6 9.6 0 0 0 7.556 8a9.6 9.6 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.6 10.6 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.6 9.6 0 0 0 6.444 8a9.6 9.6 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5"/>
                        <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192"/>
                    </svg>
                </span>
                <div class="divider"></div>
            </div>`}}class $t{static getTemplate(){return Z`
            <div class="card glass max-h-[60px] p-3 rounded-lg">
                <div class="flex items-center justify-between gap-3">
                    <!-- Avatar and Text Section -->
                    <div class="flex items-center gap-3">
                        <div class="avatar">
                            <div class="mask mask-squircle h-12 w-12">
                                <img
                                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                    alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div class="font-bold text-white">Hart Hagerty</div>
                            <div class="text-sm text-gray-400">United States</div>
                        </div>
                    </div>

                    <!-- Icons Section -->
                    <div class="flex items-center gap-2">
                        <button class="btn btn-xs btn-ghost text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-speaker" viewBox="0 0 16 16">
                                <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                                <path d="M8 4.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5M8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                            </svg>
                        </button>
                        <button class="btn btn-xs btn-ghost text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
                            </svg>
                        </button>
                        
                    </div>
                </div>
            </div>
        `}}var _t=function(t,e,o,r){var a,i=arguments.length,n=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,o,n):a(e,o))||n);return i>3&&n&&Object.defineProperty(e,o,n),n};console.info("Spotcast spotify card UI fase ");let At=class extends ht{static{this.styles=pt}constructor(){super(),this.retrieveState=a.retrieveState,o.subscribe((t=>{this.retrieveState=t.retrieveState}))}set hass(t){}setConfig(t){}connectedCallback(){super.connectedCallback()}isSpotcastInstalled(){return!!this.hass?.connection&&void 0!==yt(this.hass.connection).state.spotcast}render(){return Z`
      <ha-card>
        <div class="card-content">
          ${xt.getTemplate()}
          ${kt.getTemplate()}
          ${$t.getTemplate()}
        </div>
      </ha-card>
    `}static getConfigElement(){return document.createElement("spotcast-spotify-card-editor")}static getStubConfig(){return{header:"Test"}}};At=_t([(t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)})("spotcast-spotify-card")],At);customElements.get("spotcast-spotify-card")||customElements.define("spotcast-spotify-card",At),new class{constructor(){console.log("spotcastwebsocket constructor"),o.subscribe((async t=>{if(t.hass&&(this._hass=t.hass),console.log("state.retrieveState",t.retrieveState),t.retrieveState===e.INITIAL&&t.hass&&t.config){a.setRetrieveState(e.RETRIEVING);await this.fetchDevices(),await this.fetchPlayer(),await this.fetchChromecasts();var o=await this.fetchCategories(),r=(await this.fetchPlaylists("mikeve97",o.categories[0].name),await this.fetchView(),await this.fetchSearch("mikeve97","This is adele","playlist"),await this.fetchTracks("mikeve97","37i9dQZF1E8KQMxdQmr5oL"));await this.fetchLikedMedia();console.log(r),a.setRetrieveState(e.FINISHED)}}))}async _callWebSocket(t,e={}){const o={type:t,...e};console.log(`Calling method ${t} with payload ${JSON.stringify(o)}`);try{return await this._hass.callWS(o)}catch(e){throw new Error(`Failed to fetch ${t} (payload: ${JSON.stringify(o)}): ${JSON.stringify(e)}`)}}async fetchDevices(t){const e=await this._callWebSocket("spotcast/devices",{account:t});return console.log("Devices fetched:",e),e}async fetchPlayer(t){const e=await this._callWebSocket("spotcast/player",{account:t});return console.log("Current player fetched:",e),e}async fetchChromecasts(){const t=await this._callWebSocket("spotcast/castdevices");return console.log("Chromecast devices fetched:",t),t}async fetchCategories(t){const e=await this._callWebSocket("spotcast/categories",{account:t});return console.log("Categories fetched:",e),e}async fetchPlaylists(t,e){const o=await this._callWebSocket("spotcast/playlists",{account:t,category:e});return console.log("Playlists fetched:",o),o}async fetchView(t,e="recently-played"){const o=await this._callWebSocket("spotcast/view",{account:t,url:e,limit:20});return console.log("View fetched:",o),o}async fetchSearch(t,e="",o="playlist"){const r=await this._callWebSocket("spotcast/search",{account:t,query:e,searchType:o});return console.log("Search results fetched:",r),r}async fetchTracks(t,e=""){const o=await this._callWebSocket("spotcast/tracks",{account:t,playlistId:e});return console.log("tracks fetched:",o),o}async fetchLikedMedia(t){const e=await this._callWebSocket("spotcast/liked_media",{account:t});return console.log("tracks fetched:",e),e}},new class{constructor(){console.log("spotcastwebsocket constructor"),o.subscribe((async t=>{t.hass&&(this._hass=t.hass),t.retrieveState===e.INITIAL&&t.hass&&t.config&&await this.likeMedia(["spotify:track:716qIdh6lLnhoYvvZXFYlJ"])}))}async likeMedia(t,e){console.log("liking media:",t),await this._hass.callService("spotcast","like_media",{account:e,spotify_uris:t})}},window.customCards=window.customCards||[],window.customCards.push({type:"spotcast-spotify-card",name:"Spotcast spotify card",description:"Spotify card for the spotcast component"})})();