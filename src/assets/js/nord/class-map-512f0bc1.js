import{T as t}from"./query-assigned-elements-92ce7494.js";import{e,i,t as s}from"./directive-e9ce14b4.js";
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n=e(class extends i{constructor(t){var e;if(super(t),t.type!==s.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(e,[i]){var s,n;if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!(null===(s=this.nt)||void 0===s?void 0:s.has(t))&&this.it.add(t);return this.render(i)}const r=e.element.classList;this.it.forEach((t=>{t in i||(r.remove(t),this.it.delete(t))}));for(const t in i){const e=!!i[t];e===this.it.has(t)||(null===(n=this.nt)||void 0===n?void 0:n.has(t))||(e?(r.add(t),this.it.add(t)):(r.remove(t),this.it.delete(t)))}return t}});export{n as o};
//# sourceMappingURL=class-map-512f0bc1.js.map
