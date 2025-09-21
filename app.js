const { useState, useEffect } = React;

function App() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [role, setRole] = useState("seeker"); // seeker | recruiter
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest"); // newest | oldest
  const [newJob, setNewJob] = useState({ title: "", company: "", job_type: "", description: "" });

  // Load jobs from API + localStorage
  useEffect(() => {
    fetch("https://jsonfakery.com/jobs")
      .then(res => res.json())
      .then(data => {
        const saved = JSON.parse(localStorage.getItem("jobs")) || [];
        setJobs([...saved, ...data]);
      })
      .catch(err => console.error("Error fetching jobs:", err));
  }, []);

  // Save to localStorage whenever jobs change
  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs.filter(j => j.id < 10000))); 
  }, [jobs]);

  // Apply for job (saves in localStorage)
  function applyJob(job) {
    const applied = JSON.parse(localStorage.getItem("applications")) || [];
    applied.push(job);
    localStorage.setItem("applications", JSON.stringify(applied));
    alert(`Applied for ${job.title} at ${job.company}`);
  }

  // Add new job (Recruiter)
  function addJob(e) {
    e.preventDefault();
    if (!newJob.title || !newJob.company) return alert("Please fill all fields");
    const job = {
      ...newJob,
      id: Math.floor(Math.random() * 10000), // fake id
      date: new Date().toISOString()
    };
    setJobs([job, ...jobs]);
    setNewJob({ title: "", company: "", job_type: "", description: "" });
  }

  // Delete job (Recruiter)
  function deleteJob(id) {
    setJobs(jobs.filter(j => j.id !== id));
    if (selectedJob?.id === id) setSelectedJob(null);
  }

  // Filter + Sort jobs
  const filteredJobs = jobs
    .filter(j => j.title.toLowerCase().includes(search.toLowerCase()) || j.company.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "newest") return new Date(b.date || b.created_at) - new Date(a.date || a.created_at);
      return new Date(a.date || a.created_at) - new Date(b.date || b.created_at);
    });

  return (
    <div>
      {/* HEADER */}
      <header className="header">
        <h1>JobHub</h1>
        <div>
          <button onClick={() => setRole("seeker")} style={{ marginRight: "8px" }}>
            Job Seeker
          </button>
          <button onClick={() => setRole("recruiter")}>Recruiter</button>
        </div>
      </header>

      {/* Recruiter Add Form */}
      {role === "recruiter" && (
        <div style={{ padding: "1rem", background: "#fff", margin: "1rem", borderRadius: "8px" }}>
          <h3>Add Job</h3>
          <form onSubmit={addJob}>
            <input placeholder="Title" value={newJob.title} onChange={e => setNewJob({ ...newJob, title: e.target.value })} /><br />
            <input placeholder="Company" value={newJob.company} onChange={e => setNewJob({ ...newJob, company: e.target.value })} /><br />
            <input placeholder="Type (Full Time, Remote...)" value={newJob.job_type} onChange={e => setNewJob({ ...newJob, job_type: e.target.value })} /><br />
            <textarea placeholder="Description" value={newJob.description} onChange={e => setNewJob({ ...newJob, description: e.target.value })}></textarea><br />
            <button type="submit">Add Job</button>
          </form>
        </div>
      )}

      <div className="container">
        {/* LEFT FILTER PANEL */}
        <aside className="filters">
          <h3>Search</h3>
          <input
            type="text"
            placeholder="Search jobs..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ width: "100%" }}
          />
          <h3>Sort</h3>
          <select value={sort} onChange={e => setSort(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </aside>

        {/* CENTER JOB LIST */}
        <main className="job-list">
          <h2>Latest Job Openings</h2>
          {filteredJobs.length === 0 && <p>No jobs found</p>}
          {filteredJobs.map(job => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.company} • {job.job_type}</p>
              <button onClick={() => setSelectedJob(job)}>View Details</button>
              {role === "recruiter" && (
                <button style={{ marginLeft: "10px", background: "red" }} onClick={() => deleteJob(job.id)}>Delete</button>
              )}
            </div>
          ))}
        </main>

        {/* RIGHT JOB DETAIL */}
        <aside className="job-detail">
          {selectedJob ? (
            <div>
              <h2>{selectedJob.title}</h2>
              <h4>{selectedJob.company}</h4>
              <p>{selectedJob.description}</p>
              {role === "seeker" && (
                <button onClick={() => applyJob(selectedJob)}>Apply for this Position</button>
              )}
            </div>
          ) : (
            <p>Select a job to see details</p>
          )}
        </aside>
      </div>
    </div>
  );
}

// Render App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
