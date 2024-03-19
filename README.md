## Calculator JavaScript Code

```javascript
let display = document.getElementById('display');
let buttons = document.querySelectorAll('input[type="button"]');
// Firstly I declare a variables and I recover elements either by id or by tag from Html code

buttons.forEach(function (button) {
    // This line starts a loop over each button in the buttons array using the forEach method, which executes a provided function once for each array element.
    button.addEventListener('click', function () {
        // This line adds a click event listener to each button. When a button is clicked, the provided function is executed.
        let value = this.value;
        // This line retrieves the value of the clicked button and assigns it to the variable value. The this keyword refers to the current button element.
        if (value === 'AC') {
            display.value = '';
        } else if (value === 'DEL') {
            display.value = display.value.slice(0, -1);
        } else if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else {
            display.value += value;
        }
    });
});
