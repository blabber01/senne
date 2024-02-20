basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Left) || Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Right)) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    } else {
        if (!(Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Right))) {
            basic.showLeds(`
                . # # . .
                # . . # .
                # . . # .
                # . . # .
                . # # . .
                `)
        }
        if (!(Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Left))) {
            basic.showLeds(`
                . # # . .
                # . . # .
                # . . # .
                # . . # .
                . # # . .
                `)
        }
    }
})
