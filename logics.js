let startbtn = document.getElementById("Start");
let stopbtm = document.getElementById("Stop");
let resetBtn = document.getElementById("Reset");
let hour = 0;
let mint = 0;
let sec = 0;
let minsec = 0;
startbtn.addEventListener("click", function () {
  timer = true;
  stopWatch();
});

stopbtm.addEventListener("click", function () {
  timer = false;
});

resetBtn.addEventListener("click", function () {
  timer = false;
  hour = 0;
  mint = 0;
  sec = 0;
  minsec = 0;
  document.getElementById("hour").innerHTML = "00";
  document.getElementById("mint").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("minsec").innerHTML = "00";
});

function stopWatch() {
  if (timer) {
    minsec++;

    if (minsec == 100) {
      sec++;
      minsec = 0;
    }

    if (sec == 60) {
      mint++;
      sec = 0;
    }

    if (mint == 60) {
      hour++;
      mint = 0;
      sec = 0;
    }

    let hrString = hour;
    let minString = mint;
    let secString = sec;
    let countString = minsec;

    if (hour < 10) {
      hrString = "0" + hrString;
    }

    if (mint < 10) {
      minString = "0" + minString;
    }

    if (sec < 10) {
      secString = "0" + secString;
    }

    if (minsec < 10) {
      countString = "0" + countString;
    }

    document.getElementById("hour").innerHTML = hrString;
    document.getElementById("mint").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("minsec").innerHTML = countString;
    setTimeout(stopWatch, 10);
  }
}
