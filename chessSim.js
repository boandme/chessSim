
var money =  100;
var total_xp = 0;
var current_xp = 0;
var levelup_xp = 30;
var level = 1;
var current_width = 70;
var year = 2024;
var monthnum = 6;
var month =  "Jan"
var months = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
var monthstr = "Jan"
var tournaments = {}
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
var locations = ["International ", "National ", "Regional ", "Seattle ", "Portland ", "SF ", "St louis ", "New York City ", "Charlotte ", "Atlanta ", "Tampa ", "Houston ", "Minneapolis ", "Los Angeles ", "Baltimore ", "Washington DC "]
var name_middle = ["Grand ", "Annual ", "Classic ", "Classical ", "Invitational "]
var name_end = ["Tournament", "Prix", "Open", "Tournament", "Open", "Tournament"]

// Time System //
setInterval(changeMonth, 30000)

function changeMonth() {
  monthnum ++;
  if ( month === "Jan") {
    month = "Feb";
  }
  else if (month === "Feb") {
    month = "Mar"
  }
  else if (month === "Mar") {
    month = "Apr"
  }
  else if (month === "May") {
    month = "Jun"
  }
  else if (month === "Jul") {
    month = "Aug"
  }
  else if (month === "Oct") {
    month = "Nov"
  }
  else if (month === "Nov") {
    month = "Dec"
  }
  else if (month === "Dec") {
    month = "Jan"
    monthnum = 1
    year ++;
  }
  document.getElementById("month").innerText = month
  document.getElementById("year").innerText = year
  

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

function TmtGenerator() {
  var nb  = locations[(Math.floor(Math.random() * locations.length))]
  var nm = name_middle[(Math.floor(Math.random() * name_middle.length))]
  var ne = name_end[(Math.floor(Math.random() * name_end.length))]
  connected = nb.concat(nm)
  console.log(connected.concat(ne))
  return connected.concat(ne)
}

function CreateDate(){
  let tmtmonth = Math.floor(Math.random() * 12)
  var monthstr = months[tmtmonth-1]
  if (tmtmonth > monthnum){
    var tmtyear = year
    
  }
  else if (tmtmonth <= monthnum) {
    tmtyear = year+ 1
    
  }
  var fullstr = monthstr.concat(" ")
  var bigstr = fullstr.concat(String(tmtyear))
  console.log(bigstr)
  return bigstr
  

}
function GenerateTmts(){
  console.log("hey")
  tmts = document.getElementById("Tournaments")
  length = Object.keys(tournaments).length;
  if (tmts) {
    let table = document.getElementById("tablebody")
    if (length === 0) {
      for (let i = 0; i<6; i++) {
        let row = document.createElement("tr")
        let date = document.createElement("td")
        let price = document.createElement("td")
        let name  = document.createElement("td")
        let d = "$"
        var tprice = Math.floor(Math.random() * (60 - 20 + 1)) + 20 
        var tname = TmtGenerator()
        var tdate = CreateDate()
        tournaments[tname] = tdate
        console.log(tournaments)
        date.innerText = tdate
        name.innerText = tname
        price.innerText = d.concat(String(tprice))
        row.appendChild(name)
        row.appendChild(date)
        row.appendChild(price)
        table.appendChild(row)
      }
    }
    
    
}
}



