class n extends Event{constructor(n,e){super(n,{bubbles:!0,composed:!0,...e})}}function e(n,e){return new Promise((t=>{n.addEventListener(e,(n=>t(n)),{once:!0})}))}function t(n){return Promise.race([e(n,"transitionend"),e(n,"transitioncancel")])}function r(n){return Promise.race([e(n,"animationend"),e(n,"animationcancel")])}export{n as N,r as a,t};
//# sourceMappingURL=events-d9666e88.js.map
