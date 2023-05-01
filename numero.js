function iniciarJuego(){
let objetivo = alert("Piensa en un número del 1 al 100");

// Definimos el limite inferior y superior de los números posibles en los que el usuario pensó
let inferior = 1;
let superior = 100;

while (inferior <= superior) {
  // Calculamos la mitad para partir de los numeros de arriba 
  let medio = Math.floor((inferior + superior) / 2);
  
  // Le preguntamos al usuario si la variante medio es el número en el cual penso
  let respuesta = parseInt(prompt(`¿Es ${medio} el número el que pensaste? (Escribe 1 si es el número correcto, escribe 2 si tu número es mayor, escribe -1 si tu número es menor) `));
  
  // Si el usuario ingresa 1, significa que encontramos el número en el cual pensó
  if (respuesta === 1) {
    alert(`¡Encontré el número en el que pensaste! Es ${medio}.`);
    break;
  }
  // Si el usuario ingresa 2, significa que el número objetivo es mayor, de esta forma volvemos a establecer la variable medio
  else if (respuesta === 2) {
    respuesta = parseInt(prompt("¿Es tu número mayor o menor? Si es mayor ingresa 1, si es menor ingresa -1"));
    if (respuesta === 1) {
      inferior = medio + 1;
    } else {
      superior = medio - 1;
    }
  }
  
  // Si el usuario ingresa -1, significa que el número objetivo es menor que el número medio, así que ajustamos el límite superior
  else if (respuesta === -1) {
    superior = medio - 1;
  }
  
  // Si el usuario ingresa un valor diferente de 1, 0 o -1, le decimos que su respuesta es inválida y le pedimos que lo intente de nuevo
  else {
    console.log("Respuesta inválida. Por favor, ingresa 1 si el número es correcto, 2 si el número es mayor, -1 si el número es menor.");
  }
}
}

