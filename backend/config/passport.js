const passport = require('passport');
const { Strategy } = require('passport-local');

const mongoose = require('mongoose');

const User = mongoose.model('User');
passport.use(new Strategy(
  {
    usernameField: 'email',
  },
  ((username, password, done) => {
    User.findOne({ email: username }, (err, user) => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, {
          message: 'User not found',
        });
      }
      if (!user.validPassword(password)) {
        return done(null, false, {
          message: 'Password is wrong',
        });
      }
      return done(null, user);
    });
  }),
));

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});
