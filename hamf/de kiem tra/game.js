const NUM_COlS = 20;
const NUM_ROWS = 15;
const GAME_WIDTH = 400;
const GAME_HEIGHT = 300;

var game = function () {
    this.timePerFrame = 1000;
    this.snack = null ;
    this.socket = null ;
    this.canvas =null ;
    this.context = null ;
    var self = this;
    this.init = function(){
        this.canvas = document.createElement('canvas')
        this.context = this.canvas.getContext('2d')
        this.canvas.width = GAME_WIDTH;
        this.canvas.height = GAME_HEIGHT;
        document.body.appendChild(this.canvas);

this.snack = new snack(this);
this.snack.init();
this.loop();
    }
    this.loop = function () {
        console.log('loop');
        self.snack.go();
        self.snack.draw();
        setTimeout(self.loop, self.timePerFrame);
    }
    this.clearScreen = function (){
        this.context.fillStyle= '#000000';
        this.context.fillRect(0,0,GAME_WIDTH,GAME_HEIGHT)

    }
}
var g = new game;
g.init