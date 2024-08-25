
// funktionför att hämta data från servern och visa den på sidan
async function fetchJobs() {
    try {
        const response = await fetch('/jobs');
        const jobs = await response.json();
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

        const deleteButtons = document.querySelectorAll(".delete-btn");
        deleteButtons.forEach(button => {
            button.addEventListener("click", async (event) => {
                const jobId = event.target.getAttribute("data-id");
                await deleteJob(jobId);
            })
        })


    } catch(error) {
       alert("De gick inte att hämta jobben " + error);
    }
}

async function deleteJob(jobId) {
    try {
        const response = await fetch(`/jobs/${jobId}`, {
            method: "DELETE"
        });

        if(response.ok) {
            console.log("Deleted succesfully");
        } else {
            console.error("Kan inte radera")
        }
    } catch {
        console.error("could not delete job")
    }
}

fetchJobs();
