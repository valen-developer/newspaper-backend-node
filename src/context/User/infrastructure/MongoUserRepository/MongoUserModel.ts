import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  uuid: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    required: true,
  },
});

export const UserMongoModel: mongoose.Model<any, any, any> = mongoose.model(
  'user',
  UserSchema
);
