//Name: Mandy Cai
//Title: Rocket Patrol: Modern Space Adventure
//Time: 10 hours
//Mods:
//Add your own (copyright-free) looping background music to the Play scene (keep the volume low and be sure that multiple instances of your music don't play when the game restarts) (1)
//Create a new scrolling tile sprite for the background (1)
//Allow the player to control the Rocket after it's fired (1)
//Display the time remaining (in seconds) on the screen (3)
//Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (5)
//Implement a new timing/scoring mechanism that adds time to the clock for successful hits and subtracts time for misses (5)
//Implement mouse control for player movement and left mouse click to fire (5)
//References: 
//https://nodejs.org/en/learn/asynchronous-work/the-nodejs-event-emitter



let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play]
}

let game = new Phaser.Game(config)

let keyFIRE, keyRESET, keyLEFT, keyRIGHT

//set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3
