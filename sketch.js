var gameState= 0;
var playerCount = 0;
var database
var form, game, player;

function setup(){
database= firebase.database();
createCanvas(500,500);
game= new Game();
game.gameState();
game.start();
if(playerCount===4){
game.update(1);
}
}
function draw(){
background(255);

}