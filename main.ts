controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    score = carnival.createProjectileBallFromSprite(assets.image`ball-blue`, myBall)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Booth, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
    info.changeScoreBy(1)
    music.pewPew.play()
})
let projectile: Sprite = null
let score: Ball = null
let myBall: Ball = null
scene.setBackgroundImage(assets.image`wildWest`)
myBall = carnival.create(assets.image`ball-yellow`, SpriteKind.Player)
myBall.setPosition(80, 90)
myBall.controlBallWithArrowKeys()
myBall.setTraceMulti(carnival.Tracers.Cross)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
myBooth.z = 20
let statusbar = statusbars.create(100, 5, StatusBarKind.Energy)
statusbar.setColor(2, 1)
statusbar.setBarBorder(2, 15)
statusbar.y = 10
myBall.variablePower(statusbar, 20, 75)
forever(function () {
    projectile = sprites.createProjectileFromSide(assets.image`target`, 32, 0)
    projectile.bottom = 56
    projectile.setKind(SpriteKind.Enemy)
    pause(randint(500, 2000))
})
