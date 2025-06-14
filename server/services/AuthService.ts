import bcrypt from 'bcryptjs';
import { User, IUser } from '../models/User';
import { generateToken } from '../middleware/auth';
import { isMongoConnected } from '../config/database';

export class AuthService {
  async createDefaultUser() {
    if (!isMongoConnected()) {
      console.log('MongoDB not connected, skipping default user creation');
      return null;
    }

    try {
      // Check if admin user already exists
      const existingAdmin = await User.findOne({ role: 'admin' });
      if (existingAdmin) {
        console.log('Default admin user already exists');
        return existingAdmin;
      }

      // Create default admin user
      const defaultAdmin = new User({
        username: 'admin',
        email: 'admin@sreemeditec.com',
        password: 'admin123', // Will be hashed by pre-save middleware
        firstName: 'Admin',
        lastName: 'User',
        role: 'admin',
        isActive: true
      });

      await defaultAdmin.save();
      console.log('Default admin user created successfully');
      console.log('Default Login Credentials:');
      console.log('Email: admin@sreemeditec.com');
      console.log('Password: admin123');
      
      return defaultAdmin;
    } catch (error) {
      console.error('Error creating default user:', error);
      return null;
    }
  }

  async register(userData: {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) {
    if (!isMongoConnected()) {
      throw new Error('Database connection required for registration');
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email: userData.email }, { username: userData.username }]
    });

    if (existingUser) {
      throw new Error('User with this email or username already exists');
    }

    // Create new user
    const user = new User(userData);
    await user.save();

    // Generate token
    const token = generateToken(user._id);

    return {
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role
      }
    };
  }

  async login(email: string, password: string) {
    if (!isMongoConnected()) {
      throw new Error('Database connection required for login');
    }

    // Find user by email
    const user = await User.findOne({ email, isActive: true });
    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Check password
    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
      throw new Error('Invalid credentials');
    }

    // Generate token
    const token = generateToken(user._id);

    return {
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role
      }
    };
  }

  async getUserProfile(userId: string) {
    if (!isMongoConnected()) {
      throw new Error('Database connection required');
    }

    const user = await User.findById(userId).select('-password');
    if (!user) {
      throw new Error('User not found');
    }

    return {
      id: user._id,
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role
    };
  }

  async updateProfile(userId: string, updateData: {
    firstName?: string;
    lastName?: string;
    username?: string;
  }) {
    if (!isMongoConnected()) {
      throw new Error('Database connection required');
    }

    // Check if username is being updated and if it already exists
    if (updateData.username) {
      const existingUser = await User.findOne({ 
        username: updateData.username, 
        _id: { $ne: userId } 
      });
      
      if (existingUser) {
        throw new Error('Username already exists');
      }
    }

    const user = await User.findByIdAndUpdate(
      userId, 
      updateData, 
      { new: true }
    ).select('-password');

    if (!user) {
      throw new Error('User not found');
    }

    return {
      id: user._id,
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role
    };
  }

  async changePassword(userId: string, currentPassword: string, newPassword: string) {
    if (!isMongoConnected()) {
      throw new Error('Database connection required');
    }

    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    // Verify current password
    const isValidPassword = await user.comparePassword(currentPassword);
    if (!isValidPassword) {
      throw new Error('Current password is incorrect');
    }

    // Update password
    user.password = newPassword;
    await user.save();

    return { message: 'Password updated successfully' };
  }
}

export const authService = new AuthService();