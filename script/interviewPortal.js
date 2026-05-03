document.getElementById("interview-portal").addEventListener("click", function () {

  const cards = document.querySelectorAll(".job-card");
  const empty = document.getElementById("empty");

  let found = false;

  cards.forEach(card => {
    if (card.dataset.status === "interview") {
      card.style.display = "block";
      found = true;
    } else {
      card.style.display = "none";
    }
  });

  // show empty section ONLY once
  if (!found) {
    empty.classList.remove("hidden");
  } else {
    empty.classList.add("hidden");
  }
});