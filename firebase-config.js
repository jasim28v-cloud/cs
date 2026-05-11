// 🔥 PHOENIX 2026 - Fire & Gold Configuration
// Firebase: gkma-39b5b | Cloudinary: dbp9gzroi
// ✨ NEXT-GEN: All Inside - No Popups

const firebaseConfig = {
    apiKey: "AIzaSyBJQe36z09S0KJSyTCAYFUJ3Eahi3cvPuo",
    authDomain: "gkma-39b5b.firebaseapp.com",
    databaseURL: "https://gkma-39b5b-default-rtdb.firebaseio.com",
    projectId: "gkma-39b5b",
    storageBucket: "gkma-39b5b.firebasestorage.app",
    messagingSenderId: "964651557859",
    appId: "1:964651557859:web:292a7f9df84ff04ee3b6d6",
    measurementId: "G-P29F1FND72"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

const CLOUD_NAME = "dbp9gzroi";
const UPLOAD_PRESET = "fm3_km";
const ADMIN_EMAILS = ['jasim28v@gmail.com'];
const DICEBEAR_URL = "https://api.dicebear.com/7.x/big-smile/svg";
const COVER_COLORS = [
    "linear-gradient(135deg, #dc2626, #ef4444, #f97316)",
    "linear-gradient(135deg, #b91c1c, #dc2626, #ef4444)",
    "linear-gradient(135deg, #991b1b, #b91c1c, #dc2626)",
    "linear-gradient(135deg, #fbbf24, #d97706, #b45309)",
    "linear-gradient(135deg, #450a0a, #991b1b, #dc2626)",
    "linear-gradient(135deg, #1a0000, #450a0a, #b91c1c)"
];

const APP_NAME = "AMDES";
const APP_VERSION = "2026.1";
const PRIMARY_COLOR = "#ef4444";
const SECONDARY_COLOR = "#fbbf24";

console.log('🔥 %c'+APP_NAME+' v'+APP_VERSION+' Ready ✨', 'color: #ef4444; font-size: 16px; font-weight: bold;');
