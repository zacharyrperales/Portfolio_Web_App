// DEPRECATED. KEPT FOR DEMONSTRATION PURPOSES.

const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String,
    username: String,
    image: {
        type: String,
    },
    // Images that are uploaded to be included at the bottom of a blog post.
    postImages: [String],
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;