//questão 1
  function verificarArray(entrada) {
    return Array.isArray(entrada);
  }

  //questão 2
  function clonarArray(array) {
    return Array.from(array);
  }
  
  //questão 3
  function obterPrimeirosElementos(array, n) {
    if (n === undefined || n >= array.length) {
      return array[0];
    } else {
      var primeirosElementos = [];
      for (var i = 0; i < n; i++) {
        primeirosElementos.push(array[i]);
      }
      return primeirosElementos;
    }
  }
  
  //questão 4
  function obterUltimosElementos(array, n) {
    if (n === undefined || n >= array.length) {
      return array[array.length - 1];
    } else {
      var ultimosElementos = [];
      for (var i = array.length - n; i < array.length; i++) {
        ultimosElementos.push(array[i]);
      }
      return ultimosElementos;
    }
  }
  
  //questão 5
  function unirElementosArray(array) {
    var stringUnida = "";
    for (var i = 0; i < array.length; i++) {
      stringUnida += array[i];
    }
    return stringUnida;
  }
  
  //questão 6
  const separarPares = (numberString) => {
    numberString = numberString.toString();
    let stringLength = numberString.length;
  
    for (let i = 1; i < stringLength; i++) {
      if (
        numberString.charAt(i - 1) % 2 === 0 &&
        numberString.charAt(i) % 2 === 0
      ) {
        numberString = `${numberString.slice(0, i)}-${numberString.slice(i)}`;
        stringLength++;
        i++; 
      }
    }
    return numberString;
  };
  
  //questão 7
  const itemMaisFrequente = (array) => {
    const hashmap = array.reduce((acumulador, valor) => {
      acumulador[valor] = (acumulador[valor] || 0) + 1;
      return acumulador;
    }, {});
    return Object.keys(hashmap).reduce((a, b) =>
      hashmap[a] > hashmap[b] ? a : b
    );
  };
  
  //questão 8
  const removerDuplicados = (array) => {
    semDuplicados = [...new Set(array)];
    return semDuplicados;
  };
  
  //questão 9
  const somaIndividualArrays = (firstArray, secondArray) => {
    for (let i = 0; i < Math.min(firstArray.length, secondArray.length); i++) {
      console.log(firstArray[i] + secondArray[i]);
    }
  };
  
  //questão 10
  var vetorPilha = [1, 2, 3, 4, 5];
  var vetorAdiciona = [6, 7, 8, 9, 10];

  for (var i = 0; i < vetorAdiciona.length; i++) {
    vetorPilha[vetorPilha.length] = vetorAdiciona[i];
  }