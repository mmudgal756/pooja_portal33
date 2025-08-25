// This is a mock service file. In a real application, this would be
// replaced with actual API calls to a backend.

let products = [
  {
    id: 1,
    title: 'Havan Samagri Kit',
    description: 'A complete kit with all essential items for performing a sacred Havan at home.',
    price: 499,
  },
  {
    id: 2,
    title: 'Premium Agarbatti',
    description: 'Aromatic incense sticks to create a divine and peaceful atmosphere during your puja.',
    price: 149,
  },
  {
    id: 3,
    title: 'Natural Dhoop Batti',
    description: 'Pure and natural incense cones for a long-lasting and soothing fragrance.',
    price: 199,
  },
   {
    id: 4,
    title: 'Pure Ganga Jal',
    description: 'Sacred water from the Ganges, essential for purification rituals and offerings.',
    price: 99,
  },
  {
    id: 5,
    title: 'Brass Diya Set',
    description: 'Set of two beautifully crafted brass diyas to illuminate your sacred space.',
    price: 299,
  },
  {
    id: 6,
    title: 'Puja Thali Set',
    description: 'A complete puja thali set in decorative steel, including all necessary items.',
    price: 799,
  },
];

let nextId = 7;

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function getProducts() {
  await delay(500);
  return [...products];
}

export async function getProduct(id) {
  await delay(500);
  return products.find(p => p.id === id);
}

export async function addProduct(product) {
  await delay(500);
  const newProduct = { id: nextId++, ...product };
  products.push(newProduct);
  return newProduct;
}

export async function updateProduct(id, updatedProduct) {
  await delay(500);
  products = products.map(p => (p.id === id ? { ...p, ...updatedProduct, id } : p));
  return getProduct(id);
}

export async function deleteProduct(id) {
  await delay(500);
  products = products.filter(p => p.id !== id);
  return { success: true };
}
