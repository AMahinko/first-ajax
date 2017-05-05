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
  $('#button3').click(function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'get',
      data: {},
      datatype: 'text'
    }).done(function(responseData){
      $('#step3456').append(responseData + " | ");
    }).fail(function() {
      console.log("OH GOD WHAT HAVE YOU DONE STEP AWAY FROM THE MACHINE BEFORE YOU KILL US A- oh. Oh, it's a 500 error. It's cool, don't worry, we're fine, someone else's problem.");
      $('#step3456').append("<p style=\"color:red;\"> Something's wrong. I didn't do it.</p>");
    }).always(function() {
      console.log("Request's done, by the way.")
    })
  })

  $('#button4').click(function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'get',
      data: {},
      datatype: 'text'
    }).done( function(responseData) {
      console.log(responseData);
      $('#step7').append(responseData + " | ");
    })

  })

  $('#buttontest').click(function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'post',
      data: 1234,
      datatype: 'text'
    })
  })

  $("#button5").click(function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'get',
      data: {timezone: 'EST'},
      datatype: 'text'
    }).done( function(responseData) {
      $('#step8').append(responseData);
    })
  })
  $("#button6").click(function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'get',
      data: {},
      datatype: 'html'
    }).done( function(responseData){
      $('#carlist').append(responseData);
    })
  })
});
