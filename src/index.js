// imports at the top
const prompt = require('prompt-sync')();

// small, helper functions
let regulator = true;
const sayGoodbye = (name) => {
    console.log(`\nGoodbye, ${name}`);
    regulator = false
}

const getRandomIntInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const checkAnswer = (random, user, name) => {
    random === user ? console.log(`You won ${name}! 🐐`) : console.log(`You lost!`);
}

const wordOfWisdom = [
    '\nYou should go to bed by 12:30',
    "\nIt's better to mostly understand a little more every day, than to never move forward until you understand everything",
    '\nEating breakfast has statistical benefits to brain power',
    "\nThe best laid plans often fail, but plans that don't exist can never succeed",
    '\nTime management and communication are the two most important skills in the workplace',
    '\nTry to listen more than you speak',
]

const cheers = [
    '\nYou can do it!',
    '\nYou are the best!',
    '\nYou are a coding machine!',
    '\nYOU ARE UNREALLLLLLLLL!',
    '\nLITERALLY UNSTOPPABLE!',
    "\nCan't even handle your greatness right now!",
];

const playAgain = () => {
    const answer = prompt("Play again? Type yes or no: ").trim().toLowerCase();
    return answer
}
// more complex event handler functions
const welcomeAndGetName = () => {
    console.log('Welcome!')
    const name = prompt("What's your name? ");
    console.log(`\nHello ${name.trim()}, nice to meet you!`)
    return name.trim();
}

const showOptions = () => {
    console.log(`Here are your options, input the number you'd like to use:\n 1 - play a guessing game\n 2 - words of wisdom\n 3 - cheer you on\n 4 - For Jowel Only\n 5 - exit the program`);
}

const getUserChoice = () => {
    const userChoice = Number(prompt(`You chose: `).trim());
    return userChoice;
}

//                                                                          option 1
const handleGuessingGame = (name) => {
    const randomNumberAnswer = getRandomIntInRange(1, 10);
    const userGuess = Number(prompt(`Pick a number between 1 and 10, if you're right you win!, if you're wrong, you know the answer to that 🤭: `).trim());
    checkAnswer(randomNumberAnswer, userGuess, name)
}

//                                                                          option 2
const getWordsOfWisdom = () => console.log(wordOfWisdom[getRandomIntInRange(0, wordOfWisdom.length)]);

//                                                                          option 3
const getCheer = () => console.log(cheers[getRandomIntInRange(0, cheers.length)]);

//                                                                          option 4
const jowelHandler = () => {
    console.log(`\nThe Knicks are so bad`)
};

// Primary runner function
const main = () => {
    const name = welcomeAndGetName();
    let playAgainChoice;

    do {
        showOptions();
        const userChoice = getUserChoice();
        
        // Game
        if (userChoice === 1) {
            handleGuessingGame(name);
        }
        else if (userChoice === 2) {
            getWordsOfWisdom();
        }
        else if (userChoice === 3) {
            getCheer();
        }
        else if (userChoice === 4) {
            jowelHandler();
            playAgainChoice = playAgain();
            playAgainChoice === 'yes' ? showOptions() : sayGoodbye(name);
        }
        else if (userChoice === 5) {
            sayGoodbye(name);
        }
        // else {
        //     //rerun
        //     console.log('\nPlease choose one of the 5 options');
        // }
    } while (regulator)
}

main()
