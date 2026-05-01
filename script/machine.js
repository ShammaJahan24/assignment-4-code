//console.log("machine added");



function getInterviewTotal(){
    const intTotalJob = document.getElementById("interview-count");
    // console.log(intTotalJob.innerText);
    const intTotal = intTotalJob.innerText;
    console.log("total interview job" , Number(intTotal));
    return Number(intTotal);
}

function setInterviewTotal(value){
    const intTotalJob = document.getElementById("interview-count");
    intTotalJob.innerText = value;
}




function getRejectedTotal(){
    const rejTotalJob = document.getElementById("rej-total");
    const rejTotal = rejTotalJob.innerText;
    console.log("total job" , Number(rejTotal));
    return Number(rejTotal);
}




// function showOnly(id){
//     const allJobs = document.getElementById("all-btn");
//     const interviewJobs = document.getElementById("interview-btn");
//     const rejectedJobs = document.getElementById("rejected-btn");

//     allJobs.classList.add("hidden");
//     interviewJobs.classList.add("hidden");
//     rejectedJobs.classList.add("hidden");

//     const selected = document.getElementById(id);
//     selected.classList.remove("hidden");
// }



// function getAvailableJob(){
//     const availableJobs= document.getElementById("available-jobs");
//     // console.log(availableJobsTotal)
//     const availableJobsTotal=availableJobs.innerText;
//     console.log("available jobs", Number(availableJobsTotal));
//     return Number(availableJobsTotal);

// }

// function getTotal(){
//     const totalJob = document.getElementById("total");
//     const total = totalJob.innerText;
//     console.log("total job" , Number(total));
//     return Number(total);
// }

