class Hand {
    constructor(paw, fingers, fingerShadows, claws, fingersDown) {
        this.paw = paw
        this.fingers = fingers
        this.fingerShadows = fingerShadows
        this.claws = claws
        this.fingersDown = fingersDown
    }

    shakeHand(animation) {
        this.paw.style.animation = animation
    }

    openHands() {
        this.fingers[0].classList.add("finger-open-1")
        this.fingers[1].classList.add("finger-open-2")
        this.fingers[2].classList.add("finger-open-3")
        this.fingers[3].classList.add("finger-open-4")
        this.fingerShadows[0].classList.add("shadow-3")
        this.fingerShadows[1].classList.add("shadow-2")
        this.fingerShadows[2].classList.add("shadow-1")
    }

    showClaws() {
        this.claws.forEach(claw => {
            //claw.style.animation = "claws-animation"
            claw.classList.remove("claw-in")
            claw.classList.add("claw-out")
        })
    }

    closeFingers() {
        this.fingersDown.forEach(fingerDown => {
            fingerDown.classList.remove("finger-up")
            fingerDown.classList.add("finger-down")
        })
    }

    returnHandsPosition() {
        this.fingers[0].classList.remove("finger-open-1")
        this.fingers[1].classList.remove("finger-open-2")
        this.fingers[2].classList.remove("finger-open-3")
        this.fingers[3].classList.remove("finger-open-4")
        this.fingerShadows[0].classList.remove("shadow-3")
        this.fingerShadows[1].classList.remove("shadow-2")
        this.fingerShadows[2].classList.remove("shadow-1")

        this.claws.forEach(claw => {
            //claw.style.animation = "claws-animation"
            claw.classList.add("claw-in")
            claw.classList.remove("claw-out")
        })

        this.fingersDown.forEach(fingerDown => {
            fingerDown.classList.add("finger-up")
            fingerDown.classList.remove("finger-down")
        })
    }
}

class Game {
    constructor(playerHand, computerHand) {
        this.playBtn = document.querySelector('.intro button')
        this.introScreen = document.querySelector('.intro')
        this.match = document.querySelector('.match')
        this.score = document.querySelector('.score')
        this.hands = document.querySelector('.hands')
        this.computerHand = computerHand
        this.playerHand = playerHand
        this.options = document.querySelectorAll('.options button')
        this.handsDiv = document.querySelectorAll('.hands div')
        this.winner = document.querySelector('.message')
        this.pScore = 0
        this.cScore = 0
    }


    play() {
        this.startGame();
        this.playMatch(playerHand, computerHand);
    }

    startGame() {
        this.playBtn.addEventListener('click', () => {
            this.introScreen.classList.add("fadeOut");
            this.match.classList.add("fadeIn");
            this.score.classList.add("fadeIn");
            this.hands.classList.add("fadeIn");
        });
    }

    playMatch(playerHand, computerHand) {
        const computerOptions = ['rock', 'paper', 'scissors']
        const self = this;


        this.handsDiv.forEach(handsDiv => {
            handsDiv.addEventListener("animationend", function () {
                this.style.animation = "";
            });
        });

        this.options.forEach((option) => {
            option.addEventListener('click', function () {
                self.winner.textContent = 'shaking...';
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                const playerChoice = option.textContent;

                setTimeout(() => {
                    self.compareHands(playerChoice, computerChoice);
                    if (playerChoice === 'scissors') {
                        playerHand.openHands();
                        playerHand.showClaws();
                    } else if (option.textContent === 'rock') {
                        playerHand.closeFingers();
                    } else {
                        playerHand.openHands();
                    };

                    if (computerChoice === 'scissors') {
                        computerHand.openHands();
                        computerHand.showClaws();
                    } else if (computerChoice === 'rock') {
                        computerHand.closeFingers();
                    } else {
                        computerHand.openHands();
                    };

                }, 1000);

                //Animation
                playerHand.shakeHand("shakePlayer 1s");
                computerHand.shakeHand("shakeComputer 1s");
                playerHand.returnHandsPosition();
                computerHand.returnHandsPosition();
            });
        });
    };

    compareHands(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            this.winner.textContent = 'It is a tie';
            return;
        }
        //Checking for Rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                this.winner.textContent = 'Player Wins';
                this.pScore++;
                this.updateScore();
                return;
            } else {
                this.winner.textContent = 'Computer Wins';
                this.cScore++;
                this.updateScore();
                return;
            };
        };
        //Checking for Paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                this.winner.textContent = 'Computer Wins';
                this.cScore++;
                this.updateScore();
                return;
            } else {
                this.winner.textContent = 'Player Wins';
                this.pScore++;
                this.updateScore();
                return;
            };
        };

        //Checking for Scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                this.winner.textContent = 'Computer Wins';
                this.cScore++;
                this.updateScore();
                return;
            } else {
                this.winner.textContent = 'Player Wins';
                this.pScore++;
                this.updateScore();
            };
        };
    };

    updateScore() {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = this.pScore;
        computerScore.textContent = this.cScore;
    }

}



const paw = document.querySelector('.player-paw')
const fingers = document.querySelectorAll('.finger-player')
const fingerShadows = document.querySelectorAll('#shadows path')
const claws = document.querySelectorAll('#finger-claw-player')
const fingersDown = document.querySelectorAll('#finger-down-player')
const computerPaw = document.querySelector('.computer-paw')
const computerFingers = document.querySelectorAll('.finger-computer')
const computerFingerShadows = document.querySelectorAll('#shadows-computer path')
const computerClaws = document.querySelectorAll('#finger-claw-computer')
const computerFingersDown = document.querySelectorAll('#finger-down-computer')

const playerHand = new Hand(paw, fingers, fingerShadows, claws, fingersDown)
const computerHand = new Hand(computerPaw, computerFingers, computerFingerShadows, computerClaws, computerFingersDown)

const newGame = new Game(computerHand, playerHand);

newGame.play();