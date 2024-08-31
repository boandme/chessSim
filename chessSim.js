
var money =  100;
var total_xp = 0;
var current_xp = 0;
var levelup_xp = 30;
var level = 1;
var current_width = 70;
function OpenTab(et, TabName) {
  var i = 0
  var tablinks = ""
  var tabcontent = ""
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(TabName).style.display = "block";
  et.currentTarget.className += " active";
}


function puzzles() {
    
    if ( money >= 3) {
      
      money -= 3;
      total_xp += 3;
      current_xp += 3;
      var inc = Math.floor(1000/levelup_xp);
      current_width += inc * current_xp;
      strwidth = String(current_width)
      document.getElementById("progress-bar-fill").style.width = strwidth.concat("px")
      console.log(document.getElementById("progress-bar-fill"))
      document.getElementById("money").innerText = money;
      if (current_width >= 1000) {
          level ++;
          levelup_xp += 10;
          current_width = 0;
          strwidth = String(current_width);
          document.getElementById("progress-bar-fill").style.width = strwidth.concat("px");
          document.getElementById("below_level").innerText = level;
          document.getElementById("upper_level").innerText = level + 1;
       };

    }
}

function online_game() {
  if ( money >= 5) {   
    money -= 5;
    total_xp += 6;
    current_xp += 6;
    var inc = Math.floor(1000/levelup_xp);
    current_width += inc * current_xp;
    strwidth = String(current_width)
    document.getElementById("progress-bar-fill").style.width = strwidth.concat("px")
    console.log(document.getElementById("progress-bar-fill"))
    document.getElementById("money").innerText = money;
    if (current_width >= 1000) {
        level ++;
        levelup_xp += 10;
        current_width = 0;
        strwidth = String(current_width);
        document.getElementById("progress-bar-fill").style.width = strwidth.concat("px");
        document.getElementById("below_level").innerText = level;
        document.getElementById("upper_level").innerText = level + 1;
     };

  }
}

function chess_class() {
  if ( money >= 15) {   
    money -= 15;
    total_xp += 18;
    current_xp += 18;
    var inc = Math.floor(1000/levelup_xp);
    current_width += inc * current_xp;
    strwidth = String(current_width)
    document.getElementById("progress-bar-fill").style.width = strwidth.concat("px")
    console.log(document.getElementById("progress-bar-fill"))
    document.getElementById("money").innerText = money;
    if (current_width >= 1000) {
        level ++;
        levelup_xp += 10;
        current_width = 0;
        current_xp = 0;
        strwidth = String(current_width);
        document.getElementById("progress-bar-fill").style.width = strwidth.concat("px");
        document.getElementById("below_level").innerText = level;
        document.getElementById("upper_level").innerText = level + 1;
     };

  }
}