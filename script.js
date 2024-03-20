document.addEventListener('DOMContentLoaded', function () {
    let display = document.getElementById('display');
    display.value = '0'; // Set default value to '0'
    let buttons = document.querySelectorAll('input[type="button"]');
    let result = 0; // Store the result separately
    let operator = ''; // Store the operator for the current operation
    let decimalAdded = false; // Flag to track if a decimal point is added to the current number

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            let value = this.value;

            if (value === 'AC') {
                display.value = '0'; // Reset display value to '0' when AC is clicked
                result = 0; // Reset the result
                operator = ''; // Reset the operator
                decimalAdded = false; // Reset decimal flag
            } else if (value === 'DEL') {
                display.value = display.value.slice(0, -1);
                if (display.value === '') {
                    display.value = '0'; // Set display value to '0' if empty
                }
                decimalAdded = false; // Reset decimal flag
            } else if (value === '=') {
                if (operator === '+') {
                    result += parseFloat(display.value);
                } else if (operator === '-') {
                    result -= parseFloat(display.value);
                } else if (operator === '*') {
                    result *= parseFloat(display.value);
                } else if (operator === '/') {
                    result /= parseFloat(display.value);
                } else {
                    result = parseFloat(display.value);
                }
                display.value = result;
                operator = '';
            } else if (['+', '-', '*', '/'].includes(value)) {
                operator = value;
                result = parseFloat(display.value); // Store the current display value as the result
                display.value = '';
                decimalAdded = false; // Reset decimal flag
            } else {
                if (decimalAdded && value === '.') {
                    return; // If the value is a decimal point and a decimal point is already added to the current number, do nothing
                }
                if (value === '.') {
                    decimalAdded = true; // Set decimal flag if decimal point is added
                }
                if (display.value === '0') {
                    display.value = ''; // Remove leading '0' if present
                }
                display.value += value; // Append value to display
            }
        });
    });
});
