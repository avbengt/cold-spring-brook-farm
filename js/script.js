// JavaScript Document
  
function responsiveMenu() {
  var x = document.getElementById("navMenu");
  if (x.className === "nav") {
      x.className += " responsive";
  } else {
      x.className = "nav";
  }
  var y = document.getElementById("responsive-icon");
  if (y.className === "responsive-icon") {
      y.className += " responsive";
  } else {
      y.className = "responsive-icon";
  }
}

function dropAbout() {
  document.getElementById("dropAbout").classList.toggle("show");
  document.getElementById("btn").classList.toggle("drop-active");
}

function dropSell() {
  document.getElementById("dropSell").classList.toggle("show");
  document.getElementById("btn").classList.toggle("drop-active");
}

function dropFork() {
  document.getElementById("dropFork").classList.toggle("show");
  document.getElementById("btn").classList.toggle("drop-active");
}

function contactSent() {
  document.getElementById("contactSent").innerHTML = "Your message has been sent!";
}