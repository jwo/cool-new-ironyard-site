'use strict';
console.log('loaded!');

$(document).ready(function() {

  $('.filter-item').click(function(e){
    $(this).toggleClass('gold-text');

    var filteredDiv = '.' + e.currentTarget.id;
    $(filteredDiv).toggleClass('hide');
  });

});

