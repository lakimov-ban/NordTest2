class t{get dir(){return document.documentElement.dir||"ltr"}get isLTR(){return"ltr"===this.dir}get isRTL(){return"rtl"===this.dir}constructor(t){this.host=t,this.host.addController(this)}hostConnected(){t.observer||(t.observer=new MutationObserver(t.observe),t.observer.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]})),t.hosts.has(this.host)||t.hosts.add(this.host)}hostDisconnected(){t.hosts.delete(this.host)}static observe(){t.hosts.forEach((t=>t.requestUpdate()))}}t.hosts=new Set;export{t as D};
//# sourceMappingURL=DirectionController-f35f5476.js.map