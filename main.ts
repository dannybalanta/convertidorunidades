input.onButtonPressed(Button.A, function () {
    pounds = masa / 0.453592
    basic.showString("w:" + Math.round(pounds) + "lb.")
    basic.pause(2000)
    feet = altura / 0.3048
    basic.showString("h:" + Math.round(feet) + "ft.")
    basic.pause(2000)
    basic.clearScreen()
})
function mostrarValores () {
    basic.showString("m: " + Math.round(masa) + "kg")
    basic.pause(2000)
    basic.showString("a: " + altura + "m")
    basic.pause(2000)
    basic.showString("$: " + pesos)
    basic.pause(2000)
    basic.showString("T:" + input.temperature() + "C")
    basic.pause(2000)
}
input.onButtonPressed(Button.B, function () {
    usd = pesos / 3829
    basic.showString("" + Math.round(usd) + "USD")
    basic.pause(2000)
    fahrenheit = 1.8 * temp + 32
    basic.showString("T:" + Math.round(fahrenheit) + "F")
    basic.pause(2000)
    basic.clearScreen()
})
let temp = 0
let fahrenheit = 0
let usd = 0
let feet = 0
let pounds = 0
let pesos = 0
let altura = 0
let masa = 0
masa = 78
altura = 1.7
pesos = 5000000
mostrarValores()
basic.forever(function () {
    basic.showString(".")
    temp = input.temperature()
})
