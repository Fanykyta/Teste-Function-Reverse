function Inverso (STR){
  let reverse = '';
  for(char of STR){
    reverse = char + reverse;
  }
  return reverse;
}

$(function(){
  $("#bnt").click(function(){
    const teste = Inverso($("#teste").val());
    $("#resultado").html(teste)  ;
  }); 
  $("#bnt").click(function(){
    let teste2 = $("#teste").val();
    teste2 = teste2.split('').reverse().join('');   
    $("#resultado2").html(teste2);
  })
  
});