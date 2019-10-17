$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
  // $('#pills-tab01 .nav-item').click(function(){
  //   if($('#pills-tab01 .nav-item a').is('.active')){
  //     $('#pills-tab01').removeClass("my-image");
  //     // $('#pills-tab').addClass("changeImage");
  //   }else if($('#pills-tab01 .nav-item a').is('.active')){
  //     $('#pills-tab01').removeClass("changeImage");
  //     // $('#pills-tab').addClass("my-image");
  //   }
  // })

  // $('#pills-tab01 .nav-item a').click(function(){
  //   console.log($('#pills-tab01 .nav-item a').is('.active'));
  //   if($('#pills-tab01 .nav-item a').is('.active')==true){
  //     $('#pills-tab01').css('background','url(../img/list/life.png) no-repeat center');
  //   }else{
  //     $('#pills-tab01').css('background','url(../img/list/right.png) no-repeat center');
  //   }
  // })

  $('#pills-tab01 .nav-item  a').on('click', function (e) {
    e.preventDefault();
    console.log($(this).tab('show')[0].id);
  
    let isChange = $(this).tab('show')[0].id === 'pills-home-tab0';
    console.log(isChange);
    if (isChange===true) {
      $('#pills-tab01').removeClass("changeImage");
      $('#pills-tab01').addClass("my-image");
    } else if (isChange===false) {
      $('#pills-tab01').removeClass("my-image");
      $('#pills-tab01').addClass("changeImage");
    }

    $(this).tab('show')
  })

  $(".imgclick").toggle(function () {
    $(this).attr("src", "img/close.png");
  }, function () {
    $(this).attr("src", "img/open.png");
  }).attr("src", "img/open.png");



  //  id="model-1"
  $("#model-1").click(function (e) {
    $("#content-right-2").show();
    $("#content-right-1").hide();
    $(this).attr("src", "../img/click.gif");
    e ? e.stopPropagation() : event.cancelBubble = true;
  })

  $(".main-bottom-center").click(function () {
    $("#content-right-2").hide();
    $("#content-right-1").show();
    $("#model-1").attr("src", "../img/main/model-pool.png");
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