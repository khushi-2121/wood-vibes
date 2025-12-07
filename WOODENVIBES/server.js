const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// In-memory database (for demo - use MongoDB/PostgreSQL in production)
let products = [
  { id: 'wooden-dinner-plate', title: 'Wooden Dinner Plate', price: 599, description: 'Premium wooden plate for dining. Elegant & durable everyday choice.', image: 'woodenplate.jpg.jpg', category: 'plates', stock: 50 },
  { id: 'wooden-fruit-bowl', title: 'Wooden Fruit Bowl', price: 799, description: 'Handcrafted wooden fruit bowl. Natural grain with stylish finish.', image: 'fruitebowl.jpg.jpg', category: 'bowls', stock: 45 },
  { id: 'wooden-spice-box', title: 'Wooden Spice Box', price: 899, description: 'Traditional spice box with compartments. Organize in style.', image: 'spicebox.jpg.jpg', category: 'storage', stock: 40 },
  { id: 'wooden-spoon-container', title: 'Wooden Spoon Container', price: 499, description: 'Elegant storage for cooking utensils. Keep everything organized.', image: 'scontainer.jpg.jpg', category: 'storage', stock: 60 },
  { id: 'wooden-tea-mug', title: 'Wooden Tea Mug', price: 449, description: 'Natural wooden mug for hot beverages. Eco-friendly & stylish.', image: 'mug.jpg.jpg', category: 'mugs', stock: 80 },
  { id: '3-space-spoon-container', title: '3-Space Spoon Container', price: 699, description: 'Three-compartment storage container. Perfect utensil organization.', image: 'spooncon.jpg.jpg', category: 'storage', stock: 35 },
  { id: 'wooden-spoon-set', title: 'Wooden Spoon Set (5 Pieces)', price: 799, description: '5-piece handcrafted spoon set. Various sizes for cooking.', image: 'spoonset.jpg.jpg', category: 'utensils', stock: 50 },
  { id: 'wooden-juice-tray', title: 'Wooden Juice Tray', price: 899, description: 'Elegant wooden tray for drinks. Perfect for entertaining guests.', image: 'juicetray.jpg.jpg', category: 'trays', stock: 30 },
  { id: 'wooden-momos-platter', title: 'Wooden Momos Platter', price: 749, description: 'Momos platter with dipping compartment. Specially designed serving.', image: 'momosplatter.jpg.jpg', category: 'platters', stock: 25 },
  { id: 'jeera-namak-containers', title: 'Jeera & Namak Containers', price: 649, description: 'Jeera & salt containers set. Perfect spice storage solution.', image: 'jeernamak.jpg.jpg', category: 'storage', stock: 40 },
  { id: 'wooden-pickle-container', title: 'Wooden Pickle Container', price: 699, description: 'Traditional pickle container. Specially designed storage.', image: 'pickle.jpg.jpg', category: 'storage', stock: 35 },
  { id: 'wooden-roti-warmer', title: 'Wooden Roti Warmer', price: 849, description: 'Roti warmer container. Keep rotis warm & fresh always.', image: 'rotiwarmer.jpg.jpg', category: 'storage', stock: 28 },
  { id: 'wooden-juice-glass', title: 'Wooden Juice Glass', price: 399, description: 'Natural wooden glass for juices. Eco-friendly drinkware.', image: 'juiceglass.jpg.jpg', category: 'drinkware', stock: 70 }
];

let orders = [];
let users = {};
let subscribers = [];

// Routes

// GET all products
app.get('/api/products', (req, res) => {
  res.json({ success: true, data: products, count: products.length });
});

// GET product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
  res.json({ success: true, data: product });
});

// GET products by category
app.get('/api/products/category/:category', (req, res) => {
  const categoryProducts = products.filter(p => p.category === req.params.category);
  res.json({ success: true, data: categoryProducts, count: categoryProducts.length });
});

// POST search products
app.post('/api/products/search', (req, res) => {
  const { query } = req.body;
  const results = products.filter(p => 
    p.title.toLowerCase().includes(query.toLowerCase()) || 
    p.description.toLowerCase().includes(query.toLowerCase())
  );
  res.json({ success: true, data: results, count: results.length });
});

// POST create order
app.post('/api/orders', (req, res) => {
  const { email, phone, items, totalAmount, shippingAddress, paymentMethod } = req.body;
  
  if (!items || items.length === 0) {
    return res.status(400).json({ success: false, message: 'Cart cannot be empty' });
  }

  const orderId = uuidv4();
  const order = {
    orderId,
    email,
    phone,
    items,
    totalAmount,
    shippingAddress,
    paymentMethod,
    status: 'pending',
    createdAt: new Date(),
    estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) // 5 days
  };

  orders.push(order);
  res.json({ success: true, data: order, message: 'Order created successfully' });
});

// GET order by ID
app.get('/api/orders/:orderId', (req, res) => {
  const order = orders.find(o => o.orderId === req.params.orderId);
  if (!order) return res.status(404).json({ success: false, message: 'Order not found' });
  res.json({ success: true, data: order });
});

// GET orders by email
app.get('/api/orders/email/:email', (req, res) => {
  const userOrders = orders.filter(o => o.email === req.params.email);
  res.json({ success: true, data: userOrders, count: userOrders.length });
});

// POST register user
app.post('/api/auth/register', (req, res) => {
  const { email, password, fullName, phone } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password required' });
  }

  if (users[email]) {
    return res.status(400).json({ success: false, message: 'User already exists' });
  }

  const userId = uuidv4();
  users[email] = { userId, email, password, fullName, phone, createdAt: new Date() };
  
  res.json({ success: true, data: { userId, email, fullName }, message: 'User registered successfully' });
});

// POST login user
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  if (!users[email] || users[email].password !== password) {
    return res.status(401).json({ success: false, message: 'Invalid email or password' });
  }

  const user = users[email];
  res.json({ success: true, data: { userId: user.userId, email: user.email, fullName: user.fullName }, message: 'Login successful' });
});

// POST subscribe to newsletter
app.post('/api/newsletter/subscribe', (req, res) => {
  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required' });
  }

  if (subscribers.includes(email)) {
    return res.status(400).json({ success: false, message: 'Already subscribed' });
  }

  subscribers.push(email);
  res.json({ success: true, message: 'Successfully subscribed to newsletter' });
});

// GET cart calculation
app.post('/api/cart/calculate', (req, res) => {
  const { items } = req.body;
  
  if (!items || items.length === 0) {
    return res.json({ success: true, subtotal: 0, tax: 0, total: 0 });
  }

  let subtotal = 0;
  items.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if (product) {
      subtotal += product.price * (item.quantity || 1);
    }
  });

  const tax = Math.round(subtotal * 0.18); // 18% GST
  const total = subtotal + tax;

  res.json({ success: true, subtotal, tax, total, items: items.length });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is running', timestamp: new Date() });
});

// Serve frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal server error', error: err.message });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n✅ Wooden Vibes API Server running on http://localhost:${PORT}`);
  console.log(`📦 Products: ${products.length}`);
  console.log(`📧 Newsletter subscribers: ${subscribers.length}\n`);
});
