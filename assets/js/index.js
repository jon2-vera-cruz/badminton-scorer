$("document").ready(function () {
    $(`.left-scorer`).attr("disabled", "disabled");
    $(`.right-scorer`).attr("disabled", "disabled");
    $(`.left-court-left-player-container`).hide();
    $(`.team-a-player-1`).hide();
    $(`.right-court-left-player-container`).hide();
    $(`.team-b-player-1`).hide();
    $(`#left-court-right-side-shuttle`).show();
});
// Source https://stackoverflow.com/questions/469357/html-text-input-allow-only-numeric-input
function validate(interval, evt) {
  var theEvent = evt || window.event;

  // Handle paste
  if (theEvent.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
  } else {
  // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
};

$("#mid-interval-seconds").keyup(function() {
  if($('#mid-interval-seconds').val()>360 ){
      $("#mid-interval-seconds" ).val("");
  }
});
$("#full-interval-seconds").keyup(function() {
  if($('#full-interval-seconds').val()>360 ){
      $("#full-interval-seconds" ).val("");
  }
});