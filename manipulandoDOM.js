$(document).ready(function(){
  //$('#titulo').text('Encabezado Modificado');
  $('#titulo').html('<u>Encabezado Modificado</u>');
  var nombre=$('#nombre');
  nombre.on('change',function(){
    $('#titulo').text(nombre.val());
  });
  // $('#enlace').text('Kamiclaneros');
  // $('#enlace').attr('href','http://www.kamiclaneros.dx.am');

  $('#enlace').attr({
    'class':'azul',
    'target':'_blank'

  });


});
