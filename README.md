# Job-Portal
# 🎯 JobHub 

## 📌 Overview
**JobHub** is a React-based job portal where job seekers can browse and apply for jobs, while recruiters can add or remove job postings.  
The app uses a **mock API** for sample jobs and **localStorage** for persistence.

---

## ✨ Features
- **🔎 Search & Filter jobs** by title or company  
- **📅 Sort jobs** by newest or oldest  
- **👀 Detailed Job View** with description and apply option  
- **📝 Recruiter Mode** – Add new jobs and delete existing ones  
- **💾 LocalStorage Persistence** (jobs & applications saved locally)  
- **🎨 Modern UI** with responsive layout  

---

## 🛠️ Tech Stack
- ⚛️ **React 18** (CDN + Babel)  
- 🌐 **HTML5 & CSS3**  
- 💾 **LocalStorage**  
- 🖥️ **Mock API**: [jsonfakery.com/jobs](https://jsonfakery.com/jobs)  

---



## 📁 Project Structure

- 📄 `index.html` – Entry point, loads React + Babel  
- 🎨 `style.css` – Custom styling  
- ⚛️ `app.js` – React app logic  
- 📘 `README.md` – Project documentation

---

## ⚙️ How It Works
- On page load, **jobs are fetched** from the mock API and combined with locally saved jobs.  
- Users can **switch roles** (Job Seeker / Recruiter) from the header.  
- **Recruiters** → Add jobs via form or delete jobs.  
- **Seekers** → Search, filter, view details, and apply for jobs.  
- All applications and recruiter-added jobs are stored in **localStorage**.  

---

## 📌 Future Improvements
- 🔑 **Authentication** – Separate dashboards for recruiters & seekers  
- 🗄️ **Backend Integration** – Replace localStorage with a real database  
- 💾 **Save Favorite Jobs**  
- 🛠️ **Advanced Filtering** – Location, remote, salary, etc.  

---

