import{i as o,x as t,A as n,_ as r,e as a,s as e}from"./query-assigned-elements-92ce7494.js";import{n as i}from"./property-c78323b1.js";import{e as s,n as b}from"./ref-99418ab4.js";import{E as l}from"./EventController-d99ebeef.js";import{L as d}from"./LightDomController-5388d84c.js";import{c}from"./cond-bb9ee891.js";import"./Spinner.js";import{F as u}from"./FocusableMixin-d30213b4.js";import{I as v}from"./InputMixin-83b5bd46.js";import{s as h}from"./Component-2253424f.js";import{S as p}from"./SlotController-d733c575.js";import"./directive-e9ce14b4.js";import"./if-defined-cccde88f.js";const g=o`:host{--_n-button-border-radius:var(--n-button-border-radius, var(--n-border-radius-s));--_n-button-gap:var(--n-button-gap, var(--n-space-s));--_n-button-gradient:var(--n-button-gradient, linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.013) 100%));--_n-button-background-color:var(--n-button-background-color, var(--n-color-button));--_n-button-border-color:var(--n-button-border-color, var(--n-color-border-strong));--_n-button-text-align:var(--n-button-text-align, center);--_n-button-box-shadow:var(--n-button-box-shadow, var(--n-box-shadow));--_n-button-color:var(--n-button-color, var(--n-color-text));--_n-button-padding-inline:var(--n-button-padding-inline, calc(var(--n-space-m) / 1.2));--_n-button-font-size:var(--n-button-font-size, var(--n-font-size-m));--_n-button-font-weight:var(--n-button-font-weight, var(--n-font-weight));--_n-button-min-block-size:var(--n-button-min-block-size, var(--n-space-xl));--_n-button-toggle-icon-color:var(--n-button-toggle-icon-color, var(--n-color-icon));--_n-button-overflow:var(--n-button-overflow, hidden);--_n-button-opacity:1;--_n-button-border-style:solid;--_n-button-inline-size:fit-content;--_n-button-padding-block:calc(var(--n-space-s) / 1.6);--_n-button-icon-size:var(--n-size-icon-s);display:inline-block}.n-button{-webkit-appearance:none;align-items:center;appearance:none;background:var(--_n-button-background-color);opacity:var(--_n-button-opacity);border-radius:var(--_n-button-border-radius);border:1px var(--_n-button-border-style) var(--_n-button-border-color);box-shadow:var(--_n-button-box-shadow);color:var(--_n-button-color);cursor:pointer;display:flex;gap:var(--_n-button-gap);font-family:var(--n-font-family);font-feature-settings:var(--n-font-features);font-size:var(--_n-button-font-size);font-weight:var(--_n-button-font-weight);line-height:var(--n-line-height-form);margin:0;min-block-size:var(--_n-button-min-block-size);padding:var(--_n-button-padding-block) var(--_n-button-padding-inline);text-align:var(--_n-button-text-align);text-decoration:none;transition:var(--n-transition-quickly);transition-property:background-color,opacity,color,box-shadow,border-color;-webkit-user-select:none;user-select:none;position:relative;inline-size:var(--_n-button-inline-size)}.n-button::after{content:"";position:absolute;background:0 0;background-image:var(--_n-button-gradient);border-radius:var(--_n-button-border-radius);background-repeat:repeat-x;inline-size:100%;inset-inline:0;block-size:100%;inset-block-start:0}:host([expand]){--_n-button-inline-size:100%;display:block}.n-content{flex:1;overflow:var(--_n-button-overflow);text-overflow:ellipsis;white-space:nowrap;position:relative}.n-button:hover{--_n-button-border-color:var(--n-button-border-color, var(--n-color-border-hover));--_n-button-background-color:var(--n-button-background-color, var(--n-color-button-hover))}.n-button:focus{outline:0}.n-button:focus-visible{--_n-button-border-color:var(--n-button-border-color, var(--n-color-accent));--_n-button-box-shadow:var(--n-button-box-shadow, 0 0 0 1px var(--n-color-accent), var(--n-box-shadow));--_n-button-border-style:solid}.n-button:active{opacity:.8;transform:translateY(1px);transition:none}:host([variant=primary]){--_n-button-box-shadow:var(--n-button-box-shadow, none);--_n-button-color:var(--n-button-color, var(--n-color-text-on-accent));--_n-button-font-weight:var(--n-button-font-weight, var(--n-font-weight-active))}:host([variant=primary]),:host([variant=primary]) .n-button:hover{--_n-button-border-color:var(--n-button-border-color, transparent);--_n-button-background-color:var(--n-button-background-color, var(--n-color-accent))}:host([variant=primary]) .n-button:hover{filter:brightness(93%)}:host([variant=primary]) .n-button:focus{--_n-button-box-shadow:var(--n-button-box-shadow, 0 0 0 1px var(--n-color-surface), 0 0 0 3px var(--_n-button-border-color))}:host([variant=dashed]){--_n-button-border-color:var(--n-button-border-color, var(--n-color-border-hover));--_n-button-box-shadow:var(--n-button-box-shadow, none);--_n-button-color:var(--n-button-color, var(--n-color-text-weaker));--_n-button-border-style:dashed}:host([variant=dashed]) .n-button:hover{--_n-button-color:var(--n-button-color, var(--n-color-text))}:host([variant=dashed]) .n-button::after{display:none}:host([variant=plain]){--_n-button-box-shadow:var(--n-button-box-shadow, none)}:host([variant=plain]),:host([variant=plain]) .n-button:hover{--_n-button-border-color:var(--n-button-border-color, transparent)}:host([variant=plain]) .n-button::after{display:none}:host([variant=danger]){--_n-button-box-shadow:var(--n-button-box-shadow, none);--_n-button-color:var(--n-button-color, var(--n-color-text-on-accent));--_n-button-font-weight:var(--n-button-font-weight, var(--n-font-weight-active))}:host([variant=danger]),:host([variant=danger]) .n-button:hover{--_n-button-border-color:var(--n-button-border-color, transparent);--_n-button-background-color:var(--n-button-background-color, var(--n-color-status-danger))}:host([variant=danger]) .n-button:hover{filter:brightness(93%)}:host([variant=danger]) .n-button:focus{--_n-button-border-color:var(--n-button-border-color, var(--n-color-status-danger));--_n-button-box-shadow:var(--n-button-box-shadow, 0 0 0 1px var(--n-color-surface), 0 0 0 3px var(--n-color-status-danger))}:host([disabled]){--_n-button-border-color:var(--n-button-border-color, var(--_n-button-background-color));--_n-button-background-color:var(--n-button-background-color, var(--n-color-border));--_n-button-box-shadow:var(--n-button-box-shadow, none);--_n-button-color:var(--n-button-color, var(--n-color-text-weaker));--_n-button-opacity:0.5;pointer-events:none}:host([disabled]) .n-button::after{display:none}.n-button-spinner{position:absolute;transform:translateX(-50%) translateY(-50%);inset-block-start:50%;inset-inline-start:50%}:host([loading]:not([href])){pointer-events:none}:host([loading]:not([href])) .n-content,:host([loading]:not([href])) ::slotted([slot=end]),:host([loading]:not([href])) ::slotted([slot=start]){opacity:0}:host([size="s"]){--_n-button-gap:var(--n-button-gap, var(--n-space-xs));--_n-button-padding-inline:var(--n-button-padding-inline, calc(var(--n-space-s) + 1px));--_n-button-font-size:var(--n-button-font-size, var(--n-font-size-s));--_n-button-min-block-size:var(--n-button-min-block-size, calc(var(--n-space-l) + var(--n-space-xs)));--_n-button-padding-block:calc(var(--n-space-xs) - 1px);--_n-button-icon-size:var(--n-size-icon-xs)}:host([size="l"]){--_n-button-border-radius:var(--n-button-border-radius, var(--n-border-radius));--_n-button-padding-inline:var(--n-button-padding-inline, calc(var(--n-space-l) / 1.3));--_n-button-font-size:var(--n-button-font-size, var(--n-font-size-l));--_n-button-font-weight:var(--n-button-font-weight, var(--n-font-weight-active));--_n-button-min-block-size:var(--n-button-min-block-size, calc(var(--n-space-xxl) - var(--n-space-l)));--_n-button-icon-size:var(--n-size-icon-m)}::slotted(*){color:inherit;pointer-events:none}::slotted(svg){color:var(--n-color-icon)}::slotted(button[slot=proxy]){display:none}:host(:not([variant=primary],[variant=danger])) ::slotted(nord-icon){color:var(--n-color-icon)}:host(:not([variant=primary],[variant=danger])) .n-toggle-icon{color:var(--_n-button-toggle-icon-color)}slot:not([name])::slotted(nord-icon){transform:translateY(1px)}::slotted(nord-icon:not([size])),nord-icon{--_n-icon-size:var(--_n-button-icon-size)}`;let f=class extends(v(u(e))){constructor(){super(...arguments),this.defaultSlot=new p(this),this.buttonRef=s(),this.events=new l(this),this.lightDom=new d(this,{render:()=>this.renderLightDom()}),this.variant="default",this.type="submit",this.size="m",this.download=!1,this.target="_self",this.expand=!1,this.loading=!1,this.handleOuterClick=o=>{o.composedPath().some((o=>o===this.focusableRef.value||o===this.buttonRef.value))||o.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.events.listen(this,"click",this.handleOuterClick,!0)}render(){var o;const r="toggle"===(null===(o=this.assignedSlot)||void 0===o?void 0:o.name),a=this.defaultSlot.assigned.some((o=>"nord-icon"===o.localName)),e=r&&!a&&!this.href,i=t`<slot name="start"></slot><div class="n-content"><slot></slot></div><nord-spinner class="n-button-spinner" color="currentColor" ?hidden="${!this.loading||Boolean(this.href)}"></nord-spinner><slot name="end">${e?t`<nord-icon name="interface-dropdown-small" class="n-toggle-icon"></nord-icon>`:n}</slot>`;return this.href?this.renderLink(i):this.renderButton(i)}renderLink(o){return t`<a ${b(this.focusableRef)} class="n-button" target="${this.target}" ?download="${this.download}" href="${c(this.disabled,n,this.href)}" tabindex="${c(this.disabled,"-1")}" aria-disabled="${c(this.disabled,"true")}" role="${c(this.disabled,"link")}">${o}</a>`}renderButton(o){return t`<slot name="proxy" @slotchange="${this.handleProxyChange}"></slot><button ${b(this.focusableRef)} class="n-button" ?disabled="${this.disabled}" name="${c(this.name)}" value="${c(this.value)}" @click="${this.handleClick}" aria-disabled="${c(this.loading,"true")}" aria-expanded="${c(this.accessibleExpanded)}" aria-haspopup="${c(this.accessibleHasPopup)}">${o}</button>`}renderLightDom(){return this.href||!this.form?n:t`<button ${b(this.buttonRef)} slot="proxy" name="${c(this.name)}" value="${c(this.value)}" ?disabled="${this.disabled}" form="${c(this._formId)}" type="${this.type}"></button>`}handleClick(o){this.buttonRef.value&&(o.stopPropagation(),this.buttonRef.value.click())}handleProxyChange(o){const t=o.target,n=this.buttonRef.value;n&&n.assignedSlot!==t&&this.appendChild(n)}};f.styles=[h,g],r([i({reflect:!0})],f.prototype,"variant",void 0),r([i({reflect:!0})],f.prototype,"type",void 0),r([i({reflect:!0})],f.prototype,"size",void 0),r([i({attribute:"aria-expanded"})],f.prototype,"accessibleExpanded",void 0),r([i({attribute:"aria-haspopup"})],f.prototype,"accessibleHasPopup",void 0),r([i({reflect:!0})],f.prototype,"href",void 0),r([i({type:Boolean})],f.prototype,"download",void 0),r([i()],f.prototype,"target",void 0),r([i({reflect:!0,type:Boolean})],f.prototype,"expand",void 0),r([i({reflect:!0,type:Boolean})],f.prototype,"loading",void 0),f=r([a("nord-button")],f);var _=f;export{_ as default};
//# sourceMappingURL=Button.js.map
