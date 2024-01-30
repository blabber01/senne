input.onButtonPressed(Button.B, function () {
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.GetReady)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.pause(100)
    Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Go)
    basic.pause(5000)
    basic.showIcon(IconNames.No)
    Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
})
Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
basic.showIcon(IconNames.No)
basic.forever(function () {
	
})
