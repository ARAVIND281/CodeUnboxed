
# 📘 CodeUnboxed – AI-Powered Code Explanation Tool

**Live Demo:** 🌐 [https://codeunboxed.web.app](https://codeunboxed.web.app)  
**GitHub Repo:** 🔗 [https://github.com/ARAVIND281/CodeUnboxed](https://github.com/ARAVIND281/CodeUnboxed)

---

### 🚀 Badges

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Styling-TailwindCSS-38bdf8?logo=tailwindcss)
![ShadCN UI](https://img.shields.io/badge/UI-ShadCN-purple)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?logo=fastapi)
![Python](https://img.shields.io/badge/Language-Python-yellow?logo=python)
![Groq AI](https://img.shields.io/badge/AI-Groq%20LLM-blueviolet)
![License](https://img.shields.io/github/license/ARAVIND281/CodeUnboxed)

---

### ✨ What is CodeUnboxed?

**CodeUnboxed** is an AI-powered code explanation tool built for developers, students, and educators. Just paste your code snippet, select a language and level, and get a clean, markdown-formatted explanation powered by Groq’s LLaMA 3 models.

Perfect for:
- Students learning programming  
- Developers reviewing unfamiliar code  
- Interviews, walkthroughs, and code documentation

---

### 🧠 Features

- 🧾 Paste code in 15+ languages
- 🧠 AI-powered explanation using Groq LLMs
- 🧪 Switch between **Basic** and **Advanced** modes
- 📄 Clean, markdown-styled output
- 🖥️ Responsive UI with Tailwind and ShadCN
- 💡 React + FastAPI architecture

---

### 📁 File Structure

```
CodeUnboxed/
│
├── backend/                  # FastAPI server
│   ├── app/
│   │   ├── api.py
│   │   ├── groq_client.py
│   │   └── models.py
│   ├── main.py
│   ├── start.py
│   ├── requirements.txt
│   └── .env
│
├── codeunboxed-frontend/    # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   │   └── CodeExplainer.tsx
│   │   └── App.tsx
│   ├── index.html
│   ├── main.tsx
│   ├── tailwind.config.js
│   └── .env
│
├── example/                 # Screenshots and demo
│   ├── screenshot-input.png
│   ├── screenshot-output.png
│   └── demo.mp4
│
└── README.md
```

---

### 🖼️ Screenshots

#### 🧾 Input Interface
![Input Screenshot](https://raw.githubusercontent.com/ARAVIND281/CodeUnboxed/main/example/screenshot-input.png)

#### 🤖 Output Explanation
![Output Screenshot](https://raw.githubusercontent.com/ARAVIND281/CodeUnboxed/main/example/screenshot-output.png)

---

### 🎥 Demo Video

<video src="https://raw.githubusercontent.com/ARAVIND281/CodeUnboxed/main/example/demo.mp4" controls width="100%" ></video>

---

### 🧑‍💻 Tech Stack

| Frontend          | Backend           | AI Engine              |
|-------------------|-------------------|------------------------|
| React + Vite      | FastAPI (Python)  | Groq (LLaMA 3)         |
| Tailwind + ShadCN | Uvicorn + CORS    | dotenv for secrets     |
| React Markdown    | RESTful APIs      | Firebase Hosting       |

---

### ⚙️ Getting Started (Local Dev)

#### 1️⃣ Clone the repo
```bash
git clone https://github.com/ARAVIND281/CodeUnboxed
cd CodeUnboxed
```

#### 2️⃣ Run the Backend
```bash
cd backend
pip install -r requirements.txt
python start.py
```

> ✅ Create a `.env` file with your `GROQ_API_KEY`.

#### 3️⃣ Run the Frontend
```bash
cd codeunboxed-frontend
npm install
npm run dev
```

Then open: [http://localhost:5173](http://localhost:5173)

---

### 📬 Author & Contact

**Made by [Aravind S](mailto:aravind@inbo.tech)**  
🔗 [LinkedIn](https://www.linkedin.com/in/aravinds28)  
💻 [GitHub](https://github.com/ARAVIND281)

---

### ⭐️ Show Your Support

If you liked the project, consider giving it a **⭐️ on GitHub** to support my work and help others discover it!
