import{i as e,_ as o,s as t,x as n,A as s,e as i}from"./query-assigned-elements-92ce7494.js";import{n as r}from"./property-c78323b1.js";import{t as a}from"./state-d31c6912.js";import{g as l,c}from"./collection-511dcfac.js";import{e as d,n as p}from"./ref-99418ab4.js";import{o as m}from"./class-map-512f0bc1.js";import{l as h}from"./if-defined-cccde88f.js";import{w as v}from"./number-c3ab3e95.js";import{N as u}from"./events-d9666e88.js";import{L as f}from"./LightDismissController-a2645ae6.js";import{KeyboardController as b}from"./KeyboardController.js";import x from"./Icon.js";import"./VisuallyHidden.js";import"./CommandMenuAction.js";import{SelectEvent as g}from"./SelectEvent.js";import{s as y}from"./Component-2253424f.js";import{LocalizeController as w}from"./LocalizeController.js";import{c as z}from"./cond-bb9ee891.js";import{o as k}from"./observe-a9c6dfb6.js";import"./directive-e9ce14b4.js";import"./EventController-d99ebeef.js";import"./ShortcutController-87615e31.js";import"./tinykeys.module-84e6cc41.js";import"./IconManager.js";import"./DirectionController-f35f5476.js";import"./translation.js";import"./en-us.js";import"./localization.js";import"./localization2.js";import"./localization3.js";import"./localization4.js";import"./localization5.js";import"./localization6.js";import"./localization7.js";import"./localization8.js";const j="keyboard-arrow-up-down";var $=Object.freeze({__proto__:null,default:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m8.29008 12.3413 1.41 1.42-3.96 3.95c-.2.19-.45.29-.71.29s-.51-.1-.71-.29l-3.990002-4 1.410002-1.42 2.26 2.25v-12.54002h2v12.63002zm11.38002-6.05002-4.01-4c-.39-.39-1.02-.39-1.41 0l-3.96 3.95 1.41 1.42 2.29-2.29v12.63002h2v-12.54002l2.26 2.25 1.41-1.42z" fill="currentColor"/></svg>',title:j,tags:"nordicon keyboard keys arrow up down shortcut"});const C="keyboard-return";var _=Object.freeze({__proto__:null,default:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m18.0025 4v8c0 1.1-.9 2-2 2h-12.59l3 3-1.41 1.41-4.71-4.7c-.39-.39-.39-1.02 0-1.41l4.71-4.71 1.41 1.41-3 3h12.59v-8h-4v-2h4c1.1 0 2 .9 2 2z" fill="currentColor"/></svg>',title:C,tags:"nordicon keyboard return key shortcut"});const I="keyboard-backspace";var B=Object.freeze({__proto__:null,default:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m18 2h-10.54c-.58 0-1.14.25-1.52.7l-5.14 6c-.65.75-.65 1.85 0 2.6l5.14 6c.38.44.93.7 1.52.7h10.54c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm0 14h-10.54l-5.14-6 5.14-6h10.54zm-9.54-3.88 2.12-2.12-2.12-2.12 1.41-1.41 2.12 2.12 2.12-2.12 1.41 1.41-2.12 2.12 2.12 2.12-1.41 1.41-2.12-2.12-2.12 2.12z" fill="currentColor"/></svg>',title:I,tags:"nordicon keyboard backspace back delete key shortcut"});function E(e){var o;return(null===(o=e.activeElement)||void 0===o?void 0:o.shadowRoot)?E(e.activeElement.shadowRoot):e.activeElement||void 0}const R=e`:host{--_n-command-menu-inline-size:var(--n-command-menu-inline-size, 640px);--_n-command-menu-block-size:var(--n-command-menu-block-size, 290px);--_n-command-menu-block-start:var(--n-command-menu-block-start, 16%)}.n-modal{display:none;position:fixed;pointer-events:none;z-index:var(--n-index-modal);inset-inline-start:0;inset-block-start:0;inline-size:100%;block-size:100%;overflow:auto}.n-modal.n-visible{display:block}.n-modal-content{position:relative;pointer-events:all;inset-block-start:var(--_n-command-menu-block-start);margin:auto;display:flex;flex-direction:column;min-inline-size:0;background:var(--n-color-surface);border-radius:var(--n-border-radius);box-shadow:var(--n-box-shadow-modal);max-inline-size:var(--_n-command-menu-inline-size);overflow:hidden}.n-bump{animation:zoom-in-zoom-out var(--n-transition-slowly)}@keyframes zoom-in-zoom-out{0%{transform:translateY(-10px) scale(.97);opacity:0}100%{transform:translateY(0) scale(1.0001);opacity:1}}.n-modal-footer{display:flex;gap:var(--n-space-s);padding:var(--n-space-s) var(--n-space-m);font-size:calc(var(--n-font-size-s) - 1px);color:var(--n-color-text-weaker)}.n-help{display:flex;align-items:center;gap:2px}.n-help+.n-help{padding-inline-start:var(--n-space-s);border-inline-start:1px solid var(--n-color-border-strong)}.n-help nord-icon{--_n-icon-size:10px;color:currentColor;margin:3px 4px}.n-help.n-backspace nord-icon{--_n-icon-size:12px}.n-search-wrapper{display:flex;border-block-end:1px solid var(--n-color-border)}[role=combobox]{flex:1;font-size:var(--n-font-size-l);font-weight:var(--n-font-weight);font-family:inherit;background:0 0;color:var(--n-color-text);border:none;border-radius:0;appearance:none;outline:0;margin:0;padding:var(--n-space-m)}[role=combobox]::-webkit-input-placeholder{color:var(--n-color-text-weaker);opacity:.6!important}[role=combobox]::-moz-placeholder{color:var(--n-color-text-weaker);opacity:.6!important}[role=combobox]::-ms-input-placeholder{color:var(--n-color-text-weaker);opacity:.6!important}[role=listbox]{max-block-size:var(--_n-command-menu-block-size);overflow:auto;margin:0;padding:0}.n-group-header{line-height:var(--n-line-height);border-block-end:1px solid var(--n-color-border);padding:calc(var(--n-space-s)/ 1.4) var(--n-space-m);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-size:var(--n-font-size-s);background:var(--n-color-surface-raised);font-weight:var(--n-font-weight-active);color:var(--n-color-text-weaker)}.n-command-empty{display:flex;flex:1;flex-direction:column;border-inline-start:2px solid transparent;align-items:flex-start;color:var(--n-color-text);border-block-end:1px solid var(--n-color-border);padding:calc(var(--n-space-m)/ 1.5) var(--n-space-m)}.n-command-empty .n-title{flex:1;margin-block-start:var(--n-space-s);margin-inline-end:var(--n-space-xs);max-inline-size:100%;font-size:var(--n-font-size-m);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.n-command-empty .n-tip{flex:1;margin-block-start:var(--n-space-s);margin-block-end:var(--n-space-m);font-size:var(--n-font-size-s);color:var(--n-color-text-weaker)}`;x.registerIcon($),x.registerIcon(_),x.registerIcon(B);let O=class extends t{constructor(){super(...arguments),this.inputRef=d(),this.listRef=d(),this.localize=new w(this),this.dismissController=new f(this,{isOpen:()=>this.open,onDismiss:()=>this.close()}),this.keyboardController=new b(this,{trigger:()=>this.select(),goBack:()=>this.goBack(),end:()=>this.end(),start:()=>this.start(),next:()=>this.next(),previous:()=>this.previous(),toggleOpen:()=>this.toggleOpen()}),this.open=!1,this.commands=[],this.search="",this.bump=!0,this.selectedIndex=0,this.filteredCommands=[]}get selected(){return this.filteredCommands[this.selectedIndex]}show(e={}){this.dispatchEvent(new u("open",{cancelable:!0}))&&(this.open=!0,this.setParent(e.parent))}close(){var e;this.open=!1,null===(e=this.previousFocus)||void 0===e||e.focus(),this.previousFocus=void 0,this.dispatchEvent(new u("close"))}toggleOpen(){this.open?this.close():this.show()}focus(){var e;null===(e=this.inputRef.value)||void 0===e||e.focus()}render(){var e;const o=l(this.filteredCommands,"section"),t=0===this.filteredCommands.length?"no-results":null===(e=this.selected)||void 0===e?void 0:e.id;return n`<div class="${m({"n-visible":this.open,"n-modal":!0})}"><div @animationend="${this.handleAnimationEnd}" class="${m({"n-bump":this.bump,"n-modal-content":!0})}"><div class="n-search-wrapper"><nord-visually-hidden id="instructions">${this.localize.term("instructions")}</nord-visually-hidden><input type="text" id="search" @input="${this.handleInput}" @blur="${this.handleBlur}" ${p(this.inputRef)} placeholder="${this.localize.term("placeholder")}" .value="${this.search}" spellcheck="false" autocomplete="off" autocapitalize="off" aria-label="${this.localize.term("inputLabel")}" aria-autocomplete="list" aria-haspopup="listbox" role="combobox" aria-controls="list" aria-expanded="true" aria-activedescendant="${h(t)}" aria-describedby="instructions"></div><div class="n-modal-body"><div id="list" ${p(this.listRef)} role="listbox">${0===this.filteredCommands.length?this.renderNoResults():Array.from(o,(([e,o])=>this.renderSection(e,o)))}</div></div><slot name="footer"><div class="n-modal-footer"><span class="n-help"><nord-icon label="Arrow keys" name="${j}"></nord-icon>${this.localize.term("footerArrowKeys")} </span><span class="n-help"><nord-icon label="Enter key" name="${C}"></nord-icon>${this.localize.term("footerEnterKey")} </span><span class="n-help">${this.localize.term("footerEscapeKey")}</span> <span class="n-help n-backspace"><nord-icon label="Backspace key" name="${I}"></nord-icon>${this.localize.term("footerBackspaceKey")}</span></div></slot></div></div>`}renderNoResults(){return n`<div id="no-results" class="n-command-empty" role="option" aria-selected="true"><div class="n-title">${this.localize.term("noResults",this.search)}</div><div class="n-tip">${this.localize.term("tip")}</div></div>`}renderSection(e,o){const t=`section-${e}`;return n`<div role="group" aria-labelledby="${z(e,t)}">${e?n`<div class="n-group-header" role="presentation" id="${t}">${e}</div>`:s} ${c(o,(e=>e.id),(e=>{var o,t;return n`<nord-command-menu-action id="${e.id}" .command="${e}" ?selected="${this.open&&e.id===(null===(o=this.selected)||void 0===o?void 0:o.id)}" @click="${()=>this.select(e)}" role="option" aria-selected="${z(e.id===(null===(t=this.selected)||void 0===t?void 0:t.id),"true")}"></nord-command-menu-action>`}))}</div>`}handleCommandsChange(){this.keyboardController.registerCommandShortcuts()}handleBump(){this.open&&(this.bump=!0)}focusOnOpen(){this.open&&(this.previousFocus=E(document),this.focus(),this.listRef.value&&(this.listRef.value.scrollTop=0))}handleAnimationEnd(){this.bump=!1}handleBlur(){this.open&&this.focus()}handleInput(e){const o=e.target;this.setSearch(o.value)}select(e=this.selected){var o;this.commands.some((o=>o.parent===e.id))?(this.setParent(e.id),this.bump=!0,this.focus()):this.close(),this.setSearch(""),null===(o=e.handler)||void 0===o||o.call(e,this);const t=new g(e);this.dispatchEvent(t)}start(){this.selectedIndex=0}end(){this.selectedIndex=this.filteredCommands.length-1}next(){this.selectedIndex=v(this.selectedIndex+1,0,this.filteredCommands.length-1)}previous(){this.selectedIndex=v(this.selectedIndex-1,0,this.filteredCommands.length-1)}goBack(){if(!this.search&&this.parent){const e=this.commands.find((e=>e.id===this.parent));this.setParent(null==e?void 0:e.parent)}}setParent(e){this.parent=e,this.setSearch("")}setSearch(e){this.search=e,this.selectedIndex=0}filterCommands(){const e=this.search.toLocaleLowerCase().split(/\s+/),o=[...l(this.commands,"section").values()].flat();this.filteredCommands=o.filter((({title:o,keywords:t="",parent:n})=>{const s=`${o} ${t}`.toLocaleLowerCase(),i=e.every((e=>s.includes(e)));return(!this.parent&&this.search||n==this.parent)&&i}))}};O.styles=[y,R],o([r({type:Boolean})],O.prototype,"open",void 0),o([r({type:Array,attribute:!1})],O.prototype,"commands",void 0),o([a()],O.prototype,"parent",void 0),o([a()],O.prototype,"search",void 0),o([a()],O.prototype,"bump",void 0),o([a()],O.prototype,"selectedIndex",void 0),o([a()],O.prototype,"filteredCommands",void 0),o([k("commands")],O.prototype,"handleCommandsChange",null),o([k("open")],O.prototype,"handleBump",null),o([k("open","updated")],O.prototype,"focusOnOpen",null),o([k("search"),k("parent"),k("commands")],O.prototype,"filterCommands",null),O=o([i("nord-command-menu")],O);var S=O;export{S as default};
//# sourceMappingURL=CommandMenu.js.map
