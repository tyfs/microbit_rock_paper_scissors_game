input.onButtonPressed(Button.A, function () {
    radio.sendString("" + (el))
})
radio.onReceivedString(function (receivedString) {
    rakip_el = receivedString
    if (el == "tas") {
        if (rakip_el == "kagit") {
            basic.showIcon(IconNames.Sad)
        } else if (rakip_el == "makas") {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Heart)
        }
    } else if (el == "kagit") {
        if (rakip_el == "tas") {
            basic.showIcon(IconNames.Happy)
        } else if (rakip_el == "makas") {
            basic.showIcon(IconNames.Sad)
        } else {
            basic.showIcon(IconNames.Heart)
        }
    } else {
        if (rakip_el == "tas") {
            basic.showIcon(IconNames.Sad)
        } else if (rakip_el == "kagit") {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Heart)
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    salla += 1
    if (salla == 2) {
        salla = 0
        el = eller._pickRandom()
        if (el == "tas") {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        } else if (el == "kagit") {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        } else {
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
let eller: string[] = []
let rakip_el = ""
let el = ""
let salla = 0
basic.clearScreen()
salla = 0
radio.setGroup(1)
el = "yok"
rakip_el = "yok"
eller = ["tas", "kagit", "makas"]
