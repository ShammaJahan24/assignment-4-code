const rejectedBtns = document.getElementsByClassName("rejected-btn");

for (let btn of rejectedBtns) {
  btn.addEventListener("click", function () {
    const current = getRejectedTotal();
    const newRejectedCount = current + 1;
    setRejectedTotal(newRejectedCount);

    const current2 = getInterviewTotal();
    
    const newIntCurrent2 = current2 - 1;
    setInterviewTotal(newIntCurrent2);

    // find THIS card
    const card = this.closest(".bg-white");

    // mark status for filtering
    card.dataset.status = "rejected";
    const hiddenBtn = card.querySelector(".hidden-rejected-btn");
    hiddenBtn.classList.remove("hidden");
    // show hidden rejected label inside card (if you want)
    const interviewLabel = card.querySelector(".hidden-int-btn");

    interviewLabel.classList.add("hidden");
    this.disabled = true;
    const interviewBtn = card.querySelector(".first-int-btn");

    interviewBtn.disabled = false;
  });
}
