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

    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-paw');
        const computerHand = document.querySelector('.computer-paw');
        const hands = document.querySelectorAll('.hands div');
        const winner = document.querySelector('.message');

        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = "";
            });
        });

        //Computer Options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach((option) => {
            option.addEventListener('click', function () {
                //Shaking message
                winner.textContent = 'shaking...';
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    //Here is where we call campare hands
                    compareHands(this.textContent, computerChoice);

                    //Update Images
                    if (this.textContent === 'scissors') {
                        openPlayerHands();
                        showPlayerClaws();
                    } else if (this.textContent === 'rock') {
                        closePlayerFingers();
                    } else {
                        openPlayerHands();
                    };

                    if (computerChoice === 'scissors') {
                        openComputerHands();
                        showComputerClaws();
                    } else if (this.textContent === 'rock') {
                        closeComputerFingers();
                    } else {
                        openComputerHands();
                    };


                }, 1000);

                //Animation
                playerHand.style.animation = "shake-player 1s";
                computerHand.style.animation = "shake-computer 1s";
                returnHandsPosition();
            });
        });
    };


    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };


    const openPlayerHands = () => {
        const fingers = document.querySelectorAll('.finger-player');
        const fingersShadows = document.querySelectorAll('#shadows path');

        fingers[0].classList.add("finger-player-open-1");
        fingers[1].classList.add("finger-player-open-2");
        fingers[2].classList.add("finger-player-open-3");
        fingers[3].classList.add("finger-player-open-4");

        fingersShadows[0].classList.add("shadow-player-3");
        fingersShadows[1].classList.add("shadow-player-2");
        fingersShadows[2].classList.add("shadow-player-1");
    };


    const openComputerHands = () => {
        const fingers = document.querySelectorAll('.finger-computer');
        const fingersShadows = document.querySelectorAll('#shadows-computer path');

        fingers[0].classList.add("finger-computer-open-1");
        fingers[1].classList.add("finger-computer-open-2");
        fingers[2].classList.add("finger-computer-open-3");
        fingers[3].classList.add("finger-computer-open-4");

        fingersShadows[0].classList.add("shadow-computer-3");
        fingersShadows[1].classList.add("shadow-computer-2");
        fingersShadows[2].classList.add("shadow-computer-1");
    };


    const showPlayerClaws = () => {
        const claws = document.querySelectorAll('#finger-claw-player');

        claws.forEach(claw => {
            //claw.style.animation = "claws-animation";
            claw.classList.remove("claw-in-player");
            claw.classList.add("claw-out-player");
        });
    };

    const showComputerClaws = () => {
        const claws = document.querySelectorAll('#finger-claw-computer');

        claws.forEach(claw => {
            //claw.style.animation = "claws-animation";
            claw.classList.remove("claw-in-computer");
            claw.classList.add("claw-out-computer");
        });
    };

    const closePlayerFingers = () => {
        const fingersDown = document.querySelectorAll('#finger-down-player');

        fingersDown.forEach(fingerDown => {
            fingerDown.classList.remove("finger-up-player");
            fingerDown.classList.add("finger-down-player");
        });
    };

    const closeComputerFingers = () => {
        const fingersDown = document.querySelectorAll('#finger-down-computer');

        fingersDown.forEach(fingerDown => {
            fingerDown.classList.remove("finger-up-computer");
            fingerDown.classList.add("finger-down-computer");
        });
    };

    const returnHandsPosition = () => {
            const fingersPlayer = document.querySelectorAll('.finger-player');
            const fingersShadowsPlayer = document.querySelectorAll('#shadows path');
            const fingersComputer = document.querySelectorAll('.finger-computer');
            const fingersShadowsComputer = document.querySelectorAll('#shadows-computer path');
            const clawsPlayer = document.querySelectorAll('#finger-claw-player');
            const clawsComputer = document.querySelectorAll('#finger-claw-computer');
            const fingersDownPlayer = document.querySelectorAll('#finger-down-player');
            const fingersDownComputer = document.querySelectorAll('#finger-down-computer');
    
            fingersPlayer[0].classList.remove("finger-player-open-1");
            fingersPlayer[1].classList.remove("finger-player-open-2");
            fingersPlayer[2].classList.remove("finger-player-open-3");
            fingersPlayer[3].classList.remove("finger-player-open-4");
            fingersShadowsPlayer[0].classList.remove("shadow-player-3");
            fingersShadowsPlayer[1].classList.remove("shadow-player-2");
            fingersShadowsPlayer[2].classList.remove("shadow-player-1");
            fingersComputer[0].classList.remove("finger-computer-open-1");
            fingersComputer[1].classList.remove("finger-computer-open-2");
            fingersComputer[2].classList.remove("finger-computer-open-3");
            fingersComputer[3].classList.remove("finger-computer-open-4");
            fingersShadowsComputer[0].classList.remove("shadow-computer-3");
            fingersShadowsComputer[1].classList.remove("shadow-computer-2");
            fingersShadowsComputer[2].classList.remove("shadow-computer-1");

            clawsPlayer.forEach(claw => {
                //claw.style.animation = "claws-animation";
                claw.classList.add("claw-in-player");
                claw.classList.remove("claw-out-player");
            });
    
            clawsComputer.forEach(claw => {
                //claw.style.animation = "claws-animation";
                claw.classList.add("claw-in-computer");
                claw.classList.remove("claw-out-computer");
            });

    
            fingersDownPlayer.forEach(fingerDown => {
                fingerDown.classList.add("finger-up-player");
                fingerDown.classList.remove("finger-down-player");
            });

    
            fingersDownComputer.forEach(fingerDown => {
                fingerDown.classList.add("finger-up-computer");
                fingerDown.classList.remove("finger-down-computer");
            });

    };


    const compareHands = (playerChoice, computerChoice) => {
        //Update Text
        const winner = document.querySelector('.message');
        //Checking for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie';
            return;
        }
        //Checking for Rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            };
        };
        //Checking for Paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            };
        };

        //Checking for Scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
            };
        };
    };


    //Is call all the inner function
    startGame();
    playMatch();
};

game();