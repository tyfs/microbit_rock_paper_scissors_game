input.onButtonPressed(Button.A, function () {
    radio.sendString("" + (my_hand))
})
radio.onReceivedString(function (receivedString) {
    opponent_hand = receivedString
    if (my_hand == "rock") {
        if (opponent_hand == "paper") {
            basic.showIcon(IconNames.Sad)
        } else if (opponent_hand == "scissors") {
            basic.showIcon(IconNames.Happy)
        } else if (opponent_hand == "rock") {
            basic.showIcon(IconNames.Heart)
        }
    } else if (my_hand == "paper") {
        if (opponent_hand == "rock") {
            basic.showIcon(IconNames.Happy)
        } else if (opponent_hand == "scissors") {
            basic.showIcon(IconNames.Sad)
        } else if (opponent_hand == "paper") {
            basic.showIcon(IconNames.Heart)
        }
    } else {
        if (opponent_hand == "rock") {
            basic.showIcon(IconNames.Sad)
        } else if (opponent_hand == "paper") {
            basic.showIcon(IconNames.Happy)
        } else if (opponent_hand == "scissors") {
            basic.showIcon(IconNames.Heart)
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    shake_count += 1
    if (shake_count == 3) {
        shake_count = 0
        my_hand = hands._pickRandom()
        if (my_hand == "rock") {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        } else if (my_hand == "paper") {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        } else if (my_hand == "scissors") {
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
        }
    }
})
let hands: string[] = []
let opponent_hand = ""
let my_hand = ""
let shake_count = 0
basic.clearScreen()
shake_count = 0
radio.setGroup(1)
my_hand = ""
opponent_hand = ""
hands = ["rock", "paper", "scissors"]
