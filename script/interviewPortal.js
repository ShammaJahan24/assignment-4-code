// document
//   .getElementById("interview-portal")
//   .addEventListener("click", function () {
//     const cards = document.querySelectorAll(".job-card");
//     const empty = document.getElementById("empty");

//     let count = 0;

//     cards.forEach((card) => {
//       if (card.dataset.status === "interview") {
//         card.style.display = "block";
//         count++;
//       } else {
//         card.style.display = "none";
//       }
//     });

//     updateJobCount(count);

//     if (count === 0) {
//       empty.classList.remove("hidden");
//     } else {
//       empty.classList.add("hidden");
//     }
//   });


document.getElementById("interview-portal").addEventListener("click", function () {
  const cards = document.querySelectorAll(".job-card");
  const empty = document.getElementById("empty");

  let count = 0;

  cards.forEach(card => {
    if (card.dataset.status === "interview") {
      card.style.display = "block";
      count++;
    } else {
      card.style.display = "none";
    }
  });

  updateJobCount(count);

  empty.classList.toggle("hidden", count !== 0);
});