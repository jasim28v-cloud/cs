// 💖 MNAENCA 2026 - Rose Gold Configuration
// Firebase: gkma-39b5b | Cloudinary: dbp9gzroi
// ✨ PREMIUM: Notifications + Compact Grid + Delete Videos

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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

// Cloudinary Configuration
const CLOUD_NAME = "dbp9gzroi";
const UPLOAD_PRESET = "fm3_km";

// 💖 MNAENCA Settings
const ADMIN_EMAILS = ['jasim28v@gmail.com'];
const DICEBEAR_URL = "https://api.dicebear.com/7.x/big-smile/svg";
const COVER_COLORS = [
    "linear-gradient(135deg, #831843, #9d174d, #be185d)",
    "linear-gradient(135deg, #4c0519, #831843, #9d174d)",
    "linear-gradient(135deg, #701a75, #86198f, #a21caf)",
    "linear-gradient(135deg, #ec4899, #db2777, #be185d)",
    "linear-gradient(135deg, #f472b6, #ec4899, #db2777)",
    "linear-gradient(135deg, #1a0a15, #2d0a1e, #ec4899)"
];

// 💖 App Info
const APP_NAME = "MNAENCA";
const APP_VERSION = "2026.1";
const PRIMARY_COLOR = "#ec4899";
const SECONDARY_COLOR = "#f472b6";

console.log('💖 %c'+APP_NAME+' v'+APP_VERSION+' Ready ✨', 'color: #ec4899; font-size: 16px; font-weight: bold;');
