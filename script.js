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
  searchname.innerHTML = SEARCHES[currentsearch][0];
}

const SEARCHES = [["Drive 0", "https://drive.google.com/drive/u/0/search?q="], ["Drive 1", "https://drive.google.com/drive/u/1/search?q="], ["Google", "https://www.google.com/search?q="]]

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
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}


function simpleSearch() {
  input = document.getElementById('search').value;
  let searchUrl = SEARCHES[currentsearch][1] + input;
  window.location.href = searchUrl;
}
