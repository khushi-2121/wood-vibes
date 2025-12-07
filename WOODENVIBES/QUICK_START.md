# 🚀 Quick Start Guide - Wooden Vibes

## ⚡ Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Backend Server
```bash
npm start
```

You should see:
```
✅ Wooden Vibes API Server running on http://localhost:5000
```

### Step 3: Open in Browser
Open `http://localhost:5000` in your browser

---

## 📱 Test the Website

### On Your Computer:
1. Open http://localhost:5000
2. Desktop view looks great ✅
3. Open DevTools (F12) → Mobile view to test responsive design
4. Test at 375px (phone), 768px (tablet) widths

### On Mobile Phone (Same Network):
Find your computer's IP address:
- **Windows**: `ipconfig` → Look for "IPv4 Address"
- **Mac/Linux**: `ifconfig` → Look for inet address

Then open: `http://YOUR_IP:5000`

---

## 🧪 Test Backend API

Open any tool and test these endpoints:

### 1. Get All Products
```
GET http://localhost:5000/api/products
```

### 2. Search Products
```
POST http://localhost:5000/api/products/search
Body: { "query": "plate" }
```

### 3. Create Order
```
POST http://localhost:5000/api/orders
Body: {
  "email": "user@test.com",
  "phone": "9825060964",
  "items": [{ "id": "wooden-dinner-plate", "quantity": 1 }],
  "totalAmount": 599,
  "shippingAddress": "123 Main St",
  "paymentMethod": "cod"
}
```

### 4. Check Server Health
```
GET http://localhost:5000/api/health
```

---

## 🎨 What's New

### Frontend Enhancements:
✅ Fully responsive (mobile, tablet, desktop)
✅ Professional e-commerce design
✅ Mobile hamburger menu
✅ Optimized product grid for mobile
✅ Touch-friendly buttons
✅ Better typography scaling
✅ Professional footer

### Backend Enhancements:
✅ Express.js REST API
✅ Product management
✅ Order creation & tracking
✅ User authentication
✅ Newsletter subscription
✅ Cart calculation with tax
✅ Search functionality

---

## 📦 Package Contents

```
Generated Files:
- server.js          → Express backend
- package.json       → Dependencies
- .env              → Configuration
- README.md         → Full documentation
```

---

## ⚙️ Environment Setup

File: `.env`
```
PORT=5000
NODE_ENV=development
API_URL=http://localhost:5000
```

Change these values for different environments.

---

## 🐛 Troubleshooting

### Port Already in Use?
```bash
# Change port in .env or use:
PORT=3000 npm start
```

### Dependencies Not Installing?
```bash
npm cache clean --force
rm package-lock.json
npm install
```

### Can't Access on Mobile?
- Make sure firewall allows port 5000
- Use same WiFi network
- Check router settings

---

## 📈 Next Steps

1. **Connect to Database** - Replace in-memory data with MongoDB
2. **Add Payment Gateway** - Integrate Razorpay or Stripe
3. **Admin Panel** - Add product management dashboard
4. **User Profiles** - Store user data in database
5. **Email Notifications** - Send order confirmations
6. **Analytics** - Track user behavior

---

## 💬 Support

Questions? Check README.md for full documentation or contact:
📞 WhatsApp: +91 98250 60964
📧 Email: info@woodenvibes.com

Happy coding! 🎉
