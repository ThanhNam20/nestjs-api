import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    minLength: 5,
  },
  firstName: {
    type: String,
    minLength: 5,
  },
  lastName: {
    type: String,
    minLength: 5,
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, 'Email is required'],
  },
  password: {
    type: String,
    minLength: 5,
    required: [true, 'Password is required']
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

UserSchema.pre('save', async function (next: mongoose.HookNextFunction) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    // tslint:disable-next-line:no-string-literal
    const hashed = await bcrypt.hash(this['password'], 10);
    // tslint:disable-next-line:no-string-literal
    this['password'] = hashed;
    return next();
  } catch (err) {
    return next(err);
  }
});
