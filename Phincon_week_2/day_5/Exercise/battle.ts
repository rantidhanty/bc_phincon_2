const totalRounds = Number(localStorage.getItem('rounds')) || 1;
let currentRound = 1;
let player1Score = 0;
let player2Score = 0;

const player1Choices = document.querySelectorAll('.choices:first-of-type button');
const player2Choices = document.querySelectorAll('.choices:last-of-type button');
const roundResult = document.getElementById('roundResult') as HTMLParagraphElement;
const nextRoundButton = document.getElementById('nextRound') as HTMLButtonElement;
const currentRoundDisplay = document.getElementById('currentRound') as HTMLSpanElement;

let player1Selection: string | null = null;
let player2Selection: string | null = null;

player1Choices.forEach(button => {
    button.addEventListener('click', () => {
        player1Selection = button.getAttribute('data-choice');
        checkRoundComplete();
    });
});

player2Choices.forEach(button => {
    button.addEventListener('click', () => {
        player2Selection = button.getAttribute('data-choice');
        checkRoundComplete();
    });
});

function checkRoundComplete() {
    if (player1Selection && player2Selection) {
        const result = determineWinner(player1Selection, player2Selection);
        roundResult.textContent = result;
        nextRoundButton.disabled = false;
    }
}

function determineWinner(p1: string, p2: string): string {
    if (p1 === p2) return 'It\'s a tie!';

    if (
        (p1 === 'rock' && p2 === 'scissors') ||
        (p1 === 'scissors' && p2 === 'paper') ||
        (p1 === 'paper' && p2 === 'rock')
    ) {
        player1Score++;
        return 'Player 1 wins!';
    } else {
        player2Score++;
        return 'Player 2 wins!';
    }
}

nextRoundButton.addEventListener('click', () => {
    if (currentRound < totalRounds) {
        currentRound++;
        currentRoundDisplay.textContent = currentRound.toString();
        resetRound();
    } else {
        localStorage.setItem('player1Score', player1Score.toString());
        localStorage.setItem('player2Score', player2Score.toString());
        window.location.href = 'result.html';
    }
});

function resetRound() {
    player1Selection = null;
    player2Selection = null;
    roundResult.textContent = '';
    nextRoundButton.disabled = true;
}
