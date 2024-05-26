let formEl = document.getElementById("jobForm");

formEl.addEventListener("submit", addJob);

async function addJob() {

    const job = {
        companyName: document.getElementById('companyName').value,
        jobTitle: document.getElementById('jobTitle').value,
        startDate: document.getElementById('startDate').value,
        endDate: document.getElementById('endDate').value,
        description: document.getElementById('description').value
    };

    try {
        const response = await fetch("/jobs", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(job)
        });

        if (response.ok) {
            alert("Jobb tillagt");
            document.getElementById("jobForm").reset();
        } else {
            const err = await response.json();
            alert("Det gick inte att tilläga jobbet: " + JSON.stringify(err));
        }
    } catch (error) {
        alert("Det gick inte att lägga till jobbet: " + error.message);
    }

}