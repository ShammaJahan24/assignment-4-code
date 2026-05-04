document.getElementById("job-cards").addEventListener("click", function (e) {
  const btn = e.target.closest(".delete-btn");
  if (!btn) return;

  const card = btn.closest(".job-card");
  const status = card.dataset.status;

  if (status === "interview") {
    setInterviewTotal(getInterviewTotal() - 1);
  }

  if (status === "rejected") {
    setRejectedTotal(getRejectedTotal() - 1);
  }

  card.remove();

  const totalEl = document.getElementById("total");
  totalEl.innerText = Number(totalEl.innerText) - 1;
f
  updateAvailableJobs();

  console.log("delete button clicked");
});