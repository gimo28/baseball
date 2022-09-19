input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    balls += 1
    basic.showNumber(balls)
})
input.onGesture(Gesture.LogoUp, function () {
    balls = 0
    count = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showNumber(balls)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showNumber(strike)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    strike += 1
    basic.showNumber(strike)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(0)
})
let strike = 0
let balls = 0
let count = 0
basic.showNumber(0)
count = 0
basic.forever(function () {
	
})
