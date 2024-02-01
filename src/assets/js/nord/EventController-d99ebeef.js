class s{constructor(s){this.listeners=[],s.addController(this)}hostDisconnected(){this.listeners.forEach((s=>s())),this.listeners=[]}listen(s,e,t,i){s.addEventListener(e,t,i);this.listeners.push((()=>s.removeEventListener(e,t,i)))}}export{s as E};
//# sourceMappingURL=EventController-d99ebeef.js.map
