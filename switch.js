$(document).ready(function(){
    var status=false;

$('#switch,#toggleButton').click(function(){
    var status=false;
   var toggle=$('#round').hasClass("round-button-left");
   if(toggle){
    $('#round').removeClass('round-button-left');
    $('#round').addClass('round-button-right');
    status=true;
   }
   else{
    $('#round').addClass('round-button-left');
    $('#round').removeClass('round-button-right');
    status=false;
   }
   console.log("Status:",status);
$('#status').text(status)
})
$('#status').text(status)

});