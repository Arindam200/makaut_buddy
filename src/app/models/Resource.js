
// models/Resource.js
import mongoose from 'mongoose';

const ResourceSchema = new mongoose.Schema({
  sem: String,
  subject: String,
  type: String,
  heading: String,
  description: String,
  link: String
}, { timestamps: true });

export default mongoose.models.Resource || mongoose.model('Resource', ResourceSchema);