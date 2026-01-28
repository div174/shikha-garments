const isProduction = import.meta.env.MODE === 'production';

export const API_URL = isProduction
    ? "https://shikhagarments.onrender.com/api"
    : "http://10.171.156.2:8000/api"; // Keeps your local network testing working
