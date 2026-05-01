const btns = document.getElementsByClassName("first-int-btn ");
for (let btn of btns) {
  btn.addEventListener("click", function () {
    const current = getInterviewTotal();
    const newIntCount = current + 1;
    console.log(newIntCount);
    setInterviewTotal(newIntCount);

    // find this card->find hidden button inside THIS card
    const card = this.closest(".bg-white");
    const hiddenBtn = card.querySelector(".hidden-int-btn");
    hiddenBtn.classList.remove("hidden");
    this.disabled = true;
  });
}

// document.getElementById("first-int-btn").addEventListener("click", function () {
//     console.log("int clicked");

//     // const intCount = document.getElementById("interview-count");
//     // const current = Number(intCount.innerText) ;

//     const current = getInterviewTotal();
//     const newIntCount = current + 1 ;
//     console.log(newIntCount);

//     this.disabled=true;
//     setInterviewTotal(newIntCount);

//   });
