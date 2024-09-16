const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/social_network_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => console.error('Database connection error:', error));
db.once('open', () => console.log('Database connected'));

module.exports = db;
