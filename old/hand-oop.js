
class Hand {
    constructor(fingers, fingerShadows, claws, fingersDown) {
        this.fingers = fingers
        this.fingerShadows = fingerShadows
        this.claws = claws
        this.fingersDown = fingersDown
    }

    openHands() {
        this.fingers[0].classList.add("finger-player-open-1")
        this.fingers[1].classList.add("finger-player-open-2")
        this.fingers[2].classList.add("finger-player-open-3")
        this.fingers[3].classList.add("finger-player-open-4")
        this.fingersShadows[0].classList.add("shadow-player-3")
        this.fingersShadows[1].classList.add("shadow-player-2")
        this.fingersShadows[2].classList.add("shadow-player-1")
    }

    showClaws() {
        this.claws.forEach(claw => {
            //claw.style.animation = "claws-animation"
            claw.classList.remove("claw-in-player")
            claw.classList.add("claw-out-player")
        })
    }

    closeFingers() {
        this.fingersDown.forEach(fingerDown => {
            fingerDown.classList.remove("finger-up-player")
            fingerDown.classList.add("finger-down-player")
        })
    }

    returnHandsPosition() {
            this.fingers[0].classList.remove("finger-player-open-1")
            this.fingers[1].classList.remove("finger-player-open-2")
            this.fingers[2].classList.remove("finger-player-open-3")
            this.fingers[3].classList.remove("finger-player-open-4")
            this.fingersShadows[0].classList.remove("shadow-player-3")
            this.fingersShadows[1].classList.remove("shadow-player-2")
            this.fingersShadows[2].classList.remove("shadow-player-1")

            this.claws.forEach(claw => {
                //claw.style.animation = "claws-animation"
                claw.classList.add("claw-in-player")
                claw.classList.remove("claw-out-player")
            })
    
            this.fingersDown.forEach(fingerDown => {
                fingerDown.classList.add("finger-up-player")
                fingerDown.classList.remove("finger-down-player")
            })
    }
}

const fingers = document.querySelectorAll('.finger-player')
const fingersShadows = document.querySelectorAll('#shadows path')
const claws = document.querySelectorAll('#finger-claw-player')
const fingersDown = document.querySelectorAll('#finger-down-player')

