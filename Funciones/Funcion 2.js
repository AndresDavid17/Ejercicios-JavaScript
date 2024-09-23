function checkAge(age) {     //Estamos definiendo una función llamada checkAge que toma un parámetro age.
    return (age > 18) ? true : confirm('¿Tus padres te lo permitieron?'); //Si la condición anterior es verdadera, devuelve true.
    // Si la condición es falsa (es decir, age es 18 o menor), muestra un cuadro de confirmación preguntando ¿Tus padres te lo permitieron? y devuelve el resultado de esa confirmación 
  }
 
  
  function checkAge(age) { //Estamos definiendo una función llamada checkAge que toma un parámetro age.
    return (age > 18) || confirm('¿Tus padres te lo permitieron?'); //Este es el operador lógico "OR". Si la primera condición es verdadera, el resto de la expresión no se evalúa, y se devuelve 
    //Si age es 18 o menor (es decir, la primera condición es falsa), entonces se ejecuta esta parte, mostrando el cuadro de confirmación y devolviendo su resultado.
  }