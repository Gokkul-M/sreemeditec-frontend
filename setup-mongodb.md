# MongoDB Setup Instructions

## Option 1: MongoDB Atlas (Recommended - Cloud Database)

1. **Create MongoDB Atlas Account**
   - Go to https://www.mongodb.com/atlas
   - Sign up for a free account
   - Create a new cluster (free tier available)

2. **Get Connection String**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password

3. **Set Environment Variable**
   ```bash
   MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/ecommerce_db?retryWrites=true&w=majority
   ```

## Option 2: Local MongoDB Installation

1. **Install MongoDB Community Edition**
   - Windows: Download from https://www.mongodb.com/try/download/community
   - macOS: `brew install mongodb-community`
   - Ubuntu: `sudo apt install mongodb`

2. **Start MongoDB Service**
   ```bash
   # macOS/Linux
   brew services start mongodb-community
   # or
   sudo systemctl start mongod
   
   # Windows
   net start MongoDB
   ```

3. **Set Environment Variable**
   ```bash
   MONGODB_URI=mongodb://localhost:27017/ecommerce_db
   ```

## Default Admin Credentials

Once MongoDB is connected, the system will automatically create:

- **Email:** admin@sreemeditec.com
- **Password:** admin123
- **Role:** admin

## Testing Authentication

1. Start the application: `npm run dev`
2. Click "Sign In" in the header
3. Use the default admin credentials
4. You should be logged in and see the user dropdown in the header