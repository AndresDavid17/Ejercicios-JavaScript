function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
        //Esto es un bucle,mientras i sea menor que n
        //El ucle comienza con i=1 y sigue incrementando i en cada interaccion
      result *= x;
    }
  
    return result; //Devuelve el resultado
  }
  //Solicita Valores al usuario
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) { //Indica si el exponente es 0 o negativo
    alert(`Potencia ${n} no soportada,
      use un entero mayor a 0`);
  } else {
    alert( pow(x, n) );
  }