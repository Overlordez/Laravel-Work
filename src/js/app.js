//JS function for keyframe and dropdown menu and

document.getElementById("trigger").onclick = function() {
    open()
  };
  
  function open() {
    document.getElementById("menu").classList.toggle("show");
    document.getElementById("trigger").classList.toggle("active");
  };


function Tabs() {
  console.log(event);
}
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
  tablinks[i].addEventListener("click", openCity);
}
      function openCity(evt) {
  
        var cityName = this.dataset.city;
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
    

