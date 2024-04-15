let ir_waarde = 0
let vooruit = 94
let achteruit = 95
let rechts = 92
let Links = 93
basic.forever(function () {
    let stop = 0
    if (ir_waarde == vooruit) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
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
    }
    if (ir_waarde == rechts) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 27)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 27)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
    }
    if (ir_waarde == Links) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 27)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 27)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
    }
    if (ir_waarde == stop) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    }
})
basic.forever(function () {
    ir_waarde = IR.IR_read()
})
