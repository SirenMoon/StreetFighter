$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-cool').hide();
    $('.ryu-ready').show();
  });
  
  $('.ryu').mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-cool').hide();
    $('.ryu-still').show();
  });

  $('.ryu').mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-cool').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
    .animate (
      {'left': '300px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '-212px');
      }
    );
  });

  $('.ryu').mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-cool').hide();
    $('.ryu-ready').show();
  });

  function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

  $('body').keydown(function(event){
    if(event.keyCode == 88){
      $('.ryu-still').hide();
      $('.ryu-ready').hide();
      $('.ruy-throwing').hide();
      $('.ryu-cool').show();
    }
  });

  $('body').keyup(function(event){
    if(event.keyCode == 88){
      $('.ryu-cool').hide();
      $('.ryu-still').hide();
      $('.ryu-throwing').hide();
      $('.ryu-ready').show();
    }
  });
});
