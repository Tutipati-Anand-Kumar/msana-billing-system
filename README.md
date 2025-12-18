# mSana Billing Software

A comprehensive business billing and inventory management web application built with the MERN stack.

## Features

- 📦 **Product & Inventory Management** - Track products, stock levels, and suppliers
- 🧾 **Invoice Generation** - Create professional invoices with automatic stock reduction
- 📊 **Sales Reports & Analytics** - Detailed sales reports with charts and insights
- 🤖 **Telegram Bot Integration** - Automated low-stock alerts via Telegram
- 👥 **Role-Based Access Control** - Admin and Staff roles with different permissions
- 🔐 **JWT Authentication** - Secure authentication system
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices

## Technology Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens)
- **Bot:** Telegram Bot API
- **Scheduler:** node-cron
- **Logger:** Winston
- **PDF Generation:** PDFKit

### Frontend
- **Framework:** React 18 with Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **HTTP Client:** Axios
- **Charts:** Recharts
- **Notifications:** React Hot Toast
- **Icons:** Lucide React

## Project Structure

```
mSana website/
├── server/                 # Backend
│   ├── config/            # Database configuration
│   ├── models/            # Mongoose models
│   ├── controllers/       # Route controllers
│   ├── routes/            # API routes
│   ├── middleware/        # Auth & error handling
│   ├── services/          # Telegram, PDF, Stock watcher
│   ├── utils/             # Logger utilities
│   ├── cron.js            # Scheduled jobs
│   └── server.js          # Entry point
│
└── client/                # Frontend
    ├── src/
    │   ├── api/           # API service functions
    │   ├── components/    # Reusable components
    │   ├── hooks/         # Custom React hooks
    │   ├── pages/         # Page components
    │   ├── routes/        # Router configuration
    │   ├── utils/         # Utility functions
    │   ├── App.jsx        # Main app component
    │   └── main.jsx       # Entry point
    └── public/            # Static assets
```

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB
- Telegram Bot Token (from @BotFather)

### Backend Setup

1. Navigate to server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Environment variables are already configured in `.env`:
- MongoDB URI
- JWT Secret
- Telegram Bot Token
- Telegram Admin Chat ID

4. Start the server:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

The backend will run on `http://localhost:4000`

### Frontend Setup

1. Navigate to client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## Default Credentials

Create an admin user by making a POST request to `/api/auth/register` or use the application to create users.

**Demo Credentials:**
- Admin: `admin@msana.com` / `admin123`
- Staff: `staff@msana.com` / `staff123`

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - Register new user (Admin only)
- `GET /api/auth/me` - Get current user
- `GET /api/auth/users` - Get all users (Admin only)

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Create product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product
- `GET /api/products/alerts/low-stock` - Get low stock products

### Invoices
- `GET /api/invoices` - Get all invoices
- `POST /api/invoices` - Create invoice
- `GET /api/invoices/:id` - Get invoice by ID
- `PUT /api/invoices/:id` - Update invoice
- `DELETE /api/invoices/:id` - Delete invoice

### Reports
- `GET /api/reports/sales` - Get sales report
- `GET /api/reports/products` - Get product sales report
- `GET /api/reports/inventory` - Get inventory report
- `GET /api/reports/dashboard` - Get dashboard statistics

### Suppliers
- `GET /api/suppliers` - Get all suppliers
- `POST /api/suppliers` - Create supplier
- `PUT /api/suppliers/:id` - Update supplier
- `DELETE /api/suppliers/:id` - Delete supplier

## Telegram Bot Commands

- `/start` - Welcome message and help
- `/help` - Show available commands
- `/lowstock` - View all low stock products

## Features in Detail

### Inventory Management
- Add, edit, and delete products
- Track stock levels in real-time
- Set minimum stock thresholds
- Categorize products
- Link products to suppliers

### Billing System
- Create invoices with multiple products
- Automatic stock reduction on invoice creation
- Support for multiple payment methods
- Customer information tracking
- Invoice search and filtering

### Telegram Integration
- Automated low-stock alerts
- Out-of-stock notifications
- Manual stock check via bot commands
- Notification logging and tracking

### Reports & Analytics
- Daily, monthly, and yearly sales reports
- Top-selling products analysis
- Revenue tracking
- Invoice statistics
- Visual charts and graphs

### Role-Based Access
- **Admin:** Full system access
- **Staff:** Billing and stock management
- **Bot:** Alert notifications only

## Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Role-based authorization
- Rate limiting
- Helmet.js security headers
- Input validation
- Error handling middleware

## Development

### Running in Development Mode

Backend:
```bash
cd server
npm run dev
```

Frontend:
```bash
cd client
npm run dev
```

### Building for Production

Frontend:
```bash
cd client
npm run build
```

## Environment Variables

### Backend (.env)
```
PORT=4000
NODE_ENV=development
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_ADMIN_CHAT_IDS=your_chat_id
MIN_STOCK_CHECK_INTERVAL=*/30 * * * *
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:4000/api
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the ISC License.

## Support

For support, email support@msana.com or create an issue in the repository.

## Acknowledgments

- MongoDB for database
- Telegram for bot integration
- React team for the amazing framework
- Tailwind CSS for styling utilities
