const display = document.getElementById('display');

const buttons = document.querySelectorAll('.btn');

let currentInput = '';

buttons.forEach(button => {

    button.addEventListener('click', () => {

        const value = button.textContent.trim();

        if (value === 'C') {
            currentInput = '';
        }

        else if (value === '<') {
            currentInput = currentInput.slice(0, -1);
        }

        else if (value === '=') {
            try {
                currentInput = eval(currentInput.replace('x', '*')).toString();
            } catch (e) {
                currentInput = 'Erro';
            }
        }

        else {
            currentInput += value;
        }

        display.textContent = currentInput;
    });
});