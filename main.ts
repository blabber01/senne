input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            `)
        basic.clearScreen()
        basic.pause(500)
    }
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . # . #
            # . # . #
            # . # . #
            # . # . #
            # . # . #
            `)
    }
    basic.showLeds(`
        . # . # .
        . # . # .
        . # . # .
        . # . # .
        . # . # .
        `)
    basic.pause(100)
})
