$(document).ready(function(){
  var titulo=$('#titulo');
  var info=$('#info');
  info.append('Ancho: '+titulo.width()+'<br>');
  info.append('Ancho Interno: '+titulo.innerWidth()+'<br>');
  info.append('Ancho Externo: '+titulo.outerWidth()+'<br>');
  info.append('Ancho Externo: '+titulo.outerWidth(true)+'<br>');
  //----- --- - -- - ---
  info.append('Alto : '+titulo.height()+'<br>');
  info.append('Alto Interno: '+titulo.innerHeight()+'<br>');
  info.append('Alto Externo: '+titulo.outerHeight()+'<br>');
  info.append('Alto Externo : '+titulo.outerHeight(true)+'<br>');

});
