$(document).ready(function() {
  $('#team').css("display", "none");
  $('#service .right_arrow').click(function() {
    $('#team').show();
    $('#team').animate({left: "5vw"}, 1000);
    setTimeout(function() {
      $('#service').css("display", "none")}, 1000);
  })
  $('#team .right_arrow').click(function() {
    $('#story').animate({left: "5vw"}, 1000);
    setTimeout(function() {
      $('#team').css("display", "none")}, 1000);
  })
  $('#story .right_arrow').click(function() {
    $('#joinus').animate({left: "5vw"}, 1000);
  })
  $('#team .left_arrow').click(function() {
    $('#service').show();
    $('#team').animate({left: "100vw"}, 1000);
  })
  $('#story .left_arrow').click(function() {
    $('#team').show();
    $('#story').animate({left: "100vw"}, 1000);
  })
  $('#joinus .left_arrow').click(function() {
    $('#joinus').animate({left: "100vw"}, 1000);
  })
  $('#Tiger').click(function() {
    $('#tiger_intro').animate({left: 0}, 500);
    $("#Tiger span").hide();
  })
  $('#Panda').click(function() {
    $('#panda_intro').animate({left: 0}, 500);
    $("#Panda span").hide();
  })
  $('#Monkey').click(function() {
    $('#monkey_intro').animate({left: 0}, 500);
    $("#Monkey span").hide();
  })
  $('#Dog').click(function() {
    $('#dog_intro').animate({left: 0}, 500);
    $("#Dog span").hide();
  })
  $('#Platypus').click(function() {
    $('#platypus_intro').animate({left: 0}, 500);
    $("#Platypus span").hide();
  })
  $('#Otter').click(function() {
    $('#otter_intro').animate({left: 0}, 500);
    $("#Otter span").hide();
  })
  $('.back').click(function() {
    $('.intro_page').animate({left: "100vw"}, 500);
  })
});

var tiger = document.getElementById('tiger');
var animItem = bodymovin.loadAnimation({
  wrapper: tiger,
  animType: 'svg',
  loop: true,
  path: 'https://assets10.lottiefiles.com/packages/lf20_1frvu8qg.json'
});

var panda = document.getElementById('panda');
var animItem = bodymovin.loadAnimation({
  wrapper: panda,
  animType: 'svg',
  loop: true,
  path: 'https://assets3.lottiefiles.com/packages/lf20_4fewfamh.json'
});

var monkey = document.getElementById('monkey');
var animItem = bodymovin.loadAnimation({
  wrapper: monkey,
  animType: 'svg',
  loop: true,
  path: 'https://assets8.lottiefiles.com/packages/lf20_gvxqafpw.json'
});

var dog = document.getElementById('dog');
var animItem = bodymovin.loadAnimation({
  wrapper: dog,
  animType: 'svg',
  loop: true,
  path: 'https://assets3.lottiefiles.com/packages/lf20_v7nRH3.json'
});

var platypus = document.getElementById('platypus');
var animItem = bodymovin.loadAnimation({
  wrapper: platypus,
  animType: 'svg',
  loop: true,
  path: 'https://assets1.lottiefiles.com/datafiles/EPFktofivDOgrpm/data.json'
});

var otter = document.getElementById('otter');
var animItem = bodymovin.loadAnimation({
  wrapper: otter,
  animType: 'svg',
  loop: true,
  path: 'https://assets2.lottiefiles.com/animated_stickers/lf_tgs_LjTcrc.json'
});

var octopus = document.getElementById('octopus');
var animItem = bodymovin.loadAnimation({
  wrapper: octopus,
  animType: 'svg',
  loop: true,
  path: 'https://assets3.lottiefiles.com/packages/lf20_zezidsfk.json'
});

$("#Tiger").hover(function() {
  $("#tiger").css("opacity", "0.5");
  $("#Tiger span").show();
}, function() {
  $("#tiger").css("opacity", "1.0");
  $("#Tiger span").hide();
});

$("#Panda").hover(function() {
  $("#panda").css("opacity", "0.5");
  $("#Panda span").show();
}, function() {
  $("#panda").css("opacity", "1.0");
  $("#Panda span").hide();
});

$("#Monkey").hover(function() {
  $("#monkey").css("opacity", "0.5");
  $("#Monkey span").show();
}, function() {
  $("#monkey").css("opacity", "1.0");
  $("#Monkey span").hide();
});

$("#Dog").hover(function() {
  $("#dog").css("opacity", "0.5");
  $("#Dog span").show();
}, function() {
  $("#dog").css("opacity", "1.0");
  $("#Dog span").hide();
});

$("#Platypus").hover(function() {
  $("#platypus").css("opacity", "0.5");
  $("#Platypus span").show();
}, function() {
  $("#platypus").css("opacity", "1.0");
  $("#Platypus span").hide();
});

$("#Otter").hover(function() {
  $("#otter").css("opacity", "0.5");
  $("#Otter span").show();
}, function() {
  $("#otter").css("opacity", "1.0");
  $("#Otter span").hide();
});
