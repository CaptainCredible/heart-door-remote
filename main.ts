input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `,0)
for (let index = 0; index < 4; index++) {
        radio.sendValue("open", 0)
        basic.pause(50)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `,0)
for (let index = 0; index < 4; index++) {
        radio.sendValue("close", 0)
        basic.pause(50)
    }
})
radio.setGroup(101)
