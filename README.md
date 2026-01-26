Sakwa - Student Report Management System
Sakwa adalah aplikasi fullstack berbasis web yang dirancang sebagai wadah bagi mahasiswa untuk melaporkan berbagai permasalahan di lingkungan kampus. Sistem ini memungkinkan mahasiswa untuk mengirim laporan secara terorganisir dan memudahkan admin (pihak developer/kampus) dalam mendata serta menindaklanjuti keluhan tersebut.

🚀 Tech Stack
Project ini dibangun dengan arsitektur modern untuk memastikan performa yang tangguh (robust) dan kemudahan pemeliharaan (maintainability).

Frontend
React.js: Library utama untuk membangun UI berbasis komponen yang modular.

Tailwind CSS: Framework CSS untuk styling yang cepat dan responsif.

DaisyUI: Plugin Tailwind untuk komponen UI yang siap pakai (Modal, Navbar, Table).

Backend
Node.js & Express: Runtime dan framework untuk menangani logika server, routing, dan API.

CORS: Untuk mengamankan dan mengatur izin akses antara Frontend dan Backend.

Dotenv: Manajemen variabel lingkungan (environment variables) untuk keamanan data.

Database
PostgreSQL: Database relasional untuk penyimpanan data laporan yang terstruktur dan aman.

🏗️ Project Structure
Aplikasi ini menerapkan prinsip Separation of Concerns (SoC) dengan membagi kode ke dalam beberapa layer:

Plaintext
crud-apps-fullstack/
├── crud-backend/         # Server-side logic
│   ├── src/
│   │   ├── controllers/  # Penanganan request & response
│   │   ├── routes/       # Definisi jalur API (Endpoints)
│   │   ├── services/     # Logika bisnis & query database
│   │   ├── db.js         # Konfigurasi koneksi PostgreSQL
│   │   └── index.js      # Entry point server
├── crud-frontend/        # Client-side interface
│   ├── src/
│   │   ├── assets/components/ # Modular UI components
│   │   └── App.jsx       # State management & orchestrator
🛠️ Installation & Setup
1. Prasyarat
Node.js terinstal.

PostgreSQL & pgAdmin terinstal dan berjalan.

2. Konfigurasi Database
Buat database baru di pgAdmin dan jalankan query berikut:

SQL
CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    job VARCHAR(100),
    rate NUMERIC(10, 2),
    isactive BOOLEAN DEFAULT true
);

3. Backend Setup
Bash
cd crud-backend
npm install
Buat file .env dan isi dengan konfigurasi database kamu:

Cuplikan kode
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=crud_db
Jalankan server:

Bash
npm run dev
4. Frontend Setup
Bash
cd crud-frontend
npm install
npm run dev
