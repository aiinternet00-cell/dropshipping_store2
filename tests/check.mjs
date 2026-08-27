import fs from 'node:fs'; import {products} from '../data/products.js';
if(products.length!==8) throw Error('Expected exactly 8 products');
for(const p of products){
  if(!p.slug || !Array.isArray(p.images) || !p.images.length || !Array.isArray(p.videos)) throw Error(`Incomplete product media architecture: ${p.name}`);
  for(const f of [p.image,p.detail,...p.images]) if(!/^https?:/.test(f)&&!fs.existsSync(f)) throw Error(`Missing ${f}`);
}
const html=fs.readFileSync('index.html','utf8');
for(const bad of ['href="#"','placeholder image']) if(html.includes(bad)) throw Error(`Found forbidden ${bad}`);
for(const absolute of html.matchAll(/(?:src|href)="(\/[^/][^"]*)"/g)) throw Error(`Root-relative path breaks project Pages: ${absolute[1]}`);
for(const f of html.matchAll(/(?:src|href)="([^"#]+)"/g)){const x=f[1];if(!/^(https?:|mailto:|\.|styles|script|policies)/.test(x)&&!fs.existsSync(x))throw Error(`Broken local reference: ${x}`)}
const script=fs.readFileSync('script.js','utf8');
for(const feature of ['#/product/','data-gallery-index','touchstart','type===\'mp4\'','page-add']) if(!script.includes(feature)) throw Error(`Missing storefront feature: ${feature}`);
console.log(`Validated ${products.length} products, media galleries, hash routes, and Pages-safe links.`);
