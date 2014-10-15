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

var request = new XMLHttpRequest();
request.open("GET", "../../../graduates.json", false);
request.send(null);
request.parseJSON = function() {
  if ( request.readyState === 4 && request.status === 200 ) {
    var my_JSON_object = JSON.parse(request.responseText);
    console.log(my_JSON_object);
  }
  else {
    console.log("didn't work")
  }
}
request.parseJSON();

