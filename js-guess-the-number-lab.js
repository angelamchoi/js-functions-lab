// 1. Add a prevGuesses property to the game object initialized to an empty array.

// 2. Add a getGuess method to game that prompts the player to enter a guess with a message formatted as: Enter a guess between [smallestNum] and [biggestNum]:. Hint - use a template literal for the prompt message.

// 3. Ensure that the getGuess method returns a value that:

// Is a number, not a string.
// Is between smallestNum and biggestNum, inclusive.
// Hints:
// This is a great use case for a while loop.
// parseInt returns NaN if the string cannot be parsed into a number.

// 4. From within the play method, invoke the getGuess method and add the new guess to the prevGuesses array.

// 5. Add a render method to game that play will call after a guess has been made that alerts:

// If the secret has been guessed:
//  Congrats! You guessed the number in [x] guesses!
// Otherwise:
//  Your guess is too [high|low]
//  Previous guesses: x, x, x, x
// Hints:
// render won't be able to access any of play's local variables, e.g., guess, so be sure pass render any arguments as needed.
// Template literals not only have interpolation, they honor whitespace - including line breaks!
// The list of previous guesses can be generated using the array join method.

// 6. The play method should end (return) when the guess matches secretNum.

// Bonus
// When play is run, immediately prompt the player to enter the smallest and biggest numbers instead of having them pre-set.


const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
      let guess = NaN;
      while(guess !== this.secretNum) {
        guess = this.getGuess();
        this.prevGuesses.push(guess);
        this.render(guess);
        if (guess === this.secretNum) return;
      }
    },
    getGuess: function() {
      let guess = NaN;
      while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum) {
        guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}: `));
      }
      return guess;
    },
    render: function(guess) {
      let msg = (guess === this.secretNum) ?
        `Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`
      :
        `
        Your guess is too ${guess > this.secretNum ? 'high' : 'low'}
        Previous guesses: ${this.prevGuesses.join(', ')}
        `
      ;
      alert(msg);
    }
  };
  
  game.play();


