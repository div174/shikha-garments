const isProduction = import.meta.env.MODE === 'production';

export const API_URL = isProduction
    ? "https://YOUR-RENDER-APP-NAME.onrender.com/api" // REPLACE THIS with your actual Render Backend URL
    : "http://10.171.156.2:8000/api"; // Keeps your local network testing working
