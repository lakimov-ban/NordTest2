import{i as e,_ as r,s as t,x as i,e as o}from"./query-assigned-elements-92ce7494.js";import{n as s}from"./property-c78323b1.js";import{S as n}from"./SlotController-d733c575.js";import{c as l}from"./cond-bb9ee891.js";import{s as a}from"./Component-2253424f.js";import{s as d}from"./FormField-87551be2.js";import"./EventController-d99ebeef.js";const h=e`fieldset{border:none}.n-label-container{margin-block-end:calc(var(--n-space-s) * 2)}.n-hidden{position:absolute;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);block-size:1px;inline-size:1px;white-space:nowrap}`;let p=class extends t{constructor(){super(...arguments),this.errorSlot=new n(this,"error"),this.hintSlot=new n(this,"hint"),this.label="",this.required=!1,this.hideRequired=!1,this.hideLabel=!1}render(){const{hasError:e}=this;return i`<fieldset aria-invalid="${l(e,"true")}" aria-describedby="${l(e,"error")}" aria-required="${l(this.required,"true")}"><legend class="n-label-container ${this.hideLabel?"n-hidden":""}"><div class="n-label"><slot name="label">${this.label}</slot><span aria-hidden="true" class="n-required" ?hidden="${!this.required||this.hideRequired}">*</span></div><div class="n-caption n-hint" ?hidden="${!this.hasHint}"><slot name="hint">${this.hint}</slot></div></legend><slot></slot><div class="n-caption n-error" id="error" role="alert" ?hidden="${!this.hasError}"><slot name="error">${this.error}</slot></div></fieldset>`}get hasHint(){return Boolean(this.hint)||this.hintSlot.hasContent}get hasError(){return Boolean(this.error)||this.errorSlot.hasContent}};p.styles=[a,d,h],r([s()],p.prototype,"label",void 0),r([s()],p.prototype,"hint",void 0),r([s()],p.prototype,"error",void 0),r([s({type:Boolean})],p.prototype,"required",void 0),r([s({type:Boolean,attribute:"hide-required"})],p.prototype,"hideRequired",void 0),r([s({type:Boolean,attribute:"hide-label"})],p.prototype,"hideLabel",void 0),p=r([o("nord-fieldset")],p);var c=p;export{c as default};
//# sourceMappingURL=Fieldset.js.map