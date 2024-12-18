// Sample job listings data
const jobListings = [
    {
        title: "Software Engineer",
        description: "Join our team to build innovative solutions for clients worldwide. Full-stack experience required.",
        location: "New York",
        type: "full-time"
    },
    {
        title: "Marketing Manager",
        description: "Lead marketing campaigns and drive brand growth in the company. Experience in digital marketing is a plus.",
        location: "Los Angeles",
        type: "part-time"
    },
    {
        title: "Product Designer",
        description: "Design intuitive user interfaces and create delightful experiences. Knowledge of Figma and Sketch is essential.",
        location: "Remote",
        type: "full-time"
    },
    {
        title: "Customer Support Specialist",
        description: "Provide top-notch customer support and resolve issues promptly. Flexible hours and remote work available.",
        location: "Remote",
        type: "part-time"
    },
    {
        title: "Data Analyst",
        description: "Analyze company data to provide insights for decision-making. Strong skills in SQL and Excel required.",
        location: "New York",
        type: "full-time"
    }
];

// Function to render job cards
function renderJobListings(filteredJobs) {
    const jobListContainer = document.getElementById('job-list');
    jobListContainer.innerHTML = ''; // Clear existing listings

    filteredJobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p>${job.description}</p>
            <div class="location">Location: ${job.location}</div>
            <button onclick="applyJob('${job.title}')">Apply Now</button>
        `;
        jobListContainer.appendChild(jobCard);
    });
}

// Function to handle job application
function applyJob(jobTitle) {
    alert(`You have applied for the job: ${jobTitle}`);
}

// Filter jobs based on selected criteria
function applyFilters() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const jobType = document.getElementById('job-type-filter').value;
    const location = document.getElementById('location-filter').value;

    const filteredJobs = jobListings.filter(job => {
        return (
            (job.title.toLowerCase().includes(searchTerm) || job.description.toLowerCase().includes(searchTerm)) &&
            (jobType ? job.type === jobType : true) &&
            (location ? job.location.toLowerCase() === location : true)
        );
    });

    renderJobListings(filteredJobs);
}

// Initialize job listings
document.addEventListener('DOMContentLoaded', () => {
    renderJobListings(jobListings);

    // Apply filter event
    document.getElementById('apply-filters').addEventListener('click', applyFilters);
});
