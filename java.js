

$('#main .lazy').lazyload();





  // When the user scrolls the page, execute myFunction 
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 145) {
        document.getElementById('pills-tab').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('pills-tab').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


  

function gofor(id) {

switch(id){

  case "sp1":
var val = "spp1"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;

case "sp2":
var val = "spp2"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;

case "sp3":
var val = "spp3"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;

case "sp4":
var val = "spp4"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;



case "sp5":
var val = "spp5"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;

/*  cold side/*/
case "cl1":
var val = "cll1"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;

case "cl2":
var val = "cll2"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
break;
 

case "cl3":
var val = "cll3"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
break;
 

case "cl4":
var val = "cll4"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
break;

/*  salat/*/

case "slt1":
var val = "sltt1"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
break;

case "slt2":
var val = "sltt2"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
break;

case "slt3":
var val = "sltt3"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
break;
}
}
