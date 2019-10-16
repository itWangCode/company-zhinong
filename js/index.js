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
});