class specialSpaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame)
            scene.add.existing(this)
            this.points = pointValue
            this.movespeed = game.settings.specialSpaceshipSpeed
        }
    

    update(){
        this.x -= this.movespeed

        if(this.x <= 0 - this.width){
            this.x = game.config.width 
        }
    }

    reset(){
        this.x = game.config.width
    }
}