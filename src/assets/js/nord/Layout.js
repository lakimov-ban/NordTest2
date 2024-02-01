import{i as n,_ as e,s as a,x as t,A as o,e as i}from"./query-assigned-elements-92ce7494.js";import{n as s}from"./property-c78323b1.js";import{t as r}from"./state-d31c6912.js";import{i as d}from"./query-36bfe0e4.js";import{o as l}from"./class-map-512f0bc1.js";import{o as c}from"./style-map-f8a1c8d5.js";import{l as h}from"./NavToggle-9d5cbaef.js";import{D as v}from"./DirectionController-f35f5476.js";import{E as p}from"./EventController-d99ebeef.js";import{L as u}from"./LightDismissController-a2645ae6.js";import{S as g}from"./SlotController-d733c575.js";import{o as b}from"./observe-a9c6dfb6.js";import{c as m}from"./cond-bb9ee891.js";import{f as y}from"./fsm-50373df9.js";import{c as k}from"./number-c3ab3e95.js";import w from"./Icon.js";import{s as f}from"./Component-2253424f.js";import{s as z}from"./Sticky-c34c9b12.js";import"./directive-e9ce14b4.js";import"./ref-99418ab4.js";import"./LocalizeController.js";import"./translation.js";import"./en-us.js";import"./localization.js";import"./localization2.js";import"./localization3.js";import"./localization4.js";import"./localization5.js";import"./localization6.js";import"./localization7.js";import"./localization8.js";import"./FocusableMixin-d30213b4.js";import"./Button.js";import"./LightDomController-5388d84c.js";import"./Spinner.js";import"./if-defined-cccde88f.js";import"./InputMixin-83b5bd46.js";import"./VisuallyHidden.js";import"./ShortcutController-87615e31.js";import"./tinykeys.module-84e6cc41.js";import"./IconManager.js";const x=()=>!0;class S{constructor(n,e){n.addController(this),this.options={enabled:x,...e}}hostConnected(){"undefined"!=typeof BroadcastChannel&&(this.channel=new BroadcastChannel(this.options.channelName),this.channel.addEventListener("message",this))}hostDisconnected(){var n,e;null===(n=this.channel)||void 0===n||n.removeEventListener("message",this),null===(e=this.channel)||void 0===e||e.close()}handleEvent(n){this.options.enabled()&&this.options.onMessage(n.data)}post(n){var e;this.options.enabled()&&(null===(e=this.channel)||void 0===e||e.postMessage(n))}}function _(n,e,a=JSON.stringify,t=JSON.parse){return{get value(){try{const a=localStorage.getItem(n);return a?t(a):e}catch(n){return e}},set value(e){try{localStorage.setItem(n,a(e))}catch(n){}}}}const j=n`:host{--_n-layout-padding:var(--n-layout-padding, var(--n-space-l));--_n-layout-drawer-inline-size:var(--n-layout-drawer-inline-size, 320px);--_n-layout-background-color:var(--n-layout-background-color, var(--n-color-background));--_n-layout-nav-transition-duration:var(--n-transition-mobile);--_n-layout-header-size:var(--n-space-xxl);--_n-layout-header-size-s:calc(var(--n-space-xl) + var(--n-space-m));background:var(--_n-layout-background-color);color:var(--n-color-text);min-block-size:100vh}.n-layout-main,.n-layout-nav{background:var(--_n-layout-background-color);min-block-size:100%}.n-layout-nav{position:fixed;user-select:none;inline-size:var(--_n-layout-nav-width);z-index:var(--n-index-nav);inset-block-start:0;inset-inline-start:0;inset-block-end:0;transform:translateX(var(--n-nav-transform));box-shadow:var(--n-box-shadow-nav)}.n-layout-main{position:relative}main{padding:var(--_n-layout-padding)}.n-has-top-bar{--_n-sticky-top:var(--_n-layout-header-size)}:host([sticky]) .n-has-header{--_n-sticky-size:var(--_n-layout-header-size)}aside{position:fixed;z-index:var(--n-index-nav);inset-block:0;inset-inline-end:0;inline-size:var(--_n-layout-drawer-inline-size);max-inline-size:100%;background:var(--n-color-surface);box-shadow:var(--n-box-shadow-nav)}@media (min-width:1240px){.n-has-drawer .n-layout-content{margin-inline-end:var(--_n-layout-drawer-inline-size)}aside{box-shadow:var(--n-box-shadow-header);border-inline-start:1px solid var(--n-color-border)}}slot[name=drawer]::slotted(*){block-size:100%!important}.n-has-top-bar aside{inset-block-start:var(--_n-layout-header-size)}:is(.n-has-top-bar,.n-has-header) ::slotted(nord-notification-group){inset-block-start:var(--_n-layout-header-size)}:is([data-nav=closed],[data-nav=unpeek]) .n-layout-nav{transform:translateX(-110%)}.n-rtl:is([data-nav=closed],[data-nav=unpeek]) .n-layout-nav{transform:translateX(110%)}[data-screen=narrow] .n-layout-nav{z-index:var(--n-index-popout);transition:transform var(--_n-layout-nav-transition-duration)}[data-screen=wide]:is(:not([data-nav=opened],[data-nav=closed])) .n-layout-nav{transition:transform var(--_n-layout-nav-transition-duration);border-start-end-radius:var(--n-border-radius);border-end-end-radius:var(--n-border-radius);min-block-size:0;inset-block-start:calc(var(--n-space-m) * 4);inset-block-end:var(--n-space-l)}[data-screen=wide][data-nav=opened] .n-layout-nav{border-inline-end:1px solid var(--n-color-border);box-shadow:none}[data-screen=wide][data-nav=opened]:not(.n-has-top-bar) .n-layout-nav{--n-navigation-header-padding-inline:calc(var(--n-space-l) / 1.5)}.n-has-top-bar[data-screen=wide][data-nav=opened] .n-layout-nav{--n-navigation-header-background:var(--n-color-accent-secondary);--n-navigation-header-color:var(--n-color-text-on-accent);--n-navigation-header-divider:none;--n-navigation-header-toggle-icon-color:rgba(255, 255, 255, 0.85);--n-navigation-header-focus-style:0 0 0 1px #fff inset,inset 0 0 0 100px rgba(255, 255, 255, 0.2);border-color:transparent;border-image-slice:1;border-image-source:linear-gradient(to bottom,rgba(255,255,255,.16) calc(var(--_n-layout-header-size) + 1px),var(--n-color-border) calc(var(--_n-layout-header-size) + 1px));background:var(--n-color-accent-secondary);box-shadow:0 0 transparent}[data-screen=wide]:not([data-nav=opened]) .n-layout-nav{--n-navigation-header-block-size:var(--_n-layout-header-size-s);overflow:hidden}[data-screen=wide][data-nav=opened] .n-layout-main{margin-inline-start:var(--_n-layout-nav-width)}[data-screen=narrow] .n-layout-main::after{content:"";position:fixed;inset:0;z-index:var(--n-index-overlay);transition:opacity var(--n-transition-mobile),visibility var(--n-transition-mobile);background:var(--n-color-overlay)}[data-screen=narrow]:not([data-nav=opened],[data-nav=peek],[data-nav=blocked]) .n-layout-main::after{visibility:hidden;opacity:0}.n-resize{touch-action:none;position:absolute;min-block-size:100%;inset-block:0;inset-inline-end:-8px;inline-size:10px;background:0 0}[data-nav=opened] .n-resize{cursor:col-resize}.n-resize::after{content:"";position:absolute;z-index:var(--n-index-sticky);inset-block:0;inset-inline-end:5px;inline-size:3px;background:var(--n-color-accent);transition:opacity var(--n-transition-slowly);opacity:0}.n-resize:focus{outline:0}.n-dragging .n-resize::after,.n-resize:focus::after,[data-nav=opened] .n-resize:hover::after{opacity:1;transition-delay:.15s}@supports selector(:focus-visible){.n-resize:focus::after{opacity:0}.n-resize:focus-visible::after{opacity:1}}.n-dragging{cursor:col-resize!important;-webkit-user-select:none;user-select:none}:host([padding=none]){--_n-layout-padding:var(--n-layout-padding, 0)}.n-top-bar-container{position:fixed;inset-inline-start:var(--_n-layout-nav-width);inset-inline-end:0;inset-block-start:0;z-index:var(--n-index-top-bar)}[data-screen=narrow] .n-top-bar-container,[data-screen=wide]:not([data-nav=opened]) .n-top-bar-container{inset-inline-start:0}.n-has-top-bar{--_n-layout-header-size:var(--_n-layout-header-size-s);--n-navigation-header-block-size:var(--_n-layout-header-size)}.n-has-top-bar :is([name=header],[name=drawer])::slotted(*){--n-header-block-size:var(--_n-layout-header-size)}.n-has-top-bar .n-layout-main{inset-block-start:var(--_n-layout-header-size)}.n-nav-toggle-container{position:absolute;padding-inline-start:var(--n-space-s);block-size:var(--_n-layout-header-size);display:flex;align-items:center;z-index:calc(var(--n-index-top-bar) + 1)}[data-screen=narrow] .n-nav-toggle-container{padding-inline-start:var(--n-space-xs)}.n-has-top-bar .n-nav-toggle-container,:host([sticky]) .n-nav-toggle-container{position:fixed;inset-block-start:0}[data-screen=wide][data-nav=opened] .n-nav-toggle-container{display:none}.n-has-nav[data-screen=wide]:not([data-nav=opened]) ::slotted(nord-top-bar),.n-has-nav[data-screen=wide]:not([data-nav=opened],.n-has-top-bar) ::slotted(nord-header[slot=header]){--_n-header-gutter:calc(var(--n-space-l) * 1.8)}.n-has-nav[data-screen=narrow] ::slotted(nord-top-bar),.n-has-nav[data-screen=narrow]:not(.n-has-top-bar) ::slotted(nord-header[slot=header]){--_n-header-gutter:var(--n-space-xl)}.n-has-top-bar :is(nord-nav-toggle,::slotted(nord-nav-toggle)){--n-button-background-color:transparent;color:rgba(255,255,255,.85)}.n-has-top-bar :is(nord-nav-toggle,::slotted(nord-nav-toggle)):focus{--n-button-background-color:rgba(0, 0, 0, 0.2)}.n-collapse-btn{--_n-collapse-btn-size:var(--n-space-l);position:fixed;inset-inline-start:calc(var(--_n-layout-nav-width) - (var(--_n-collapse-btn-size)/ 2));inset-block-start:calc(var(--_n-layout-header-size) + (var(--_n-layout-header-size) - var(--_n-collapse-btn-size))/ 2);border-radius:var(--n-border-radius-circle);block-size:var(--_n-collapse-btn-size);inline-size:var(--_n-collapse-btn-size);display:flex;align-items:center;justify-content:center;color:var(--n-color-icon);background:var(--n-color-button);box-shadow:var(--n-box-shadow-card);border:0;z-index:var(--n-index-sticky);opacity:0;visibility:hidden;cursor:pointer;transition:opacity var(--n-transition-slowly),visibility var(--n-transition-slowly),background-color var(--n-transition-quickly),color var(--n-transition-quickly)}.n-collapse-btn:hover{background:var(--n-color-accent);color:var(--n-color-text-on-accent)}.n-collapse-btn:focus{outline:0;box-shadow:0 0 0 2px var(--n-color-accent),var(--n-box-shadow)}[data-screen=narrow] .n-collapse-btn,[data-screen=wide]:not([data-nav=opened]) .n-collapse-btn{display:none}.n-collapse-btn:focus,.n-layout-nav:hover .n-collapse-btn{opacity:1;visibility:visible}.n-collapse-btn nord-icon{transform:rotate(180deg)}.n-rtl .n-collapse-btn nord-icon{transform:rotate(0)}`;w.registerIcon(h);const C=matchMedia("(min-width: 768px)"),N=_("nord-layout.navWidth",250),T=_("nord-layout.navOpen",!0),$=y({opened:{toggle:"closed",close:"closed"},closed:{toggle:"opened",open:"opened",focusin:"peek",pointerenter:"peek"},peek:{toggle:"opened",focusout:"unpeek",pointerleave:"wait",dropdownOpen:"blocked",click:"unpeek",open:"opened"},blocked:{dropdownClose:"peek",open:"opened"},wait:{toggle:"opened",focusin:"peek",pointerenter:"peek",timeout:"unpeek"},unpeek:{toggle:"opened",focusin:"peek",pointerenter:"peek",transitionend:"closed"}});let D=class extends a{constructor(){super(...arguments),this.navSlot=new g(this,"nav"),this.drawerSlot=new g(this,"drawer"),this.topBarSlot=new g(this,"top-bar"),this.headerSlot=new g(this,"header"),this.direction=new v(this),this.events=new p(this),this.lightDismiss=new u(this,{isOpen:()=>"opened"===this.navState&&!this.wideScreen,onDismiss:()=>this.navTransition("close"),isDismissible:n=>n!==this.navEl}),this.broadcast=new S(this,{channelName:"nord-layout-nav-state",enabled:()=>this.syncNavState&&this.wideScreen,onMessage:n=>{"navOpen"in n&&(this.navOpen=n.navOpen),"navWidth"in n&&(this.navWidth=n.navWidth)}}),this.navWidth=N.value,this.isDragging=!1,this.wideScreen=C.matches,this.persistNavState=!1,this.syncNavState=!1,this.padding="m",this.sticky=!1,this.handleMediaQueryChange=()=>{this.wideScreen=C.matches,this.navTransition(this.wideScreen?"open":"close")},this.handleToggleClick=()=>{this.navTransition("toggle")},this.handleNavFocus=()=>{this.navTransition("focusin")},this.handleMainFocus=()=>{this.navTransition("focusout")},this.handleMouseEnter=()=>{this.wideScreen&&this.navTransition("pointerenter")},this.handleMouseLeave=()=>{this.navTransition("pointerleave")},this.handleTransitionEnd=()=>{this.navTransition("transitionend")}}get isNarrow(){return!this.wideScreen}connectedCallback(){super.connectedCallback(),this.events.listen(C,"change",this.handleMediaQueryChange)}willUpdate(){this.hasUpdated||(this.isNarrow||this.persistNavState&&!1===T.value?this.navState="closed":this.navState="opened")}render(){const{navWidth:n,navState:e,navSlot:a,headerSlot:i,topBarSlot:s,drawerSlot:r,isDragging:d,direction:h}=this,v="opened"===e&&this.wideScreen?n:250;return t`<div class="${l({"n-layout":!0,"n-rtl":h.isRTL,"n-dragging":d,"n-has-header":i.hasContent,"n-has-top-bar":s.hasContent,"n-has-drawer":r.hasContent,"n-has-nav":a.hasContent})}" style="${c({"--_n-layout-nav-width":`${v}px`})}" data-nav="${a.hasContent?e:"closed"}" data-screen="${this.wideScreen?"wide":"narrow"}"><div class="n-layout-nav" ?hidden="${a.isEmpty}" @focusin="${this.handleNavFocus}" @mouseenter="${this.handleMouseEnter}" @mouseleave="${this.handleMouseLeave}" @open="${this.handleDropdownOpen}" @close="${this.handleDropdownClose}"><slot name="nav" @click="${this.handleNavClick}"></slot><div class="n-resize" role="separator" aria-orientation="vertical" tabindex="0" @pointerdown="${m("opened"===e,this.startDragging)}" @pointermove="${m(d,this.handleDrag)}" @pointerleave="${this.stopDragging}" @pointerup="${this.stopDragging}" @keydown="${this.handleKeyboardResize}" ?hidden="${this.isNarrow}"></div>${this.renderNavCollapse()}</div><div class="n-layout-main" @focusin="${this.handleMainFocus}" @click="${this.handleMainClick}">${a.hasContent?this.renderNavToggle():o}<div class="n-top-bar-container"><slot name="top-bar"></slot></div><div class="n-layout-content"><div class="n-sticky"><slot name="header"></slot></div><main><slot></slot></main></div><aside ?hidden="${this.drawerSlot.isEmpty}"><slot name="drawer"></slot></aside></div></div>`}renderNavToggle(){return t`<div class="n-nav-toggle-container"><slot name="nav-toggle" @click="${this.handleToggleClick}" @mouseover="${this.handleMouseEnter}" @mouseout="${this.handleMouseLeave}"><nord-nav-toggle></nord-nav-toggle></slot></div>`}renderNavCollapse(){return t`<button class="n-collapse-btn" @click="${this.handleToggleClick}"><nord-icon name="navigation-toggle-lock" size="s"></nord-icon></button>`}handleNavWidthChange(){N.value=this.navWidth}handleNavStateChange(n){switch("wait"===n&&this.peekTimeoutId&&clearTimeout(this.peekTimeoutId),"unpeek"===n&&this.navEl.removeEventListener("transitionend",this.handleTransitionEnd),this.navState){case"closed":this.navOpen=!1;break;case"opened":this.navOpen=!0;break;case"wait":this.peekTimeoutId=setTimeout((()=>this.navTransition("timeout")),300);break;case"unpeek":this.navEl.addEventListener("transitionend",this.handleTransitionEnd,{once:!0})}}handleOpenChange(n){this.isDragging||this.setNavWidth(Math.max(this.navWidth,250)),this.navTransition(this.navOpen?"open":"close"),this.persistNavState&&(T.value=this.navOpen),null!=n&&this.broadcast.post({navOpen:this.navOpen})}navTransition(n){this.navState=$.transition(this.navState,n)}handleNavClick(n){if(!n.defaultPrevented&&!this.wideScreen){const a=n.target;(n=>"nord-nav-item"===n.localName)(e=a)&&!e.hasSubNav&&this.navTransition("close")}var e}handleMainClick(){this.navTransition("click")}handleDropdownOpen(n){"nord-dropdown"===n.target.localName&&this.navTransition("dropdownOpen")}handleDropdownClose(n){"nord-dropdown"===n.target.localName&&this.navTransition("dropdownClose")}handleKeyboardResize(n){const{navWidth:e,direction:{isLTR:a}}=this;switch(n.key){case"ArrowLeft":this.setNavWidth(e+(a?-30:30));break;case"ArrowRight":this.setNavWidth(e+(a?30:-30));break;case"Enter":this.navTransition("toggle");break;case"Home":this.setNavWidth(220);break;case"End":this.setNavWidth(400);break;default:return}this.broadcast.post({navWidth:this.navWidth}),n.preventDefault()}setNavWidth(n){this.navWidth=k(Math.round(n),220,400)}startDragging(n){if(0===n.button){n.target.setPointerCapture(n.pointerId),this.isDragging=!0}}stopDragging(){this.isDragging=!1,this.broadcast.post({navWidth:this.navWidth})}handleDrag(n){const e=this.direction.isRTL?this.clientWidth-n.clientX:n.clientX;this.setNavWidth(e),this.navTransition(e>=100?"open":"close")}};D.styles=[f,z,j],e([d(".n-layout-nav",!0)],D.prototype,"navEl",void 0),e([r()],D.prototype,"navWidth",void 0),e([r()],D.prototype,"isDragging",void 0),e([r()],D.prototype,"navState",void 0),e([r()],D.prototype,"wideScreen",void 0),e([s({reflect:!0,type:Boolean,attribute:"nav-open"})],D.prototype,"navOpen",void 0),e([s({type:Boolean,attribute:"persist-nav-state"})],D.prototype,"persistNavState",void 0),e([s({type:Boolean,reflect:!0,attribute:"sync-nav-state"})],D.prototype,"syncNavState",void 0),e([s({reflect:!0})],D.prototype,"padding",void 0),e([s({type:Boolean,reflect:!0})],D.prototype,"sticky",void 0),e([b("navWidth","updated")],D.prototype,"handleNavWidthChange",null),e([b("navState")],D.prototype,"handleNavStateChange",null),e([b("navOpen","updated")],D.prototype,"handleOpenChange",null),D=e([i("nord-layout")],D);var W=D;export{W as default};
//# sourceMappingURL=Layout.js.map