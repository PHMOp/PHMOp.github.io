function armazenarValor(){

  //armazena o valor que o usuário digitou 
  var userInput = document.getElementById("userInput").value;

  //exibe o valor armazenado 
  console.log("o valor da variável é: " + userInput);

  //atualiza o conteúdo
  document.getElementById("valorInserido").innerText = "Você clicou do botão e digitou: " + userInput;

}