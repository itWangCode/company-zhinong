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


  // 按钮

  $('input').lc_switch();
  // triggered each time a field changes status
  $('body').delegate('.lcs_check', 'lcs-statuschange', function () {
    var status = ($(this).is(':checked')) ? 'checked' : 'unchecked';
    console.log('field changed status: ' + status);
  });

  // triggered each time a field is checked
  $('body').delegate('.lcs_check', 'lcs-on', function () {
    console.log('field is checked');
  });


  // triggered each time a is unchecked
  $('body').delegate('.lcs_check', 'lcs-off', function () {
    console.log('field is unchecked');
  });
});