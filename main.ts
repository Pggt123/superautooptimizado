radio.onReceivedString(function (receivedString) {
    if (receivedString == "adelante") {
        movimiento = 1
    } else if (receivedString == "atras") {
        movimiento = 2
    } else if (receivedString == "izquierda") {
        movimiento = 3
    } else if (receivedString == "derecha") {
        movimiento = 4
    } else if (receivedString == "parar") {
        movimiento = 0
    } else {
    	
    }
})
let movimiento = 0
movimiento = 0
radio.setGroup(47)
basic.forever(function () {
    if (movimiento == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        movimiento = 0
    } else if (movimiento == 2) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        movimiento = 0
    } else if (movimiento == 3) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        movimiento = 0
    } else if (movimiento == 4) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        movimiento = 0
    } else if (movimiento == 5) {
        movimiento = 0
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    } else if (movimiento == 0) {
        maqueen.motorStop(maqueen.Motors.All)
    } else {
    	
    }
})
