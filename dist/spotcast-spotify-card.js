(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),a=new WeakMap;class o{constructor(t,e,a){if(this._$cssResult$=!0,a!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const r=this.t;if(e&&void 0===t){const e=void 0!==r&&1===r.length;e&&(t=a.get(r)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&a.set(r,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const a=1===t.length?t[0]:e.reduce(((e,r,a)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[a+1]),t[0]);return new o(a,t,r)},s=(r,a)=>{if(e)r.adoptedStyleSheets=a.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of a){const a=document.createElement("style"),i=t.litNonce;void 0!==i&&a.setAttribute("nonce",i),a.textContent=e.cssText,r.appendChild(a)}},l=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:c,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:p,getOwnPropertySymbols:u,getPrototypeOf:b}=Object,f=globalThis,w=f.trustedTypes,v=w?w.emptyScript:"",g=f.reactiveElementPolyfillSupport,m=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},k=(t,e)=>!c(t,e),x={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:k};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class _ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),a=this.getPropertyDescriptor(t,r,e);void 0!==a&&d(this.prototype,t,a)}}static getPropertyDescriptor(t,e,r){const{get:a,set:i}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return a?.call(this)},set(e){const o=a?.call(this);i.call(this,e),this.requestUpdate(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=b(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...p(t),...u(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){const r=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,r);if(void 0!==a&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:y).toAttribute(e,r.type);this._$Em=t,null==i?this.removeAttribute(a):this.setAttribute(a,i),this._$Em=null}}_$AK(t,e){const r=this.constructor,a=r._$Eh.get(t);if(void 0!==a&&this._$Em!==a){const t=r.getPropertyOptions(a),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=a,this[a]=i.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,r){if(void 0!==t){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??k)(this[t],e))return;this.P(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t)!0!==r.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[m("elementProperties")]=new Map,_[m("finalized")]=new Map,g?.({ReactiveElement:_}),(f.reactiveElementVersions??=[]).push("2.0.4");const $=globalThis,A=$.trustedTypes,S=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,j="?"+E,P=`<${j}>`,z=document,T=()=>z.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,I=t=>R(t)||"function"==typeof t?.[Symbol.iterator],U="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,H=/>/g,L=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,B=/"/g,V=/^(?:script|style|textarea|title)$/i,W=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),Y=W(1),q=(W(2),W(3),Symbol.for("lit-noChange")),F=Symbol.for("lit-nothing"),X=new WeakMap,G=z.createTreeWalker(z,129);function J(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const K=(t,e)=>{const r=t.length-1,a=[];let i,o=2===e?"<svg>":3===e?"<math>":"",n=N;for(let e=0;e<r;e++){const r=t[e];let s,l,c=-1,d=0;for(;d<r.length&&(n.lastIndex=d,l=n.exec(r),null!==l);)d=n.lastIndex,n===N?"!--"===l[1]?n=O:void 0!==l[1]?n=H:void 0!==l[2]?(V.test(l[2])&&(i=RegExp("</"+l[2],"g")),n=L):void 0!==l[3]&&(n=L):n===L?">"===l[0]?(n=i??N,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,s=l[1],n=void 0===l[3]?L:'"'===l[3]?B:D):n===B||n===D?n=L:n===O||n===H?n=N:(n=L,i=void 0);const h=n===L&&t[e+1].startsWith("/>")?" ":"";o+=n===N?r+P:c>=0?(a.push(s),r.slice(0,c)+C+r.slice(c)+E+h):r+E+(-2===c?e:h)}return[J(t,o+(t[r]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),a]};class Z{constructor({strings:t,_$litType$:e},r){let a;this.parts=[];let i=0,o=0;const n=t.length-1,s=this.parts,[l,c]=K(t,e);if(this.el=Z.createElement(l,r),G.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(a=G.nextNode())&&s.length<n;){if(1===a.nodeType){if(a.hasAttributes())for(const t of a.getAttributeNames())if(t.endsWith(C)){const e=c[o++],r=a.getAttribute(t).split(E),n=/([.?@])?(.*)/.exec(e);s.push({type:1,index:i,name:n[2],strings:r,ctor:"."===n[1]?at:"?"===n[1]?it:"@"===n[1]?ot:rt}),a.removeAttribute(t)}else t.startsWith(E)&&(s.push({type:6,index:i}),a.removeAttribute(t));if(V.test(a.tagName)){const t=a.textContent.split(E),e=t.length-1;if(e>0){a.textContent=A?A.emptyScript:"";for(let r=0;r<e;r++)a.append(t[r],T()),G.nextNode(),s.push({type:2,index:++i});a.append(t[e],T())}}}else if(8===a.nodeType)if(a.data===j)s.push({type:2,index:i});else{let t=-1;for(;-1!==(t=a.data.indexOf(E,t+1));)s.push({type:7,index:i}),t+=E.length-1}i++}}static createElement(t,e){const r=z.createElement("template");return r.innerHTML=t,r}}function Q(t,e,r=t,a){if(e===q)return e;let i=void 0!==a?r._$Co?.[a]:r._$Cl;const o=M(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(t),i._$AT(t,r,a)),void 0!==a?(r._$Co??=[])[a]=i:r._$Cl=i),void 0!==i&&(e=Q(t,i._$AS(t,e.values),i,a)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,a=(t?.creationScope??z).importNode(e,!0);G.currentNode=a;let i=G.nextNode(),o=0,n=0,s=r[0];for(;void 0!==s;){if(o===s.index){let e;2===s.type?e=new et(i,i.nextSibling,this,t):1===s.type?e=new s.ctor(i,s.name,s.strings,this,t):6===s.type&&(e=new nt(i,this,t)),this._$AV.push(e),s=r[++n]}o!==s?.index&&(i=G.nextNode(),o++)}return G.currentNode=z,a}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,a){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),M(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):I(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(z.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,a="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=Z.createElement(J(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===a)this._$AH.p(e);else{const t=new tt(a,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=X.get(t.strings);return void 0===e&&X.set(t.strings,e=new Z(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,a=0;for(const i of t)a===e.length?e.push(r=new et(this.O(T()),this.O(T()),this,this.options)):r=e[a],r._$AI(i),a++;a<e.length&&(this._$AR(r&&r._$AB.nextSibling,a),e.length=a)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class rt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,a,i){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=a,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=F}_$AI(t,e=this,r,a){const i=this.strings;let o=!1;if(void 0===i)t=Q(this,t,e,0),o=!M(t)||t!==this._$AH&&t!==q,o&&(this._$AH=t);else{const a=t;let n,s;for(t=i[0],n=0;n<i.length-1;n++)s=Q(this,a[r+n],e,n),s===q&&(s=this._$AH[n]),o||=!M(s)||s!==this._$AH[n],s===F?t=F:t!==F&&(t+=(s??"")+i[n+1]),this._$AH[n]=s}o&&!a&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class at extends rt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class it extends rt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class ot extends rt{constructor(t,e,r,a,i){super(t,e,r,a,i),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??F)===q)return;const r=this._$AH,a=t===F&&r!==F||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==F&&(r===F||a);a&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const st=$.litHtmlPolyfillSupport;st?.(Z,et),($.litHtmlVersions??=[]).push("3.2.1");class lt extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const a=r?.renderBefore??e;let i=a._$litPart$;if(void 0===i){const t=r?.renderBefore??null;a._$litPart$=i=new et(e.insertBefore(T(),t),t,void 0,r??{})}return i._$AI(t),i})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}lt._$litElement$=!0,lt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lt});const ct=globalThis.litElementPolyfillSupport;ct?.({LitElement:lt});(globalThis.litElementVersions??=[]).push("4.1.1");const dt=n`
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

  .label a:hover {
    --tw-text-opacity: 1;
    color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));
  }

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
  .checkbox {
  flex-shrink: 0;
  --chkbg: var(--fallback-bc,oklch(var(--bc)/1));
  --chkfg: var(--fallback-b1,oklch(var(--b1)/1));
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
  appearance: none;
  border-radius: var(--rounded-btn, 0.5rem);
  border-width: 1px;
  border-color: var(--fallback-bc,oklch(var(--bc)/var(--tw-border-opacity)));
  --tw-border-opacity: 0.2;
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
  .label {
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
  .input {
  flex-shrink: 1;
  appearance: none;
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  line-height: 2;
  line-height: 1.5rem;
  border-radius: var(--rounded-btn, 0.5rem);
  border-width: 1px;
  border-color: transparent;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));
}
  .input[type="number"]::-webkit-inner-spin-button,
.input-md[type="number"]::-webkit-inner-spin-button {
  margin-top: -1rem;
  margin-bottom: -1rem;
  margin-inline-end: -1rem;
}
  .join {
  display: inline-flex;
  align-items: stretch;
  border-radius: var(--rounded-btn, 0.5rem);
}
  .join :where(.join-item) {
  border-start-end-radius: 0;
  border-end-end-radius: 0;
  border-end-start-radius: 0;
  border-start-start-radius: 0;
}
  .join .join-item:not(:first-child):not(:last-child),
  .join *:not(:first-child):not(:last-child) .join-item {
  border-start-end-radius: 0;
  border-end-end-radius: 0;
  border-end-start-radius: 0;
  border-start-start-radius: 0;
}
  .join .join-item:first-child:not(:last-child),
  .join *:first-child:not(:last-child) .join-item {
  border-start-end-radius: 0;
  border-end-end-radius: 0;
}
  .join .dropdown .join-item:first-child:not(:last-child),
  .join *:first-child:not(:last-child) .dropdown .join-item {
  border-start-end-radius: inherit;
  border-end-end-radius: inherit;
}
  .join :where(.join-item:first-child:not(:last-child)),
  .join :where(*:first-child:not(:last-child) .join-item) {
  border-end-start-radius: inherit;
  border-start-start-radius: inherit;
}
  .join .join-item:last-child:not(:first-child),
  .join *:last-child:not(:first-child) .join-item {
  border-end-start-radius: 0;
  border-start-start-radius: 0;
}
  .join :where(.join-item:last-child:not(:first-child)),
  .join :where(*:last-child:not(:first-child) .join-item) {
  border-start-end-radius: inherit;
  border-end-end-radius: inherit;
}
  @supports not selector(:has(*)) {

  :where(.join *) {
    border-radius: inherit;
  }
}
  @supports selector(:has(*)) {

  :where(.join *:has(.join-item)) {
    border-radius: inherit;
  }
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
  .swap {
  position: relative;
  display: inline-grid;
  user-select: none;
  place-content: center;
  cursor: pointer;
}
  .swap > * {
  grid-column-start: 1;
  grid-row-start: 1;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-property: transform, opacity;
}
  .swap input {
  appearance: none;
}
  .swap .swap-on,
.swap .swap-indeterminate,
.swap input:indeterminate ~ .swap-on {
  opacity: 0;
}
  .swap input:checked ~ .swap-off,
.swap-active .swap-off,
.swap input:indeterminate ~ .swap-off {
  opacity: 0;
}
  .swap input:checked ~ .swap-on,
.swap-active .swap-on,
.swap input:indeterminate ~ .swap-indeterminate {
  opacity: 1;
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
  .btm-nav > *:where(.active) {
  border-top-width: 2px;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));
}
  .btm-nav > * .label {
  font-size: 1rem;
  line-height: 1.5rem;
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
  .checkbox:focus {
  box-shadow: none;
}
  .checkbox:focus-visible {
  outline-style: solid;
  outline-width: 2px;
  outline-offset: 2px;
  outline-color: var(--fallback-bc,oklch(var(--bc)/1));
}
  .checkbox:disabled {
  border-width: 0px;
  cursor: not-allowed;
  border-color: transparent;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));
  opacity: 0.2;
}
  .checkbox:checked,
  .checkbox[aria-checked="true"] {
  background-repeat: no-repeat;
  animation: checkmark var(--animation-input, 0.2s) ease-out;
  background-color: var(--chkbg);
  background-image: linear-gradient(-45deg, transparent 65%, var(--chkbg) 65.99%),
      linear-gradient(45deg, transparent 75%, var(--chkbg) 75.99%),
      linear-gradient(-45deg, var(--chkbg) 40%, transparent 40.99%),
      linear-gradient(
        45deg,
        var(--chkbg) 30%,
        var(--chkfg) 30.99%,
        var(--chkfg) 40%,
        transparent 40.99%
      ),
      linear-gradient(-45deg, var(--chkfg) 50%, var(--chkbg) 50.99%);
}
  .checkbox:indeterminate {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));
  background-repeat: no-repeat;
  animation: checkmark var(--animation-input, 0.2s) ease-out;
  background-image: linear-gradient(90deg, transparent 80%, var(--chkbg) 80%),
      linear-gradient(-90deg, transparent 80%, var(--chkbg) 80%),
      linear-gradient(0deg, var(--chkbg) 43%, var(--chkfg) 43%, var(--chkfg) 57%, var(--chkbg) 57%);
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
  .dropdown.dropdown-open .dropdown-content,
.dropdown:focus .dropdown-content,
.dropdown:focus-within .dropdown-content {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
  .input input {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity)));
  background-color: transparent;
}
  .input input:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
  .input[list]::-webkit-calendar-picker-indicator {
  line-height: 1em;
}
  .input:focus,
  .input:focus-within {
  box-shadow: none;
  border-color: var(--fallback-bc,oklch(var(--bc)/0.2));
  outline-style: solid;
  outline-width: 2px;
  outline-offset: 2px;
  outline-color: var(--fallback-bc,oklch(var(--bc)/0.2));
}
  .input:has(> input[disabled]),
  .input-disabled,
  .input:disabled,
  .input[disabled] {
  cursor: not-allowed;
  --tw-border-opacity: 1;
  border-color: var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));
  color: var(--fallback-bc,oklch(var(--bc)/0.4));
}
  .input:has(> input[disabled])::placeholder,
  .input-disabled::placeholder,
  .input:disabled::placeholder,
  .input[disabled]::placeholder {
  color: var(--fallback-bc,oklch(var(--bc)/var(--tw-placeholder-opacity)));
  --tw-placeholder-opacity: 0.2;
}
  .input:has(> input[disabled]) > input[disabled] {
  cursor: not-allowed;
}
  .input::-webkit-date-and-time-value {
  text-align: inherit;
}
  .join > :where(*:not(:first-child)) {
  margin-top: 0px;
  margin-bottom: 0px;
  margin-inline-start: -1px;
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
  .mockup-browser .mockup-browser-toolbar .input {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: block;
  height: 1.75rem;
  width: 24rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));
  padding-left: 2rem;
  direction: ltr;
}
  .mockup-browser .mockup-browser-toolbar .input:before {
  content: "";
  position: absolute;
  left: 0.5rem;
  top: 50%;
  aspect-ratio: 1 / 1;
  height: 0.75rem;
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  border-radius: 9999px;
  border-width: 2px;
  border-color: currentColor;
  opacity: 0.6;
}
  .mockup-browser .mockup-browser-toolbar .input:after {
  content: "";
  position: absolute;
  left: 1.25rem;
  top: 50%;
  height: 0.5rem;
  --tw-translate-y: 25%;
  --tw-rotate: -45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  border-radius: 9999px;
  border-width: 1px;
  border-color: currentColor;
  opacity: 0.6;
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
  .swap-rotate .swap-on,
.swap-rotate .swap-indeterminate,
.swap-rotate input:indeterminate ~ .swap-on {
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
  .swap-rotate input:checked ~ .swap-off,
.swap-active:where(.swap-rotate) .swap-off,
.swap-rotate input:indeterminate ~ .swap-off {
  --tw-rotate: -45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
  .swap-rotate input:checked ~ .swap-on,
.swap-active:where(.swap-rotate) .swap-on,
.swap-rotate input:indeterminate ~ .swap-indeterminate {
  --tw-rotate: 0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
  .swap-flip .swap-on,
.swap-flip .swap-indeterminate,
.swap-flip input:indeterminate ~ .swap-on {
  transform: rotateY(180deg);
  backface-visibility: hidden;
  opacity: 1;
}
  .swap-flip input:checked ~ .swap-off,
.swap-active:where(.swap-flip) .swap-off,
.swap-flip input:indeterminate ~ .swap-off {
  transform: rotateY(-180deg);
  backface-visibility: hidden;
  opacity: 1;
}
  .swap-flip input:checked ~ .swap-on,
.swap-active:where(.swap-flip) .swap-on,
.swap-flip input:indeterminate ~ .swap-indeterminate {
  transform: rotateY(0deg);
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
  .table-zebra tr.active,
    .table-zebra tr.active:nth-child(even),
    .table-zebra-zebra tbody tr:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b3,oklch(var(--b3)/var(--tw-bg-opacity)));
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
  .btm-nav-xs > *:where(.active) {
  border-top-width: 1px;
}
  .btm-nav-sm > *:where(.active) {
  border-top-width: 2px;
}
  .btm-nav-md > *:where(.active) {
  border-top-width: 2px;
}
  .btm-nav-lg > *:where(.active) {
  border-top-width: 4px;
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
  .join.join-vertical {
  flex-direction: column;
}
  .join.join-vertical .join-item:first-child:not(:last-child),
  .join.join-vertical *:first-child:not(:last-child) .join-item {
  border-end-start-radius: 0;
  border-end-end-radius: 0;
  border-start-start-radius: inherit;
  border-start-end-radius: inherit;
}
  .join.join-vertical .join-item:last-child:not(:first-child),
  .join.join-vertical *:last-child:not(:first-child) .join-item {
  border-start-start-radius: 0;
  border-start-end-radius: 0;
  border-end-start-radius: inherit;
  border-end-end-radius: inherit;
}
  .join.join-horizontal {
  flex-direction: row;
}
  .join.join-horizontal .join-item:first-child:not(:last-child),
  .join.join-horizontal *:first-child:not(:last-child) .join-item {
  border-end-end-radius: 0;
  border-start-end-radius: 0;
  border-end-start-radius: inherit;
  border-start-start-radius: inherit;
}
  .join.join-horizontal .join-item:last-child:not(:first-child),
  .join.join-horizontal *:last-child:not(:first-child) .join-item {
  border-end-start-radius: 0;
  border-start-start-radius: 0;
  border-end-end-radius: inherit;
  border-start-end-radius: inherit;
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
  .join.join-vertical > :where(*:not(:first-child)) {
  margin-left: 0px;
  margin-right: 0px;
  margin-top: -1px;
}
  .join.join-vertical > :where(*:not(:first-child)):is(.btn) {
  margin-top: calc(var(--border-btn) * -1);
}
  .join.join-horizontal > :where(*:not(:first-child)) {
  margin-top: 0px;
  margin-bottom: 0px;
  margin-inline-start: -1px;
}
  .join.join-horizontal > :where(*:not(:first-child)):is(.btn) {
  margin-inline-start: calc(var(--border-btn) * -1);
  margin-top: 0px;
}
  .static {
  position: static;
}
  .z-50 {
  z-index: 50;
}
  .m-1 {
  margin: 0.25rem;
}
  .mb-2 {
  margin-bottom: 0.5rem;
}
  .mb-3 {
  margin-bottom: 0.75rem;
}
  .mb-\\[-40px\\] {
  margin-bottom: -40px;
}
  .ml-\\[-3px\\] {
  margin-left: -3px;
}
  .ml-auto {
  margin-left: auto;
}
  .mr-8 {
  margin-right: 2rem;
}
  .mr-9 {
  margin-right: 2.25rem;
}
  .mt-1 {
  margin-top: 0.25rem;
}
  .mt-2 {
  margin-top: 0.5rem;
}
  .mt-4 {
  margin-top: 1rem;
}
  .flex {
  display: flex;
}
  .table {
  display: table;
}
  .hidden {
  display: none;
}
  .h-12 {
  height: 3rem;
}
  .h-16 {
  height: 4rem;
}
  .h-3 {
  height: 0.75rem;
}
  .h-4 {
  height: 1rem;
}
  .h-6 {
  height: 1.5rem;
}
  .max-h-\\[470px\\] {
  max-height: 470px;
}
  .max-h-\\[60px\\] {
  max-height: 60px;
}
  .min-h-\\[100px\\] {
  min-height: 100px;
}
  .w-12 {
  width: 3rem;
}
  .w-28 {
  width: 7rem;
}
  .w-4 {
  width: 1rem;
}
  .w-40 {
  width: 10rem;
}
  .w-52 {
  width: 13rem;
}
  .w-6 {
  width: 1.5rem;
}
  .w-full {
  width: 100%;
}
  .rotate-90 {
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
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
  .space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1rem * var(--tw-space-x-reverse));
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
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
  .rounded-full {
  border-radius: 9999px;
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
  .pl-4 {
  padding-left: 1rem;
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
  .text-\\[\\#1DB954\\] {
  --tw-text-opacity: 1;
  color: rgb(29 185 84 / var(--tw-text-opacity, 1));
}
  .text-\\[\\#1ed760\\] {
  --tw-text-opacity: 1;
  color: rgb(30 215 96 / var(--tw-text-opacity, 1));
}
  .text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity, 1));
}
  .text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
}
  .text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}
  .opacity-90 {
  opacity: 0.9;
}
  .shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
  .filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
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
`,ht=t=>{let e=[];function r(r,a){t=a?r:Object.assign(Object.assign({},t),r);let i=e;for(let e=0;e<i.length;e++)i[e](t)}return{get state(){return t},action(e){function a(t){r(t,!1)}return function(){let r=[t];for(let t=0;t<arguments.length;t++)r.push(arguments[t]);let i=e.apply(this,r);if(null!=i)return i instanceof Promise?i.then(a):a(i)}},setState:r,clearState(){t=void 0},subscribe:t=>(e.push(t),()=>{!function(t){let r=[];for(let a=0;a<e.length;a++)e[a]===t?t=null:r.push(e[a]);e=r}(t)})}},pt=(t,e,r,a,i={unsubGrace:!0})=>{if(t[e])return t[e];let o,n,s=0,l=ht();const c=()=>{if(!r)throw new Error("Collection does not support refresh");return r(t).then((t=>l.setState(t,!0)))},d=()=>c().catch((e=>{if(t.connected)throw e})),h=()=>{n=void 0,o&&o.then((t=>{t()})),l.clearState(),t.removeEventListener("ready",c),t.removeEventListener("disconnected",p)},p=()=>{n&&(clearTimeout(n),h())};return t[e]={get state(){return l.state},refresh:c,subscribe(e){s++,1===s&&(()=>{if(void 0!==n)return clearTimeout(n),void(n=void 0);a&&(o=a(t,l)),r&&(t.addEventListener("ready",d),d()),t.addEventListener("disconnected",p)})();const c=l.subscribe(e);return void 0!==l.state&&setTimeout((()=>e(l.state)),0),()=>{c(),s--,s||(i.unsubGrace?n=setTimeout(h,5e3):h())}}},t[e]};function ut(t,e){if(void 0===t)return null;const{domain:r,service:a}=e.data,i=t[r];if(!i||!(a in i))return null;const o={};return Object.keys(i).forEach((t=>{t!==a&&(o[t]=i[t])})),{[r]:o}}const bt=((t,e,r=!1)=>{let a;return function(...i){const o=this,n=r&&!a;clearTimeout(a),a=setTimeout((()=>{a=void 0,r||t.apply(o,i)}),e),n&&t.apply(o,i)}})(((t,e)=>ft(t).then((t=>e.setState(t,!0)))),5e3),ft=t=>t.sendMessagePromise({type:"get_services"}),wt=(t,e)=>Promise.all([t.subscribeEvents((r=>function(t,e,r){var a;const i=e.state;if(void 0===i)return;const{domain:o,service:n}=r.data;if(!(null===(a=i.domain)||void 0===a?void 0:a.service)){const t=Object.assign(Object.assign({},i[o]),{[n]:{description:"",fields:{}}});e.setState({[o]:t})}bt(t,e)}(t,e,r)),"service_registered"),t.subscribeEvents(e.action(ut),"service_removed")]).then((t=>()=>t.forEach((t=>t())))),vt=t=>pt(t,"_srv",ft,wt),gt=t=>{let e;const r=new Set,a=(t,a)=>{const i="function"==typeof t?t(e):t;if(!Object.is(i,e)){const t=e;e=(null!=a?a:"object"!=typeof i||null===i)?i:Object.assign({},e,i),r.forEach((r=>r(e,t)))}},i=()=>e,o={setState:a,getState:i,getInitialState:()=>n,subscribe:t=>(r.add(t),()=>r.delete(t))},n=e=t(a,i,o);return o},mt=t=>t?gt(t):gt;var yt;!function(t){t.INITIAL="INITIAL",t.FINISHED="FINISHED",t.CHANGEPLAYLIST="CHANGEPLAYLIST",t.CHANGETRACK="CHANGETRACK",t.UPDATEHASS="UPDATEHASS",t.UPDATECONFIG="UPDATECONFIG"}(yt||(yt={}));const kt=mt((t=>({hass:null,prevState:null,config:null,retrieveState:yt.INITIAL,view:null,activePlaylist:null,activeTrack:null,username:null,accounts:null}))),xt=(kt.getInitialState(),mt((t=>({playlistViewReady:!1,headerViewReady:!1,currentlyPlayingViewReady:!1})))),_t=xt.getInitialState(),$t={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:k},At=(t=$t,e,r)=>{const{kind:a,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(void 0===o&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(r.name,t),"accessor"===a){const{name:a}=r;return{set(r){const i=e.get.call(this);e.set.call(this,r),this.requestUpdate(a,i,t)},init(e){return void 0!==e&&this.P(a,void 0,t),e}}}if("setter"===a){const{name:a}=r;return function(r){const i=this[a];e.call(this,r),this.requestUpdate(a,i,t)}}throw Error("Unsupported decorator location: "+a)};function St(t){return function(t){return(e,r)=>"object"==typeof r?At(t,e,r):((t,e,r)=>{const a=e.hasOwnProperty(r);return e.constructor.createProperty(r,a?{...t,wrapped:!0}:t),a?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)}({...t,state:!0,attribute:!1})}var Ct=function(t,e,r,a){var i,o=arguments.length,n=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(n=(o<3?i(n):o>3?i(e,r,n):i(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};console.info("Spotcast spotify card UI fase v0.0.3");let Et=class extends lt{static get styles(){return[dt]}constructor(){super(),this.playListViewReady=_t.playlistViewReady,this.currentlyPlayingViewReady=_t.currentlyPlayingViewReady,xt.subscribe((t=>{this.playListViewReady=t.playlistViewReady,this.currentlyPlayingViewReady=t.currentlyPlayingViewReady}))}set hass(t){kt.setState({hass:t,retrieveState:yt.UPDATEHASS})}setConfig(t){kt.setState({config:t,retrieveState:yt.UPDATECONFIG})}connectedCallback(){super.connectedCallback()}isSpotcastInstalled(){return!!this.hass?.connection&&void 0!==vt(this.hass.connection).state.spotcast}getPlaylistView(){return this.playListViewReady?Y`<playlist-view></playlist-view>`:Y`<playlist-skeleton></playlist-skeleton>`}getCurrentlyPlayingView(){return this.currentlyPlayingViewReady?Y`<currently-playing-view></currently-playing-view>`:Y`<currently-playing-skeleton></currently-playing-skeleton>`}render(){return Y`
      <ha-card>
        <div class="card-content">
          <header-view></header-view>
          ${this.getPlaylistView()}
          ${this.getCurrentlyPlayingView()}
        </div>
      </ha-card>
    `}static getConfigElement(){return document.createElement("spotcast-spotify-card-editor")}static getStubConfig(){return{header:"Test"}}};Ct([St()],Et.prototype,"playListViewReady",void 0),Ct([St()],Et.prototype,"currentlyPlayingViewReady",void 0),Et=Ct([(t=>(e,r)=>{void 0!==r?r.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)})("spotcast-spotify-card")],Et);class jt extends lt{static get styles(){return[dt]}render(){return Y`
      ${this.renderTemplate()}
    `}}var Pt=function(t,e){return t<e?-1:t>e?1:0},zt=function(t){return t.reduce((function(t,e){return t+e}),0)},Tt=function(){function t(t){this.colors=t}var e=t.prototype;return e.palette=function(){return this.colors},e.map=function(t){return t},t}(),Mt=function(){function t(t,e,r){return(t<<10)+(e<<5)+r}function e(t){var e=[],r=!1;function a(){e.sort(t),r=!0}return{push:function(t){e.push(t),r=!1},peek:function(t){return r||a(),void 0===t&&(t=e.length-1),e[t]},pop:function(){return r||a(),e.pop()},size:function(){return e.length},map:function(t){return e.map(t)},debug:function(){return r||a(),e}}}function r(t,e,r,a,i,o,n){var s=this;s.r1=t,s.r2=e,s.g1=r,s.g2=a,s.b1=i,s.b2=o,s.histo=n}function a(){this.vboxes=new e((function(t,e){return Pt(t.vbox.count()*t.vbox.volume(),e.vbox.count()*e.vbox.volume())}))}function i(e,r){if(r.count()){var a=r.r2-r.r1+1,i=r.g2-r.g1+1,o=Math.max.apply(null,[a,i,r.b2-r.b1+1]);if(1==r.count())return[r.copy()];var n,s,l,c,d=0,h=[],p=[];if(o==a)for(n=r.r1;n<=r.r2;n++){for(c=0,s=r.g1;s<=r.g2;s++)for(l=r.b1;l<=r.b2;l++)c+=e[t(n,s,l)]||0;h[n]=d+=c}else if(o==i)for(n=r.g1;n<=r.g2;n++){for(c=0,s=r.r1;s<=r.r2;s++)for(l=r.b1;l<=r.b2;l++)c+=e[t(s,n,l)]||0;h[n]=d+=c}else for(n=r.b1;n<=r.b2;n++){for(c=0,s=r.r1;s<=r.r2;s++)for(l=r.g1;l<=r.g2;l++)c+=e[t(s,l,n)]||0;h[n]=d+=c}return h.forEach((function(t,e){p[e]=d-t})),function(t){var e,a,i,o,s,l=t+"1",c=t+"2",u=0;for(n=r[l];n<=r[c];n++)if(h[n]>d/2){for(i=r.copy(),o=r.copy(),s=(e=n-r[l])<=(a=r[c]-n)?Math.min(r[c]-1,~~(n+a/2)):Math.max(r[l],~~(n-1-e/2));!h[s];)s++;for(u=p[s];!u&&h[s-1];)u=p[--s];return i[c]=s,o[l]=i[c]+1,[i,o]}}(o==a?"r":o==i?"g":"b")}}return r.prototype={volume:function(t){var e=this;return e._volume&&!t||(e._volume=(e.r2-e.r1+1)*(e.g2-e.g1+1)*(e.b2-e.b1+1)),e._volume},count:function(e){var r=this,a=r.histo;if(!r._count_set||e){var i,o,n,s=0;for(i=r.r1;i<=r.r2;i++)for(o=r.g1;o<=r.g2;o++)for(n=r.b1;n<=r.b2;n++)s+=a[t(i,o,n)]||0;r._count=s,r._count_set=!0}return r._count},copy:function(){var t=this;return new r(t.r1,t.r2,t.g1,t.g2,t.b1,t.b2,t.histo)},avg:function(e){var r=this,a=r.histo;if(!r._avg||e){var i,o,n,s,l=0,c=0,d=0,h=0;if(r.r1===r.r2&&r.g1===r.g2&&r.b1===r.b2)r._avg=[r.r1<<3,r.g1<<3,r.b1<<3];else{for(o=r.r1;o<=r.r2;o++)for(n=r.g1;n<=r.g2;n++)for(s=r.b1;s<=r.b2;s++)l+=i=a[t(o,n,s)]||0,c+=i*(o+.5)*8,d+=i*(n+.5)*8,h+=i*(s+.5)*8;r._avg=l?[~~(c/l),~~(d/l),~~(h/l)]:[~~(8*(r.r1+r.r2+1)/2),~~(8*(r.g1+r.g2+1)/2),~~(8*(r.b1+r.b2+1)/2)]}}return r._avg},contains:function(t){var e=this,r=t[0]>>3;return gval=t[1]>>3,bval=t[2]>>3,r>=e.r1&&r<=e.r2&&gval>=e.g1&&gval<=e.g2&&bval>=e.b1&&bval<=e.b2}},a.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map((function(t){return t.color}))},size:function(){return this.vboxes.size()},map:function(t){for(var e=this.vboxes,r=0;r<e.size();r++)if(e.peek(r).vbox.contains(t))return e.peek(r).color;return this.nearest(t)},nearest:function(t){for(var e,r,a,i=this.vboxes,o=0;o<i.size();o++)((r=Math.sqrt(Math.pow(t[0]-i.peek(o).color[0],2)+Math.pow(t[1]-i.peek(o).color[1],2)+Math.pow(t[2]-i.peek(o).color[2],2)))<e||void 0===e)&&(e=r,a=i.peek(o).color);return a},forcebw:function(){var t=this.vboxes;t.sort((function(t,e){return Pt(zt(t.color),zt(e.color))}));var e=t[0].color;e[0]<5&&e[1]<5&&e[2]<5&&(t[0].color=[0,0,0]);var r=t.length-1,a=t[r].color;a[0]>251&&a[1]>251&&a[2]>251&&(t[r].color=[255,255,255])}},{quantize:function(o,n){if(!Number.isInteger(n)||n<1||n>256)throw new Error("Invalid maximum color count. It must be an integer between 1 and 256.");if(!o.length||n<2||n>256)return!1;if(!o.length||n<2||n>256)return!1;for(var s=[],l=new Set,c=0;c<o.length;c++){var d=o[c],h=d.join(",");l.has(h)||(l.add(h),s.push(d))}if(s.length<=n)return new Tt(s);var p=function(e){var r,a=new Array(32768);return e.forEach((function(e){r=t(e[0]>>3,e[1]>>3,e[2]>>3),a[r]=(a[r]||0)+1})),a}(o);p.forEach((function(){}));var u=function(t,e){var a,i,o,n=1e6,s=0,l=1e6,c=0,d=1e6,h=0;return t.forEach((function(t){(a=t[0]>>3)<n?n=a:a>s&&(s=a),(i=t[1]>>3)<l?l=i:i>c&&(c=i),(o=t[2]>>3)<d?d=o:o>h&&(h=o)})),new r(n,s,l,c,d,h,e)}(o,p),b=new e((function(t,e){return Pt(t.count(),e.count())}));function f(t,e){for(var r,a=t.size(),o=0;o<1e3;){if(a>=e)return;if(o++>1e3)return;if((r=t.pop()).count()){var n=i(p,r),s=n[0],l=n[1];if(!s)return;t.push(s),l&&(t.push(l),a++)}else t.push(r),o++}}b.push(u),f(b,.75*n);for(var w=new e((function(t,e){return Pt(t.count()*t.volume(),e.count()*e.volume())}));b.size();)w.push(b.pop());f(w,n);for(var v=new a;w.size();)v.push(w.pop());return v}}}().quantize,Rt=function(t){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=t.naturalWidth,this.height=this.canvas.height=t.naturalHeight,this.context.drawImage(t,0,0,this.width,this.height)};Rt.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var It=function(){};function Ut(t,e=20){return null!=t&&t&&t.length>e?t.substring(0,e)+"...":t}function Nt(t){return null!=t&&t?t.replace(/<\/?[^>]+(>|$)/g,""):t}function Ot(t,e,r){return t&&t.states?Object.values(t.states).filter((t=>t.entity_id.includes(e)&&t.entity_id.includes(r))):[]}function Ht(t,e){if(t===e)return!0;if(null==t||null==e)return!1;if(typeof t!=typeof e)return!1;if("object"==typeof t&&"object"==typeof e){const r=Object.keys(t),a=Object.keys(e);if(r.length!==a.length)return!1;for(const i of r){if(!a.includes(i))return!1;if(!Ht(t[i],e[i]))return!1}return!0}return!1}async function Lt(t){return new Promise(((e,r)=>{const a=new It,i=new Image;i.crossOrigin="Anonymous",i.src=t,i.onload=()=>{try{const[t,r,o]=a.getColor(i),n=Math.floor(.4*t),s=Math.floor(.4*r),l=`#${((1<<24)+(n<<16)+(s<<8)+Math.floor(.4*o)).toString(16).slice(1)}`,c=Math.min(255,Math.floor(t+.15*(255-t))),d=Math.min(255,Math.floor(r+.15*(255-r))),h=`#${((1<<24)+(c<<16)+(d<<8)+Math.min(255,Math.floor(o+.15*(255-o)))).toString(16).slice(1)}`;e(`linear-gradient(45deg, ${l}, ${h})`)}catch(t){r(t)}},i.onerror=()=>{r(new Error("Failed to load image"))}}))}It.prototype.getColor=function(t,e){return void 0===e&&(e=10),this.getPalette(t,5,e)[0]},It.prototype.getPalette=function(t,e,r){var a=function(t){var e=t.colorCount,r=t.quality;if(void 0!==e&&Number.isInteger(e)){if(1===e)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");e=Math.max(e,2),e=Math.min(e,20)}else e=10;return(void 0===r||!Number.isInteger(r)||r<1)&&(r=10),{colorCount:e,quality:r}}({colorCount:e,quality:r}),i=new Rt(t),o=function(t,e,r){for(var a,i,o,n,s,l=t,c=[],d=0;d<e;d+=r)i=l[0+(a=4*d)],o=l[a+1],n=l[a+2],(void 0===(s=l[a+3])||s>=125)&&(i>250&&o>250&&n>250||c.push([i,o,n]));return c}(i.getImageData().data,i.width*i.height,a.quality),n=Mt(o,a.colorCount);return n?n.palette():null},It.prototype.getColorFromUrl=function(t,e,r){var a=this,i=document.createElement("img");i.addEventListener("load",(function(){var o=a.getPalette(i,5,r);e(o[0],t)})),i.src=t},It.prototype.getImageData=function(t,e){var r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="arraybuffer",r.onload=function(){if(200==this.status){var t=new Uint8Array(this.response);i=t.length;for(var r=new Array(i),a=0;a<t.length;a++)r[a]=String.fromCharCode(t[a]);var o=r.join(""),n=window.btoa(o);e("data:image/png;base64,"+n)}},r.send()},It.prototype.getColorAsync=function(t,e,r){var a=this;this.getImageData(t,(function(t){var i=document.createElement("img");i.addEventListener("load",(function(){var t=a.getPalette(i,5,r);e(t[0],this)})),i.src=t}))};var Dt=function(t,e,r,a){var i,o=arguments.length,n=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(n=(o<3?i(n):o>3?i(e,r,n):i(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};class Bt extends jt{constructor(){super(),this.gradient="linear-gradient(45deg, #1f2937, #374151)",this.imageUrl="",this.artistNames="",this.activePlaylist=null,this.activeTrack=null,this.initialStartup(),this.homeAssistantStoreSubscribe()}homeAssistantStoreSubscribe(){kt.subscribe((async t=>{if(null!==t.activeTrack?.track&&!Ht(t.activeTrack,this.activeTrack)){this.activeTrack=t.activeTrack,this.artistNames=this.activeTrack.track.artists.map((t=>t.name)).join(", ");var e=this.activeTrack.track.album.images.reduce(((t,e)=>t.width>e.width?t:e),this.activeTrack.track.album.images[0]);this.imageUrl=e.url,this.gradient=await Lt(e.url)}}))}async initialStartup(){this.activeTrack=kt.getState().activeTrack,this.artistNames=this.activeTrack.track.artists.map((t=>t.name)).join(", ");var t=this.activeTrack.track.album.images.reduce(((t,e)=>t.width>e.width?t:e),this.activeTrack.track.album.images[0]);this.imageUrl=t.url,this.gradient=await Lt(t.url)}connectedCallback(){super.connectedCallback()}renderTemplate(){return Y`
      <div class="card max-h-[60px] p-3 rounded-lg" style="background: ${this.gradient}">
        <div class="flex items-center justify-between gap-3">
          <!-- Avatar and Text Section -->
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle h-12 w-12">
                <img src="${this.imageUrl}" alt="Avatar" />
              </div>
            </div>
            <div>
              <div class="font-bold text-white">${Ut(Nt(this.activeTrack?.track?.name),40)}</div>
              <div class="text-sm text-gray-400">${Ut(Nt(this.artistNames),40)}</div>
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
    `}}Dt([St()],Bt.prototype,"gradient",void 0);var Vt=function(t,e,r,a){var i,o=arguments.length,n=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(n=(o<3?i(n):o>3?i(e,r,n):i(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};class Wt extends jt{constructor(){super(...arguments),this.isRotated=!1}static get styles(){return[...super.styles,n`
            .rotate {
                transition: transform 0.2s ease-in-out;
            }

            .rotate-90 {
                transform: rotate(90deg);  // This rotates the caret 180 degrees
            }
        `]}connectedCallback(){super.connectedCallback(),this.globalClick=this.globalClick.bind(this),document.addEventListener("click",this.globalClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.globalClick)}toggleIcon(){this.isRotated=!this.isRotated}globalClick(t){const e=t.composedPath(),r=this.shadowRoot?.querySelector("details.headerview");r&&!e.includes(r)&&(this.isRotated=!1,r.removeAttribute("open"))}toggleLI(){var t=this.shadowRoot?.querySelector("details.headerview");t&&this.isRotated&&t.removeAttribute("open"),this.toggleIcon()}renderTemplate(){return Y`
        <div class="flex justify-between items-end border-b border-gray-300 pb-2">
            <details class="dropdown z-50 headerview">
                <summary @click="${this.toggleIcon}" class="btn btn-ghost text-4xl font-bold flex items-center">
                    Recently played
                    <svg class="mt-4 ml-[-3px] rotate ${this.isRotated?"rotate-90":""}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg>
                </summary>

                <ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-50">
                    <li @click="${this.toggleLI}"><a href="#">Song 1</a></li>
                    <li @click="${this.toggleLI}"><a href="#">Song 2</a></li>
                    <li @click="${this.toggleLI}"><a href="#">Song 3</a></li>
                </ul>
            </details>

            <span class="text-lg ml-auto mr-9">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
                </svg>
            </span>
        </div>

        <div class="flex justify-between items-center pl-4 mt-2">
            <!-- Left Side: Search Button -->
            <div class="flex space-x-4">
                <label class="swap">
                    <input type="checkbox" class="hidden" />
                    <!-- Default icon (swap-off state) -->
                    <div class="swap-off text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </div>
                    <!-- Active icon (swap-on state) with color change -->
                    <div class="swap-on text-[#1DB954]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </div>
                </label>
            </div>

            <!-- Right Side: Shuffle, Play Buttons -->
            <div class="flex space-x-4 mr-8 mb-3">

                <!-- Shuffle Button -->
                <label class="swap">
                    <input type="checkbox" class="hidden" />
                    <!-- Default icon (swap-off state) -->
                    <div class="swap-off text-gray-500">
                        <svg class="bi bi-shuffle mt-1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.6 9.6 0 0 0 7.556 8a9.6 9.6 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.6 10.6 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.6 9.6 0 0 0 6.444 8a9.6 9.6 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5"/>
                            <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192"/>
                        </svg>
                    </div>
                    <!-- Active icon with color change (swap-on state) -->
                    <div class="swap-on text-[#1DB954]">
                        <svg class="bi bi-shuffle mt-1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.6 9.6 0 0 0 7.556 8a9.6 9.6 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.6 10.6 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.6 9.6 0 0 0 6.444 8a9.6 9.6 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5"/>
                            <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192"/>
                        </svg>
                    </div>
                </label>

                <!-- Play Button -->
                <label class="swap">
                    <input type="checkbox" class="hidden" />
                    <!-- Default icon (swap-off state) -->
                    <div class="swap-off text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                        </svg>
                    </div>

                    <!-- Active icon with color change (swap-on state) -->
                    <div class="swap-on text-[#1DB954]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                        </svg>
                    </div>
                </label>

            </div>
        </div>

        `}}Vt([St()],Wt.prototype,"isRotated",void 0);var Yt=function(t,e,r,a){var i,o=arguments.length,n=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(n=(o<3?i(n):o>3?i(e,r,n):i(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};class qt extends jt{constructor(){super(),this.playlists=null,this.activePlaylist=null,this.playlists=kt.getState().view?.playlists,this.activePlaylist=kt.getState().activePlaylist?.item,kt.subscribe((t=>{this.checkIfViewChanged(t.view?.playlists),this.checkIfActiveMediaChanged(t.activePlaylist?.item)}))}checkIfViewChanged(t){null===t||Ht(t,this.playlists)||(this.playlists=t)}checkIfActiveMediaChanged(t){null===t||Ht(t,this.activePlaylist)||(this.activePlaylist=t)}changePlaybackPlaylist(t){const e=this.playlists.find((t=>t.is_playing));e&&(e.is_playing=!1),t.is_playing=!0,kt.setState({activePlaylist:{item:t,start:!0},retrieveState:yt.CHANGEPLAYLIST})}getNumberRow(t,e){return t?Y`<playing-icon></playing-icon>`:Y`${e+1}`}renderTemplate(){return Y`
            <div class="max-h-[470px] min-h-[100px] w-full overflow-y-auto overflow-x-hidden ">
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <!-- <th>Description</th> -->
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${this.playlists?.map(((t,e)=>Y`
                                <tr class="hover:bg-primary/10 ease-in-out duration-200 h-16">
                                    <th class="${this.activePlaylist?.uri===t.uri?"text-[#1ed760]":""}">
                                        ${this.getNumberRow(t.is_playing,e)}
                                    </th>
                                    <td>
                                        <div class="flex items-center gap-3">
                                            <div class="avatar">
                                                <div class="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="${t.icon}"
                                                        alt="Icon of playlist" />
                                                </div>
                                            </div>
                                            <div>
                                                <div class="font-bold ${this.activePlaylist?.uri===t.uri?"text-[#1ed760]":""}">${Ut(Nt(t.name),24)}</div>
                                                <div class="text-sm opacity-90">${Ut(Nt(t.description),24)}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <!-- <td> description </td> -->
                                    <td>
                                        <button @click=${()=>this.changePlaybackPlaylist(t)} class="btn btn-ghost m-1 ${this.activePlaylist?.uri===t.uri?"text-[#1ed760]":""}">
                                            ${t.is_playing?Y`
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/>
                                                    </svg>`:Y`
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                                                    </svg>`}
                                        </button>
                                    </td>
                                </tr>
                            `))}
                    </tbody>
                </table>
            </div>
        `}}Yt([St()],qt.prototype,"playlists",void 0),Yt([St()],qt.prototype,"activePlaylist",void 0);class Ft{constructor(t){this._hass=t}async likeMedia(t,e){await this._hass.callService("spotcast","like_media",{account:e,spotify_uris:t})}async playMedia(t,e,r,a){var i=function(){const t=kt.getState().accounts.accounts?.find((t=>t.is_default))?.spotify_name,e=kt.getState().hass;if(!t)return void console.error("No default account found");const r=Object.values(e.states).filter((e=>e.entity_id.includes("media_player")&&e.entity_id.includes("spotcast")&&e.entity_id.includes(t))),a=r?.filter((t=>"on"===t.state));return a.length>0?a[0].entity_id:r[0].entity_id}();const o={spotify_uri:t.uri,media_player:{entity_id:[i]},account:e,extras:a};await this._hass.callService("spotcast","play_media",o)}}class Xt{constructor(t){this._hass=t}async _callWebSocket(t,e={}){const r={type:t,...e};try{return await this._hass.callWS(r)}catch(e){throw new Error(`Failed to fetch ${t} (payload: ${JSON.stringify(r)}): ${JSON.stringify(e)}`)}}async fetchDevices(t){return await this._callWebSocket("spotcast/devices",{account:t})}async fetchPlayer(t){return await this._callWebSocket("spotcast/player",{account:t})}async fetchChromecasts(){return await this._callWebSocket("spotcast/castdevices")}async fetchCategories(t){return await this._callWebSocket("spotcast/categories",{account:t})}async fetchPlaylists(t,e){return await this._callWebSocket("spotcast/playlists",{account:t,category:e})}async fetchView(t,e="recently-played"){return await this._callWebSocket("spotcast/view",{account:t,name:e,limit:20})}async fetchSearch(t,e="",r="playlist"){return await this._callWebSocket("spotcast/search",{account:t,query:e,searchType:r})}async fetchTracks(t,e=""){return await this._callWebSocket("spotcast/tracks",{account:t,playlistId:e})}async fetchLikedMedia(t){return await this._callWebSocket("spotcast/liked_media",{account:t})}async fetchAccounts(){return await this._callWebSocket("spotcast/accounts")}}[{tag:"header-view",class:Wt},{tag:"playlist-view",class:qt},{tag:"currently-playing-view",class:Bt},{tag:"spotcast-spotify-card",class:Et},{tag:"playing-icon",class:class extends jt{renderTemplate(){return Y`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 21" width="17" height="21">
                <!-- Bar 1 -->
                <rect x="1" y="11" width="2" height="10" fill="#1DB954">
                    <animate attributeName="height" values="5;10;15;10;5" dur="0.6s" repeatCount="indefinite" />
                    <animate attributeName="y" values="16;11;6;11;16" dur="0.6s" repeatCount="indefinite" />
                </rect>
                <!-- Bar 2 -->
                <rect x="4" y="9" width="2" height="12" fill="#1DB954">
                    <animate attributeName="height" values="7;12;5;12;7" dur="0.7s" repeatCount="indefinite" />
                    <animate attributeName="y" values="14;9;16;9;14" dur="0.7s" repeatCount="indefinite" />
                </rect>
                <!-- Bar 3 -->
                <rect x="7" y="8" width="2" height="13" fill="#1DB954">
                    <animate attributeName="height" values="6;13;18;13;6" dur="0.8s" repeatCount="indefinite" />
                    <animate attributeName="y" values="15;8;3;8;15" dur="0.8s" repeatCount="indefinite" />
                </rect>
                <!-- Bar 4 -->
                <rect x="10" y="11" width="2" height="10" fill="#1DB954">
                    <animate attributeName="height" values="5;10;15;10;5" dur="0.6s" repeatCount="indefinite" />
                    <animate attributeName="y" values="16;11;6;11;16" dur="0.6s" repeatCount="indefinite" />
                </rect>
                <!-- Bar 5 -->
                <rect x="13" y="13" width="2" height="8" fill="#1DB954">
                    <animate attributeName="height" values="3;8;12;8;3" dur="0.75s" repeatCount="indefinite" />
                    <animate attributeName="y" values="18;13;9;13;18" dur="0.75s" repeatCount="indefinite" />
                </rect>
            </svg>`}}},{tag:"playlist-skeleton",class:class extends jt{renderTemplate(){return Y`
            <div class="max-h-[470px] min-h-[100px] w-full overflow-y-auto overflow-x-hidden mb-[-40px]">
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${[...Array(10)].map(((t,e)=>Y`
                            <tr class="hover:bg-primary/10 ease-in-out duration-200 h-16">
                                <th>
                                    <div class="skeleton w-4 h-4"></div>
                                </th>
                                <td>
                                    <div class="flex items-center gap-3">
                                        <div class="avatar">
                                            <div class="skeleton mask mask-squircle h-12 w-12">
                                            </div>
                                        </div>
                                        <div>
                                            <div class="skeleton h-4 w-28 mb-2"></div>
                                            <div class="skeleton h-3 w-40"></div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="flex gap-2">
                                        <div class="skeleton w-6 h-6 rounded-full"></div>
                                        <div class="skeleton w-6 h-6 rounded-full"></div>
                                    </div>
                                </td>
                            </tr>
                        `))}
                    </tbody>
                </table>
            </div>
        `}}},{tag:"currently-playing-skeleton",class:class extends jt{constructor(){super(...arguments),this.gradient="linear-gradient(45deg, #1f2937, #374151)"}renderTemplate(){return Y`
          <div class="card max-h-[60px] p-3 rounded-lg" style="background: ${this.gradient}">
            <div class="flex items-center justify-between gap-3">
              <!-- Avatar and Text Section -->
              <div class="flex items-center gap-3">
                <div class="avatar">
                  <div class="skeleton mask mask-squircle h-12 w-12">
                  </div>
                </div>
                <div>
                  <div class="skeleton h-4 w-28 mb-2"></div>
                  <div class="skeleton h-3 w-40"></div>
                </div>
              </div>

              <!-- Icons Section -->
              <div class="flex items-center gap-2">
                <div class="skeleton w-6 h-6 rounded-full"></div>
                <div class="skeleton w-6 h-6 rounded-full"></div>
              </div>
            </div>
          </div>
        `}}}].forEach((({tag:t,class:e})=>{customElements.get(t)||customElements.define(t,e)})),new class{constructor(){kt.subscribe((t=>{this.isPlayListViewReady(t.view),this.isCurrentlyPlayingViewReady(t.accounts)}))}isPlayListViewReady(t){xt.setState({playlistViewReady:t?.playlists?.length>0})}isCurrentlyPlayingViewReady(t){xt.setState({currentlyPlayingViewReady:t?.accounts?.length>0})}},new class{constructor(){kt.subscribe((async(t,e)=>{t.retrieveState!==yt.FINISHED&&t.hass&&t.config&&(console.log("store state: ",t),await this.startup(t.hass),t.retrieveState===yt.CHANGEPLAYLIST&&(this.changeActiveMedia(t.activePlaylist,e.activePlaylist),function(t,e,...r){setTimeout((()=>e(...r)),1e3*t)}(.1,this.setActiveTrack,null,this._spotcastWebsocketService)),t.retrieveState===yt.UPDATEHASS&&this.spotifyStateChanged(t.hass,e.hass)&&this.updateMedia(),kt.setState({retrieveState:yt.FINISHED}))}))}async startup(t){if(!this._spotcastService||!this._spotcastWebsocketService){this._spotcastService=new Ft(t),this._spotcastWebsocketService=new Xt(t);var e=await this._spotcastWebsocketService.fetchAccounts();this._activeAccount=e?.accounts?.filter((t=>t.is_default))[0],console.log("active account: ",this._activeAccount);var r=await this._spotcastWebsocketService.fetchPlayer(),a=await this._spotcastWebsocketService.fetchView();kt.setState({accounts:e}),kt.setState({view:a}),kt.setState({activeTrack:{track:r.state.item,start:r.state.is_playing}}),this.setActivePlaylist(r,a)}}async updateMedia(){var t=await this._spotcastWebsocketService.fetchPlayer(),e=await this._spotcastWebsocketService.fetchView();kt.setState({view:e}),this.setActivePlaylist(t,e),this.setActiveTrack(t)}spotifyStateChanged(t,e){return!Ht(Ot(t,"media_player.spotify",this._activeAccount?.spotify_id),Ot(e,"media_player.spotify",this._activeAccount?.spotify_id))}setActivePlaylist(t,e){if(null!=t?.state?.context?.uri){var r=e.playlists.filter((e=>e.uri==t.state.context.uri))[0];r.is_playing=t.state.is_playing,kt.setState({activePlaylist:{item:r,start:!1}})}}async setActiveTrack(t,e){null==t&&(t=await e.fetchPlayer()),console.log("setActiveTrack: ",t),kt.setState({activeTrack:{track:t.state.item,start:t.state.is_playing}})}changeActiveMedia(t,e){null!==t&&t.start&&!Ht(t,e)&&this._spotcastService.playMedia(t.item,this._activeAccount.entry_id)}},new class{constructor(){kt.subscribe((t=>{}))}},window.customCards=window.customCards||[],window.customCards.push({type:"spotcast-spotify-card",name:"Spotcast spotify card",description:"Spotify card for the spotcast component"})})();