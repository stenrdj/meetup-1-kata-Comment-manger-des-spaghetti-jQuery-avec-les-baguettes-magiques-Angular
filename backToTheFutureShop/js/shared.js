$(document).ready(function () {

  // Main menu
  var mainMenu = '';
  $.each(menuJson, function(index, menu) {
    mainMenu += '<li><a href=' + menu.link + '>'+ menu.text + '</a></li>';
  });

  $('#mainMenu').html(mainMenu);

  // Side menu
  var sideMenu = '';
  $.each(sideMenuJson, function(index, menu) {
    sideMenu += '<a href=' + menu.link + ' class="list-group-item">' + menu.text + '</a>';
  });

  $('#sideMenu').html(sideMenu);

});