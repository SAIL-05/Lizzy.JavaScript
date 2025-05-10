const secretNumber = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;
const maxAttempts = 4;

while (attempts < maxAttempts) {
    guess = parseInt(prompt(`Attempt ${attempts + 1} of ${maxAttempts}: Guess the number (1-100):`));

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert(" Invalid input! Please enter a number between 1 and 100.");
        continue; 
    }

    attempts++;

    if (guess === secretNumber) {
        alert(` Congratulations! You guessed the correct number: ${secretNumber} in ${attempts} tries.`);
        break;
    } else if (guess > secretNumber) {
        alert(` Your guess ${guess} is too high!`);
    } else {
        alert(` Your guess ${guess} is too low!`);
    }

    if (attempts === maxAttempts) {
        alert(` You've used all your ${maxAttempts} attempts. The correct number was ${secretNumber}.`);
    }
}
