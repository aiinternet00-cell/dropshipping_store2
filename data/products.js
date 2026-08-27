export const STORE = { freeShipping: 60, currency: "USD" };

export const products = [
  ["water-bottle","3-in-1 Pet Water Bottle",29,"Walk lighter. Hydrate, feed and tidy up from one leak-resistant bottle.","Dogs","Bestseller",["One-hand water release","Food compartment","Waste-bag holder"]],
  ["dog-bathrobe","Quick Dry Dog Bathrobe",34,"Wrap post-bath shakes in cloud-soft, fast-absorbing comfort.","Dogs","Trending",["Absorbent microfiber","Adjustable waist","Machine washable"]],
  ["paw-trimmer","Pet Paw Hair Trimmer",27,"A slim, quiet detail trimmer made for the tiny spaces around paws.","Dogs","",["Narrow paw-safe head","Low-vibration motor","USB rechargeable"]],
  ["heartbeat-toy","Heartbeat Dog Toy",32,"A soothing plush companion with a gentle, familiar heartbeat feeling.","Dogs","",["Removable heartbeat module","Velvety washable cover","Comfort-sized plush"]],
  ["bath-brush","2-in-1 Pet Bath & Grooming Brush",18,"Dispense shampoo and massage away loose fur with one soft-touch brush.","Dogs","",["Refillable soap chamber","Soft silicone bristles","Non-slip grip"]],
  ["cat-desk-bed","Cat Desk Bed",48,"A secure, elevated hammock that keeps your cat close—and your keyboard clear.","Cats","Bestseller",["Clamp-on design","Padded removable bed","Space-saving perch"]],
  ["bathing-stand","Foldable Pet Bathing Stand",89,"Bring small pets to a comfortable washing height, then fold it neatly away.","Dogs","",["Fold-flat frame","Textured wash basin","Secure restraint loop"]],
  ["cat-ball","Smart Interactive Cat Ball",25,"An auto-moving ball that changes direction to keep curious cats engaged.","Cats","Trending",["Responsive motion","Two play modes","USB rechargeable"]]
].map(([slug,name,price,description,category,badge,benefits],i)=>({
  id:i+1,slug,name,price,description,category,badge,benefits,
  image:`assets/products/${slug}/hero.svg`, detail:`assets/products/${slug}/detail.svg`,
  // Add any number of relative or remote image URLs here; the gallery adapts to one image too.
  images:[`assets/products/${slug}/hero.svg`,`assets/products/${slug}/detail.svg`],
  // Supported types: mp4 (inline player), youtube, tiktok and instagram (official page/embed).
  videos:[],
  variants:i===1?["S / Sand","M / Sage","L / Charcoal"]:i===5?["Natural","Sage"]:[],
  specifications:{Material:i===4?'Food-grade silicone':'Pet-safe mixed materials',Care:'Wipe clean; see included care guide',Dispatch:'1–2 business days'},
  howTo:['Introduce the product calmly and let your pet investigate.','Use under supervision and follow the included instructions.','Clean after use and store in a dry place.'],
  faq:[['Is it suitable for every pet?','Check the size and specifications above, and always supervise first use.'],['How quickly will it ship?','Orders usually leave our studio in 1–2 business days.'],['Can I return it?','Yes. Unused items can be returned within 30 days.']],
  rating:[4.9,4.8,4.7,4.9,4.8,4.7,4.8,4.9][i], reviews:[184,96,121,208,88,74,61,147][i]
}));
