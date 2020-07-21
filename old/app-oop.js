class RockPaperScissor {
    constructor(options, playerHand, computerHand, hands, winner) {
        this.options = options
        this.playerHand = playerHand
        this.compareHand = computerHand
        this.hands = hands
        this.winner = winner
    }
    //Play Match
    playMatch() {
        this.hands.forEach(hand => {
            this.hand.addEventListener("animationend", function () {
                this.style.animation = ""
            })
        })
        //Computer Options
        const computerOptions = ['rock', 'paper', 'scissors']

        this.options.forEach((option) => {
            this.option.addEventListener('click', function () {
                //Shaking message
                this.winner.textContent = 'shaking...'
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3)
                const computerChoice = computerOptions[computerNumber]

                setTimeout(() => {
                    //Here is where we call campare hands
                    this.compareHands(this.textContent, computerChoice)

                    //Update Images
                    if (this.textContent === 'scissors') {
                        openPlayerHands()
                        showPlayerClaws()
                    } else if (this.textContent === 'rock') {
                        closePlayerFingers()
                    } else {
                        openPlayerHands()
                    }

                    if (computerChoice === 'scissors') {
                        openComputerHands()
                        showComputerClaws()
                    } else if (this.textContent === 'rock') {
                        closeComputerFingers()
                    } else {
                        openComputerHands()
                    }


                }, 1000)

                //Animation
                this.playerHand.style.animation = "shake-player 1s"
                this.computerHand.style.animation = "shake-computer 1s"
                returnHandsPosition()
            })
        })
    }



    compareHands = (playerChoice, computerChoice) => {
        //Update Text
        const winner = document.querySelector('.message')
        //Checking for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie'
            return
        }
        //Checking for Rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player Wins'
                pScore++
                updateScore()
                return
            } else {
                winner.textContent = 'Computer Wins'
                cScore++
                updateScore()
                return
            }
        }
        //Checking for Paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Computer Wins'
                cScore++
                updateScore()
                return
            } else {
                winner.textContent = 'Player Wins'
                pScore++
                updateScore()
                return
            }
        }

        //Checking for Scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Computer Wins'
                cScore++
                updateScore()
                return
            } else {
                winner.textContent = 'Player Wins'
                pScore++
                updateScore()
            }
        }
    }

    updateScore() {
        const playerScore = document.querySelector('.player-score p')
        const computerScore = document.querySelector('.computer-score p')
        playerScore.textContent = pScore
        computerScore.textContent = cScore
    }



}





const options = document.querySelectorAll('.options button')
const playerHand = document.querySelector('.player-paw')
const computerHand = document.querySelector('.computer-paw')
const hands = document.querySelectorAll('.hands div')
const winner = document.querySelector('.message')


const rockpaperscissor = new RockPaperScissor(options, playerHand, computerHand, hands, winner)




