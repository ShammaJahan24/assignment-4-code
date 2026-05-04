// document.getElementById("rejected-portal").addEventListener("click", function(){

//     const rejCards=document.querySelectorAll(".job-card");
//     const empty2 = document.getElementById("empty");

//     let count = 0;

//     rejCards.forEach(card=>{
//         if(card.dataset.status ==="rejected"){
//             card.style.display = "block";
//             count++;
//         }
//         else{
//             card.style.display="none";
//         }
//     });
//     updateJobCount(count);

//     if (count === 0) {

//         empty2.classList.remove("hidden");
//     }else{
//         empty2.classList.add("hidden");
//     }
// })


document.getElementById("rejected-portal").addEventListener("click", function () {
  const cards = document.querySelectorAll(".job-card");
  const empty = document.getElementById("empty");

  let count = 0;

  cards.forEach(card => {
    if (card.dataset.status === "rejected") {
      card.style.display = "block";
      count++;
    } else {
      card.style.display = "none";
    }
  });

  updateJobCount(count);

  empty.classList.toggle("hidden", count !== 0);
});