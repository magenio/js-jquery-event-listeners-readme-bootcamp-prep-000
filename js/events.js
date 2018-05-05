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
    alert("You're about to submit the form!")
  })
}
$(document).ready(function(){

// call functions here

});
