var countDown = new Date("Oct 21, 2022 12:30:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var timeDiff = countDown - now;


    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);

var y = setInterval(function() {
    var now2 = new Date().getTime();
    var timeDiff2 = countDown - now2;

    var secs = Math.floor(timeDiff2 / 1000);

    document.getElementById("secs").innerHTML = secs
})