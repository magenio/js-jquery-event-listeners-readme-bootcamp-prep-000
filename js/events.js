//define functions here

function getIt(){
  $('p').on('click', function(){
    alert("hey!")
  })
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty')
  })
}

function pressIt(){
  $('#typing').on('keydown', function(){
    if (e.listener == 71) {
      alert("¡You press the letter G!")
    }
  })
}

function submitIt(){
  $('form').on('submit', function(e){
    alert("Your form is going to be submited now")
  })
}
$(document).ready(function(){

// call functions here

});
