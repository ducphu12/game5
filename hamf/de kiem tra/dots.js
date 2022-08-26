const DOTs_SIZE=20;
var dots = function (game,row,col) {
    this.game = game;
    this.row = row;
    this.col = col;
    this.init = function (){
    }
    this.draw = function (){
     this.game.context.fillStyle= '#ff0000';
        this.game.context.fillRect(col*DOTs_SIZE,row*DOTs_SIZE,DOTs_SIZE,DOTs_SIZE);
    }
}