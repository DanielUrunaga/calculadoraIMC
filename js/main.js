// Función para obtener los datos de entrada
function obtenerDatos() {
    let peso = parseFloat(prompt('Ingrese su peso en kg:'));
    while (isNaN(peso) || peso <= 0) {
        alert('Por favor, ingrese un peso válido.');
        peso = parseFloat(prompt('Ingrese su peso en kg:'));
    }

    let altura = parseFloat(prompt('Ingrese su altura en metros:'));
    while (isNaN(altura) || altura <= 0) {
        alert('Por favor, ingrese una altura válida.');
        altura = parseFloat(prompt('Ingrese su altura en metros:'));
    }

    return { peso, altura };
}

// Función para procesar los datos (calcular el IMC)
function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

// Función para mostrar los resultados
function mostrarResultados(imc) {
    let categoria = obtenerCategoriaIMC(imc);
    alert(`Su IMC es ${imc}.\n\nCategoría: ${categoria}`);
}

// Función para determinar la categoría del IMC
function obtenerCategoriaIMC(imc) {
    if (imc < 18.5) return 'Bajo peso';
    if (imc < 24.9) return 'Peso normal';
    if (imc < 29.9) return 'Sobrepeso';
    return 'Obesidad';
}

// Función principal para ejecutar la calculadora de IMC
function ejecutarCalculadoraIMC() {
    let continuarCalculando = true;

    while (continuarCalculando) {
        const { peso, altura } = obtenerDatos();
        const imc = calcularIMC(peso, altura);
        mostrarResultados(imc);

        continuarCalculando = confirm('¿Desea calcular otro IMC?');
    }
}

// Ejecutar la calculadora de IMC al cargar la página
ejecutarCalculadoraIMC();