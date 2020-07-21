const game = () => {
    let pScore = 0;
    let cScore = 0;

    //Start the Game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        const score = document.querySelector('.score');
        const hands = document.querySelector('.hands');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
            score.classList.add("fadeIn");
            hands.classList.add("fadeIn");
        });
    };


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
    
    const paw = document.querySelector('.player-paw')
    const fingers = document.querySelectorAll('.finger-player')
    const fingerShadows = document.querySelectorAll('#shadows path')
    const claws = document.querySelectorAll('#finger-claw-player')
    const fingersDown = document.querySelectorAll('#finger-down-player')
    
    const playerHand = new Hand(paw,fingers, fingerShadows,claws, fingersDown)

    const computerPaw = document.querySelector('.computer-paw')
    const computerFingers = document.querySelectorAll('.finger-computer')
    const computerFingerShadows = document.querySelectorAll('#shadows-computer path')
    const computerClaws = document.querySelectorAll('#finger-claw-computer')
    const computerFingersDown = document.querySelectorAll('#finger-down-computer')
    
    const computerHand = new Hand(computerPaw, computerFingers, computerFingerShadows, computerClaws, computerFingersDown)






    //Play Match
    const playMatch = (playerHand, computerHand) => {
        const options = document.querySelectorAll('.options button');
        const hands = document.querySelectorAll('.hands div');
        const winner = document.querySelector('.message');
        const computerOptions = ['rock', 'paper', 'scissors'];

        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = "";
            });
        });

        options.forEach((option) => {
            option.addEventListener('click', function () {
                //Shaking message
                winner.textContent = 'shaking...';
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    //Here is where we call campare hands
                    compareHands(option.textContent, computerChoice);

                    //Update Images
                    if (option.textContent === 'scissors') {
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


    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };






    //Is call all the inner function
    startGame();
    playMatch(playerHand, computerHand);
};

game();