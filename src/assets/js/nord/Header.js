import{i as e,_ as r,s as a,x as n,e as o}from"./query-assigned-elements-92ce7494.js";import{n as d}from"./property-c78323b1.js";import{S as s}from"./SlotController-d733c575.js";import{s as t}from"./Component-2253424f.js";import"./EventController-d99ebeef.js";const l=e`:host{--_n-header-box-shadow:var(--n-box-shadow-header);--_n-header-block-size:var(--n-header-block-size, var(--n-space-xxl));--_n-header-padding-block:var(--n-space-m);--_n-header-padding-inline:var(--n-space-l);color:var(--n-color-text)}::slotted(*){margin:0!important}::slotted(a){color:var(--n-color-text-link);text-decoration:underline}::slotted(a:hover){text-decoration:none}.n-header,.n-header-end{display:flex;flex-flow:row;align-items:center;gap:var(--n-space-m)}.n-header{padding:var(--_n-header-padding-block) var(--_n-header-padding-inline);padding-inline-start:calc(var(--_n-header-padding-inline) + var(--_n-header-gutter,0px));background-color:var(--n-color-surface);border-block-end:1px solid var(--n-color-border);box-shadow:var(--_n-header-box-shadow);block-size:var(--_n-header-block-size)}.n-header-end{margin-inline-start:auto;gap:var(--n-space-s)}:host([size="s"]){--_n-header-block-size:52px;--_n-header-padding-block:var(--n-space-s)}`;let i=class extends a{constructor(){super(...arguments),this.endSlot=new s(this,"end"),this.size="m"}render(){return n`<header class="n-header"><slot></slot><div class="n-header-end" ?hidden="${this.endSlot.isEmpty}"><slot name="end"></slot></div></header>`}};i.styles=[t,l],r([d({reflect:!0})],i.prototype,"size",void 0),i=r([o("nord-header")],i);var c=i;export{c as default};
//# sourceMappingURL=Header.js.map