window.addEventListener('load', (event) => {
  startTime();
});

document.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    simpleSearch();
  }
  if (event.keyCode === 32 && document.getElementById("search") !== document.activeElement) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    changeSearch();
  }
  if (event.keyCode == 27) {//27 is the code for escape
    document.getElementById("search").blur();
  }
});

var currentsearch = 0;

function changeSearch() {
  currentsearch = (currentsearch + 1) % 3;
  let searchname = document.getElementById("searchname");
  // searchname.innerHTML = SEARCHES[currentsearch][0];
  toggleIcons();
}

function toggleIcons() {
  let icons = document.getElementsByClassName("si");
  if (SEARCHES[currentsearch][0] == "Google") {
    icons[0].classList.remove("faded");
    icons[2].classList.add("faded");
  } if
  (SEARCHES[currentsearch][0] == "Drive 0") {
    icons[0].classList.add("faded");
    icons[1].classList.remove("faded");
  } if
  (SEARCHES[currentsearch][0] == "Drive 1") {
    icons[1].classList.add("faded");
    icons[2].classList.remove("faded");
  }
}

const SEARCHES = [["Google", "https://www.google.com/search?q="], ["Drive 0", "https://drive.google.com/drive/u/0/search?q="], ["Drive 1", "https://drive.google.com/drive/u/1/search?q="]]

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}


function simpleSearch() {
  input = document.getElementById('search').value;
  let searchUrl = SEARCHES[currentsearch][1] + input;
  window.open(searchUrl, '_blank');
}
