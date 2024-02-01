import{j as t,a as i}from"./query-assigned-elements-92ce7494.js";import{i as e,t as s,e as o}from"./directive-e9ce14b4.js";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:n}=t,l=()=>document.createComment(""),d=(t,i,e)=>{var s;const o=t._$AA.parentNode,d=void 0===i?t._$AB:i._$AA;if(void 0===e){const i=o.insertBefore(l(),d),s=o.insertBefore(l(),d);e=new n(i,s,t,t.options)}else{const i=e._$AB.nextSibling,n=e._$AM,l=n!==t;if(l){let i;null===(s=e._$AQ)||void 0===s||s.call(e,t),e._$AM=t,void 0!==e._$AP&&(i=t._$AU)!==n._$AU&&e._$AP(i)}if(i!==d||l){let t=e._$AA;for(;t!==i;){const i=t.nextSibling;o.insertBefore(t,d),t=i}}}return e},r=(t,i,e=t)=>(t._$AI(i,e),t),h={},c=(t,i=h)=>t._$AH=i,A=t=>t._$AH,$=t=>{var i;null===(i=t._$AP)||void 0===i||i.call(t,!1,!0);let e=t._$AA;const s=t._$AB.nextSibling;for(;e!==s;){const t=e.nextSibling;e.remove(),e=t}},_=(t,i)=>{var e,s;const o=t._$AN;if(void 0===o)return!1;for(const t of o)null===(s=(e=t)._$AO)||void 0===s||s.call(e,i,!1),_(t,i);return!0},v=t=>{let i,e;do{if(void 0===(i=t._$AM))break;e=i._$AN,e.delete(t),t=i}while(0===(null==e?void 0:e.size))},a=t=>{for(let i;i=t._$AM;t=i){let e=i._$AN;if(void 0===e)i._$AN=e=new Set;else if(e.has(t))break;e.add(t),g(i)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function u(t){void 0!==this._$AN?(v(this),this._$AM=t,a(this)):this._$AM=t}function f(t,i=!1,e=0){const s=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(i)if(Array.isArray(s))for(let t=e;t<s.length;t++)_(s[t],!1),v(s[t]);else null!=s&&(_(s,!1),v(s));else _(this,t)}const g=t=>{var i,e,o,n;t.type==s.CHILD&&(null!==(i=(o=t)._$AP)&&void 0!==i||(o._$AP=f),null!==(e=(n=t)._$AQ)&&void 0!==e||(n._$AQ=u))};class p extends e{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,e){super._$AT(t,i,e),a(this),this.isConnected=t._$AU}_$AO(t,i=!0){var e,s;t!==this.isConnected&&(this.isConnected=t,t?null===(e=this.reconnected)||void 0===e||e.call(this):null===(s=this.disconnected)||void 0===s||s.call(this)),i&&(_(this,t),v(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=()=>new m;class m{}const C=new WeakMap,b=o(class extends p{render(t){return i}update(t,[e]){var s;const o=e!==this.G;return o&&void 0!==this.G&&this.ot(void 0),(o||this.rt!==this.lt)&&(this.G=e,this.dt=null===(s=t.options)||void 0===s?void 0:s.host,this.ot(this.lt=t.element)),i}ot(t){var i;if("function"==typeof this.G){const e=null!==(i=this.dt)&&void 0!==i?i:globalThis;let s=C.get(e);void 0===s&&(s=new WeakMap,C.set(e,s)),void 0!==s.get(this.G)&&this.G.call(this.dt,void 0),s.set(this.G,t),void 0!==t&&this.G.call(this.dt,t)}else this.G.value=t}get rt(){var t,i,e;return"function"==typeof this.G?null===(i=C.get(null!==(t=this.dt)&&void 0!==t?t:globalThis))||void 0===i?void 0:i.get(this.G):null===(e=this.G)||void 0===e?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});export{c as a,d as c,G as e,r as f,A as m,b as n,$ as p};
//# sourceMappingURL=ref-99418ab4.js.map
