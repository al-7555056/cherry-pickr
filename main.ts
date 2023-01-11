sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    loquecae.destroy()
    info.changeScoreBy(1)
})
let loquecae: Sprite = null
game.splash("Recoje cerezas")
tiles.setCurrentTilemap(tilemap`restap`)
let jugador = sprites.create(assets.image`Jugador`, SpriteKind.Player)
controller.moveSprite(jugador, 150, 150)
scene.cameraFollowSprite(jugador)
info.startCountdown(60)
info.setScore(0)
game.onUpdateInterval(5000, function () {
    loquecae = sprites.create(assets.image`lqc`, SpriteKind.Food)
    loquecae.setPosition(randint(0, 160), randint(0, 120))
})
