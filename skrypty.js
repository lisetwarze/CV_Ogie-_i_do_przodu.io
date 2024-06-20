function clock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var timeNow = "" + hours +
      ((minutes < 10)? ":0" : ":") + minutes +
      ((seconds < 10)? ":0" : ":") + seconds;
    document.getElementById("timer").innerHTML = timeNow;
    setTimeout(clock, 1000);
  }
  clock();
