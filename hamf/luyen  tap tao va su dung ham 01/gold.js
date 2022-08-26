var canvas = document.getElementsByTagName('canvas')[0];
canvas.width = 990;
canvas.height = 550;
var ctx = canvas.getContext('2d');
var timer_update;
var game_end = false;
var game_pause = false;
var players = [];
var gold_arr = [];
var stone_arr = [];
var mystery_arr = [];
var bomb_arr = [];
var flypig_arr = [];
var diamond_arr = [];
var clock_arr = [];
var price = [];
var goal = 200;
var level = 1;
var mode;
var in_shop = false;
var time_limit;
var time_all = 60;
var total_money = 0;
var pause_num = 0;
var pause_time = 0;
var timer_pause_animation;
var x_explode;
var y_explode;
var explodeRatius;
var isExploding = false;
var money_size = 20;
var money_status = 0;
var money_value = 0;
var money_pos_x = 700;
var money_pos_y = 30;
var catching_object = 0;
var catching_object1 = 0;
var isBombing_arr = [];
var name = document.getElementById('name');
var mapCanvas = document.getElementById('mapCanvas');
var gameLines = document.getElementById('gameLines');
var gameBoard = document.getElementById('gameBoard');
var gameStart = document.getElementById('gameStart');
var gameHelp = document.getElementById('gameHelp');
var gameAbout = document.getElementById('gameAbout');
var gameQuit = document.getElementById('gameQuit');
var gameMode = document.getElementById('gameMode');
var singleMode = document.getElementById('singleMode');
var pairMode = document.getElementById('pairMode');
var nextLevel = document.getElementById('nextLevel');
var enhanceStrength = document.getElementById("enhanceStrength");
var fourLeaf = document.getElementById('fourLeaf');
var addStoneValue = document.getElementById('addStoneValue');
var addDiamondValue = document.getElementById('addDiamondValue');
var bom = document.getElementById('bom');
var bomPrice = document.getElementById('bomPrice');
var enhancePrice = document.getElementById("enhancePrice");
var leafPrice = document.getElementById('leafPrice');
var stonePrice = document.getElementById('stonePrice');
var diamondPrice = document.getElementById('diamondPrice');
var gameLoseBoard = document.getElementById('gameLoseBoard');
var gameLose = document.getElementById('gameLose');
var score = document.getElementById('score');
var restart = document.getElementById('restart');
var key_W = document.getElementById('key_W');
var key_S = document.getElementById('key_S');
var key_up = document.getElementById('key_up');
var key_down = document.getElementById('key_down');
var exit_level = document.getElementById('exit_level');
var pause = document.getElementById('pause');
var pause_animation = document.getElementById('pause_animation');
var money = document.getElementById('money');
var shopName = document.getElementById('shopName');
var bg = document.getElementById('bg');

var BGM = document.getElementById('BGM');
var intro = document.getElementById('intro');
var deathAudio = document.getElementById('death');
var explodeAudio = document.getElementById('explode');
var cursor = document.getElementById('cursor');

function init() {   //初始化函数
                    // gameBoard.style.left = ((window.innerWidth - 720) / 2).toString() + 'px';
                    // gameBoard.style.top = ((window.innerHeight - 510) / 2).toString() + 'px';
    intro.play();
    time_all = 60;
    players.splice(0, players.length);
    key_W.style.display = "none";
    key_S.style.display = "none";
    key_up.style.display = "none";
    key_down.style.display = "none";
    //key_W.style.left = 180;
    gameLoseBoard.style.display = "none";
    gameLose.style.display = "none";
    score.style.display = "none";
    restart.style.display = "none";
    nextLevel.style.display = 'none';
    enhanceStrength.style.display = 'none';
    fourLeaf.style.display = 'none';
    addStoneValue.style.display = 'none';
    addDiamondValue.style.display = 'none';
    bom.style.display = 'none';
    bomPrice.style.display = 'none';
    enhancePrice.style.display = 'none';
    leafPrice.style.display = 'none'
    stonePrice.style.display = 'none';
    diamondPrice.style.display = 'none';
    canvas.style.display = "none";
    exit_level.style.display = "none";
    pause.style.display = "none";
    pause_animation.style.display = "none";
    money.style.display = "none";
    shopName.style.display = "none";
    // key_W.style.left = canvas.width / 2;
    bg.style.backgroundImage = "url(https://scr.vn/wp-content/uploads/2020/07/%E1%BA%A2nh-n%E1%BB%81n-bi%E1%BB%83n-c%E1%BA%A3-xanh-ng%E1%BA%AFt.jpg)"
    bg.style.opacity = 0.7;
    //   gameBoard.style.backgroundColor = '#8D8DD4';
    gameWords.style.lineHeight = '450px';
    gameWords.style.fontSize = 70;
    gameWords.style.color = "#472226";
    gameWords.innerHTML = '<h2>Game copy trên mạng  </h2>';
    gameWords.style.display = 'block';
    setTimeout('openWords()', 1000);     //开场文字
}
function openWords() {
    gameWords.style.opacity = 0.9;
    setTimeout('closeWords()', 1000);     //关闭开场文字
}
function closeWords() {
    gameWords.style.opacity = 0;
    setTimeout('closeWordsWait()', 1000);    //显示主界面
}
function closeWordsWait() {
    var name = document.getElementById('name');
    name.style.display = 'block';
    gameStart.style.display = 'block';
    gameHelp.style.display = 'block';
    gameAbout.style.display = 'block';
    gameQuit.style.display = 'block';
    gameWords.style.lineHeight = '450px';
    gameWords.style.display = 'none';
    name.style.opacity = 0;
    gameStart.style.opacity = 0;
    gameHelp.style.opacity = 0;
    gameAbout.style.opacity = 0;
    gameQuit.style.opacity = 0;
    setTimeout('setgameBoard()', 1000);
}
function setgameBoard() {          //打开游戏面板
    var name = document.getElementById('name');

    name.style.opacity = 1;
    gameStart.style.opacity = 1;
    gameHelp.style.opacity = 1;
    gameAbout.style.opacity = 1;
    gameQuit.style.opacity = 1;
}
gameStart.onclick = function () {
    var name = document.getElementById('name');
    name.style.display = 'none';
    gameStart.style.display = 'none';
    gameHelp.style.display = 'none';
    gameAbout.style.display = 'none';
    gameQuit.style.display = 'none';
    singleMode.style.display = 'block';
    pairMode.style.display = 'block';
    name.style.display = 'block';
    name.style.opacity = 0;
    singleMode.style.opacity = 0;
    pairMode.style.opacity = 0;
    setTimeout('chooseModeBoard()', 1000);

}
function chooseModeBoard() {          //模式选择面板
    var name = document.getElementById('name');
    name.style.opacity = 1;
    singleMode.style.opacity = 1;
    pairMode.style.opacity = 1;
    mapCanvas.style.display = 'none';
    gameWords.style.lineHeight = '450px';
    gameWords.style.display = 'none';


}
singleMode.onclick = function () {
    var name = document.getElementById('name');
    name.style.display = 'none';
    singleMode.style.display = 'none';
    pairMode.style.display = 'none';
    mode = 0;
    initGameGradient();
    intro.pause();
}
pairMode.onclick = function () {
    var name = document.getElementById('name');
    name.style.display = 'none';
    singleMode.style.display = 'none';
    pairMode.style.display = 'none';
    mode = 1;
    initGameGradient();
    intro.pause();
}
gameHelp.onclick = function () {
    var name = document.getElementById('name');
    gameWords.style.lineHeight = '60px';
    gameWords.innerHTML = '<br>帮助<br><br>Chế độ một người chơi: phím lên / W để ném bom, phím xuống / phím S để móc <br> Chế độ Duo: phím lên trái để ném bom, phím xuống để móc; phải Móc khóa W, Móc khóa S<br><br><br><div id = "back" style = "position: relative; ">返回</div>';
    gameWords.style.display = 'block';
    gameWords.style.opacity = 1;
    name.style.display = 'none';
    gameStart.style.display = 'none';
    gameHelp.style.display = 'none';
    gameAbout.style.display = 'none';
    gameQuit.style.display = 'none';

    var gameBack = document.getElementById('back');
    gameBack.onclick = function () {
        closeWordsWait();
    }
    gameBack.onmousemove = moveTo;
    gameBack.onmouseleave = leaveFrom;
}
gameAbout.onclick = function () {
    gameWords.innerHTML = '<br>Giới thiệu <br> <br> Đây là một trò chơi nhỏ bắt chước người đào vàng, hoan nghênh bạn đóng góp ý kiến ​​sau khi chơi. <br> Chế độ Duo: phím lên trái để ném bom, phím xuống để móc; phải Móc khóa W, Móc khóa S<br><br><br><div id = "back" style = "position: relative;">返回</div>';
    var name = document.getElementById('name');
    gameWords.style.lineHeight = '60px';
    gameWords.style.display = 'block';
    gameWords.style.opacity = 1;
    name.style.display = 'none';
    gameStart.style.display = 'none';
    gameHelp.style.display = 'none';
    gameAbout.style.display = 'none';
    gameQuit.style.display = 'none';

    var gameBack = document.getElementById('back');
    gameBack.onclick = function () {
        closeWordsWait();
    }
    gameBack.onmousemove = moveTo;
    gameBack.onmouseleave = leaveFrom;
}
gameQuit.onclick = function () {
    window.close();
}
function initGameGradient() {
    gameWords.style.display = 'none';
    mapCanvas.style.display = 'block';
    gameLines.style.display = 'block';
    key_W.style.display = "block";
    exit_level.style.display = "block";
    pause.style.display = "block";
    key_S.style.display = "block";
    key_up.style.display = "block";
    key_down.style.display = "block";
    key_W.innerHTML = 'W';
    key_S.innerHTML = 'S';
    key_up.innerHTML = 'up';
    key_down.innerHTML = 'down';

    key_W.style.opacity = 0;
    exit_level.style.opacity = 0;
    pause.style.opacity = 0;
    key_S.style.opacity = 0;
    key_up.style.opacity = 0;
    key_down.style.opacity = 0;
    //    mapCanvas.style.backgroundColor = '#lightgreen';
    //    gameBoard.style.backgroundColor = '#8D8DD4';
    mapCanvas.style.opacity = 0;

    setTimeout("initGame()", 500);
}
function initGame() {
    setTimeout('BGM.play()', 1000);
    mapCanvas.style.opacity = 1;
    key_W.style.opacity = 1;
    key_S.style.opacity = 1;
    key_up.style.opacity = 1;
    key_down.style.opacity = 1;
    exit_level.style.opacity = 1;
    pause.style.opacity = 1;
    if (mode == 0)
        players.push(new player(0));
    else {
        for (var i = 0; i < 2; i++)
            players.push(new player(i));
    }
    level = 1;
    total_money = 0;
    createLevel(level);
    // timer_update = setInterval(timeUpdate, 100);
}
function createLevel(level) {
    BGM.play();
    mapCanvas.style.opacity = 1;
    key_W.style.opacity = 1;
    key_S.style.opacity = 1;
    key_up.style.opacity = 1;
    key_down.style.opacity = 1;
    exit_level.style.opacity = 1;
    pause.style.opacity = 1;
    pause_num = 0;
    timer_update = setInterval(timeUpdate, 100);
    for (var i = 0; i < players.length; i++) {
        players[i].hook.status = 0;
        if (players[i].hook.object) {
            players[i].hook.object.x = -100;
            players[i].hook.object.y = -100;
            players[i].hook.object.moveSpeed = 0;
            players[i].hook.object = 0;
        }
        players[i].hook.x = players[i].x + players[i].width / 2;
        players[i].hook.y = 130;
        players[i].hook.angle = 10;
        players[i].hook.rotateSpeed = -5;
        if (players[0].enhanceStrength)
            players[i].hook.moveSpeed = 20;
        else players[i].hook.moveSpeed = 10;
    }
    switch (level) {
        case 1: {
            bg.style.backgroundImage = "url(https://github.com/hairleng/golden-miner-online-game/blob/master/img/bg1.jpg?raw=true)";
            goal = 700;
            gold_arr.splice(0, gold_arr.length);
            stone_arr.splice(0, stone_arr.length);
            mystery_arr.splice(0, mystery_arr.length);
            bomb_arr.splice(0, bomb_arr.length);
            flypig_arr.splice(0, flypig_arr.length);
            diamond_arr.splice(0, diamond_arr.length);
            clock_arr.splice(0, clock_arr.length);
            gold_arr.push(new gold(700, 350, 3));
            gold_arr.push(new gold(600, 200, 1));
            gold_arr.push(new gold(450, 350, 2));
            gold_arr.push(new gold(550, 400, 2));
            gold_arr.push(new gold(350, 200, 1));
            gold_arr.push(new gold(150, 300, 2));
            gold_arr.push(new gold(300, 500, 3));
            stone_arr.push(new stone(500, 200, 1));
            stone_arr.push(new stone(400, 450, 1));
            stone_arr.push(new stone(600, 300, 1));
            stone_arr.push(new stone(300, 400, 2));
            mystery_arr.push(new mystery(600, 500, 4));
            mystery_arr.push(new mystery(350, 300, 1));
            mystery_arr.push(new mystery(750, 200, 4));
            //clock_arr.push(new clock(700, 350));
            //clock_arr.push(new clock(600, 200));
            //clock_arr.push(new clock(450, 350));
            //clock_arr.push(new clock(550, 400));
            //gold_arr.push(new gold(350, 200, 1));
            //gold_arr.push(new gold(150, 300, 2));
            //gold_arr.push(new gold(300, 500, 3));
            //stone_arr.push(new stone(500, 200, 1));
            //stone_arr.push(new stone(400, 450, 1));
            //stone_arr.push(new stone(600, 300, 1));
            //stone_arr.push(new stone(300, 400, 2));
            //mystery_arr.push(new stone(600, 500, 4));
            //mystery_arr.push(new mystery(350, 300, 1));
            //mystery_arr.push(new mystery(750, 200, 4));
        }
            break;
        case 2: {
            bg.style.backgroundImage = "url(https://github.com/hairleng/golden-miner-online-game/blob/master/img/bg2.jpg?raw=true)";
            goal = 1700;
            gold_arr.splice(0, gold_arr.length);
            stone_arr.splice(0, stone_arr.length);
            mystery_arr.splice(0, mystery_arr.length);
            bomb_arr.splice(0, bomb_arr.length);
            flypig_arr.splice(0, flypig_arr.length);
            diamond_arr.splice(0, diamond_arr.length);
            clock_arr.splice(0, clock_arr.length);
            gold_arr.push(new gold(200, 500, 3));
            gold_arr.push(new gold(350, 200, 1));
            gold_arr.push(new gold(650, 200, 1));
            gold_arr.push(new gold(650, 400, 2));
            gold_arr.push(new gold(500, 450, 1));
            stone_arr.push(new stone(500, 230, 2));
            bomb_arr.push(new bomb(300, 300));
            stone_arr.push(new stone(600, 300, 1));
            diamond_arr.push(new diamond(800, 350));
            diamond_arr.push(new diamond(400, 350));
            clock_arr.push(new clock(100, 300));
            mystery_arr.push(new mystery(800, 200, 3));
            mystery_arr.push(new mystery(700, 500, 1));
            mystery_arr.push(new mystery(300, 600, 1));
            bomb_arr.push(new bomb(250, 400));
            bomb_arr.push(new bomb(800, 500));
        }
            break;
        case 3: {
            bg.style.backgroundImage = "url(https://github.com/hairleng/golden-miner-online-game/blob/master/img/bg3.jpg?raw=true)";
            goal = 2700;
            gold_arr.splice(0, gold_arr.length);
            stone_arr.splice(0, stone_arr.length);
            mystery_arr.splice(0, mystery_arr.length);
            bomb_arr.splice(0, bomb_arr.length);
            flypig_arr.splice(0, flypig_arr.length);
            diamond_arr.splice(0, diamond_arr.length);
            clock_arr.splice(0, clock_arr.length);
            gold_arr.push(new gold(150, 350, 1));
            gold_arr.push(new gold(450, 350, 2));
            gold_arr.push(new gold(350, 200, 1));
            stone_arr.push(new stone(600, 400, 2));
            stone_arr.push(new stone(500, 200, 2));
            stone_arr.push(new stone(800, 300, 1));
            stone_arr.push(new stone(300, 300, 2));
            clock_arr.push(new clock(700, 150));
            diamond_arr.push(new diamond(200, 250));
            // diamond_arr.push(new diamond(800, 400));
            flypig_arr.push(new flypig(420, 730, 300, 300, 0));
            flypig_arr.push(new flypig(100, 500, 450, 450, 0));
            mystery_arr.push(new mystery(700, 450, 1));
            mystery_arr.push(new mystery(300, 400, 3));
            bomb_arr.push(new bomb(800, 400));
        }
            break;
        case 4: {
            bg.style.backgroundImage = "url(https://github.com/hairleng/golden-miner-online-game/blob/master/img/bg4.jpg?raw=true)";
            goal = 3700;
            gold_arr.splice(0, gold_arr.length);
            stone_arr.splice(0, stone_arr.length);
            mystery_arr.splice(0, mystery_arr.length);
            bomb_arr.splice(0, bomb_arr.length);
            flypig_arr.splice(0, flypig_arr.length);
            diamond_arr.splice(0, diamond_arr.length);
            clock_arr.splice(0, clock_arr.length);
            gold_arr.push(new gold(500, 300, 1));
            gold_arr.push(new gold(250, 200, 1));
            gold_arr.push(new gold(750, 400, 3));
            stone_arr.push(new stone(500, 200, 2));
            stone_arr.push(new stone(380, 350, 2));
            stone_arr.push(new stone(600, 250, 1));
            diamond_arr.push(new diamond(120, 400));
            diamond_arr.push(new diamond(600, 350));
            mystery_arr.push(new mystery(250, 400, 1));
            mystery_arr.push(new mystery(850, 250, 3));
            clock_arr.push(new clock(700, 200));
            flypig_arr.push(new flypig(100, 800, 500, 500, 1));
            flypig_arr.push(new flypig(100, 400, 300, 300, 0));
            bomb_arr.push(new bomb(450, 400));
        }
            break;
        case 5: {
            bg.style.backgroundImage = "url(https://github.com/hairleng/golden-miner-online-game/blob/master/img/bg5.jpg?raw=true)";
            goal =4700;
            gold_arr.splice(0, gold_arr.length);
            stone_arr.splice(0, stone_arr.length);
            mystery_arr.splice(0, mystery_arr.length);
            bomb_arr.splice(0, bomb_arr.length);
            flypig_arr.splice(0, flypig_arr.length);
            diamond_arr.splice(0, diamond_arr.length);
            clock_arr.splice(0, clock_arr.length);
            gold_arr.push(new gold(500, 300, 1));
            gold_arr.push(new gold(300, 150, 2));
            gold_arr.push(new gold(700, 300, 2));
            gold_arr.push(new gold(750, 400, 3));
            gold_arr.push(new gold(200, 200, 1));
            diamond_arr.push(new diamond(600, 400));
            mystery_arr.push(new mystery(800, 300, 3));
            stone_arr.push(new stone(500, 200, 2));
            stone_arr.push(new stone(380, 350, 2));
            diamond_arr.push(new diamond(120, 400));
            mystery_arr.push(new mystery(250, 400, 1));
            flypig_arr.push(new flypig(100, 800, 500, 500, 1));
            flypig_arr.push(new flypig(900, 600, 200, 200, 0));
            bomb_arr.push(new bomb(500, 400));
            bomb_arr.push(new bomb(250, 300));
        }
            break;
        case 6: {
            bg.style.backgroundImage = "url(https://github.com/hairleng/golden-miner-online-game/blob/master/img/bg6.jpg?raw=true)";
            goal = 5700;
            gold_arr.splice(0, gold_arr.length);
            stone_arr.splice(0, stone_arr.length);
            mystery_arr.splice(0, mystery_arr.length);
            bomb_arr.splice(0, bomb_arr.length);
            flypig_arr.splice(0, flypig_arr.length);
            diamond_arr.splice(0, diamond_arr.length);
            clock_arr.splice(0, clock_arr.length);
            gold_arr.push(new gold(500, 300, 1));
            gold_arr.push(new gold(300, 150, 2));
            gold_arr.push(new gold(700, 300, 2));
            gold_arr.push(new gold(750, 400, 3));
            gold_arr.push(new gold(200, 200, 1));
            diamond_arr.push(new diamond(600, 400));
            mystery_arr.push(new mystery(800, 300, 3));
            stone_arr.push(new stone(500, 200, 2));
            stone_arr.push(new stone(380, 350, 2));
            stone_arr.push(new stone(300, 300, 2));
            diamond_arr.push(new diamond(120, 400));
            mystery_arr.push(new mystery(250, 400, 1));
            flypig_arr.push(new flypig(100, 800, 500, 500, 1));
            flypig_arr.push(new flypig(900, 600, 200, 200, 0));
            bomb_arr.push(new bomb(500, 400));
        }
            break;
        case 7: {
            bg.style.backgroundImage = "url(https://github.com/hairleng/golden-miner-online-game/blob/master/img/bg7.jpg?raw=true)";
            goal = 6700;
            gold_arr.splice(0, gold_arr.length);
            stone_arr.splice(0, stone_arr.length);
            mystery_arr.splice(0, mystery_arr.length);
            bomb_arr.splice(0, bomb_arr.length);
            flypig_arr.splice(0, flypig_arr.length);
            diamond_arr.splice(0, diamond_arr.length);
            clock_arr.splice(0, clock_arr.length);
            gold_arr.push(new gold(500, 300, 1));
            gold_arr.push(new gold(350, 200, 1));
            gold_arr.push(new gold(700, 300, 2));
            gold_arr.push(new gold(750, 400, 3));
            diamond_arr.push(new diamond(600, 400));
            mystery_arr.push(new mystery(800, 300, 3));
            stone_arr.push(new stone(550, 200, 2));
            stone_arr.push(new stone(380, 350, 2));
            diamond_arr.push(new diamond(120, 400));
            mystery_arr.push(new mystery(250, 400, 1));
            flypig_arr.push(new flypig(100, 400, 500, 500, 1));
            flypig_arr.push(new flypig(900, 600, 500, 500, 1));
            flypig_arr.push(new flypig(100, 400, 300, 300, 0));
            bomb_arr.push(new bomb(500, 400));
        }
            break;
        case 8: {
            bg.style.backgroundImage = "url(https://github.com/hairleng/golden-miner-online-game/blob/master/img/bg8.jpg?raw=true)";
            goal =7700;
            gold_arr.splice(0, gold_arr.length);
            stone_arr.splice(0, stone_arr.length);
            mystery_arr.splice(0, mystery_arr.length);
            bomb_arr.splice(0, bomb_arr.length);
            flypig_arr.splice(0, flypig_arr.length);
            diamond_arr.splice(0, diamond_arr.length);
            clock_arr.splice(0, clock_arr.length);
            gold_arr.push(new gold(500, 300, 1));
            gold_arr.push(new gold(700, 300, 2));
            diamond_arr.push(new diamond(600, 400));
            mystery_arr.push(new mystery(800, 300, 3));
            stone_arr.push(new stone(600, 200, 2));
            clock_arr.push(new stone(380, 350));
            diamond_arr.push(new diamond(120, 400));
            mystery_arr.push(new mystery(250, 400, 1));
            flypig_arr.push(new flypig(100, 400, 500, 500, 1));
            flypig_arr.push(new flypig(900, 600, 500, 500, 0));
            flypig_arr.push(new flypig(100, 400, 300, 300, 1));
            clock_arr.push(new clock(750, 400));
            bomb_arr.push(new bomb(500, 400));
            bomb_arr.push(new bomb(350, 200));
        }
            break;
        case 9: {
            bg.style.backgroundImage = "url(https://github.com/hairleng/golden-miner-online-game/blob/master/img/bg9.jpg?raw=true)";
            goal = 8700;
            gold_arr.splice(0, gold_arr.length);
            stone_arr.splice(0, stone_arr.length);
            mystery_arr.splice(0, mystery_arr.length);
            bomb_arr.splice(0, bomb_arr.length);
            flypig_arr.splice(0, flypig_arr.length);
            diamond_arr.splice(0, diamond_arr.length);
            clock_arr.splice(0, clock_arr.length);
            gold_arr.push(new gold(500, 300, 1));
            gold_arr.push(new gold(350, 200, 1));
            stone_arr.push(new stone(750, 400, 2));
            stone_arr.push(new stone(600, 200, 1));
            mystery_arr.push(new mystery(800, 300, 3));
            stone_arr.push(new stone(500, 200, 2));
            stone_arr.push(new stone(380, 350, 2));
            stone_arr.push(new stone(600, 300, 1));
            mystery_arr.push(new mystery(250, 400, 1));
            flypig_arr.push(new flypig(100, 800, 500, 500, 1));
            flypig_arr.push(new flypig(100, 400, 300, 300, 0));
            bomb_arr.push(new bomb(500, 400));
            bomb_arr.push(new bomb(700, 300));
        }
            break;
        case 10: {
            bg.style.backgroundImage = "url(https://github.com/hairleng/golden-miner-online-game/blob/master/img/bg9.jpg?raw=true)";
            goal = 47000;
            gold_arr.splice(0, gold_arr.length);
            stone_arr.splice(0, stone_arr.length);
            mystery_arr.splice(0, mystery_arr.length);
            bomb_arr.splice(0, bomb_arr.length);
            flypig_arr.splice(0, flypig_arr.length);
            diamond_arr.splice(0, diamond_arr.length);
            clock_arr.splice(0, clock_arr.length);
            stone_arr.push(new stone(500, 300, 1));
            gold_arr.push(new gold(350, 200, 1));
            gold_arr.push(new gold(700, 300, 2));
            diamond_arr.push(new diamond(600, 400));
            stone_arr.push(new stone(600, 200, 1));
            mystery_arr.push(new mystery(380, 350, 1));
            mystery_arr.push(new mystery(800, 300, 3));
            stone_arr.push(new stone(500, 200, 2));
            stone_arr.push(new stone(600, 300, 1));
            diamond_arr.push(new diamond(100, 400));
            mystery_arr.push(new mystery(250, 400, 1));
            flypig_arr.push(new flypig(100, 800, 500, 500, 1));
            flypig_arr.push(new flypig(100, 400, 300, 300, 0));
            bomb_arr.push(new bomb(500, 400));
            bomb_arr.push(new bomb(750, 400));
        }
            break;
    }
    if (mode == 1) goal = goal * 2;
    key_W.onclick = function () {
        if (!game_end && !game_pause) {
            if (players[0].bomb_num && players[0].hook.object != 0) {
                players[0].hook.status = 1;
                players[0].hook.object.owner = 0;
                x_explode = players[0].hook.x;
                y_explode = players[0].hook.y;
                draw_explode();
                players[0].hook.object.x = -100;
                players[0].hook.object.y = -100;
                players[0].hook.object.moveSpeed = 0;
                players[0].hook.object = 0;
                if (players[0].enhanceStrength)
                    players[0].hook.moveSpeed = -20;
                else players[0].hook.moveSpeed = -10;
                timeUpdate();
                players[0].bomb_num--;
                explodeAudio.play();
            }
        }
    }
    key_S.onclick = function () {
        if (!game_end && !game_pause) {
            if (players[0].hook.status == 0) {
                players[0].hook.status = 1;
                timeUpdate();

            }
        }
    }
    key_up.onclick = function () {
        if (!game_end && !game_pause) {
            if (mode == 1) {
                if (players[0].bomb_num && players[1].hook.object != 0) {
                    players[1].hook.status = 1;
                    players[1].hook.object.owner = 0;
                    x_explode = players[1].hook.x;
                    y_explode = players[1].hook.y;
                    draw_explode();
                    players[1].hook.object.x = -100;
                    players[1].hook.object.y = -100;
                    players[1].hook.object.moveSpeed = 0;
                    players[1].hook.object = 0;
                    if (players[0].enhanceStrength)
                        players[1].hook.moveSpeed = -20;
                    else players[1].hook.moveSpeed = -10;
                    players[0].bomb_num--;
                    timeUpdate();
                    explodeAudio.play();
                }
            }
            else {
                if (players[0].bomb_num && players[0].hook.object != 0) {
                    players[0].hook.status = 1;
                    players[0].hook.object.owner = 0;
                    x_explode = players[0].hook.x;
                    y_explode = players[0].hook.y;
                    draw_explode();
                    players[0].hook.object.x = -100;
                    players[0].hook.object.y = -100;
                    players[0].hook.object.moveSpeed = 0;
                    players[0].hook.object = 0;
                    if (players[0].enhanceStrength)
                        players[0].hook.moveSpeed = -20;
                    else players[0].hook.moveSpeed = -10;
                    players[0].bomb_num--;
                    timeUpdate();
                    explodeAudio.play();
                }
            }
        }
    }
    key_down.onclick = function () {
        if (!game_end && !game_pause) {
            if (mode == 1) {
                if (players[1].hook.status == 0) {
                    players[1].hook.status = 1;
                    timeUpdate();

                }
            } else {
                if (players[0].hook.status == 0) {
                    players[0].hook.status = 1;
                    timeUpdate();

                }
            }
        }
    }
    window.onkeydown = function (e) {
        if (!game_end && !game_pause) {
            var keyID = e.keyCode ? e.keyCode : e.which;
            if (keyID === 38) {// up arrow
                if (mode == 1) {
                    if (players[0].bomb_num && players[1].hook.object != 0) {
                        players[1].hook.status = 1;
                        players[1].hook.object.owner = 0;
                        x_explode = players[1].hook.x;
                        y_explode = players[1].hook.y;
                        draw_explode();
                        players[1].hook.object.x = -100;
                        players[1].hook.object.y = -100;
                        players[1].hook.object.moveSpeed = 0;
                        players[1].hook.object = 0;
                        if (players[0].enhanceStrength)
                            players[1].hook.moveSpeed = -20;
                        else players[1].hook.moveSpeed = -10;
                        players[0].bomb_num--;
                        timeUpdate();
                        explodeAudio.play();
                    }
                }
                else {
                    if (players[0].bomb_num && players[0].hook.object != 0) {
                        players[0].hook.status = 1;
                        players[0].hook.object.owner = 0;
                        x_explode = players[0].hook.x;
                        y_explode = players[0].hook.y;
                        draw_explode();
                        players[0].hook.object.x = -100;
                        players[0].hook.object.y = -100;
                        players[0].hook.object.moveSpeed = 0;
                        players[0].hook.object = 0;
                        if (players[0].enhanceStrength)
                            players[0].hook.moveSpeed = -20;
                        else players[0].hook.moveSpeed = -10;
                        players[0].bomb_num--;
                        timeUpdate();
                        explodeAudio.play();
                    }
                }
                e.preventDefault();
            }
            if (keyID === 87) { // W

                if (players[0].bomb_num && players[0].hook.object != 0) {

                    players[0].hook.status = 1;
                    players[0].hook.object.owner = 0;
                    x_explode = players[0].hook.x;
                    y_explode = players[0].hook.y;
                    draw_explode();
                    players[0].hook.object.x = -100;
                    players[0].hook.object.y = -100;
                    players[0].hook.object.moveSpeed = 0;
                    players[0].hook.object = 0;
                    if (players[0].enhanceStrength)
                        players[0].hook.moveSpeed = -20;
                    else players[0].hook.moveSpeed = -10;
                    timeUpdate();
                    players[0].bomb_num--;
                    explodeAudio.play();
                }

                e.preventDefault();
            }
            if (keyID === 40) { // down arrow
                if (mode == 1) {
                    if (players[1].hook.status == 0) {
                        players[1].hook.status = 1;
                        timeUpdate();
                        e.preventDefault();
                    }
                } else {
                    if (players[0].hook.status == 0) {
                        players[0].hook.status = 1;
                        timeUpdate();
                        e.preventDefault();
                    }
                }
            }
            if (keyID === 83) { // S
                if (players[0].hook.status == 0) {
                    players[0].hook.status = 1;
                    timeUpdate();
                    e.preventDefault();
                }

            }
        }
    }
    exit_level.onclick = function () {
        if (!game_pause) {
            check_money();
        }
    }
    pause.onclick = function () {
        pause_num++;
        game_pause = true;
        if (pause_num % 2 == 1) pauseGame();
        else continueGame();
    }
    // gameBoard.style.backgroundColor = mapCanvas.style.backgroundColor;
    time_limit = setInterval(function () {
        time_all--;
    }, 1000);

}
function pauseGame() {
    clearInterval(timer_update);
    clearInterval(time_limit);
    pause.innerHTML = "▷";
    pause_animation.style.display = "block";
    pause_animation.style.opacity = 0;
    pause_time = 0;
    BGM.pause();
    timer_pause_animation = setInterval(pauseGameAnimation, 1000);

}
function pauseGameAnimation() {
    pause_time++;

    if (pause_time % 2 == 1) pause_animation.style.opacity = 0.8;
    else pause_animation.style.opacity = 0;
}
function continueGame() {
    game_pause = false;
    pause.innerHTML = "‖";
    BGM.play();
    clearInterval(timer_pause_animation);
    pause_animation.style.display = "none";
    timer_update = setInterval(timeUpdate, 100);
    time_limit = setInterval(function () {
        time_all--;
    }, 1000);
}
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function draw_all() {
    if (!in_shop) {
        clearCanvas();
        for (var i = 0; i < gold_arr.length; i++)
            if (gold_arr[i].owner == 0)
                gold_arr[i].draw();
        for (var i = 0; i < mystery_arr.length; i++)
            if (mystery_arr[i].owner == 0)
                mystery_arr[i].draw();
        for (var i = 0; i < stone_arr.length; i++)
            if (stone_arr[i].owner == 0)
                stone_arr[i].draw();
        for (var i = 0; i < bomb_arr.length; i++)
            if (bomb_arr[i].owner == 0)
                bomb_arr[i].draw();
        for (var i = 0; i < flypig_arr.length; i++)
            if (flypig_arr[i].owner == 0)
                flypig_arr[i].draw();
        for (var i = 0; i < clock_arr.length; i++)
            if (clock_arr[i].owner == 0)
                clock_arr[i].draw();
        for (var i = 0; i < diamond_arr.length; i++)
            if (diamond_arr[i].owner == 0)
                diamond_arr[i].draw();
        for (var i = 0; i < players.length; i++) {
            players[i].draw();

            if (players[i].hook.object) {
                players[i].hook.object.draw();
            }
            players[i].hook.draw();
        }
        draw_score();
        draw_bomb();
        draw_time_limit();

        if (isExploding == true) {
            explodeRatius += 5;

            var bombExplode = new Image();
            bombExplode.src = "https://github.com/hairleng/golden-miner-online-game/blob/master/img/bombExplode.png?raw=true";
            ctx.drawImage(bombExplode, x_explode - 30, y_explode - 30, explodeRatius, explodeRatius);
        }
        for (var i = 0; i < bomb_arr.length; i++) {
            if (bomb_arr[i].isExploding == true) {
                //console.log(bomb_arr[i]);
                bomb_arr[i].explodeRatiusPic += 5;
                var bombExplode = new Image();
                bombExplode.src = "https://github.com/hairleng/golden-miner-online-game/blob/master/img/bombExplode.png?raw=true";
                ctx.drawImage(bombExplode, bomb_arr[i].x - 30, bomb_arr[i].y - 30, bomb_arr[i].explodeRatiusPic, bomb_arr[i].explodeRatiusPic);
            }
        }
        for (var i = 0; i < players.length; i++)
            if (players[i].hook.money_status != 0) {
                console.log(players[i].hook.money_status);
                if (players[i].hook.money_status == 1) {
                    players[i].hook.money_size += 2;
                    players[i].hook.money_pos_x -= 9;
                    players[i].hook.money_pos_y -= 5;
                    ctx.fillStyle = "gray";
                    ctx.font = "bold " + players[i].hook.money_size.toString() + "px ppFont";
                    ctx.fillText('$' + players[i].hook.money_value.toString(), players[i].hook.money_pos_x, players[i].hook.money_pos_y);
                } else if (players[i].hook.money_status == 3) {
                    players[i].hook.money_size -= 2;
                    players[i].hook.money_pos_x -= 8;
                    players[i].hook.money_pos_y -= 5;
                    ctx.fillStyle = "gray";
                    ctx.font = "bold " + players[i].hook.money_size.toString() + "px ppFont";
                    ctx.fillText('$' + players[i].hook.money_value.toString(), players[i].hook.money_pos_x, players[i].hook.money_pos_y);
                } else if (players[i].hook.money_status == 2) {
                    ctx.fillStyle = "gray";
                    ctx.font = "bold " + players[i].hook.money_size.toString() + "px ppFont";
                    ctx.fillText('$' + players[i].hook.money_value.toString(), players[i].hook.money_pos_x, players[i].hook.money_pos_y);
                }
            }
    }
    else {
        enterShopGradient();
    }
}
function draw_explode() {
    explodeRatius = 10;
    isExploding = true;
    setTimeout("close_timer_explode()", 1000);
}
function close_timer_explode() {
    isExploding = false;
}
function draw_bomb() {
    var crackerImg = new Image();
    crackerImg.src = "https://github.com/hairleng/golden-miner-online-game/blob/master/img/cracker.png?raw=true";
    if (players[0].bomb_num > 0) {
        for (var i = 0; i < players[0].bomb_num; i++) {
            ctx.drawImage(crackerImg, canvas.width / 2 + 100 + 28 * i - 10, 50, 28, 40);
        }
    }
}
function draw_time_limit() {

    ctx.fillStyle = "gray";
    ctx.font = "bold 20px ppFont";
    ctx.fillText("Time:", 700, 40);
    ctx.fillText(time_all.toString(), 800, 40);
    ctx.fillText("Level:", 700, 80);
    ctx.fillText(level.toString(), 800, 80);
}
function draw_score() {
    ctx.fillStyle = "gray";
    ctx.font = "bold 20px ppFont";
    ctx.fillText("Money:", 10, 40);
    //total_money = 0;
    //for (var i = 0; i < players.length; i++)
    //    total_money += players[i].money;
    ctx.fillText('$' + total_money.toString(), 100, 40);
    ctx.fillText("Goal:", 10, 80);
    ctx.fillText('$' + goal.toString(), 80, 80);
}
function check_all() {
    if (time_all == 0) check_money();
    for (var i = 0; i < players.length; i++) {
        players[i].hook.check();
    }
    check_hook_catch_object();
}
function check_money() {
    clearInterval(time_limit);
    for (var i = 0; i < players.length; i++)
        if (players[i].hook.money_status == 0) {
            if (total_money >= goal) {
                enterShopGradient();
            }
            else {
                endCanvas();
            }
        }
}
function check_hook_catch_object() {
    for (var i = 0; i < gold_arr.length; i++) {
        for (var j = 0; j < players.length; j++) {
            if (Math.sqrt((gold_arr[i].x - players[j].hook.x) * (gold_arr[i].x - players[j].hook.x) +
                    (gold_arr[i].y - players[j].hook.y) * (gold_arr[i].y - players[j].hook.y)) < gold_arr[i].r
                && players[j].hook.status == 1 && players[j].hook.moveSpeed > 0 && gold_arr[i].owner == 0) {
                gold_arr[i].x = players[j].hook.x + gold_arr[i].r * Math.cos((players[j].hook.angle) * Math.PI / 180);
                gold_arr[i].y = players[j].hook.y + gold_arr[i].r * Math.sin((players[j].hook.angle) * Math.PI / 180);
                players[j].hook.status = 2;
                players[j].hook.object = gold_arr[i];
                gold_arr[i].owner = players[j].hook;
                players[j].hook.moveSpeed = -players[j].hook.moveSpeed * gold_arr[i].speed;
            }
        }
    }
    for (var i = 0; i < stone_arr.length; i++) {
        for (var j = 0; j < players.length; j++) {
            if (Math.sqrt((stone_arr[i].x - players[j].hook.x) * (stone_arr[i].x - players[j].hook.x) +
                    (stone_arr[i].y - players[j].hook.y) * (stone_arr[i].y - players[j].hook.y)) < stone_arr[i].r
                && players[j].hook.status == 1 && players[j].hook.moveSpeed > 0 && stone_arr[i].owner == 0) {
                stone_arr[i].x = players[j].hook.x + stone_arr[i].r * Math.cos((players[j].hook.angle) * Math.PI / 180);
                stone_arr[i].y = players[j].hook.y + stone_arr[i].r * Math.sin((players[j].hook.angle) * Math.PI / 180);
                players[j].hook.status = 2;
                players[j].hook.object = stone_arr[i];
                stone_arr[i].owner = players[j].hook;
                players[j].hook.moveSpeed = -players[j].hook.moveSpeed * stone_arr[i].speed;
            }
        }
    }
    for (var i = 0; i < mystery_arr.length; i++) {
        for (var j = 0; j < players.length; j++) {
            if (Math.sqrt((mystery_arr[i].x - players[j].hook.x) * (mystery_arr[i].x - players[j].hook.x) +
                    (mystery_arr[i].y - players[j].hook.y) * (mystery_arr[i].y - players[j].hook.y)) < mystery_arr[i].r
                && players[j].hook.status == 1 && players[j].hook.moveSpeed > 0 && mystery_arr[i].owner == 0) {
                mystery_arr[i].x = players[j].hook.x + mystery_arr[i].r * Math.cos((players[j].hook.angle) * Math.PI / 180);
                mystery_arr[i].y = players[j].hook.y + mystery_arr[i].r * Math.sin((players[j].hook.angle) * Math.PI / 180);
                players[j].hook.status = 2;
                players[j].hook.object = mystery_arr[i];
                mystery_arr[i].owner = players[j].hook;
                players[j].hook.moveSpeed = -players[j].hook.moveSpeed * mystery_arr[i].speed;
            }
        }
    }
    for (var i = 0; i < bomb_arr.length; i++) {
        for (var j = 0; j < players.length; j++) {
            if (Math.sqrt((bomb_arr[i].x - players[j].hook.x) * (bomb_arr[i].x - players[j].hook.x) +
                    (bomb_arr[i].y - players[j].hook.y) * (bomb_arr[i].y - players[j].hook.y)) < bomb_arr[i].r
                && players[j].hook.status == 1 && players[j].hook.moveSpeed > 0 && bomb_arr[i].owner == 0) {
                bomb_arr[i].x = players[j].hook.x + bomb_arr[i].r * Math.cos((players[j].hook.angle) * Math.PI / 180);
                bomb_arr[i].y = players[j].hook.y + bomb_arr[i].r * Math.sin((players[j].hook.angle) * Math.PI / 180);
                players[j].hook.status = 2;
                players[j].hook.object = bomb_arr[i];
                bomb_arr[i].owner = players[j].hook;
                players[j].hook.moveSpeed = -players[j].hook.moveSpeed * bomb_arr[i].speed;
                bomb_arr[i].explode();
            }
        }
    }
    for (var i = 0; i < flypig_arr.length; i++) {
        for (var j = 0; j < players.length; j++) {
            if (Math.sqrt((flypig_arr[i].x - players[j].hook.x) * (flypig_arr[i].x - players[j].hook.x) +
                    (flypig_arr[i].y - players[j].hook.y) * (flypig_arr[i].y - players[j].hook.y)) < flypig_arr[i].r
                && players[j].hook.status == 1 && players[j].hook.moveSpeed > 0 && flypig_arr[i].owner == 0) {
                flypig_arr[i].x = players[j].hook.x + flypig_arr[i].r * Math.cos((players[j].hook.angle) * Math.PI / 180);
                flypig_arr[i].y = players[j].hook.y + flypig_arr[i].r * Math.sin((players[j].hook.angle) * Math.PI / 180);
                players[j].hook.status = 2;
                players[j].hook.object = flypig_arr[i];
                flypig_arr[i].owner = players[j].hook;
                players[j].hook.moveSpeed = -players[j].hook.moveSpeed * flypig_arr[i].speed;
            }
        }
    }
    for (var i = 0; i < diamond_arr.length; i++) {
        for (var j = 0; j < players.length; j++) {
            if (Math.sqrt((diamond_arr[i].x - players[j].hook.x) * (diamond_arr[i].x - players[j].hook.x) +
                    (diamond_arr[i].y - players[j].hook.y) * (diamond_arr[i].y - players[j].hook.y)) < diamond_arr[i].r
                && players[j].hook.status == 1 && players[j].hook.moveSpeed > 0 && diamond_arr[i].owner == 0) {
                diamond_arr[i].x = players[j].hook.x + diamond_arr[i].r * Math.cos((players[j].hook.angle) * Math.PI / 180);
                diamond_arr[i].y = players[j].hook.y + diamond_arr[i].r * Math.sin((players[j].hook.angle) * Math.PI / 180);
                players[j].hook.status = 2;
                players[j].hook.object = diamond_arr[i];
                diamond_arr[i].owner = players[j].hook;
                players[j].hook.moveSpeed = -players[j].hook.moveSpeed * diamond_arr[i].speed;
            }
        }
    }
    for (var i = 0; i < clock_arr.length; i++) {
        for (var j = 0; j < players.length; j++) {
            if (Math.sqrt((clock_arr[i].x - players[j].hook.x) * (clock_arr[i].x - players[j].hook.x) +
                    (clock_arr[i].y - players[j].hook.y) * (clock_arr[i].y - players[j].hook.y)) < clock_arr[i].r
                && players[j].hook.status == 1 && players[j].hook.moveSpeed > 0 && clock_arr[i].owner == 0) {
                clock_arr[i].x = players[j].hook.x + clock_arr[i].r * Math.cos((players[j].hook.angle) * Math.PI / 180);
                clock_arr[i].y = players[j].hook.y + clock_arr[i].r * Math.sin((players[j].hook.angle) * Math.PI / 180);
                players[j].hook.status = 2;
                players[j].hook.object = clock_arr[i];
                clock_arr[i].owner = players[j].hook;
                players[j].hook.moveSpeed = -players[j].hook.moveSpeed * clock_arr[i].speed;
            }
        }
    }
}
function drawEnd() {
    BGM.pause();
    deathAudio.play();
    mapCanvas.style.opacity = 0.5;
    key_W.style.opacity = 0.5;
    key_S.style.opacity = 0.5;
    key_up.style.opacity = 0.5;
    key_down.style.opacity = 0.5;
    exit_level.style.opacity = 0.5;
    pause.style.opacity = 0.5;
    gameLoseBoard.style.display = "block";
    gameLoseBoard.style.color = "white";
    gameLose.style.display = "block";
    gameLose.style.color = "gray";
    score.style.display = "block";
    score.innerHTML = "Score:" + total_money.toString() + "<br><br>" + "Goal:" + goal.toString();
    restart.style.display = "block";
    restart.style.color = "gray";
    restart.onclick = function () {
        clearCanvas();
        gameLoseBoard.style.display = "none";
        gameLose.style.display = "none";
        score.style.display = "none";
        restart.style.display = "none";
        init();
    }
    window.onkeydown = function (e) {

        var keyID = e.keyCode ? e.keyCode : e.which;
        if (keyID === 13 || keyID === 32) { // space and enter  
            clearCanvas();
            init();

            e.preventDefault();
        }
    }
    // mapCanvas.style.display = "none";
}
function endCanvas() {
    clearInterval(timer_update);
    drawEnd();
    gold_arr.splice(0, gold_arr.length);
    stone_arr.splice(0, stone_arr.length);
    mystery_arr.splice(0, mystery_arr.length);
    bomb_arr.splice(0, bomb_arr.length);
    flypig_arr.splice(0, flypig_arr.length);
    diamond_arr.splice(0, diamond_arr.length);
    clock_arr.splice(0, clock_arr.length);
    players.splice(0, players.length);
}
function enterShopGradient() {
    clearInterval(timer_update);
    mapCanvas.style.opacity = 0;
    gameBoard.style.opacity = 0;
    key_W.style.opacity = 0;
    key_S.style.opacity = 0;
    key_up.style.opacity = 0;
    key_down.style.opacity = 0;
    exit_level.style.opacity = 0;
    pause.style.opacity = 0;
    setTimeout("enterShopGradient1()", 1000);
}
function enterShopGradient1() {
    clearCanvas();
    mapCanvas.style.display = "none";
    key_W.style.display = "none";
    key_S.style.display = "none";
    key_up.style.display = "none";
    key_down.style.display = "none";
    exit_level.style.display = "none";
    pause.style.display = "none";
    for (var i = 0; i < 5; i++)
        price[i] = parseInt(Math.random() * 400 + 5);
    addStoneValue.style.display = "block";
    addDiamondValue.style.display = "block";
    bom.style.display = "block";
    enhanceStrength.style.display = "block";
    fourLeaf.style.display = "block";
    nextLevel.style.display = "block";
    money.style.display = "block";
    shopName.style.display = "block";
    money.style.opacity = 0;
    shopName.style.opacity = 0;
    addStoneValue.style.opacity = 0;
    addDiamondValue.style.opacity = 0;
    bom.style.opacity = 0;
    enhanceStrength.style.opacity = 0;
    fourLeaf.style.opacity = 0;
    nextLevel.style.opacity = 0;
    bomPrice.style.opacity = 0;
    stonePrice.style.opacity = 0;
    enhancePrice.style.opacity = 0;
    leafPrice.style.opacity = 0;
    diamondPrice.style.opacity = 0;
    shopLine.style.opacity = 0;
    bomPrice.style.display = "block";

    bomPrice.innerHTML = '$' + price[4].toString();
    stonePrice.style.display = "block";

    stonePrice.innerHTML = '$' + price[2].toString();
    enhancePrice.style.display = "block";

    enhancePrice.innerHTML = '$' + price[0].toString();
    leafPrice.style.display = "block";

    leafPrice.innerHTML = '$' + price[1].toString();
    diamondPrice.style.display = "block";

    diamondPrice.innerHTML = '$' + price[3].toString();
    gameLines.style.display = 'none';
    shopLine.style.display = 'block';

    money.style.display = 'block';
    shopName.style.display = 'block';
    setTimeout("enterShop()", 1000);
}
function enterShop() {//商店
    BGM.pause();
    players[0].addStoneValue = false;
    players[0].addDiamondValue = false;
    players[0].bom = false;
    players[0].enhanceStrength = false;
    players[0].fourLeaf = false;
    gameBoard.style.opacity = 1;
    bg.style.backgroundImage = "url(https://github.com/hairleng/golden-miner-online-game/blob/master/img/shop.jpg?raw=true)";
    // gameBoard.style.backgroundColor = '#8D8DD4';
    addDiamondValue.style.opacity = 1;
    addStoneValue.style.opacity = 1;
    bom.style.opacity = 1;
    enhanceStrength.style.opacity = 1;
    fourLeaf.style.opacity = 1;
    nextLevel.style.opacity = 1;
    bomPrice.style.opacity = 1;
    stonePrice.style.opacity = 1;
    enhancePrice.style.opacity = 1;
    leafPrice.style.opacity = 1;
    diamondPrice.style.opacity = 1;
    money.style.opacity = 1;
    shopName.style.opacity = 1;
    shopLine.style.opacity = 1;
    money.innerHTML = "Của cải hiện tại là: $ " + total_money;
    addStoneValue.onmouseover = function () {
        shopLine.innerHTML = "Bộ Sưu Tập Đá: Tăng Giá Trị Đá";
    }
    addStoneValue.onmouseout = function () {
        shopLine.innerHTML = "";
    }
    addDiamondValue.onmouseover = function () {
        shopLine.innerHTML = "Thuốc Kim Cương: Tăng Giá Trị Kim Cương";
    }
    addDiamondValue.onmouseout = function () {
        shopLine.innerHTML = "";
    }
    bom.onmouseover = function () {
        shopLine.innerHTML = "Bom: Có thể làm nổ tung các vật dụng bị tóm cổ";
    }
    bom.onmouseout = function () {
        shopLine.innerHTML = "";
    }
    enhanceStrength.onmouseover = function () {
        shopLine.innerHTML = "Potion of Strength: Lấy vật phẩm nhanh hơn";
    }
    enhanceStrength.onmouseout = function () {
        shopLine.innerHTML = "";
    }
    fourLeaf.onmouseover = function () {
        shopLine.innerHTML = "Cỏ ba lá: Tăng giá trị may mắn của túi dấu chấm hỏi";
    }
    fourLeaf.onmouseout = function () {
        shopLine.innerHTML = "";
    }
    addStoneValue.onclick = function () {
        if (total_money - price[2] >= 0) {
            cursor.play();
            addStoneValue.style.display = "none";
            stonePrice.style.display = "none";
            players[0].addStoneValue = true;
            total_money -= price[2];
            money.innerHTML = "Của cải hiện tại là: $" + total_money;
        }
    }
    addDiamondValue.onclick = function () {
        if (total_money - price[3] >= 0) {
            cursor.play();
            addDiamondValue.style.display = "none";
            diamondPrice.style.display = "none"
            players[0].addDiamondValue = true;
            total_money -= price[3];
            money.innerHTML = "Của cải hiện tại là: $" + total_money;
        }
    }
    bom.onclick = function () {
        if (total_money - price[4] >= 0) {
            cursor.play();
            bom.style.display = "none";
            bomPrice.style.display = "none";
            players[0].bomb_num++;
            total_money -= price[4];
            money.innerHTML = "Của cải hiện tại là: $" + total_money;
        }
    }
    enhanceStrength.onclick = function () {
        if (total_money - price[0] >= 0) {
            cursor.play();
            enhanceStrength.style.display = "none";
            enhancePrice.style.display = "none";
            players[0].enhanceStrength = true;
            total_money -= price[0];
            money.innerHTML = "Của cải hiện tại là: $" + total_money;
        }
    }
    fourLeaf.onclick = function () {
        if (total_money - price[1] >= 0) {
            cursor.play();
            fourLeaf.style.display = "none";
            leafPrice.style.display = "none";
            players[0].fourLeaf = true;
            total_money -= price[1];
            money.innerHTML = "Của cải hiện tại là: $" + total_money;
        }
    }
    nextLevel.onclick = function () {
        cursor.play();
        time_all = 60;
        mapCanvas.style.display = 'block';
        key_W.style.display = 'block';
        key_S.style.display = 'block';
        key_up.style.display = 'block';
        key_down.style.display = 'block';
        exit_level.style.display = "block";
        pause.style.display = "block";
        money.style.display = 'none';
        shopName.style.display = 'none';
        nextLevel.style.display = 'none';
        enhanceStrength.style.display = 'none';
        fourLeaf.style.display = 'none';
        addStoneValue.style.display = 'none';
        addDiamondValue.style.display = 'none';
        bom.style.display = 'none';
        bomPrice.style.display = 'none';
        enhancePrice.style.display = 'none';
        leafPrice.style.display = 'none'
        stonePrice.style.display = 'none';
        diamondPrice.style.display = 'none';
        nextLevel.style.display = 'none';
        level++;
        setTimeout("createLevel(level)", 500);
    }

}
function timeUpdate() {
    draw_all();
    check_all();
}
function gold(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    switch (size) {
        case 1: {
            //this.r = canvas.width / 40;
            this.r = 20;
            this.value = 50;
        }
            break;
        case 2: {
            //this.r = canvas.width / 40;
            this.r = 25;
            this.value = 100;
        }
            break;
        case 3: {
            this.r = 45;
            this.value = 250;
        }
            break;
    }
    this.speed = 40 / this.value;
    this.owner = 0;

    this.moveSpeed = 0;
    this.init();
}
gold.prototype = {
    init: function () {
        this.draw();
    },
    draw: function () {
        if (this.owner != 0) this.moveSpeed = this.owner.moveSpeed;
        if (this.moveSpeed) {
            this.x += this.moveSpeed * Math.cos((this.owner.angle) * Math.PI / 180);
            this.y += this.moveSpeed * Math.sin((this.owner.angle) * Math.PI / 180);
        }
        var goldImg = new Image();
        goldImg.src = "https://github.com/hairleng/golden-miner-online-game/blob/master/img/gold.png?raw=true";
        if (this.size == 1)
            ctx.drawImage(goldImg, this.x - 30, this.y - 35, 50, 50);
        else if (this.size == 2)
            ctx.drawImage(goldImg, this.x - 45, this.y - 50, 90, 90);
        else if (this.size == 3)
            ctx.drawImage(goldImg, this.x - 80, this.y - 85, 150, 150);
    },
}
function stone(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    switch (size) {
        case 1: {
            this.r = 15;
            this.value = 10;
        }
            break;
        case 2: {
            this.r = 25;
            this.value = 20;
        }
            break;
    }
    this.speed = 3 / this.value;
    if (players[0].addStoneValue) this.value = this.value * 2;
    this.moveSpeed = 0;
    this.owner = 0;
    this.init();
}

stone.prototype = {
    init: function () {
        this.draw();
    },
    draw: function () {
        if (this.owner != 0) this.moveSpeed = this.owner.moveSpeed;
        if (this.moveSpeed) {
            this.x += this.moveSpeed * Math.cos((this.owner.angle) * Math.PI / 180);
            this.y += this.moveSpeed * Math.sin((this.owner.angle) * Math.PI / 180);
        }
        var stoneImg = new Image();
        stoneImg.src = "https://github.com/hairleng/golden-miner-online-game/blob/master/img/stone.png?raw=true";
        if (this.size == 1)
            ctx.drawImage(stoneImg, this.x - 15, this.y - 20, 30, 30);
        if (this.size == 2)
            ctx.drawImage(stoneImg, this.x - 30, this.y - 25, 60, 60);
    },
}
function diamond(x, y) {
    this.x = x;
    this.y = y;
    this.r = 25;
    if (players[0].addDiamondValue) this.value = 900;
    else this.value = 600;
    this.speed = 2;
    this.moveSpeed = 0;
    this.owner = 0;
    this.init();
}

diamond.prototype = {
    init: function () {
        this.draw();
    },
    draw: function () {
        if (this.owner != 0) this.moveSpeed = this.owner.moveSpeed;
        if (this.moveSpeed) {
            this.x += this.moveSpeed * Math.cos((this.owner.angle) * Math.PI / 180);
            this.y += this.moveSpeed * Math.sin((this.owner.angle) * Math.PI / 180);
        }
        var diamondImg = new Image();
        diamondImg.src = "https://github.com/hairleng/golden-miner-online-game/blob/master/img/diamond.png?raw=true";
        ctx.drawImage(diamondImg, this.x - 20, this.y - 20, 40, 40);
    },
}
function clock(x, y) {
    this.x = x;
    this.y = y;
    this.r = 25;
    this.value = -1;
    this.speed = 2;
    this.moveSpeed = 0;
    this.timeAdd = 10;
    this.owner = 0;
    this.color = "lightcoral";
    this.init();
}
clock.prototype = {
    init: function () {
        this.draw();
    },
    draw: function () {
        if (this.owner != 0) this.moveSpeed = this.owner.moveSpeed;
        if (this.moveSpeed) {
            this.x += this.moveSpeed * Math.cos((this.owner.angle) * Math.PI / 180);
            this.y += this.moveSpeed * Math.sin((this.owner.angle) * Math.PI / 180);
        }
        var clkImg = new Image();
        clkImg.src = "https://github.com/hairleng/golden-miner-online-game/blob/master/img/clock.png?raw=true";
        ctx.drawImage(clkImg, this.x - 25, this.y - 25, 50, 50);
    },
}
function mystery(x, y, size) {//神秘物品包
    this.x = x;
    this.y = y;
    this.r = 25;
    this.moveSpeed = 0;
    if (players[0].fourLeaf) {
        if (size < 3) size += 2;
    }
    switch (size) {
        case 1: {
            this.value = 222;
        }
            break;
        case 2: {
            this.value = 333;
        }
            break;
        case 3: {
            this.value = 444;
        }
            break;
        case 4: {
            this.value = 555;
        }
            break;
        case 5: {
            this.value = 666;
        }
            break;
    }
    this.speed = (Math.random(5)+1) * 0.8;
    this.owner = 0;
    this.color = "#c3723b";//屎黄色
    this.init();
}
mystery.prototype = {
    init: function () {
        this.draw();
    },
    draw: function () {
        if (this.owner != 0) this.moveSpeed = this.owner.moveSpeed;
        if (this.moveSpeed) {
            this.x += this.moveSpeed * Math.cos((this.owner.angle) * Math.PI / 180);
            this.y += this.moveSpeed * Math.sin((this.owner.angle) * Math.PI / 180);
        }
        var mysteryImg = new Image();
        mysteryImg.src = "https://github.com/hairleng/golden-miner-online-game/blob/master/img/mystery.png?raw=true";
        ctx.drawImage(mysteryImg, this.x - 25, this.y - 30, 60, 60);

    },
}
function bomb(x, y) {
    this.x = x;
    this.y = y;
    this.r = 25;
    this.explodeRatius = 200;
    this.value = 1;
    this.speed = 1;
    this.moveSpeed = 0;
    this.owner = 0;
    this.color = "black";
    this.canExplode = false;
    this.isExplode = false;
    this.explodeRatiusPic = 10;
    this.init();
}
bomb.prototype = {
    init: function () {
        this.draw();
    },
    draw: function () {
        if (this.owner != 0) {
            this.moveSpeed = this.owner.moveSpeed;

        }
        if (this.moveSpeed) {
            this.x += this.moveSpeed * Math.cos((this.owner.angle) * Math.PI / 180);
            this.y += this.moveSpeed * Math.sin((this.owner.angle) * Math.PI / 180);
        }
        var bombImg = new Image();
        bombImg.src = "https://github.com/hairleng/golden-miner-online-game/blob/master/img/bomb.png?raw=true";
        var bombImgExplode = new Image();
        bombImgExplode.src = "https://github.com/hairleng/golden-miner-online-game/blob/master/img/bomb_remain.png?raw=true";
        if (this.isExplode == true) {
            ctx.drawImage(bombImgExplode, this.x - 30, this.y - 30, 60, 60);
        } else ctx.drawImage(bombImg, this.x - 30, this.y - 30, 60, 60);
        // ctx.beginPath();
        // ctx.fillStyle = this.color;
        // ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        // ctx.fill();
    },
    explode: function () {
        if (this.owner != 0 || this.canExplode == true) {
            this.isExplode = true;
            this.canExplode = false;
            x_explode = this.x;
            y_explode = this.y;
            this.draw_explode();
            explodeAudio.play();
            for (var i = 0; i < gold_arr.length; i++) {
                if (Math.sqrt((gold_arr[i].x - this.x) * (gold_arr[i].x - this.x) +
                    (gold_arr[i].y - this.y) * (gold_arr[i].y - this.y)) < this.explodeRatius && gold_arr[i].owner == 0) {
                    gold_arr[i].x = -100;
                    gold_arr[i].y = -100;
                    gold_arr[i].moveSpeed = 0;
                    gold_arr[i].owner = 0;
                }
            }
            for (var i = 0; i < stone_arr.length; i++) {
                if (Math.sqrt((stone_arr[i].x - this.x) * (stone_arr[i].x - this.x) +
                    (stone_arr[i].y - this.y) * (stone_arr[i].y - this.y)) < this.explodeRatius && stone_arr[i].owner == 0) {
                    stone_arr[i].x = -100;
                    stone_arr[i].y = -100;
                    stone_arr[i].moveSpeed = 0;
                    stone_arr[i].owner = 0;
                }
            }
            for (var i = 0; i < diamond_arr.length; i++) {
                if (Math.sqrt((diamond_arr[i].x - this.x) * (diamond_arr[i].x - this.x) +
                    (diamond_arr[i].y - this.y) * (diamond_arr[i].y - this.y)) < this.explodeRatius && diamond_arr[i].owner == 0) {
                    diamond_arr[i].x = -100;
                    diamond_arr[i].y = -100;
                    diamond_arr[i].moveSpeed = 0;
                    diamond_arr[i].owner = 0;
                }
            }
            for (var i = 0; i < clock_arr.length; i++) {
                if (Math.sqrt((clock_arr[i].x - this.x) * (clock_arr[i].x - this.x) +
                    (clock_arr[i].y - this.y) * (clock_arr[i].y - this.y)) < this.explodeRatius && clock_arr[i].owner == 0) {
                    clock_arr[i].x = -100;
                    clock_arr[i].y = -100;
                    clock_arr[i].moveSpeed = 0;
                    clock_arr[i].owner = 0;
                }
            }
            for (var i = 0; i < flypig_arr.length; i++) {
                if (Math.sqrt((flypig_arr[i].x - this.x) * (flypig_arr[i].x - this.x) +
                    (flypig_arr[i].y - this.y) * (flypig_arr[i].y - this.y)) < this.explodeRatius && flypig_arr[i].owner == 0) {
                    flypig_arr[i].x = -100;
                    flypig_arr[i].y = -100;
                    flypig_arr[i].moveSpeed = 0;
                    flypig_arr[i].owner = 0;
                }
            }
            for (var i = 0; i < mystery_arr.length; i++) {
                if (Math.sqrt((mystery_arr[i].x - this.x) * (mystery_arr[i].x - this.x) +
                    (mystery_arr[i].y - this.y) * (mystery_arr[i].y - this.y)) < this.explodeRatius && mystery_arr[i].owner == 0) {
                    mystery_arr[i].x = -100;
                    mystery_arr[i].y = -100;
                    mystery_arr[i].moveSpeed = 0;
                    mystery_arr[i].owner = 0;
                }
            }
            for (var i = 0; i < bomb_arr.length; i++) {
                if (Math.sqrt((bomb_arr[i].x - this.x) * (bomb_arr[i].x - this.x) +
                    (bomb_arr[i].y - this.y) * (bomb_arr[i].y - this.y)) < this.explodeRatius && bomb_arr[i] != this && bomb_arr[i].owner == 0) {
                    bomb_arr[i].canExplode = true;
                    bomb_arr[i].explode();

                }
            }
        }
    },
    draw_explode: function () {
        this.explodeRatiusPic = 10;
        this.isExploding = true;
        isBombing_arr.push(this);
        bombStop1();
        function bombStop1() {
            var i = 0;
            function bombStop() {
                for (i = 0; i < isBombing_arr.length; i++) {
                    isBombing_arr[i].close_timer_explode();
                }
            }
            setTimeout(bombStop, 500);
        }
    },
    close_timer_explode: function () {
        this.isExploding = false;
        if (this.owner == 0) {
            this.x = -100;
            this.y = -100;
            this.moveSpeed = 0;
            this.owner = 0;
        }
        console.log(this);

    }
}
function flypig(beginx, endx, beginy, endy, diamond) {
    this.beginx = beginx;
    this.beginy = beginy;
    this.endx = endx;
    this.endy = endy;
    this.disx = beginx - endx;
    this.disy = beginy - endy;
    this.dis = Math.sqrt(this.disx * this.disx + this.disy * this.disy);
    this.x = this.beginx;
    this.y = this.beginy;
    this.r = 25;
    if (diamond == 1) {
        if (players[0].addDiamondValue) this.value = 902;
        else this.value = 702;
    }
    else this.value = 102;
    this.diamond = diamond;
    this.speed = 1;
    this.moveSpeed = 0;
    this.flySpeed = 10;
    this.owner = 0;
    this.color = "green";
    this.init();
}
flypig.prototype = {
    init: function () {
        this.draw();
    },
    draw: function () {
        if (this.owner != 0) {
            this.flySpeed = 0;
            this.moveSpeed = this.owner.moveSpeed;
        }
        else {
            if (Math.abs(this.x - this.beginx) > Math.abs(this.disx) ||
                Math.abs(this.x - this.endx) > Math.abs(this.disx) ||
                Math.abs(this.y - this.beginy) > Math.abs(this.disy) ||
                Math.abs(this.y - this.endy) > Math.abs(this.disy)) {
                this.flySpeed = -this.flySpeed;
            }
        }
        if (this.moveSpeed) {
            this.x += this.moveSpeed * Math.cos((this.owner.angle) * Math.PI / 180);
            this.y += this.moveSpeed * Math.sin((this.owner.angle) * Math.PI / 180);
        }
        if (this.flySpeed) {
            this.x += this.flySpeed * (-this.disx / this.dis);
            this.y += this.flySpeed * (-this.disy / this.dis);
        }
        var flypigImg = new Image();
        flypigImg.src = "https://github.com/hairleng/golden-miner-online-game/blob/master/img/flypig.png?raw=true";
        ctx.drawImage(flypigImg, this.x - 30, this.y - 25, 60, 50);
        if (this.diamond == 1) {
            var diaImg = new Image();
            diaImg.src = "https://github.com/hairleng/golden-miner-online-game/blob/master/img/diamond.png";
            ctx.drawImage(diaImg, this.x + 15, this.y - 15, 20, 20);
        }

    },
}
function player(num) {
    if (mode == 0) this.x = canvas.width / 2 - 25;
    else {
        this.x = canvas.width / 2 - 75 + 100 * num;
    }
    this.y = 35;
    this.width = 50;
    this.height = 50;
    this.money = 0;
    this.color = "blue";
    this.hook = new hook(this.x + this.width / 2);
    this.hook.owner = this;
    this.enhanceStrength = false;
    this.fourLeaf = false;
    this.addStoneValue = false;
    this.addDiamondValue = false;
    this.bom = false;
    this.bomb_num = 0;
    this.hook.init();
    this.init();
}
player.prototype = {
    init: function () {
        this.draw();
    },
    draw: function () {
        var playerImg = new Image();
        playerImg.src = "data:image/jpeg;base64,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";
        ctx.drawImage(playerImg, this.x, this.y, this.width, this.height);

    },

}
function hook(x) {
    this.x = x;
    this.y = 250;
    this.angle = 0;
    this.object = 0;
    this.status = 0;
    this.length = 0;
    this.moveSpeed = 10;
    this.rotateSpeed = 5;
    this.r = 10;
    this.maxLength = 500;
    this.color = "black";
    this.owner = 0;
    this.money_status = 0;
    this.money_size = 20;
    this.money_pos_x = 0;
    this.money_pos_y = 0;
    this.money_value = 0;
    //this.init();
}
hook.prototype = {
    init: function () {
        this.draw();
    },
    draw: function () {

        if (this.status == 0) {
            ctx.beginPath();


            //ctx.stroke();
            if (this.angle <= 10 || this.angle >= 170) this.rotateSpeed = -this.rotateSpeed;
            this.angle += this.rotateSpeed;
            //console.log(this.angle);
            ctx.save();
            ctx.translate(this.owner.x + this.owner.width / 2, this.owner.y + this.owner.height);
            ctx.rotate(this.rotateSpeed * Math.PI / 180);
            ctx.lineWidth = 1;
            ctx.lineCap = 'round';
            ctx.strokeStyle = "gray";
            ctx.beginPath();
            ctx.moveTo(0, 0);
            this.x = 30 * Math.cos(this.angle * Math.PI / 180);
            this.y = 30 * Math.sin(this.angle * Math.PI / 180);
            ctx.lineTo(this.x, this.y);
            ctx.stroke();
            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            ctx.strokeStyle = "gray";
            ctx.beginPath();
            ctx.arc(this.x + this.r * Math.cos((this.angle) * Math.PI / 180), this.y + this.r * Math.sin((this.angle) * Math.PI / 180), this.r,
                (90 + this.angle) * Math.PI / 180, (270 + this.angle) * Math.PI / 180);
            ctx.stroke();
            ctx.restore();
            this.x += this.owner.x + this.owner.width / 2;
            this.y += this.owner.y + this.owner.height;
        }
        else if (this.status == 1) {
            this.x += this.moveSpeed * Math.cos((this.angle) * Math.PI / 180);
            this.y += this.moveSpeed * Math.sin((this.angle) * Math.PI / 180);
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.lineCap = 'round';
            ctx.strokeStyle = "gray";
            ctx.moveTo(this.owner.x + this.owner.width / 2, this.owner.y + this.owner.height);
            ctx.lineTo(this.x, this.y);
            ctx.stroke();
            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            ctx.strokeStyle = "gray";
            ctx.beginPath();
            ctx.arc(this.x + this.r * Math.cos((this.angle) * Math.PI / 180), this.y + this.r * Math.sin((this.angle) * Math.PI / 180),
                this.r, (this.angle + 90) * Math.PI / 180, (this.angle - 90) * Math.PI / 180);
            ctx.stroke();
        }
        else if (this.status == 2) {
            this.x += this.moveSpeed * Math.cos((this.angle) * Math.PI / 180);
            this.y += this.moveSpeed * Math.sin((this.angle) * Math.PI / 180);
            ctx.lineWidth = 1;
            ctx.lineCap = 'round';
            ctx.strokeStyle = "gray";
            ctx.beginPath();

            ctx.moveTo(this.owner.x + this.owner.width / 2, this.owner.y + this.owner.height);
            ctx.lineTo(this.x, this.y);
            ctx.stroke();
            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            ctx.strokeStyle = "gray";
            ctx.beginPath();
            ctx.arc(this.x + this.r * Math.cos((this.angle) * Math.PI / 180), this.y + this.r * Math.sin((this.angle) * Math.PI / 180),
                this.r, (this.angle + 90) * Math.PI / 180, (this.angle - 90) * Math.PI / 180);
            ctx.stroke();
        }
    },
    check: function () {
        this.length = Math.sqrt((this.x - this.owner.x) * (this.x - this.owner.x) +
            (this.y - this.owner.y) * (this.y - this.owner.y));
        if (this.length >= this.maxLength && this.status == 1) {
            this.moveSpeed = -this.moveSpeed;
        }
        if ((this.y - this.owner.y - this.owner.height) < 30
            && this.status != 0 && this.moveSpeed < 0) {

            if (this.status == 2) {
                if (this.object.value == -1) {
                    time_all += this.object.timeAdd;
                    this.object.x = -100;
                    this.object.y = -100;
                    this.object.owner = 0;
                    this.object.moveSpeed = 0;
                    this.object = 0;
                    this.status = 0;
                    if (players[0].enhanceStrength) this.moveSpeed = 20;
                    else this.moveSpeed = 10;
                }
                else {
                    this.money_value = this.object.value;
                    if (mode == 0)
                        catching_object = this;
                    else {
                        if (this == players[0].hook) catching_object = this;
                        else catching_object1 = this;
                    }
                    this.draw_add_money();
                    this.moveSpeed = 0;
                }

            }
            else {
                this.status = 0;
                if (players[0].enhanceStrength) this.moveSpeed = 20;
                else this.moveSpeed = 10;
            }
        }
    },
    draw_add_money: function () {
        this.money_status = 1;
        this.money_size = 20;

        if (mode == 0) {
            this.money_pos_x = 630;
            this.money_pos_y = 105;
            setTimeout("catching_object.money_move_in()", 1000);
        }
        else {
            if (this == players[0].hook) {
                this.money_pos_x = 440;
                this.money_pos_y = 105;
                setTimeout("catching_object.money_move_in()", 1000);
            }
            else {
                this.money_pos_x = 670;
                this.money_pos_y = 105;
                setTimeout("catching_object1.money_move_in()", 1000);
            }
        }

    },
    money_move_in: function () {
        this.money_status = 2;
        if (mode == 0)
            setTimeout("catching_object.money_stop()", 1000);
        else {
            if (this == players[0].hook) setTimeout("catching_object.money_stop()", 1000);
            else setTimeout("catching_object1.money_stop()", 1000);
        }
    },
    money_stop: function () {
        this.money_status = 3;

        if (mode == 0) {
            catching_object.object.moveSpeed = 0;
            catching_object.object.x = -100;
            catching_object.object.y = -100;
            catching_object.status = 0;
            catching_object.object.owner.object = 0;
            if (players[0].enhanceStrength) catching_object.moveSpeed = 20;
            else catching_object.moveSpeed = 10;
            catching_object.object.owner = 0;
            setTimeout("catching_object.money_move_out()", 1000);
        }
        else {
            if (this == players[0].hook) {
                catching_object.object.moveSpeed = 0;
                catching_object.object.x = -100;
                catching_object.object.y = -100;
                catching_object.status = 0;
                catching_object.object.owner = 0;
                catching_object.object = 0;
                if (players[0].enhanceStrength) catching_object.moveSpeed = 20;
                else catching_object.moveSpeed = 10;

                setTimeout("catching_object.money_move_out()", 1000);
            }
            else {
                catching_object1.object.moveSpeed = 0;
                catching_object1.object.x = -100;
                catching_object1.object.y = -100;
                catching_object1.status = 0;
                catching_object1.object.owner = 0;
                catching_object1.object = 0;
                if (players[0].enhanceStrength) catching_object1.moveSpeed = 20;
                else catching_object1.moveSpeed = 10;

                setTimeout("catching_object1.money_move_out()", 1000);
            }
        }
    },
    money_move_out: function () {
        this.money_status = 0;
        total_money += this.money_value;
    },
}

init();