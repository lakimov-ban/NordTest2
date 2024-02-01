import{T as e}from"./query-assigned-elements-92ce7494.js";import{e as t,i as r,t as s}from"./directive-e9ce14b4.js";
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n="important",i=" !"+n,o=t(class extends r{constructor(e){var t;if(super(e),e.type!==s.ATTRIBUTE||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,r)=>{const s=e[r];return null==s?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[r]){const{style:s}=t.element;if(void 0===this.ht){this.ht=new Set;for(const e in r)this.ht.add(e);return this.render(r)}this.ht.forEach((e=>{null==r[e]&&(this.ht.delete(e),e.includes("-")?s.removeProperty(e):s[e]="")}));for(const e in r){const t=r[e];if(null!=t){this.ht.add(e);const r="string"==typeof t&&t.endsWith(i);e.includes("-")||r?s.setProperty(e,r?t.slice(0,-11):t,r?n:""):s[e]=t}}return e}});export{o};
//# sourceMappingURL=style-map-f8a1c8d5.js.map
