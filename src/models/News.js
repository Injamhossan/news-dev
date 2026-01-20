
import mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema({
  source: {
    id: { type: String, default: null },
    name: { type: String, required: true },
  },
  author: { type: String, default: null },
  title: { type: String, required: true },
  description: { type: String, default: null },
  url: { type: String, required: true, unique: true },
  urlToImage: { type: String, default: null },
  publishedAt: { type: Date, required: true },
  content: { type: String, default: null },
  category: { type: String, default: 'general' },
  language: { type: String, default: 'en' },
  country: { type: String, default: 'us' },
  status: { 
    type: String, 
    enum: ['active', 'archived', 'deleted'], 
    default: 'active' 
  },
  fetchedAt: { type: Date, default: Date.now },
}, { collection: 'newss_db' });

export default mongoose.models.News || mongoose.model('News', NewsSchema);
