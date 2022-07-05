# Actividad 2 Robot 4
```template
input.onSound(DetectedSound.Loud, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.stopAllSounds()
})
basic.showIcon(IconNames.Duck)
for (let index = 0; index < 2; index++) {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 598, 2203, 255, 85, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
}
```
## Paso 1

Nuestro problema se resuelve utilizando el bloque de bucle, que permite repetir una instruccion un numero de veces, fijo o dependiendo de una condicion.


## Paso 2

Arrastramos el bloque repetir de la seccion bucles, indicando el numero de veces a repetir. 
```block 
for (let index = 0; index < 4; index++) { 	}
```

## Paso 3
Colocamos el codigo dentro del bloque 'repetir' y el bloque 'repetir' dentro de 'al detectar el sonido'.
```block 
input.onSound(DetectedSound.Loud, function () {
    for (let index = 0; index < 4; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.stopAllSounds()
    }
})
```