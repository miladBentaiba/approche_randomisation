/* eslint no-underscore-dangle: 0 */
const passport = require('passport');
const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports.register = (req, res) => {
  const user = new User();

  user.name = req.body.name;
  user.email = req.body.email;

  user.setPassword(req.body.password);

  user.save(() => {
    const token = user.generateJwt();
    res.status(200);
    res.json({
      token,
    });
  });
};

module.exports.login = (req, res) => {
  passport.authenticate('local', (err, user, info) => {
    let token;

    if (err) {
      res.status(404).json(err);
      return;
    }

    if (user) {
      token = user.generateJwt();
      res.status(200);
      res.json({
        token,
        _id: user._id,
        name: user.name,
        email: user.email,
        password: '',

      });
    } else {
      res.status(401).json({ info });
    }
  })(req, res);
};

