const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtTitle: {
    type: String,
    requires: true
  },
  thoughtText: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => {
      return new Date(createdAtVal).toLocaleString();
    }
  },
  reactions: [
    {
      reactionBody: {
        type: String,
        required: false
      },
      username: {
        type: String,
        required: false
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => {
          return new Date(createdAtVal).toLocaleString();
        }
      }
    }
  ]
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
