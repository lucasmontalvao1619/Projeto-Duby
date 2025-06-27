document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const setupPhase = document.getElementById('setup-phase');
    const guessPhase = document.getElementById('guess-phase');
    const resultPhase = document.getElementById('result-phase');
    const setNumberBtn = document.getElementById('set-number');
    const submitGuessBtn = document.getElementById('submit-guess');
    const playAgainBtn = document.getElementById('play-again');
    const hiddenNumberInput = document.getElementById('hidden-number');
    const guessInput = document.getElementById('guess-input');
    const feedbackDiv = document.getElementById('feedback');
    const attemptsLeftSpan = document.getElementById('attempts-left');
    const resultMessage = document.getElementById('result-message');
    

    let hiddenNumber = 0;
    let attemptsLeft = 5;
    let gameOver = false;
    
   
    setNumberBtn.addEventListener('click', function() {
        const number = parseInt(hiddenNumberInput.value);
        
        if (isNaN(number) || number < 1 || number > 100) {
            alert('Por favor, digite um número válido entre 1 e 100.');
            return;
        }
        
        hiddenNumber = number;
        setupPhase.classList.add('hidden');
        guessPhase.classList.remove('hidden');
    });
    

    submitGuessBtn.addEventListener('click', processGuess);
    
    
    guessInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            processGuess();
        }
    });
    
 
    playAgainBtn.addEventListener('click', function() {
        hiddenNumber = 0;
        attemptsLeft = 5;
        gameOver = false;
        hiddenNumberInput.value = '';
        guessInput.value = '';
        feedbackDiv.textContent = '';
        attemptsLeftSpan.textContent = attemptsLeft;
        resultPhase.classList.add('hidden');
        setupPhase.classList.remove('hidden');
    });
    
    function processGuess() {
        if (gameOver) return;
        
        const guess = parseInt(guessInput.value);
        
        if (isNaN(guess)) {  
            feedbackDiv.textContent = 'Por favor, digite um número válido.';
            feedbackDiv.style.color = 'red';
            return;
        }
        
        attemptsLeft--;
        attemptsLeftSpan.textContent = attemptsLeft;
        
        if (guess === hiddenNumber) {
          
            endGame(true);
            return;
        }
        
        if (guess < hiddenNumber) {
            feedbackDiv.textContent = `O número oculto é MAIOR que ${guess}.`;
            feedbackDiv.style.color = 'blue';
        } else {
            feedbackDiv.textContent = `O número oculto é MENOR que ${guess}.`;
            feedbackDiv.style.color = 'blue';
        }
        
        guessInput.value = '';
        
        if (attemptsLeft === 0) {
            endGame(false);
        }
    }
    
    function endGame(hasWon) {
        gameOver = true;
        guessPhase.classList.add('hidden');
        resultPhase.classList.remove('hidden');
        
        if (hasWon) {
            resultMessage.textContent = `Parabéns! Você acertou o número ${hiddenNumber} com ${5 - attemptsLeft} tentativa(s)!`;
            resultMessage.style.color = 'green';
        } else {
            resultMessage.textContent = `Fim de jogo! O número oculto era ${hiddenNumber}. Tente novamente!`;
            resultMessage.style.color = 'red';
        }
    }
});