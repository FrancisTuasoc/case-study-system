# casestudy-system — Burger Ordering & Billing System

A complete, full-featured Burger Ordering and Billing Web Application built with an Express.js backend and a clean, responsive vanilla JavaScript/CSS frontend.

---

## 📁 Project Directory Structure

```text
casestudy-system/
├── ADMIN-CREDENTIALS.txt       # Admin credentials and sign-in info
├── README.md                   # System documentation and startup guide
├── backend/                    # Node.js / Express backend
│   ├── .env                    # Environment variables (MONGODB_URI, JWT_SECRET, etc.)
│   ├── .env.example            # Environment template
│   ├── package.json            # Node.js dependencies & scripts
│   ├── server.js               # Express application entrypoint & static host
│   └── src/
│       ├── config/             # DB connection & environment configuration
│       ├── controllers/        # Auth, product, order, and settings controllers
│       ├── middleware/         # Auth, validation, and error middleware
│       ├── models/             # Mongoose schemas (User, Product, Order, Settings)
│       ├── routes/             # REST API routes
│       ├── seed/               # Database seeder with all 35 menu items & addons
│       └── utils/              # Stock streams and helpers
└── frontend/                   # Client-side static application
    ├── assets/
    │   ├── items/              # 35 food and addon item assets (.png / .jpg)
    │   └── logo.svg            # Responsive brand vector logo
    ├── css/
    │   ├── base.css            # Color variables, typography, and reset
    │   ├── components.css      # Cards, buttons, badges, modals, toast
    │   └── pages.css           # Page layouts and responsive rules
    ├── js/                     # Modular client-side ES modules
    │   ├── api.js              # Fetch wrapper & token management
    │   ├── auth.js             # Authentication state, login, register, logout
    │   ├── cart.js             # Cart management with localStorage fallback
    │   ├── checkout.js         # Multi-step checkout & payment processing
    │   ├── home.js             # Home page featured products & cart modal
    │   ├── menu.js             # Full menu catalog, live search & category filters
    │   ├── profile.js          # Customer profile & live order history
    │   ├── admin.js            # Admin dashboard: metrics, products, orders, settings
    │   ├── stock-stream.js     # Real-time stock event listener
    │   └── ui.js               # Dynamic navbar, footer, toast & modals
    ├── index.html              # Landing page
    ├── menu.html               # Menu catalog page
    ├── cart.html               # Cart & checkout page
    ├── profile.html            # User account & order tracking page
    ├── login.html              # Sign in page
    ├── register.html           # Sign up page
    └── admin.html              # Administrative control center
```

---

## 🚀 Quick Start Guide

### 1. Backend Setup & Dependencies
The `package.json` resides cleanly inside `backend/` without any duplicate root clutter:

```bash
cd backend
npm install
```

### 2. Configure Environment Variables
Verify or edit `backend/.env`:
```env
MONGODB_URI=mongodb://localhost:27017/casestudy_system
JWT_SECRET=super_secret_jwt_key_casestudy_2026
PORT=5000
NODE_ENV=development
ADMIN_EMAIL=admin@burgershop.com
ADMIN_PASSWORD=Admin@12345
ADMIN_USERNAME=Admin
```

### 3. Seed Database
Populate the database with all 35 products, categories, addons, and default administrator:
```bash
cd backend
npm run seed
```

### 4. Start Server
Run the production server:
```bash
cd backend
npm start
```
Or run with live reload during development:
```bash
npm run dev
```

The Express server serves the backend API at `http://localhost:5000/api` and statically serves the responsive `frontend/` at `http://localhost:5000/`.

---

## 🍔 Food Asset Images
All 35 authentic item images are located directly in `frontend/assets/items/`:
- **Burgers**: `cdo-burger.png`, `burger-with-ham.png`, `burger-with-egg.png`, `burger-with-bacon.png`, `burger-bacon-ham.png`
- **Cheese Burgers**: `cheeseburger.png`, `cheeseburger-with-ham.png`, `cheeseburger-with-egg.png`, `cheeseburger-with-bacon.png`
- **Sandwiches**: `ham.png`, `ham-with-cheese.png`, `ham-with-egg.png`, `ham-cheese-with-egg.png`, `egg-cheese.png`, `egg-sandwich.png`, `bacon-sandwich.png`, `bacon-with-ham.png`, `bacon-with-egg.png`, `bacon-with-cheese.png`, `bacon-cheese-with-ham.png`, `bacon-cheese-with-egg.png`
- **Complete**: `complete.png`, `complete-change-bacon.png`, `complete-with-bacon.png`
- **Footlong**: `footlong.png`, `footlong-ham.png`, `footlong-egg.png`, `footlong-cheese.png`, `footlong-bacon.png`, `footlong-cheese-bacon.png`, `footlong-ham-bacon.png`
- **Grace Siomai**: `grace-siomai-4pcs.png`
- **Addons**: `add-patty.png`, `add-ham.png`, `add-coleslaw.png`

Aliases and symlinks are also maintained so both kebab-case slugs and `.jpg`/`.png` extensions resolve seamlessly with automatic SVG fallback if any image fails to load.

---

## 🔐 Admin Credentials
Default administrator credentials are saved in `casestudy-system/ADMIN-CREDENTIALS.txt`:
- **Email:** `admin@burgershop.com`
- **Password:** `Admin@12345`
