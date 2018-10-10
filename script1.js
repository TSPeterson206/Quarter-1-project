//goal entry functions

let g1text = document.getElementById('g1par')

function goal1set(){
    g1text.textContent += "Goal: " + document.getElementById('goal1text').value + "\n"
    g1text.textContent += "Start: " + document.getElementById('goal1Start').value + "\n"
    g1text.textContent += "Due By: " + document.getElementById('goal1End').value + "\n"
    g1text.textContent += "Report To: " + document.getElementById('accountability1').value + "\n"
    g1text.textContent += "Phone: " + document.getElementById('accountability1Phone').value + "\n"
    g1text.textContent += "Email: " + document.getElementById('accountability1Email').value
}

let g2text = document.getElementById('g2par')

function goal2set(){
    g2text.textContent += "Goal: " + document.getElementById('goal2text').value + "\n"
    g2text.textContent += "Start: " + document.getElementById('goal2Start').value + "\n"
    g1text.textContent += "Due By: " + document.getElementById('goal2End').value + "\n"
    g2text.textContent += "Report To: " + document.getElementById('accountability2').value + "\n"
    g2text.textContent += "Phone: " + document.getElementById('accountability2Phone').value + "\n"
    g2text.textContent += "Email: " + document.getElementById('accountability2Email').value
}

let g3text = document.getElementById('g3par')

function goal3set(){
    g3text.textContent += "Goal: " + document.getElementById('goal3text').value + "\n"
    g1text.textContent += "Start: " + document.getElementById('goal3Start').value + "\n"
    g3text.textContent += "Due By: " + document.getElementById('goal3dEnd').value + "\n"
    g3text.textContent += "Report To: " + document.getElementById('accountability3').value + "\n"
    g3text.textContent += "Phone: " + document.getElementById('accountability3Phone').value + "\n"
    g3text.textContent += "Email: " + document.getElementById('accountability3Email').value
}

let g4text = document.getElementById('g4par')

function goal4set(){
    g4text.textContent += "Goal: " + document.getElementById('goal4text').value + "\n"
    g1text.textContent += "Start: " + document.getElementById('goal4Start').value + "\n"
    g4text.textContent += "Due By: " + document.getElementById('goal4End').value + "\n"
    g4text.textContent += "Report To: " + document.getElementById('accountability4').value + "\n"
    g4text.textContent += "Phone: " + document.getElementById('accountability4Phone').value + "\n"
    g4text.textContent += "Email: " + document.getElementById('accountability4Email').value
}


document.getElementById('goal1button').addEventListener('click', goal1set);
document.getElementById('goal2button').addEventListener('click', goal2set);
document.getElementById('goal3button').addEventListener('click', goal3set);
document.getElementById('goal4button').addEventListener('click', goal4set);




const setGoal1 = {
    goalText: "im a first string",
    dateOfCompletion: "10.12.2018",
    accountability1: "alan turing",
    accountability1Phone: "(555)555-5555",
    accountability1Email: "me@gmail.com"
};

const setGoal2 = {
    goalText: "im a second string",
    dateOfCompletion: "10.14.2018",
    accountability1: "alan turing",
    accountability1Phone: "(555)555-5555",
    accountability1Email: "me@gmail.com"
};

const setGoal3 = {
    goalText: "im a third string",
    dateOfCompletion: "10.16.2018",
    accountability1: "alan turing",
    accountability1Phone: "(555)555-5555",
    accountability1Email: "me@gmail.com"
};

const setGoal4 = {
    goalText: "im a fourth string",
    dateOfCompletion: "10.18.2018",
    accountability1: "alan turing",
    accountability1Phone: "(555)555-5555",
    accountability1Email: "me@gmail.com"
};

// sobriety counter functionality

var tickTickBoom = document.getElementById("calendar");

function newFunction () {
    var days = Date.now()-new Date(tickTickBoom.value).getTime();
    document.getElementById('timeTicker').textContent = Math.round(days/86400000) + " days";
    var storedDate = JSON.stringify(Math.round(days/86400000) + " days");
    localStorage.setItem("savedDate", storedDate);
}

tickTickBoom.addEventListener('change', newFunction)


document.getElementById('timeTicker').textContent = localStorage.getItem("savedDate");

//need to set intervals and incorporate interval into timeline on individual goals


// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// span.onclick = function(event) {
//     if(event.target == modal) {
//     modal.style.display = "none";
//     }
// }