var g = G$('John', 'Doe');

g.greet().setLang('es').greet(true).log();
$('#login').click(function(){
  var loginGtr = G$('John', 'Doe');

  $('#logindiv').hide();

  loginGtr.setLang($('#lang').val()).HTMLGreeting('#greeting',true).log();
});
