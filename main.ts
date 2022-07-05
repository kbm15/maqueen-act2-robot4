input.onSound(DetectedSound.Loud, function () {
    for (let index = 0; index <= 4; index++) {
        basic.showNumber(index + 1)
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.stopAllSounds()
    }
})
basic.showIcon(IconNames.Duck)
for (let index = 0; index < 2; index++) {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 598, 2203, 255, 85, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
}
basic.forever(function () {
	
})
