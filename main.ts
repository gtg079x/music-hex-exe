gamerbit.onEvent(GamerBitPin.P12, GamerBitEvent.Down, function () {
    t = 1
    music.playMelody("C A F - G C - C5 ", 120)
})
gamerbit.onEvent(GamerBitPin.P16, GamerBitEvent.Down, function () {
    t = 2
    music.playMelody("E B C5 A B G A F ", 120)
})
let t = 0
t = 120
control.inBackground(function () {
    while (true) {
        if (t == 1) {
            basic.showString("Song 1")
        } else if (t == 2) {
            basic.showString("Song 2")
        } else {
            basic.showString("No Song")
        }
    }
})
