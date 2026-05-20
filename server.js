require('dotenv').config();
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// الصفحة الرئيسية
app.get('/', (req, res) => {
  res.send('🚀 الموقع يعمل بنجاح!');
});

// صفحة الحالة
app.get('/status', (req, res) => {
  res.json({
    success: true,
    message: 'System Online',
    uptime: process.uptime()
  });
});

// 404
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
