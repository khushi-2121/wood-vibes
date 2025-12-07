# Wooden Vibes - E-Commerce Platform

A professional, responsive e-commerce website for handcrafted wooden kitchenware with Express.js backend API.

## 🚀 Features

### Frontend
- ✅ **Fully Responsive** - Mobile-first design (works perfectly on phones, tablets, desktops)
- ✅ **Professional E-commerce UI** - Amazon-like design with modern styling
- ✅ **Shopping Cart** - Add to cart, quantity controls, localStorage persistence
- ✅ **Wishlist** - Save favorite products locally
- ✅ **Product Search** - Real-time product search and filtering
- ✅ **User Profiles** - Profile management, order history, saved addresses
- ✅ **Newsletter** - Email subscription with localStorage
- ✅ **Back-to-Top Button** - Smooth scroll navigation
- ✅ **Product Ratings & Badges** - Display bestseller and ratings

### Backend API
- ✅ **Products API** - Get all products, search, filter by category
- ✅ **Orders API** - Create, retrieve, track orders
- ✅ **User Authentication** - Register, login functionality
- ✅ **Newsletter** - Subscribe to newsletter
- ✅ **Cart Calculation** - Calculate subtotal, tax, and total with GST
- ✅ **RESTful API** - Clean, structured API endpoints

## 📱 Responsive Breakpoints

- **Desktop**: 980px+ (full layout)
- **Tablet**: 768px - 980px (optimized tablet view)
- **Mobile**: 480px - 768px (enhanced mobile layout)
- **Small Mobile**: < 480px (ultra-compact layout)

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Backend Setup

1. **Navigate to project directory:**
```bash
cd d:/WOODENVIBES
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the server:**
```bash
npm start
```

Server runs on: `http://localhost:5000`

**For development with auto-reload:**
```bash
npm run dev
```

4. **Access the frontend:**
- Open `http://localhost:5000` in browser

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints

#### 1. Products
```
GET /products                    - Get all products
GET /products/:id                - Get product by ID
GET /products/category/:category - Get products by category
POST /products/search            - Search products
```

**Example Request:**
```javascript
fetch('http://localhost:5000/api/products')
  .then(res => res.json())
  .then(data => console.log(data))
```

#### 2. Orders
```
POST /orders                     - Create new order
GET /orders/:orderId             - Get order by ID
GET /orders/email/:email         - Get user's orders
```

**Create Order Example:**
```javascript
fetch('http://localhost:5000/api/orders', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'user@example.com',
    phone: '9825060964',
    items: [{ id: 'wooden-dinner-plate', quantity: 2 }],
    totalAmount: 1298,
    shippingAddress: '123 Main St, City',
    paymentMethod: 'cod'
  })
})
```

#### 3. Authentication
```
POST /auth/register              - Register new user
POST /auth/login                 - Login user
```

#### 4. Newsletter
```
POST /newsletter/subscribe       - Subscribe to newsletter
```

#### 5. Cart
```
POST /cart/calculate             - Calculate cart total with tax
```

#### 6. Health Check
```
GET /health                      - Server status
```

## 📁 Project Structure

```
d:/WOODENVIBES/
├── index.html              # Main frontend page
├── cart.html               # Shopping cart page
├── signin.html             # User login
├── signup.html             # User registration
├── myprofile.html          # User profile
├── myorder.html            # Order history
├── saved-address.html      # Saved addresses
├── track-order.html        # Order tracking
├── help-desk.html          # Help & FAQ
├── logout.html             # Logout page
├── server.js               # Express.js backend
├── package.json            # Node dependencies
├── .env                    # Environment variables
└── README.md               # This file
```

## 🎨 Design Features

### Professional E-commerce Elements
- Clean, modern header with search bar
- Product cards with images, ratings, and prices
- One-line action buttons (wishlist, view, add to cart)
- Responsive navigation menu for mobile
- Professional footer with newsletter signup
- Shopping cart preview dropdown
- Product badges (Bestseller, New)
- Star ratings display

### Mobile Optimization
- Hamburger menu for mobile
- Optimized product grid (2-3 columns on mobile)
- Touch-friendly buttons (min 44px)
- Responsive images
- Mobile-optimized navigation
- Compact footer layout

## 💾 Local Storage Keys

Frontend uses localStorage for persistence:
- `wv_cart` - Shopping cart items
- `wv_wishlist` - Wishlist items
- `wv_addresses` - Saved addresses
- `wv_subscribers` - Newsletter subscribers
- `logged_in` - User login status
- `customerName` - Current user name
- `customerEmail` - Current user email

## 🚀 Deployment

### For Production:
1. Replace in-memory database with MongoDB/PostgreSQL
2. Add authentication middleware (JWT)
3. Implement payment gateway (Stripe/Razorpay)
4. Add SSL/HTTPS
5. Set environment variables properly
6. Use process manager (PM2)

### Deploy to Heroku:
```bash
# Create Heroku app
heroku create wooden-vibes

# Push code
git push heroku main

# View logs
heroku logs --tail
```

## 📞 Support

For issues or feature requests, contact: info@woodenvibes.com
WhatsApp: +91 98250 60964

## 📄 License

MIT License - Feel free to use and modify for your project.

---

**Made with ❤️ for Wooden Vibes**
