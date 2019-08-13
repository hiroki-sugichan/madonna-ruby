// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery
//= require jquery_ujs
$(function(){
  //fadeIn of catchy
  $('#catchy').fadeIn(2000,function(){
  $('#catchy').css('display','inline-block');
  });
  //modal show function
  $('.book').click(function(){
    $('.modal').fadeIn();
  });
  //modal close function
  $('.close').click(function(){
    $('.modal').fadeOut();
  });
  //icon hover of sns
  $('.fab').hover(
    function(){
      $(this).css('color','black');
      $('.bottom-container').css('background-color','rgba(186, 58, 58, 1)');
    },
    function(){
      $(this).css('color','white');
      $('.bottom-container').css('background-color','rgb(71, 71, 71)');
  });
  //menus-wrapper show function
  $('.fa-bars').click(function(){
    $(this).hide(400);
    $('.menus-wrapper').show(400);
    $('.menus-responsive').show(600);
  })
});
