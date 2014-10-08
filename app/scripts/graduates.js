'use strict';
console.log('loaded!');

$(document).ready(function() {
  $('.filter-item').click(function(e){
    $('.' + e.currentTarget.id).toggleClass('hide');
  });

});

