let ir_waarde = 0
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
let vooruit = 94
let achteruit = 95
let rechts = 92
let Links = 93
let stop = 78
basic.forever(function () {
    ir_waarde = IR.IR_read()
})
basic.forever(function () {
    if (ir_waarde == vooruit) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (ir_waarde == achteruit) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (ir_waarde == rechts) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 56)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 53)
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    }
    if (ir_waarde == Links) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 56)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 53)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (ir_waarde == stop) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        maqueen.motorStop(maqueen.Motors.All)
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
})
