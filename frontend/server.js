import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';

const app = express();
app.use(express.json());
app.use(morgan('dev'));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

const BACKEND_URL = process.env.BACKEND_URL || 'http://backend:5000';

app.post('/api/submit', async (req, res) => {
  try {
    const { data } = await axios.post(`${BACKEND_URL}/submit`, req.body, {
      timeout: 5000
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Frontend running on :${PORT}`));
