// goal entry functions

let g1text = document.getElementById('g1par')
let g2text = document.getElementById('g2par')
let g3text = document.getElementById('g3par')
let g4text = document.getElementById('g4par')

function goalSet (goalBox, goalNumber) {
  goalBox.innerHTML = ''
  goalBox.innerHTML += '<div>Goal: ' + document.getElementById(`goal${goalNumber}text`).value + '</div>'
  goalBox.innerHTML += '<div>Start: ' + document.getElementById(`goal${goalNumber}Start`).value + '</div>'
  goalBox.innerHTML += '<div>Due By: ' + document.getElementById(`goal${goalNumber}End`).value + '</div>'
  goalBox.innerHTML += '<div>Report To: ' + document.getElementById(`accountability${goalNumber}`).value + '</div>'
  goalBox.innerHTML += '<div>Phone: ' + document.getElementById(`accountability${goalNumber}Phone`).value + '</div>'
  goalBox.innerHTML += '<div>Email: ' + document.getElementById(`accountability${goalNumber}Email`).value + '</div>'
  localStorage.setItem(`${goalNumber}`, goalBox.innerHTML)
}

document.querySelector('#goaladd1 > form').addEventListener('submit', function (event) {
  event.preventDefault()
  document.querySelector('#goaladd1').style.display = 'none'
  goalSet(g1text, 1)
})

document.querySelector('#goaladd2 > form').addEventListener('submit', function (event) {
  event.preventDefault()
  document.querySelector('#goaladd2').style.display = 'none'
  goalSet(g2text, 2)
})

document.querySelector('#goaladd3 > form').addEventListener('submit', function (event) {
  event.preventDefault()
  document.querySelector('#goaladd3').style.display = 'none'
  goalSet(g3text, 3)
})

document.querySelector('#goaladd4 > form').addEventListener('submit', function (event) {
  event.preventDefault()
  document.querySelector('#goaladd4').style.display = 'none'
  goalSet(g4text, 4)
})

// sobriety counter functionality - days

var tickTickBoom = document.getElementById('calendar1')

function tallyDays () {
  var days = Date.now() - new Date(tickTickBoom.value).getTime()
  document.querySelector('.timeTicker').textContent = Math.round(days / 86400000) + ' days'
  var storedDate = Math.round(days / 86400000) + ' days'
  localStorage.setItem('savedDate', storedDate)
  document.querySelector('.timeTicker').textContent = localStorage.getItem('savedDate')
}

tickTickBoom.addEventListener('change', tallyDays)

// sobriety counter functionality - minutes

var tickTickBoomer = document.getElementById('calendar2')

function tallyMinutes () {
  var minutes = Date.now() - new Date(tickTickBoomer.value).getTime()
  console.log(minutes)
  document.querySelector('.timeTicker').textContent = Math.round(minutes / 60000) + ' mins'
  var storederDate = Math.round(minutes / 60000) + ' mins'
  localStorage.setItem('savederDate', storederDate)
  document.querySelector('.timeTicker').textContent = localStorage.getItem('savederDate')
}

tickTickBoomer.addEventListener('change', tallyMinutes)

// sobriety counter functionality - hours

var tickTickBoomest = document.getElementById('calendar3')

function tallyHours () {
  var hours = Date.now() - new Date(tickTickBoomest.value).getTime()
  document.querySelector('.timeTicker').textContent = Math.round(hours / 3600000) + ' hours'
  var storedestDate = Math.round(hours / 3600000) + ' hours'
  localStorage.setItem('savedestDate', storedestDate)
  document.querySelector('.timeTicker').textContent = localStorage.getItem('savedestDate')
}

tickTickBoomest.addEventListener('change', tallyHours)

// local storage for ticker(3)
document.querySelector('.timeTicker').textContent = localStorage.getItem('savedDate')
document.querySelector('.timeTicker').textContent = localStorage.getItem('savederDate')
document.querySelector('.timeTicker').textContent = localStorage.getItem('savedestDate')

// local storage for goal1
g1text.innerHTML = localStorage.getItem('1')
// local storage for goal2
g2text.innerHTML = localStorage.getItem('2')
// local storage for goal3
g3text.innerHTML = localStorage.getItem('3')
// local storage for goal4
g4text.innerHTML = localStorage.getItem('4')

// Goal 1 progress bar
var firstProg = document.getElementById('progBar1')
// Goal 2 progress bar
var secondProg = document.getElementById('progBar2')
// Goal 3 progress bar
var thirdProg = document.getElementById('progBar3')
// Goal 4 progress bar
var fourthProg = document.getElementById('progBar4')

document.getElementById('goal1button').addEventListener('click', () => daysBetween1(goal1Start.value, goal1End.value, firstProg))
document.getElementById('goal2button').addEventListener('click', () => daysBetween1(goal2Start.value, goal2End.value, secondProg))
document.getElementById('goal3button').addEventListener('click', () => daysBetween1(goal3Start.value, goal3End.value, thirdProg))
document.getElementById('goal4button').addEventListener('click', () => daysBetween1(goal4Start.value, goal4End.value, fourthProg))

function daysBetween1 (date1, date2, barNum) {
  console.log(date1,date2,barNum)
  var newDate1 = date1.toString()
  var newDate2 = date2.toString()
  var date1Time = new Date(newDate1).getTime()
  var date2Time = new Date(newDate2).getTime()
  var diff = date2Time - date1Time
  var whatsTheDifferenceBetweenMeAndYou = Math.round(diff)
  var kiddingMe = whatsTheDifferenceBetweenMeAndYou / 100
  var progWidth1 = barNum.style.width
  // interval should be the var kiddingMe, set to 1000 for exhibition purposes
  const id = setInterval(bumpUp, 1000)

  function bumpUp () {
    if (barNum.style.width !== '100%') {
      var newVar = progWidth1.slice(0, length - 1)
      var newerVar = parseInt(newVar)
      newerVar += 1
      newestVar = newerVar.toString() + '%'
      progWidth1 = newestVar
      barNum.style.width = progWidth1
      barNum.textContent = progWidth1
    } else {
      clearInterval(id)
      alert('Goal Completed!')
    }
  }
}

console.log('ttingdaysbetween', daysBetween1('2019-04-01', '2019-04-04', firstProg))

// Username/Profile established
var profile = document.getElementById('profileName')
var logBut = document.getElementById('loginButton')
var user = document.getElementById('userName')

function changeProfile () {
  profile.textContent = 'Welcome ' + user.value + '!'
  localStorage.setItem('profileName', profile.textContent)
}

logBut.addEventListener('click', changeProfile)

// Clear Buttons
document.getElementById('goal1butt').addEventListener('click', clear1)
document.getElementById('goal2butt').addEventListener('click', clear2)
document.getElementById('goal3butt').addEventListener('click', clear3)
document.getElementById('goal4butt').addEventListener('click', clear4)

function clear1 () {
  document.getElementById('g1par').textContent = ' '
  firstProg.style.width = '0%'
}
function clear2 () {
  document.getElementById('g2par').textContent = ' '
  secondProg.style.width = '0%'
}
function clear3 () {
  document.getElementById('g3par').textContent = ' '
  thirdProg.style.width = '0%'
}
function clear4 () {
  document.getElementById('g4par').textContent = ' '
  fourthProg.style.width = '0%'
}
