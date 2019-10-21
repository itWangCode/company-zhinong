$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $('#pills-tab01 .nav-item  a').on('click', function (e) {
    e.preventDefault();
    console.log($(this).tab('show')[0].id);

    let isChange = $(this).tab('show')[0].id === 'pills-home-tab0';
    console.log(isChange);
    if (isChange === true) {
      $('#pills-tab01').removeClass("changeImage");
      $('#pills-tab01').addClass("my-image");
    } else if (isChange === false) {
      $('#pills-tab01').removeClass("my-image");
      $('#pills-tab01').addClass("changeImage");
    }

    $(this).tab('show')
  })



  $('#pills-tab23 .nav-item  a').on('click', function (e) {
    e.preventDefault();
    console.log($(this).tab('show')[0].id);

    let isChange = $(this).tab('show')[0].id === 'pills-home-tab2';
    console.log(isChange);
    if (isChange === true) {
      $('#pills-tab23').removeClass("changeImage");
      $('#pills-tab23').addClass("my-image");
    } else if (isChange === false) {
      $('#pills-tab23').removeClass("my-image");
      $('#pills-tab23').addClass("changeImage");
    }

    $(this).tab('show')
  })


  $('#pills-tab78 .nav-item  a').on('click', function (e) {
    e.preventDefault();
    console.log($(this).tab('show')[0].id);

    let isChange = $(this).tab('show')[0].id === 'pills-home-tab7';
    console.log(isChange);
    if (isChange === true) {
      $('#pills-tab78').removeClass("changeImage");
      $('#pills-tab78').addClass("my-image");
    } else if (isChange === false) {
      $('#pills-tab78').removeClass("my-image");
      $('#pills-tab78').addClass("changeImage");
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
    // $('#model-1').attr("src", "../img/click.gif");
    // e ? e.stopPropagation() : event.cancelBubble = true;
    // console.log($('.model-pool img').siblings());
    // console.log($(this).attr('src'));
    // console.log($(this).siblings('').next('img'));

    // $(this).siblings('li').removeClass('selected');
    // $(this).siblings('li').addClass('selected');

    if ($(this).attr('src') == '../img/main/model-pool.png') {
      $(this).attr('src', '../img/click.gif');
    } else {
      $(this).attr('src', '../img/main/model-pool.png');
      $("#content-right-2").hide();
      $("#content-right-1").show();
    }

    if($('#model-2').attr('src')=='../img/click.gif'){
      $('#model-2').attr('src', '../img/main/model-pool.png');
    }

    if($('#model-3').attr('src')=='../img/click.gif'){
      $('#model-3').attr('src', '../img/main/model-pool.png');
    }

    if($('#model-4').attr('src')=='../img/click.gif'){
      $('#model-4').attr('src', '../img/main/model-pool.png');
    }


  })

  $("#model-2").click(function (e) {
    $("#content-right-2").show();
    $("#content-right-1").hide();

    console.log($('#model-1').attr('src')=='../img/click.gif');
    if($('#model-1').attr('src')=='../img/click.gif'){
      $('#model-1').attr('src', '../img/main/model-pool.png');
    }

    if($('#model-3').attr('src')=='../img/click.gif'){
      $('#model-3').attr('src', '../img/main/model-pool.png');
    }

    if($('#model-4').attr('src')=='../img/click.gif'){
      $('#model-4').attr('src', '../img/main/model-pool.png');
    }

    console.log($(this).attr('src'));
    if ($(this).attr('src') == '../img/main/model-pool.png') {
      $(this).attr('src', '../img/click.gif');
    } else {
      $(this).attr('src', '../img/main/model-pool.png');
      $("#content-right-2").hide();
      $("#content-right-1").show();
    }

  })


  $("#model-3").click(function (e) {
    $("#content-right-2").show();
    $("#content-right-1").hide();

    console.log($('#model-1').attr('src')=='../img/click.gif');
    if($('#model-1').attr('src')=='../img/click.gif'){
      $('#model-1').attr('src', '../img/main/model-pool.png');
    }
    if($('#model-2').attr('src')=='../img/click.gif'){
      $('#model-2').attr('src', '../img/main/model-pool.png');
    }

    if($('#model-4').attr('src')=='../img/click.gif'){
      $('#model-4').attr('src', '../img/main/model-pool.png');
    }

    console.log($(this).attr('src'));
    if ($(this).attr('src') == '../img/main/model-pool.png') {
      $(this).attr('src', '../img/click.gif');
    } else {
      $(this).attr('src', '../img/main/model-pool.png');
      $("#content-right-2").hide();
      $("#content-right-1").show();
    }

  })


  $("#model-4").click(function (e) {
    $("#content-right-2").show();
    $("#content-right-1").hide();

    console.log($('#model-1').attr('src')=='../img/click.gif');
    if($('#model-1').attr('src')=='../img/click.gif'){
      $('#model-1').attr('src', '../img/main/model-pool.png');
    }
    if($('#model-2').attr('src')=='../img/click.gif'){
      $('#model-2').attr('src', '../img/main/model-pool.png');
    }

    if($('#model-3').attr('src')=='../img/click.gif'){
      $('#model-3').attr('src', '../img/main/model-pool.png');
    }

    console.log($(this).attr('src'));
    if ($(this).attr('src') == '../img/main/model-pool.png') {
      $(this).attr('src', '../img/click.gif');
    } else {
      $(this).attr('src', '../img/main/model-pool.png');
      $("#content-right-2").hide();
      $("#content-right-1").show();
    }

  })

  // $(".main-bottom-center").click(function () {
  //   $("#content-right-2").hide();
  //   $("#content-right-1").show();
  //   $("#model-1").attr("src", "../img/main/model-pool.png");
  // })


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