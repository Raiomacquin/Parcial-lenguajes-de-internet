function calcular(operacion) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultadoDiv = document.getElementById("resultado");
  
    if (isNaN(num1) || isNaN(num2)) {
      resultadoDiv.textContent = "Por favor ingresa ambos números.";
      return;
    }
  
    let resultado;
  
    switch (operacion) {
      case '+':
        resultado = num1 + num2;
        break;
      case '-':
        resultado = num1 - num2;
        break;
      case '*':
        resultado = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          resultadoDiv.textContent = "Error: No se puede dividir entre cero.";
          return;
        }
        resultado = num1 / num2;
        break;
    }
  
    resultadoDiv.textContent = `Resultado: ${resultado}`;
  }

  function cambiarTema() {
    document.body.classList.toggle("dark-mode");
  }
  