input.onButtonPressed(Button.A, function () {
    knuffel += 5
})
input.onButtonPressed(Button.B, function () {
    voeding += 5
})
let knuffel = 20
let voeding = 20
let dood = 0
basic.forever(function () {
    if (knuffel > 10 && voeding > 10) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (!(knuffel > 10 || !(voeding > 10))) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
    if (dood < 1) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . . . . .
            # # # # #
            `)
    }
})
basic.forever(function () {
	
})
