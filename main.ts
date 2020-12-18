input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
let t = 120
basic.forever(function () {
    music.playMelody("E B C5 A B G A F ", t)
    t = t + 10
})
