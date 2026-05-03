
document.getElementById("all-portal").addEventListener("click", function () {
  const cards = document.querySelectorAll(".job-card");

  cards.forEach(card => {
    card.style.display = "block";
  });
});