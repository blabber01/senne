basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Left) && Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Right) && Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Down) && Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Up)) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    } else {
        if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Right) || Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Left)) {
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
