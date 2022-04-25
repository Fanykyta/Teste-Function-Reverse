Teste das função de inverter texto 

function Inverso (STR){
  let reverse = '';
  debugger;
  for(char of STR){
    reverse = char + reverse;
  }
  return reverse;
}

$(function(){
  $("#bnt").click(function(){
    const teste = Inverso($("#texto").val());
    $("#resultado").html(teste)  ;
  }); 
  $("#bnt").click(function(){
    let teste2 = $("#texto").val();
    teste2 = teste2.split('').reverse().join('');   
    $("#resultado2").html(teste2);
  })
  
});
