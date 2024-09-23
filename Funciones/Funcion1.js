function checkNotas(a, b) {
    return (a + b > 5);
}

function askForNotas() {
    const a = parseInt(prompt("Digite su primera nota "));
    const b = parseInt(prompt("Digite la segunda nota"));

    if (checkNotas(a, b)) {  
        alert("Aprobo");
    } else {
        alert("No Aprobo");
    }
}

// Llamar a la función
askForNotas();
