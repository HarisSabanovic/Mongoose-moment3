
// JavaScript för att hämta data från servern och visa den på sidan
fetch('/jobs')
    .then(response => response.json())
    .then(jobs => {
         const jobListDiv = document.getElementById('jobList');
        jobs.forEach(job => {
             const jobDiv = document.createElement('div');
             jobDiv.classList.add('job');
             jobDiv.innerHTML = `
             <h3>${job.companyName}</h3>
             <p><strong>Title:</strong> ${job.jobTitle}</p>
             <p><strong>Start Date:</strong> ${new Date(job.startDate).toLocaleDateString()}</p>
             <p><strong>End Date:</strong> ${new Date(job.endDate).toLocaleDateString()}</p>
             <p><strong>Description:</strong> ${job.description}</p>
             <button class="delete-btn" data-id="${job._id}">Delete</button>
             `;
            jobListDiv.appendChild(jobDiv);
        });
 });    