function getInterviewTotal() {
  return Number(document.getElementById("interview-count").innerText);
}

function setInterviewTotal(value) {
  if (value < 0) value = 0;
  document.getElementById("interview-count").innerText = value;
}

function getRejectedTotal() {
  return Number(document.getElementById("reject-count").innerText);
}

function setRejectedTotal(value) {
  if (value < 0) value = 0;
  document.getElementById("reject-count").innerText = value;
}

function updateJobCount(current) {
  const total = document.getElementById("total").innerText;
  const jobSpan = document.getElementById("available-jobs");
  jobSpan.innerText = `${current} of ${total} `;
}

function resetJobCount() {
  const total = document.getElementById("total").innerText;
  document.getElementById("available-jobs").innerText = `${total} `;
}

function updateAvailableJobs() {
  const cards = document.querySelectorAll(".job-card");
  const total = document.getElementById("total").innerText;
  const span = document.getElementById("available-jobs");

  let jobCount = 0;

  cards.forEach((card) => {
    if (card.style.display !== "none") {
      jobCount++;
    }
  });

  span.innerText = `${jobCount} of ${total} `;
}
