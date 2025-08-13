# Express + Flask + Docker + Docker Compose

This project demonstrates how to set up a **Node.js + Express** frontend and a **Flask** backend,
connect them via **Docker Compose**, and run them in a shared Docker network.

## 📂 Project Structure
```
express-flask-docker/
├─ frontend/               # Node.js + Express frontend
│  ├─ public/index.html    # HTML form to submit data
│  ├─ server.js            # Express server (proxies to backend)
│  ├─ package.json
│  ├─ Dockerfile
│  └─ .dockerignore
├─ backend/                # Flask backend
│  ├─ app.py               # Flask API to handle form data
│  ├─ requirements.txt
│  ├─ Dockerfile
│  └─ .dockerignore
├─ docker-compose.yml      # Compose file to run both services
└─ .gitignore
```

## 🚀 How to Run

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/express-flask-docker.git
cd express-flask-docker
```

### 2. Build and Run with Docker Compose
```bash
docker compose up --build
```

### 3. Access the App
- **Frontend:** http://localhost:3000
- **Backend:** http://localhost:5000/health

## 🐳 Docker Images
You can build and push images to Docker Hub:
```bash
docker compose build
docker compose push
```

## 🛠 Environment Variables
- `BACKEND_URL` (frontend service) → The URL for the backend API. In Docker Compose it's `http://backend:5000`.

## 📝 How it Works
1. User opens `http://localhost:3000` → HTML form served by Express.
2. Form data is POSTed to Express route `/api/submit`.
3. Express proxies the request to Flask backend (`http://backend:5000/submit` inside Docker network).
4. Flask processes the data and responds back to the frontend.

## 📜 License
MIT
