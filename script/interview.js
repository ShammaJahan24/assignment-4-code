const btns = document.getElementsByClassName("first-int-btn");

for (let btn of btns) {
  btn.addEventListener("click", function () {
    const current = getInterviewTotal();
    const newIntCurrent = current + 1;
    // current = newIntCurrent;
    setInterviewTotal(newIntCurrent);

    const card = this.closest(".job-card");
    card.dataset.status = "interview";

    // show interview label
    const hiddenBtn = card.querySelector(".hidden-int-btn");
    hiddenBtn.classList.remove("hidden");

    const rejectedBtnHide = card.querySelector(".hidden-rejected-btn");
    rejectedBtnHide.classList.add("hidden");

    this.disabled = true;

    const rejectBtn = card.querySelector(".rejected-btn");
    rejectBtn.disabled = false;
  });
}
