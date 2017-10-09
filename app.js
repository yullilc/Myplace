var answer = prompt("denos una frase");

//creamos una función que devuelva un string según el cifrado Cesar
function cipher(string){

  var newCipherString = "";

  // iteramos por toda la frase dada por el usuario
  for(var i = 0; i < string.length; i++){

    //Obtenemos el índice de cada letra en el código ASCII
    var newIndex = string.charCodeAt(i);

    //aplicamos la fórmula del cifrado Cesar
    var cipherIndex = (newIndex - 65 + 33) % 26 + 65;

    //obtenemos la letra cifrada que corresponde a cada índice
    var cipherLetter = String.fromCharCode(cipherIndex);

    newCipherString += cipherLetter;

  }

// mostramos en una ventana la frase cifrada
  alert(newCipherString);

}

cipher(answer)
