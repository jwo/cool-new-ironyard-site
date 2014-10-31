'use strict';
console.log('loaded!');

$(document).ready(function() {

  $('.filter-item').click(function(e){
    $(this).toggleClass('gold-text');

    var filteredDiv = '.' + e.currentTarget.id;
    $(filteredDiv).toggleClass('hide');
  });

  $('.clear-all').click(function(){
    $('.filter-item').each(function(){
      $(this).removeClass('gold-text');
    });
      
    $('.bio').addClass('hide');
  })

  $('.show-all').click(function(){
    $('.filter-item').each(function(){
      $(this).addClass('gold-text');
    });
      
    $('.bio').removeClass('hide');
  })

});

