const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Body parser (optional if you handle JSON requests)
app.use(express.json());

// Example routes
app.get('/', (req, res) => {
  res.send('HumanizeX Backend is running!');
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Add your other routes here
// Example: app.use('/api/users', require('./routes/users'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
