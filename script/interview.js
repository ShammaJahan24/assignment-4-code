const btns = document.getElementsByClassName("first-int-btn");

for (let btn of btns) {
  btn.addEventListener("click", function () {
    const card = this.closest(".job-card");

    if (card.dataset.status === "interview") {
      return;
    }

    if (card.dataset.status === "rejected") {
      setRejectedTotal(getRejectedTotal() - 1);
    }

    setInterviewTotal(getInterviewTotal() + 1);

    card.dataset.status = "interview";

    card.querySelector(".hidden-int-btn").classList.remove("hidden");
    card.querySelector(".hidden-rejected-btn").classList.add("hidden");

    this.disabled = true;
    card.querySelector(".rejected-btn").disabled = false;
  });
}
