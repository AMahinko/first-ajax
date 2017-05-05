$(document).ready(function () {
  $('#button1').click(function (){
      $.ajax({
        url: 'http://first-ajax-api.herokuapp.com',
        method: 'get',
        data: {},
        datatype: 'html'
      });

  });

  $('#button2').click(function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'get',
      data: {},
      datatype: 'text'
    }).done(function(responseData){
      $('#step3456').append(responseData + " | ");
    })
  })

});
