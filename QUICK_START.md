# mSana Billing Software - Quick Start Guide

## 🚀 Quick Start

### Step 1: Install Dependencies

Both backend and frontend dependencies have been installed successfully!

### Step 2: Start the Backend Server

Open a terminal and run:

```bash
cd server
npm run dev
```

The backend will start on `http://localhost:4000`

You should see:
```
✅ MongoDB Connected: msana.vmxlho7.mongodb.net
✅ Telegram Bot Connected
✅ Cron jobs initialized
🚀 Server running on port 4000
```

### Step 3: Start the Frontend

Open a NEW terminal and run:

```bash
cd client
npm run dev
```

The frontend will start on `http://localhost:5173`

### Step 4: Access the Application

Open your browser and go to: `http://localhost:5173`

## 📝 Creating Your First Admin User

Since this is a fresh installation, you need to create an admin user first.

### Option 1: Using API (Recommended)

Use Postman or curl to create an admin user:

```bash
curl -X POST http://localhost:4000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Admin User",
    "email": "admin@msana.com",
    "password": "admin123",
    "role": "admin"
  }'
```

### Option 2: Modify the Backend Temporarily

Temporarily remove the `protect` and `authorize` middleware from the register route in `server/routes/auth.js`:

Change:
```javascript
router.post('/register', protect, authorize('admin'), register);
```

To:
```javascript
router.post('/register', register);
```

Then use the login page to register. **Remember to change it back after creating the admin user!**

## 🎯 Using the Application

### Login
1. Go to `http://localhost:5173/login`
2. Enter your credentials
3. Click "Sign In"

### Dashboard
- View today's and monthly sales
- See recent invoices
- Monitor low stock alerts
- Quick access to main features

### Products
- Add new products
- Edit existing products
- Track stock levels
- Set minimum stock thresholds
- Link products to suppliers

### Create Invoice
1. Click "Create Invoice" from dashboard
2. Enter customer information
3. Add products to the invoice
4. Review the total
5. Click "Create Invoice"
6. Stock will be automatically reduced

### Reports
- View sales trends
- Analyze top-selling products
- Filter by date range
- Export data (coming soon)

## 🤖 Telegram Bot Setup

Your Telegram bot is already configured and running!

### Test the Bot

1. Open Telegram
2. Search for your bot using the bot username
3. Send `/start` to begin
4. Try these commands:
   - `/lowstock` - View low stock products
   - `/help` - Get help

### Automatic Alerts

The system will automatically send you alerts when:
- Product stock falls below minimum level
- Product goes out of stock

Alerts are checked every 30 minutes (configurable in `.env`)

## 📊 Sample Data

To test the system, you can:

1. **Add Suppliers** (optional but recommended)
2. **Add Products** with stock levels
3. **Create Invoices** to test billing
4. **View Reports** to see analytics

## 🔧 Configuration

### Backend (.env)
Located at: `server/.env`

Key settings:
- `PORT` - Server port (default: 4000)
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - JWT secret key
- `TELEGRAM_BOT_TOKEN` - Your Telegram bot token
- `TELEGRAM_ADMIN_CHAT_IDS` - Your Telegram chat ID
- `MIN_STOCK_CHECK_INTERVAL` - Cron schedule for stock checks

### Frontend (.env)
Located at: `client/.env`

Key settings:
- `VITE_API_URL` - Backend API URL (default: http://localhost:4000/api)

## 🐛 Troubleshooting

### Backend won't start
- Check if MongoDB connection string is correct
- Ensure port 4000 is not in use
- Check if all dependencies are installed

### Frontend won't start
- Ensure port 5173 is not in use
- Check if all dependencies are installed
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

### Telegram bot not working
- Verify bot token is correct
- Check if chat ID is correct
- Ensure bot is started in Telegram

### Database connection issues
- Verify MongoDB URI is correct
- Check if IP address is whitelisted in MongoDB Atlas
- Ensure network connectivity

## 📱 Mobile Access

The application is fully responsive and works on mobile devices. Simply access the same URL from your mobile browser.

## 🔐 Security Notes

1. **Change default credentials** after first login
2. **Use strong passwords** for production
3. **Keep JWT_SECRET secure** and never commit to version control
4. **Enable HTTPS** in production
5. **Regularly update dependencies**

## 🎉 You're All Set!

Your mSana Billing Software is now ready to use. Start by:

1. Creating an admin user
2. Adding some products
3. Creating your first invoice
4. Exploring the reports

For more information, check the main README.md file.

## 📞 Need Help?

- Check the README.md for detailed documentation
- Review the API endpoints in the code
- Check server logs for errors
- Ensure all environment variables are set correctly

Happy Billing! 🎊
