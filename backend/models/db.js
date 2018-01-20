const mongoose = require('mongoose');

let dbURI = 'mongodb://localhost/pandora';
if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGOLAB_URI;
}
mongoose.Promise = require('bluebird');

mongoose.connect(dbURI, { useMongoClient: true });
mongoose.set('debug', true);

mongoose.connection.on('connected', () => {
  // console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', (err) => {
  throw new Error(`Mongoose connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  // console.log('Mongoose disconnected');
});

const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    // console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

// For nodemon restarts
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});

// For app termination
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});

require('./user');
require('./case_cancer');
require('./weight_cancer');
require('./LHS_cancer');
require('./RHS_cancer');
require('./niveau');
