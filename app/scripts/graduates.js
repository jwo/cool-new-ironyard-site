'use strict';
console.log('loaded!');

$(function() {

  function filterGrads(select, target) {
    $(select).click(function() {
      console.log(select ' clicked!');
      $(target).toggle();
    })
  }

  $('#greenville').click(function() {
    console.log('greenville clicked!!');
    $('.greenville').toggle();
  });

});
