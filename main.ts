sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.moveToRandomHoleOnGrid(myMole)
    music.baDing.play()
    animation.runImageAnimation(
    myHammer,
    assets.animation`hammerAnimation`,
    50,
    false
    )
})
let myHammer: Sprite = null
let myMole: Sprite = null
scene.setBackgroundImage(assets.image`grid`)
myMole = sprites.create(assets.image`mole`, SpriteKind.Enemy)
myHammer = sprites.create(assets.image`hammer`, SpriteKind.Player)
controller.moveOnlyOnscreenWithArrows(myHammer, controller.Speeds.Fast)
carnival.startCountdownGame(15, carnival.WinTypes.Score)
carnival.addLabelTo("Maulwurfspiel", carnival.Areas.Bottom)
game.onUpdateInterval(1000, function () {
    sprites.moveToRandomHoleOnGrid(myMole)
})
