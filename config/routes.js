const axios = require('axios');
const bcrypt = require('bcryptjs');
const db = require('../database/dbConfig.js');
const { authenticate, generateToken } = require('../auth/authenticate');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
  server.get('/api/users', users);
};

function register(req, res) {
  // implement user registration
  const user = req.body;
  user.password = bcrypt.hashSync(user.password, 16);
  const token = generateToken(user)
  db.insert(user)
    .then(ids => {
        res.status(201).json({ id: ids[0], token });
      })
    .catch(err => {
      res.status(500).json({ errorMessage: 'Failed to create new user.' });
    });
}

function login(req, res) {
  // implement user login
  const credentials = req.body;
  db.findByUsername(credentials.username)
  .then(users => {
      if (users && bcrypt.compareSync(credentials.password, users[0].password)) {
          const token = generateToken(users)
          res.status(200).json({ users, token });
          
      }
      else {
          res.status(404).json({ errorMessage: 'Invalid username or password.' });
      }
  })
  .catch(err => {
      res.status(500).json({ errorMessage: 'Failed to login.' });
  });
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}

function users(req, res) {
  db.get()
  .then(users => {
      res.status(200).json(users);
  })
  .catch(err => {
      res.status(500).json({ errorMessage: 'Failed to get users.' });
  });
}