input.onGesture(Gesture.LogoDown, function () {
	
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onGesture(Gesture.LogoUp, function () {
	
})
let kompas = input.compassHeading()
basic.forever(function () {
    if (kompas > 315) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
