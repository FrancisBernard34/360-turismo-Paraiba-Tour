/* Menu responsivo Mobile*/

var isOpen = false;

document.getElementById("menu-btn").onclick = function() {openCloseMenu()};

function openCloseMenu(){
  if(isOpen == false){
    document.getElementById("menu-mobile").style.display = "inline-block";
    document.getElementById("menu-btn").style.color = "white";
    isOpen = true;
  } else if(isOpen == true){
      document.getElementById("menu-mobile").style.display = "none";
      document.getElementById("menu-btn").style.color = "#242a80";
      isOpen = false;
  }
}