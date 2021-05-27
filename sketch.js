var tank,tankI
var sniper,sniperI
var fireball,fireballI
var smoke,smokeI
var backdrop
var backdropI

function preload(){
    tankI = loadImage("Tanker1.jpg");
    sniperI = loadImage("SniperMonkey.png");
    fireballI = loadImage("Fireball.jpg");
    smokeI = loadImage("Explosion.jpg");
    backdropI = loadImage("Backdrop.png")
}
function setup(){
createCanvas(displayWidth,displayHeight)
tank = createSprite(600,300,10,10)
tank.addImage(tankI)
tank.scale= 0.5

}
function draw(){
    background(backdropI)
    drawSprites()
}