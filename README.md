#Documentation
        ##let display = document.getElementById('display');
            let buttons = document.querySelectorAll('input[type="button"]');
        ***Firstly I declare a variables and I recover elements either by id or by tag from Html code***
        ##buttons.forEach(function (button) {
        ***This line starts a loop over each button in the buttons array using the forEach method, which executes a provided function once for each array element.***

        ##('click', function () {
            
        ***This line adds a click event listener to each button. When a button is clicked, the provided function is executed.***
        ##let value = this.value;
        ***This line retrieves the value of the clicked button and assigns it to the variable value. The this keyword refers to the current button element.***
        ##if (value === 'AC') {
            display.value = '';
        ***This line checks if the clicked button's value is 'AC', which represents the clear button. If true, it sets the display value to an empty string, effectively clearing the display.***
        ##else if (value === 'DEL') {
            ***This line checks if the clicked button's value is 'DEL', which represents the delete button. If true, it removes the last character from the display value using slice.***
        ##else if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        ***This line checks if the clicked button's value is '=', which represents the equals button. If true, it evaluates the expression in the display value using eval and sets the result back to the display.
            And the eval function  is called with display.value as its argument. This means that the contents of the display input field, which should contain a mathematical expression (e.g., "2 + 2"), will be evaluated as JavaScript code.
        ***
        ##else {
            display.value += value;
        ***This line is the default case for when the clicked button is a number or an operator. It appends the clicked button's value to the display.***
    </div>
