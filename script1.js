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

//var x = document.getElementById("myForm").elements[0].value;

//goal entry functions
function goal1() {
    document.getElementById("g1par").textContent = "THIS IS TEXT 1"
};

document.getElementById('g1button').addEventListener('click', goal1)

function goal2() {
    document.getElementById("g2par").textContent = "THIS IS TEXT 2"
};

document.getElementById('g2button').addEventListener('click', goal2)

function goal3() {
    document.getElementById("g3par").textContent = "THIS IS IS TEXT 3"
};

document.getElementById('g3button').addEventListener('click', goal3)

function goal4() {
    document.getElementById("g4par").textContent = "THIS IS TEXT 4"
};

document.getElementById('g4button').addEventListener('click', goal4)


// sobriety counter functionality
var tickTickBoom = document.getElementById("calendar")

function showTime () {
document.getElementById("timeTicker").textContent = tickTickBoom.value
}
tickTickBoom.addEventListener('change', showTime)