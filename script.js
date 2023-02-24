var texte1 = document.getElementById("texte1");
var texte2 = document.getElementById("texte2");
var texte3 = document.getElementById("texte3");
var input1 = document.getElementById("pour_carte1");
var input2 = document.getElementById("pour_carte2");
var input3 = document.getElementById("pour_carte3");
const formulaire = document.querySelector('.formulaire');

function valider_formulaire() {
  texte1.innerHTML = input1.value;
  texte2.innerHTML = input2.value;
  texte3.innerHTML = input3.value;
  setTimeout(() => {
      formulaire.style.display = 'None'; 
    }, 400);
  
}

jQuery(function($){
  $("[contenteditable]").focusout(function(){
      var element = $(this);        
      if (!element.text().trim().length) {
          element.empty();
      }
  });
});