import mongoose from 'mongoose';

const { Schema } = mongoose;

const NewsMongoSchema = new Schema({
  uuid: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

export const NewsMongoModel = mongoose.model('new', NewsMongoSchema);
