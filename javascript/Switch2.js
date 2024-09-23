let a = Number(prompt("Digite un número"));
let b = Number(prompt("Digite otro número"));
let operacion = prompt("Digite una operación (+, -, *, /)");

switch (operacion) {
    case "+":
      alert(a + b);
      break;76
    case "-":
      alert(a - b);
      break;
    case "*":
      alert(a * b);
      break;
    case "/":
        alert(a / b);
        break;
    default:
      alert("Desconozco esta operación");
}