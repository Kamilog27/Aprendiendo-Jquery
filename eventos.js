$(document).ready(function(){
  var boton=$('#boton');
  // boton.click(function(){
  //   alert('hola');
  // });
//Evento con funcion
  function saludo(){
    alert('saludos');
  }
  //boton.click(saludo);
  //boton.on('click',saludo);
  //Evento con fallback
  // boton.on('mouseenter',function(){document.body.style.background='#000';});
  // boton.on('mouseleave',function(){document.body.style.background='#fff';});
  //eliminanddo eventos
  // boton.on('click',function(){
  //   alert('saludos');
  // });
  // $("#desactivar").on('click',function(){
  //   boton.off('click');
  // });
  //Previniendo el comportamiento de los enlaces
  $('a').on('click',function(e){
      e.preventDefault();
      alert('link desactivado');
  });
});
