//Ejercicio if

function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  //El codigo con if es mas explicito ,lo que hace que sea facil de entender el codigo 
  
  //Ejercicio ?
  function min(a, b) {
    return a < b ? a : b;
  }
  //Este operador hace lo mismo qu eel if, pero resume mas las lineas de codigo 
  //En el caso de igualdad, no necesita devolver la funcion