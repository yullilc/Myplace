### PROGRAMA PARA ENCRIPTAR MENSAJES
    Pedir una frase al usuario por medio de un prompt

    crear **function cipher(string)** que devuelva la frase según el Cifrado Cesar

    crear una variable vacia: var newCipherString = ""

    iterar por toda la frase  i = 1 hasta 100

    obtener cada índice en codigo ASCII string.charCodeAt(i)

    fórmula de Cifrado Cesar var cipherIndex = (newIndex - 65 + 33) % 26 + 65

    obtener cada letra cifrada var cipherLetter = String.fromCharCode(cipherIndex)

    ingresar la frase cifrada  a la variable vacia newCipherString += cipherLetter

    mostrar frase cifrada por medio de un alert

    Fin
