export const products = [
  { name: 'Running Shoes', category: 'Footwear', price: 89 },
  { name: 'Leather Boots', category: 'Footwear', price: 129 },
  { name: 'Canvas Sneakers', category: 'Footwear', price: 59 },
  { name: 'Wool Socks', category: 'Apparel', price: 15 },
  { name: 'Rain Jacket', category: 'Apparel', price: 99 },
  { name: 'Baseball Cap', category: 'Accessories', price: 25 },
  { name: 'Leather Belt', category: 'Accessories', price: 35 },
  { name: 'Sunglasses', category: 'Accessories', price: 45 },
  { name: 'Backpack', category: 'Accessories', price: 79 },
  { name: 'Water Bottle', category: 'Accessories', price: 19 },
] as const

export type Product = (typeof products)[number]

export function fetchProducts(): Promise<ReadonlyArray<Product>> {
  const delayMs = 2000 + Math.random() * 500
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), delayMs)
  })
}
