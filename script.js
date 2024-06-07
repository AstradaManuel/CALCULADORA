
        function appendNumber(number) {
            displayValue += number;
            updateDisplay();
        }

        // Función para añadir un operador a la pantalla
        function appendOperator(operator) {
            displayValue += operator;
            updateDisplay();
        }

        // Función para actualizar el contenido de la pantalla
        function updateDisplay() {
            document.getElementById('display').innerText = displayValue;
        }

        // Función para calcular el resultado de la operación
        function calculateResult() {
            try {
                // Evalúa la expresión en displayValue
                displayValue = eval(displayValue);
                updateDisplay();
            } catch (error) {
                // Si hay un error (p.ej., expresión inválida), muestra un mensaje de error
                // Explicación del Código

                displayValue = "Error";
                updateDisplay();
            }
        }

        // Función para limpiar la pantalla
        function clearDisplay() {
            displayValue = "";
            updateDisplay();
        }


