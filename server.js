require('dotenv').config();
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// =============== Middleware ===============
app.use(helmet());                          // أمان الرؤوس
app.use(compression());                     // ضغط الاستجابة
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || '*',
  methods: ['GET', 'POST']
}));
app.use(express.json({ limit: '1mb' }));    // منع payload ضخم
app.use(express.static(path.join(__dirname, 'public'))); // مجلد منفصل للملفات الثابتة

// =============== Routes ===============
app.get('/status', (req, res) => {
    res.status(200).json({ 
        success: true,
        message: 'System Online',
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development'
    });
});

// معالجة 404 لأي مسار غير موجود
app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Route not found' });
});

// معالجة الأخطاء العامة
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
});

// =============== Server ===============
app.listen(PORT, () => {
    console.log(`✅ System active on port ${PORT} | ${new Date().toISOString()}`);
});
