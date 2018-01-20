/* eslint no-underscore-dangle: 0 */
const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports.profileRead = (req, res) => {
  if (!req.payload._id) {
    res.status(401).json({
      message: 'UnauthorizedError: private profile',
    });
  } else {
    User
      .findById(req.payload._id)
      .exec((err, user) => {
        res.status(200).json(user);
      });
  }
};
