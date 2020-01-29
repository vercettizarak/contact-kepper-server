//import express package
const express = require('express');

//Initialize express
const app = express();

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the ContactKeeper API' })
);

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

//Set the Port
const PORT = process.env.PORT || 5000;

//Set the Server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
