# Job-Portal
JobHub – Job Portal
📌 Overview

JobHub is a simple React-based job portal where job seekers can browse and apply for jobs, and recruiters can add or remove job postings.
The app uses a mock API for sample jobs and localStorage for persistence.
✨ Features

🔎 Search & Filter jobs by title or company

📅 Sort jobs by newest or oldest

👀 Detailed job view with description and apply option

📝 Recruiter mode: Add new jobs and delete existing ones

💾 LocalStorage persistence (jobs & applications saved locally)

🎨 Modern UI with responsive layout

🛠️ Tech Stack

React 18 (CDN + Babel)

HTML5 & CSS3

LocalStorage

Mock API: jsonfakery.com/jobs

Project Structure
/job-portal
  ├── index.html      # Entry point, loads React + Babel
  ├── style.css       # Custom styling
  ├── app.js          # React app logic
  └── README.md       # Documentation⚙️ How It Works

On load, jobs are fetched from the mock API and merged with any locally saved jobs.

Users can switch roles (Job Seeker / Recruiter) from the header.

Recruiters → Add jobs via form or delete jobs.

Seekers → Search, filter, view details, and apply for jobs.

Applications and recruiter-added jobs are stored in localStorage.

📌 Future Improvements

Authentication (separate dashboards for recruiters & seekers)

Backend integration (replace localStorage with real database)

Saved jobs & application tracking

Pagination & advanced filters

