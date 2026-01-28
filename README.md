# Shikha Garments Project

A full-stack e-commerce project for a clothing shop, featuring a Django backend and a React + Tailwind CSS frontend.

## Project Structure
- **backend/**: Django project (`shikha_garments`) with `store` app.
    - API: `http://localhost:8000/api/products/`
    - Admin: `http://localhost:8000/admin/`
    - Media: Stores product images.
- **frontend/**: React + Vite project.
    - URL: `http://localhost:5173/`
    - Styling: Tailwind CSS (Navy Blue & White premium theme).

## Features
- **Product Management**: Django Admin interface for Category, SubCategory, and Products.
- **Responsive UI**: Mobile-first design using Tailwind Grid.
- **WhatsApp Integration**: Direct ordering via WhatsApp with pre-filled product details.
- **Premium Aesthetic**: Custom styling with cards, shadows, and gradients.

## Current State
- **3 Products Implemented**: (Assuming you added them via Admin)
- **UI**: Polished with Hero Banner, Navbar, and Product Grid.
- **Data Flow**: Frontend fetches real data from Django API using Axios.

## How to Resume Work

### 1. Start the Backend Server (Terminal 1)
```powershell
cd backend
venv\Scripts\activate
python manage.py runserver
```

### 2. Start the Frontend Server (Terminal 2)
```powershell
cd frontend
npm run dev
```

### 3. Management
- **Create Superuser**: `python manage.py createsuperuser` (if not done).-done
- **Add Products**: Go to `http://127.0.0.1:8000/admin/`.