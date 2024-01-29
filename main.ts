let getal = 0
basic.forever(function () {
    if (getal < 36912) {
        basic.showNumber(getal)
    } else {
        getal += 3
        basic.pause(1000)
    }
})
