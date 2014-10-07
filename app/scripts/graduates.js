'use strict';
console.log('loaded!');

$(function() {
  $('#greenville').click(function() {
    console.log('greenville clicked!!');
    $('.greenville').toggle();
  });
});
