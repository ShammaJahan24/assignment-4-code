document.getElementById("all-portal").addEventListener("click", function () {
  const cards = document.querySelectorAll(".job-card");
  const empty = document.getElementById("empty");

  cards.forEach((card) => {
    card.style.display = "block";
  });

  resetJobCount();
  empty.classList.add("hidden");
});
