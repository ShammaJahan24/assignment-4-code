const rejectedBtns = document.getElementsByClassName("rejected-btn");

for (let btn of rejectedBtns) {
  btn.addEventListener("click", function () {

    const card = this.closest(".job-card");
    if (card.dataset.status === "rejected") return;


    if (card.dataset.status === "interview") {
      const currentInt = getInterviewTotal();
      setInterviewTotal(currentInt - 1);
    }

    const currentRej = getRejectedTotal();
    setRejectedTotal(currentRej + 1);

    card.dataset.status = "rejected";

    card.querySelector(".hidden-rejected-btn").classList.remove("hidden");
    card.querySelector(".hidden-int-btn").classList.add("hidden");

    this.disabled = true;
    card.querySelector(".first-int-btn").disabled = true;
  });
}