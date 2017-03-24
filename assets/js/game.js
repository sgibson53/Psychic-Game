
// Game Object
var game = {
    wins: 0,
    losses: 0,
    guessesLeft: 15,
    guessesSoFar: [],
    letter: String.fromCharCode(Math.floor(Math.random()*(122-97+1))+97),
    resetGame: function() {
        this.guessesLeft = 15;
        this.guessesSoFar = [];
        this.letter =   String.fromCharCode(Math.floor(Math.random()*(122-97+1))+97);
        this.updateUI();
    },
    updateUI: function() {
        document.getElementById('guesses-left').innerHTML = game.guessesLeft;
        document.getElementById('guesses-so-far').innerHTML = game.guessesSoFar.reduce(function(s, el) {
            s += ' '+el;
            return s;
        }, '');
        document.getElementById('guesses-left').innerHTML = game.guessesLeft;
        document.getElementById('losses').innerHTML = game.losses;
        document.getElementById('wins').innerHTML = game.wins;
    }
}


// Initial Setup
game.updateUI();

// Handle key press
document.addEventListener('keyup', function(event) {
    var letter = event.key;

    if (letter == game.letter) {
        game.wins++;
        game.resetGame();
    } else {
        game.guessesLeft--;

        if (game.guessesLeft == 0) {
            game.losses++;
            game.resetGame();
        } else {
            game.guessesSoFar.push(letter);
        }
    }

    game.updateUI();
})
