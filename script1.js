//var savedGoal1 = g1text.innerHTML

//goal entry functions

let g1text = document.getElementById('g1par')

function goal1set(){
    g1text.innerHTML = ''
    g1text.innerHTML += "<div>Goal: " + document.getElementById('goal1text').value + "</div>"
    g1text.innerHTML += "<div>Start: " + document.getElementById('goal1Start').value + "</div>"
    g1text.innerHTML += "<div>Due By: " + document.getElementById('goal1End').value + "</div>"
    g1text.innerHTML += "<div>Report To: " + document.getElementById('accountability1').value + "</div>"
    g1text.innerHTML += "<div>Phone: " + document.getElementById('accountability1Phone').value + "</div>"
    g1text.innerHTML += "<div>Email: " + document.getElementById('accountability1Email').value + "</div>"
    localStorage.setItem("first", g1text.innerHTML);
}

let g2text = document.getElementById('g2par')

function goal2set(){
    g2text.innerHTML = ''
    g2text.innerHTML += "<div>Goal: " + document.getElementById('goal2text').value + "</div>"
    g2text.innerHTML += "<div>Start: " + document.getElementById('goal2Start').value + "</div>"
    g2text.innerHTML += "<div>Due By: " + document.getElementById('goal2End').value + "</div>"
    g2text.innerHTML += "<div>Report To: " + document.getElementById('accountability2').value + "</div>"
    g2text.innerHTML += "<div>Phone: " + document.getElementById('accountability2Phone').value + "</div>"
    g2text.innerHTML += "<div>Email: " + document.getElementById('accountability2Email').value + "</div>"
    localStorage.setItem("second", g2text.innerHTML);
}

let g3text = document.getElementById('g3par')

function goal3set(){
    g3text.innerHTML = ''
    g3text.innerHTML += "<div>Goal: "+ document.getElementById('goal3text').value + "</div>"
    g3text.innerHTML += "<div>Start: " + document.getElementById('goal3Start').value + "</div>"
    g3text.innerHTML += "<div>Due By: " + document.getElementById('goal3End').value + "</div>"
    g3text.innerHTML += "<div>Report To: " + document.getElementById('accountability3').value + "</div>"
    g3text.innerHTML += "<div>Phone: " + document.getElementById('accountability3Phone').value + "</div>"
    g3text.innerHTML += "<div>Email: " + document.getElementById('accountability3Email').value + "</div>"
    localStorage.setItem("third", g3text.innerHTML);
}

let g4text = document.getElementById('g4par')

function goal4set(){
    g4text.innerHTML = ''
    g4text.innerHTML += "<div>Goal: " + document.getElementById('goal4text').value + "</div>"
    g4text.innerHTML += "<div>Start: " + document.getElementById('goal4Start').value + "</div>"
    g4text.innerHTML += "<div>Due By: " + document.getElementById('goal4End').value + "</div>"
    g4text.innerHTML += "<div>Report To: " + document.getElementById('accountability4').value + "</div>"
    g4text.innerHTML += "<div>Phone: " + document.getElementById('accountability4Phone').value + "</div>"
    g4text.innerHTML += "<div>Email: " + document.getElementById('accountability4Email').value + "</div>"
    localStorage.setItem("fourth", g4text.innerHTML);
}


document.querySelector('#goaladd1 > form').addEventListener('submit', function(event){
event.preventDefault()
document.querySelector('#goaladd1').style.display = 'none'
goal1set() })


document.querySelector('#goaladd2 > form').addEventListener('submit', function(event){
event.preventDefault()
document.querySelector('#goaladd2').style.display = 'none'
goal2set() })
        
document.querySelector('#goaladd3 > form').addEventListener('submit', function(event){
event.preventDefault()
document.querySelector('#goaladd3').style.display = 'none'
goal3set() })
           
document.querySelector('#goaladd4 > form').addEventListener('submit', function(event){
event.preventDefault()
document.querySelector('#goaladd4').style.display = 'none'
goal4set() })
    


// sobriety counter functionality - days

var tickTickBoom = document.getElementById("calendar1");

function newFunction () {
    var days = Date.now()-new Date(tickTickBoom.value).getTime();
    document.getElementById('timeTicker').textContent = Math.round(days/86400000) + " days";
    var storedDate = Math.round(days/86400000) + " days";
    localStorage.setItem("savedDate", storedDate);
    document.getElementById('timeTicker').textContent = localStorage.getItem("savedDate");
}

tickTickBoom.addEventListener('change', newFunction)

// sobriety counter functionality - minutes

var tickTickBoomer = document.getElementById("calendar2");

function newerFunction () {
    var minutes = Date.now()-new Date(tickTickBoomer.value).getTime();
    document.getElementById('timeTicker').textContent = Math.round(minutes/60000) + " mins";
    var storederDate = Math.round(minutes/60000) + " mins";
    localStorage.setItem("savederDate", storederDate);
    document.getElementById('timeTicker').textContent = localStorage.getItem("savederDate");
}

tickTickBoomer.addEventListener('change', newerFunction)

// sobriety counter functionality - hours

var tickTickBoomest = document.getElementById("calendar3");

function newestFunction () {
    var hours = Date.now()-new Date(tickTickBoomest.value).getTime();
    document.getElementById('timeTicker').textContent = Math.round(hours/3600000) + " hours";
    var storedestDate = Math.round(hours/3600000) + " hours";
    localStorage.setItem("savedestDate", storedestDate);
    document.getElementById('timeTicker').textContent = localStorage.getItem("savedestDate");
}

tickTickBoomest.addEventListener('change', newestFunction)



//local storage for ticker(3)
document.getElementById('timeTicker').textContent = localStorage.getItem("savedDate");
document.getElementById('timeTicker').textContent = localStorage.getItem("savederDate");
document.getElementById('timeTicker').textContent = localStorage.getItem("savedestDate");

//local storage for goal1
g1text.innerHTML = localStorage.getItem("first");
//local storage for goal2
g2text.innerHTML = localStorage.getItem("second");
//local storage for goal3
g3text.innerHTML = localStorage.getItem("third");
//local storage for goal4
g4text.innerHTML = localStorage.getItem("fourth");

//Goal 1 progress bar
var firstProg = document.getElementById('progBar1');
//Goal 2 progress bar
var secondProg = document.getElementById('progBar2');
//Goal 3 progress bar
var thirdProg = document.getElementById('progBar3');
//Goal 4 progress bar
var fourthProg = document.getElementById('progBar4');

document.getElementById('goal1button').addEventListener('click', () => daysBetween1(goal1Start.value,goal1End.value))
document.getElementById('goal2button').addEventListener('click', () => daysBetween2(goal2Start.value,goal2End.value))
document.getElementById('goal3button').addEventListener('click', () => daysBetween3(goal3Start.value,goal3End.value))
document.getElementById('goal4button').addEventListener('click', () => daysBetween4(goal4Start.value,goal4End.value))



function daysBetween1 (date1,date2) {
    
    var newDate1 = date1.toString();
    var newDate2 = date2.toString();
    var date1Time = new Date(newDate1).getTime();
    var date2Time = new Date(newDate2).getTime();
    var diff = date2Time - date1Time;
    var whatsTheDifferenceBetweenMeAndYou = Math.round(diff); 
    var kiddingMe = whatsTheDifferenceBetweenMeAndYou/100;
    var progWidth1 = firstProg.style.width

    const id = setInterval(bumpUp, 400)

    function bumpUp(){
        if (firstProg.style.width !== "100%") {
            
            var newVar = progWidth1.slice(0,length-1)
            var newerVar = parseInt(newVar)
            newerVar+=1
            newestVar = newerVar.toString() + "%"
            progWidth1 = newestVar
            firstProg.style.width = progWidth1
            document.getElementById('progBar1').textContent = progWidth1
        }
        else {
            clearInterval(id);
            alert ("Goal Completed!"); 
        }
    }
}


function daysBetween2 (date1,date2) {
    
    var newDate1 = date1.toString();
    var newDate2 = date2.toString();
    var date1Time = new Date(newDate1).getTime();
    var date2Time = new Date(newDate2).getTime();
    var diff = date2Time - date1Time;
    var whatsTheDifferenceBetweenMeAndYou = Math.round(diff); 
    var kiddingMe = whatsTheDifferenceBetweenMeAndYou/100;
    var progWidth1 = secondProg.style.width

    const id = setInterval(bumpUp, 800)

    function bumpUp(){
        if (secondProg.style.width !== "100%") {
            
            var newVar = progWidth1.slice(0,length-1)
            var newerVar = parseInt(newVar)
            newerVar+=1
            newestVar = newerVar.toString() + "%"
            progWidth1 = newestVar
            secondProg.style.width = progWidth1
            document.getElementById('progBar2').textContent = progWidth1
        }
        else {
            clearInterval(id);
            alert ("Goal Completed!"); 
        }
    }
}

function daysBetween3 (date1,date2) {
    
    var newDate1 = date1.toString();
    var newDate2 = date2.toString();
    var date1Time = new Date(newDate1).getTime();
    var date2Time = new Date(newDate2).getTime();
    var diff = date2Time - date1Time;
    var whatsTheDifferenceBetweenMeAndYou = Math.round(diff); 
    var kiddingMe = whatsTheDifferenceBetweenMeAndYou/100;
    var progWidth1 = thirdProg.style.width

    const id = setInterval(bumpUp, 3000)

    function bumpUp(){
        if (thirdProg.style.width !== "100%") {
            
            var newVar = progWidth1.slice(0,length-1)
            var newerVar = parseInt(newVar)
            newerVar+=1
            newestVar = newerVar.toString() + "%"
            progWidth1 = newestVar
            thirdProg.style.width = progWidth1
            document.getElementById('progBar3').textContent = progWidth1
        }
        else {
            clearInterval(id);
            alert ("Goal Completed!"); 
        }
    }
}

function daysBetween4 (date1,date2) {
    
    var newDate1 = date1.toString();
    var newDate2 = date2.toString();
    var date1Time = new Date(newDate1).getTime();
    var date2Time = new Date(newDate2).getTime();
    var diff = date2Time - date1Time;
    var whatsTheDifferenceBetweenMeAndYou = Math.round(diff); 
    var kiddingMe = whatsTheDifferenceBetweenMeAndYou/100;
    var progWidth1 = fourthProg.style.width

    const id = setInterval(bumpUp, 6000)

    function bumpUp(){
        if (fourthProg.style.width !== "100%") {
            
            var newVar = progWidth1.slice(0,length-1)
            var newerVar = parseInt(newVar)
            newerVar+=1
            newestVar = newerVar.toString() + "%"
            progWidth1 = newestVar
            fourthProg.style.width = progWidth1
            document.getElementById('progBar4').textContent = progWidth1
        }
        else {
            clearInterval(id);
            alert ("Goal Completed!"); 
        }
    }
}


//Username/Profile established
var profile = document.getElementById('profileName')
var logBut = document.getElementById('loginButton')
var user = document.getElementById('userName')

function changeProfile () {
    profile.textContent = "Welcome " + user.value + "!"
    localStorage.setItem("profileName", profile.textContent);
}

logBut.addEventListener('click', changeProfile)

profile.textContent = localStorage.getItem("profileName") 

document.getElementById('goal1butt').addEventListener('click', clear1)
document.getElementById('goal2butt').addEventListener('click', clear2)
document.getElementById('goal3butt').addEventListener('click', clear3)
document.getElementById('goal4butt').addEventListener('click', clear4)

function clear1 () {
    document.getElementById('g1par').textContent = " "
    firstProg.style.width="0%"
}
function clear2 () {
    document.getElementById('g2par').textContent = " "
    secondProg.style.width="0%"
}
function clear3 () {
    document.getElementById('g3par').textContent = " "
    thirdProg.style.width="0%"
}
function clear4 () {
    document.getElementById('g4par').textContent = " "
    fourthProg.style.width="0%"
}
