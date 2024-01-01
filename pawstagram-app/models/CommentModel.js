import mongoose from 'mongoose';
const { Schema } = mongoose;
const commentSchema = new Schema({
  _id: { type: String, required: true },
  firstName: { type: String, required: true },
  profilePic: { type: String, ref: 'Profile', required: true },
  location: { type: String, required: true },
  timestamp: { type: Date, default: Date.now, required: true },
});
const CommentModel = mongoose.model('Comment', commentSchema);
export default CommentModel;