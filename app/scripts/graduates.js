'use strict';
console.log('loaded!');

$(document).ready(function() {
  $('.filter-item').click(function(e){
    $('.' + e.currentTarget.id).toggle();
    if($('.' + e.currentTarget.id).length == 0) {
      $('.' + e.currentTarget.id).toggle();
    }
  });

});

