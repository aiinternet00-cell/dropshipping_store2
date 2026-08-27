import fs from 'node:fs'; import {products} from '../data/products.js';
if(products.length!==8) throw Error('Expected exactly 8 products');
for(const p of products) for(const f of [p.image,p.detail]) if(!fs.existsSync(f)) throw Error(`Missing ${f}`);
const html=fs.readFileSync('index.html','utf8');
for(const bad of ['href="#"','placeholder image']) if(html.includes(bad)) throw Error(`Found forbidden ${bad}`);
for(const f of html.matchAll(/(?:src|href)="([^"#]+)"/g)){const x=f[1];if(!/^(https?:|mailto:|\.|styles|script|policies)/.test(x)&&!fs.existsSync(x))throw Error(`Broken local reference: ${x}`)}
console.log(`Validated ${products.length} products, local media, and static links.`);
