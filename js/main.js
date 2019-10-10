$(document).ready(function () {

    $('.first-button').on('click', function () {
      $('.animated-icon2').removeClass('open');
    });
    $('.second-button').on('click', function () {
      $('.animated-icon2').toggleClass('open');
      $('.menu-nav').toggleClass('open__class');
      $('.social').toggleClass('open__class');
      // $('.heading').css("display","flex");
      // $('.nav__search').toggleClass('open__class');
    });
    // $('.third-button').on('click', function () {
  
    //   $('.animated-icon3').toggleClass('open');
    // });
  });

  var btn = $('#button__down');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '400');
  });
