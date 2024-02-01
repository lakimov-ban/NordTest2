import{i as t,x as n,A as e,_ as o,e as i,s as r}from"./query-assigned-elements-92ce7494.js";import{n as s}from"./property-c78323b1.js";import{i as a}from"./query-36bfe0e4.js";import{l as d}from"./if-defined-cccde88f.js";import{o as l}from"./class-map-512f0bc1.js";import{n as c}from"./ref-99418ab4.js";import{o as p}from"./style-map-f8a1c8d5.js";import{F as u}from"./FocusableMixin-d30213b4.js";import{F as m}from"./FormAssociatedMixin-a278fda4.js";import{I as h}from"./InputMixin-83b5bd46.js";import{R as b,s as v}from"./TextField-2d778949.js";import{A as f}from"./AutocompleteMixin-5a7e10b2.js";import{S as g}from"./SizeMixin-ab074eff.js";import{s as w}from"./Component-2253424f.js";import{s as y}from"./FormField-87551be2.js";import{D as z}from"./DirectionController-f35f5476.js";import{c as x}from"./cond-bb9ee891.js";import j from"./Icon.js";import"./directive-e9ce14b4.js";import"./SlotController-d733c575.js";import"./EventController-d99ebeef.js";import"./events-d9666e88.js";import"./VisuallyHidden.js";import"./state-d31c6912.js";import"./IconManager.js";import"./observe-a9c6dfb6.js";var _=Object.freeze({__proto__:null,default:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m16.03 14.61c1.23-1.54 1.97-3.49 1.97-5.61 0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.12 0 4.07-.74 5.61-1.97l3.97 3.97 1.41-1.41-3.97-3.97zm-7.03 1.39c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" fill="currentColor"/></svg>',title:"navigation-search",tags:"nordicon navigation menu find search magnifying glass"});const $=t`.n-input::-webkit-search-cancel-button,.n-input::-webkit-search-decoration{-webkit-appearance:none;appearance:none}.n-input-container{font-size:var(--n-font-size-m);display:grid;grid-template-columns:max-content 1fr max-content}.n-input{grid-area:1/1/2/4;padding-inline-start:var(--_n-input-start-inline-size,var(--_n-input-padding-inline));padding-inline-end:var(--_n-input-end-inline-size,var(--_n-input-padding-inline))}slot[name=end],slot[name=start]{pointer-events:none;display:flex;align-items:center;color:var(--n-color-icon)}:host([disabled]) slot:is([name=start],[name=end]){color:var(--n-color-text-weakest)}slot[name=start]{grid-area:1/1/2/2;order:1}slot[name=end]{grid-area:1/3/2/4}.is-rtl slot[name=end],slot[name=start]{--n-button-border-radius:var(--n-border-radius-s) 0 0 var(--n-border-radius-s)}.is-rtl slot[name=start],slot[name=end]{--n-button-border-radius:0 var(--n-border-radius-s) var(--n-border-radius-s) 0}:is([name=start],[name=end])::slotted(*){font-size:var(--_n-input-font-size)}[name=start]::slotted(*),nord-icon{margin-inline-start:var(--_n-input-padding-inline)!important;margin-inline-end:calc(var(--_n-input-padding-inline)/ 2)!important}[name=end]::slotted(*){margin-inline-start:calc(var(--_n-input-padding-inline)/ 2)!important;margin-inline-end:var(--_n-input-padding-inline)!important}[name=start]::slotted(:is(nord-button, nord-dropdown)){margin-inline-start:0!important}[name=end]::slotted(:is(nord-button, nord-dropdown)){margin-inline-end:0!important}nord-icon{--_n-input-icon-color:var(--n-input-icon-color, var(--n-color-icon));color:var(--_n-input-icon-color)}::slotted(:is(nord-button:not([disabled]), nord-dropdown)){pointer-events:auto;position:relative}::slotted(nord-button:not([disabled],:focus)),::slotted(nord-dropdown:not(:focus-within)){--n-button-box-shadow:none}::slotted(nord-button:active),::slotted(nord-dropdown:active:not([open])){inset-block-start:-1px}::slotted(nord-button[disabled]){--n-button-color:var(--n-color-text-weaker);-webkit-text-fill-color:var(--n-button-color);opacity:.8}.n-input-container:hover:not(:focus-within) ::slotted(:is(nord-button:not([disabled]),nord-dropdown)),.n-label-container:hover~.n-input-container:not(:focus-within) ::slotted(:is(nord-button:not([disabled]),nord-dropdown)){--n-button-border-color:var(--n-input-border-color, var(--n-color-border-hover))}.n-input-container:focus-within ::slotted(:is(nord-button,nord-dropdown:not([open]))){--n-button-border-color:var(--n-input-border-color, var(--n-color-accent))}:host([error]) .n-input-container ::slotted(:is(nord-button:not(:focus),nord-dropdown:not(:focus-within),nord-dropdown[open])){--n-button-border-color:var(--n-input-border-color, var(--n-color-status-danger))}:host([size="s"]) ::slotted(nord-button){--_n-button-padding-inline:calc(var(--n-space-s) * 1.4)}:host{--_n-input-icon-size:var(--n-size-icon-s)}:host([size="s"]){--_n-input-icon-size:var(--n-size-icon-xs)}:host([size="l"]){--_n-input-icon-size:var(--n-size-icon-m)}::slotted(nord-icon:not([size])),nord-icon{--_n-icon-size:var(--_n-input-icon-size)}:host([type=unit]) :is(.n-input-container,.n-input){--_n-input-text-align:var(--n-input-text-align, end);font-family:var(--n-font-family-code)!important}`;class S{constructor(t,n){this.target=n,this.hadFirstUpdate=!1,t.addController(this),this.observer=new ResizeObserver((([n])=>{const[e]=n.borderBoxSize;this.borderBoxSize=e,t.requestUpdate()}))}get inlineSize(){var t;return null===(t=this.borderBoxSize)||void 0===t?void 0:t.inlineSize}get blockSize(){var t;return null===(t=this.borderBoxSize)||void 0===t?void 0:t.blockSize}hostUpdated(){this.hadFirstUpdate||(this.observer.observe(this.target()),this.hadFirstUpdate=!0)}hostConnected(){this.hadFirstUpdate&&this.observer.observe(this.target())}hostDisconnected(){this.observer.disconnect()}}j.registerIcon(_);const k=t=>t?`${t}px`:void 0;let F=class extends(g(m(f(b(h(u(r))))))){constructor(){super(...arguments),this.startObserver=new S(this,(()=>this.startSlot)),this.endObserver=new S(this,(()=>this.endSlot)),this.direction=new z(this),this.type="text",this.expand=!1,this.disallowPattern=void 0,this.handleInputChange=t=>{const n=t.target;this.disallowPattern&&function(t,n){const{value:e}=t,o=t.selectionStart,i=e.slice(0,o),r=e.slice(o,e.length),s=i.replace(n,""),a=s+r.replace(n,""),d=s.length;t.value=a,t.selectionStart=d,t.selectionEnd=d}(n,new RegExp(this.disallowPattern,"g")),this.handleInput(t)}}render(){var t;const o="number"===this.type;return n`${this.renderLabel()}<div class="${l({"n-input-container":!0,"is-rtl":"rtl"===this.direction.dir})}" style="${p({"--_n-input-start-inline-size":k(this.startObserver.inlineSize),"--_n-input-end-inline-size":k(this.endObserver.inlineSize)})}"><slot name="start">${"search"===this.type?n`<nord-icon name="navigation-search"></nord-icon>`:e}</slot><input ${c(this.focusableRef)} id="${this.inputId}" class="n-input" type="${o||"unit"===this.type?"text":this.type}" inputmode="${x(o,"numeric")}" pattern="${x(o,"[0-9]*")}" ?disabled="${this.disabled}" ?required="${this.required}" ?readonly="${this.readonly}" name="${d(this.name)}" .value="${null!==(t=this.value)&&void 0!==t?t:""}" placeholder="${d(this.placeholder)}" @input="${this.handleInputChange}" @change="${this.handleChange}" @keydown="${this.handleKeydown}" aria-describedby="${d(this.getDescribedBy())}" aria-invalid="${d(this.getInvalid())}" spellcheck="false" autocomplete="${this.autocomplete}"><slot name="end"></slot></div>${this.renderError()}`}handleKeydown(t){if("Enter"!==t.key)return;const{form:n}=this;if(n){const t=function(t){let n=t.querySelector('button[type="submit"]');!n&&t.id&&(n=t.getRootNode().querySelector(`button[form=${t.id}]`));return n}(n);setTimeout((()=>null==t?void 0:t.click()),0)}}};F.styles=[w,y,v,$],o([a("slot[name='start']")],F.prototype,"startSlot",void 0),o([a("slot[name='end']")],F.prototype,"endSlot",void 0),o([s({reflect:!0})],F.prototype,"type",void 0),o([s({reflect:!0,type:Boolean})],F.prototype,"expand",void 0),o([s({reflect:!0,attribute:"disallow-pattern"})],F.prototype,"disallowPattern",void 0),F=o([i("nord-input")],F);var C=F;export{C as default};
//# sourceMappingURL=Input.js.map
