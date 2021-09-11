import { Document } from 'mongoose';

export interface User extends Document {
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  created_at: Date;
}