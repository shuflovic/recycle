require('dotenv').config();
const express = require('express');
const { createClient } = require('@supabase/supabase-js');

// Hide your keys in .env file!
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

const app = express();
app.use(express.json());

// Example endpoint for reading articles
app.get('/api/articles', async (req, res) => {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .order('id', { ascending: false });
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// Example endpoint for creating articles
app.post('/api/articles', async (req, res) => {
  const { title, content } = req.body;
  const { data, error } = await supabase
    .from('articles')
    .insert([{ title, content }])
    .select();
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// Start server (for local test, but on Vercel/Netlify you use their handler!)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on port', PORT));
