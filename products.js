const defaultProducts = [
  { name: 'Green Okra', pricePerLb: 3.50, imageUrl: 'images/greenokra.jpg', inStock: true },
  { name: 'Red Okra', pricePerLb: 3.00, imageUrl: 'images/redokra.jpg', inStock: true },
  { name: 'Eggplant', pricePerLb: 3.00, imageUrl: 'images/eggplant.jpg', inStock: true },
  { name: 'Gongura', pricePerLb: 7.00, imageUrl: 'images/gongura.jpg', inStock: true },
  { name: 'Green Chilies', pricePerLb: 5.00, imageUrl: 'images/greenchilies.jpg', inStock: true },
  { name: 'Indian Tomatoes', pricePerLb: 3.00, imageUrl: 'images/tomatoes.jpg', inStock: true },
  { name: 'Cluster Beans', pricePerLb: 4.00, imageUrl: 'images/clusterbeans.jpg', inStock: true },
  { name: 'Ridge Gourd', pricePerLb: 2.00, imageUrl: 'images/ridgegourd.jpg', inStock: true },
  { name: 'Mangos', pricePerLb: 6.00, imageUrl: 'images/mango.jpg', inStock: true },
  { name: 'Suppota', pricePerLb: 6.00, imageUrl: 'images/sapota.jpg', inStock: true },
  { name: 'Sugar Apple', pricePerLb: 15.00, imageUrl: 'images/sugarapple.jpg', inStock: true },
  { name: 'Guavas', pricePerLb: 5.00, imageUrl: 'images/guavas.jpg', inStock: true },
  { name: 'Lychees', pricePerLb: 11.00, imageUrl: 'images/lychees.jpg', inStock: false },
  { name: 'Indian Karpuravali Banana', pricePerLb: 1.25, imageUrl: 'images/banana.jpg', inStock: false },
  { name: 'Whole Jackfruit', pricePerLb: 1.00, imageUrl: 'images/jackfruitwhole.jpg', inStock: true },
  { name: 'Jackfruit Pieces', pricePerLb: 1.25, imageUrl: 'images/jackfruitpieces.jpg', inStock: true },
  { name: 'Tindora', pricePerLb: 4.00, imageUrl: 'images/tindora.jpg', inStock: true },
  { name: 'Paan Leaves', pricePerLb: 0.20, imageUrl: 'images/paanleaves.jpg', inStock: true },
  { name: 'Eggs', pricePerLb: 9.00, imageUrl: 'images/eggs.jpg', inStock: true }
];

// Helper functions to manage LocalStorage persistence
function getInventory() {
  const saved = localStorage.getItem('rushi_inventory');
  return saved ? JSON.parse(saved) : defaultProducts;
}

function saveInventory(inventory) {
  localStorage.setItem('rushi_inventory', JSON.stringify(inventory));
}
