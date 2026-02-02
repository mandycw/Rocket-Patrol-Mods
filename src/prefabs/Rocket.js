class Rocket extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame)
        scene.add.existing(this)
        this.isFiring = false
        this.moveSpeed = 2
        this.sfxShot = scene.sound.add('sfx-shot')
    }

    update(){
        //left/right movement
        if(!this.isFiring || this.isFiring){
            let mouseFollow = this.scene.input.activePointer.x
            mouseFollow = Phaser.Math.Clamp(mouseFollow, borderUISize + this.width, game.config.width - borderUISize - this.width)
            this.x = mouseFollow
        }

        //fire
        if(Phaser.Input.Keyboard.JustDown(keyFIRE) && !this.isFiring){
            this.isFiring = true
            this.sfxShot.play()
        }

        //if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding){
            this.y -= this.moveSpeed
        }

        //reset on miss
        if(this.y <= borderUISize * 3 + borderPadding){
            this.isFiring = false
            this.y = game.config.height - borderUISize - borderPadding
            this.scene.events.emit('miss');
        }
    }

    reset(){
        this.isFiring = false
        this.y = game.config.height - borderUISize - borderPadding
    }
}