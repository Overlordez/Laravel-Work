//JS function for keyframe and dropdown menu

document.getElementById("trigger").onclick = function() {
    open()
  };
  
  function open() {
    document.getElementById("menu").classList.toggle("show");
    document.getElementById("trigger").classList.toggle("active");
  };

