export const STORE = { freeShipping: 60, currency: "USD" };

// Product information is intentionally limited to the data supplied by the store owner.
// Do not add a price, title, specifications, imagery or claims until they are verified.
export const products = [
  {
    id: 1,
    slug: "product-1",
    name: "Product №1",
    description: "Product details are awaiting the original product link.",
    category: "Current collection",
    badge: "Details pending",
    sourceUrl: null
  },
  {
    id: 2,
    slug: "product-2",
    name: "Product №2",
    description: "View the supplied AliExpress listing for the current product information.",
    category: "Current collection",
    badge: "Source available",
    sourceUrl: "https://a.aliexpress.com/_mNWPmUF"
  }
].map(product => ({
  ...product,
  price: null,
  image: `assets/products/${product.slug}/hero.svg`,
  detail: `assets/products/${product.slug}/detail.svg`,
  images: [`assets/products/${product.slug}/hero.svg`, `assets/products/${product.slug}/detail.svg`],
  videos: [],
  variants: [],
  benefits: [],
  specifications: {},
  howTo: [],
  faq: []
}));
