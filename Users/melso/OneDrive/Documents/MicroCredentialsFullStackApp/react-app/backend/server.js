const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

const pgp = require('pg-promise')();
const db = pgp('postgres://postgres:3285@localhost:5432/postgres');
  
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await db.oneOrNone('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]);

    if (!user) {
      return res.status(400).json({ error: 'Incorrect username or password' });
    }

    res.json({ message: `Hello, ${user.username}!` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await db.oneOrNone('SELECT * FROM users WHERE email = $1', [email]);

    if (existingUser) {
      return res.status(400).json({ error: 'Email address already in use' });
    }

    await db.none('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [username, email, password]);
    res.json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.post('/api/submit-feedback', async (req, res) => {
  try {
    const { name, email, feedback } = req.body;
    
    await db.none('INSERT INTO feedback (name, email, feedback) VALUES ($1, $2, $3)', [name, email, feedback]);
    
    res.json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/favicon.ico', (req, res) => {
  res.status(204).end(); 
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});