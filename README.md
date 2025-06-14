# E-commerce Application

A full-stack e-commerce application built with Node.js, Express, MongoDB, and React. Features include product management, user authentication, order processing, quote system, and comprehensive admin dashboard.

## Features

### Customer Features
- Product browsing and search
- User registration and authentication
- Shopping cart functionality
- Order placement and tracking
- Quote requests for custom orders
- User account management

### Admin Features
- Product management (CRUD operations)
- Order management and status updates
- Quote processing and management
- User management
- Analytics dashboard
- Inventory tracking

## Technology Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcryptjs** for password hashing
- **Helmet** for security headers
- **Rate limiting** and security middleware

### Frontend
- **React** with TypeScript
- **Vite** for build tooling
- **TailwindCSS** for styling
- **Shadcn/ui** components
- **React Query** for data fetching
- **React Hook Form** for form handling

## Installation & Setup

### Prerequisites
- Node.js 18+ 
- MongoDB 4.4+
- npm or yarn

### Local Development Setup

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd ecommerce-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Configuration**
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```env
# Database
MONGODB_URI=mongodb://localhost:27017/ecommerce_db

# JWT Configuration
JWT_SECRET=your-super-secure-jwt-secret-key

# Server Configuration
NODE_ENV=development
PORT=5000

# Admin Configuration (for seeding)
ADMIN_EMAIL=admin@yourcompany.com
ADMIN_PASSWORD=secure-admin-password
```

4. **Start MongoDB**
Make sure MongoDB is running on your system:
```bash
# Ubuntu/Debian
sudo systemctl start mongodb

# macOS with Homebrew
brew services start mongodb-community

# Windows
net start MongoDB
```

5. **Seed the database**
```bash
npm run db:seed
```
This creates sample products and an admin user:
- Email: admin@example.com
- Password: admin123

6. **Start development server**
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Production Deployment

### Environment Variables
Set these required environment variables:

```env
NODE_ENV=production
MONGODB_URI=mongodb://your-production-db-url/ecommerce_db
JWT_SECRET=your-production-jwt-secret
ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
PORT=5000
```

### MongoDB Atlas Setup (Recommended)

1. **Create MongoDB Atlas Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a free cluster

2. **Configure Database Access**
   - Create a database user
   - Add your IP address to IP Access List

3. **Get Connection String**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password

### Deployment Options

#### Option 1: Traditional VPS/Server

1. **Prepare the server**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 for process management
sudo npm install -g pm2
```

2. **Deploy the application**
```bash
# Clone and setup
git clone <your-repo-url>
cd ecommerce-app
npm ci --only=production

# Build the application
npm run build

# Set environment variables
export NODE_ENV=production
export MONGODB_URI="your-mongodb-connection-string"
export JWT_SECRET="your-jwt-secret"

# Start with PM2
pm2 start dist/index.js --name "ecommerce-app"
pm2 startup
pm2 save
```

3. **Setup Nginx (optional)**
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### Option 2: Docker Deployment

1. **Create Dockerfile**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 5000

USER node

CMD ["npm", "start"]
```

2. **Create docker-compose.yml**
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - MONGODB_URI=mongodb://mongo:27017/ecommerce_db
      - JWT_SECRET=your-jwt-secret
    depends_on:
      - mongo

  mongo:
    image: mongo:5
    volumes:
      - mongo-data:/data/db
    environment:
      - MONGO_INITDB_DATABASE=ecommerce_db

volumes:
  mongo-data:
```

3. **Deploy**
```bash
docker-compose up -d
```

#### Option 3: Replit Deployment

1. **Configure for Replit**
   - Environment variables are managed through Replit's Secrets tab
   - Add your MongoDB URI and JWT secret as secrets

2. **Deploy**
   - Use Replit's built-in deployment feature
   - The application will automatically build and deploy

## API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### Product Endpoints
- `GET /api/products` - Get all products (with filters)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin only)
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)

### Order Endpoints
- `POST /api/orders` - Create order
- `GET /api/orders/my-orders` - Get user's orders
- `GET /api/orders/:id` - Get order details
- `PATCH /api/orders/:id/cancel` - Cancel order

### Admin Endpoints
- `GET /api/admin/dashboard/stats` - Dashboard statistics
- `GET /api/admin/orders` - Manage all orders
- `PATCH /api/admin/orders/:id/status` - Update order status
- `GET /api/admin/products` - Manage all products
- `GET /api/admin/users` - Manage users

## Database Schema

### User Model
```javascript
{
  username: String (unique),
  email: String (unique),
  password: String (hashed),
  firstName: String,
  lastName: String,
  role: String (user|admin),
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Product Model
```javascript
{
  name: String,
  description: String,
  price: Number,
  category: String,
  images: [String],
  stock: Number,
  sku: String (unique),
  isActive: Boolean,
  isFeatured: Boolean,
  rating: Number,
  reviewCount: Number,
  specifications: Object,
  tags: [String]
}
```

### Order Model
```javascript
{
  orderNumber: String (unique),
  user: ObjectId (ref: User),
  items: [{
    product: ObjectId,
    productName: String,
    quantity: Number,
    price: Number
  }],
  totalAmount: Number,
  status: String,
  shippingAddress: Object,
  createdAt: Date
}
```

## Security Features

- **Authentication**: JWT-based authentication
- **Authorization**: Role-based access control
- **Password Security**: bcrypt hashing with salt rounds
- **Input Validation**: MongoDB injection prevention
- **XSS Protection**: Input sanitization
- **Rate Limiting**: API endpoint protection
- **Security Headers**: Helmet.js implementation
- **CORS Configuration**: Configurable origins

## Monitoring & Logging

### Health Check
- `GET /api/health` - Application health status

### Logging
- Request/response logging
- Error tracking
- Performance monitoring

## Development

### Project Structure
```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom hooks
│   │   └── lib/          # Utilities
├── server/                # Node.js backend
│   ├── config/           # Configuration files
│   ├── middleware/       # Express middleware
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── services/         # Business logic
│   └── scripts/          # Utility scripts
└── shared/               # Shared types/schemas
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run db:seed` - Seed database with sample data

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions:
- Check the documentation
- Review existing issues
- Create a new issue for bugs or feature requests