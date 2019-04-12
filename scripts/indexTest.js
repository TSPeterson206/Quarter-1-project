function daysBetween1 (date1, date2, barNum) {
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

// var tickTickBoom = document.getElementById('calendar1')

function tallyDays () {
  var days = Date.now() - new Date().getTime()
  document.querySelector('.timeTicker').textContent = Math.round(days / 86400000) + ' days'
  var storedDate = Math.round(days / 86400000) + ' days'
  localStorage.setItem('savedDate', storedDate)
  document.querySelector('.timeTicker').textContent = localStorage.getItem('savedDate')
}

// // tickTickBoom.addEventListener('change', tallyDays)

// // sobriety counter functionality - minutes

// var tickTickBoomer = document.getElementById('calendar2')

// function tallyMinutes () {
//   var minutes = Date.now() - new Date(tickTickBoomer.value).getTime()
//   console.log(minutes)
//   document.querySelector('.timeTicker').textContent = Math.round(minutes / 60000) + ' mins'
//   var storederDate = Math.round(minutes / 60000) + ' mins'
//   localStorage.setItem('savederDate', storederDate)
//   document.querySelector('.timeTicker').textContent = localStorage.getItem('savederDate')
// }

// tickTickBoomer.addEventListener('change', tallyMinutes)

// // sobriety counter functionality - hours

// var tickTickBoomest = document.getElementById('calendar3')

// function tallyHours () {
//   var hours = Date.now() - new Date(tickTickBoomest.value).getTime()
//   document.querySelector('.timeTicker').textContent = Math.round(hours / 3600000) + ' hours'
//   var storedestDate = Math.round(hours / 3600000) + ' hours'
//   localStorage.setItem('savedestDate', storedestDate)
//   document.querySelector('.timeTicker').textContent = localStorage.getItem('savedestDate')
// }

module.exports = {daysBetween1, clear1, clear2, clear3, clear4, tallyDays}