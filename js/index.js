$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $('#pills-tab .nav-item').click(function(){
    if($('#pills-tab .nav-item a').is('.active')){
      $('#pills-tab').removeClass("my-image");
      // $('#pills-tab').addClass("changeImage");
    }else if($('#pills-tab .nav-item a').is('.active')){
      $('#pills-tab').removeClass("changeImage");
      // $('#pills-tab').addClass("my-image");
    }
  })



  //  id="model-1"
  $("#model-1").click(function(e){
    $("#content-right-2").show();
    $("#content-right-1").hide();
    e?e.stopPropagation():event.cancelBubble = true; 
  })

  $(".main-bottom-center").click(function() { 
    $("#content-right-2").hide();
    $("#content-right-1").show();
  })
});