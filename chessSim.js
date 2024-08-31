
var money =  100;
var total_xp = 0;
var current_xp = 0;
var levelup_xp = 30;
var level = 0;
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
      current_width += inc;
      var inc = Math.floor(1000/levelup_xp);
      
      document.getElementById("progress-bar-fill").style.width = String(current_width + "px");
      console.log(document.getElementById("progress-bar-fill"))
      document.getElementById("money").innerText = money;
      // if (current_xp >= levelup_xp) {
      //   level ++;
      //   levelup_xp += 10;
      // }

    }
}