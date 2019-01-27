var s;
var scl = 20;

var food;

var leftBtn;

function setup() {
    //testing mobile display.
    createCanvas(600, 600);

    s = new Snake();
    frameRate(10);
    pickLocation();
}

function draw() {
    background(51);

    if (s.eat(food)) {
        pickLocation();
    }
    s.death();
    s.update();
    s.show();

    fill(255, 40, 100);
    rect(food.x, food.y, scl, scl)

}

function pickLocation() {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)), (floor(random(rows))));
    food.mult(scl);


}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        s.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        s.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        s.dir(-1, 0);
    }
}

function touchStarted() {
    if (s.x > food.x) {
        s.dir(-1, 0);
    } else if (s.x < food.x) {
        s.dir(1, 0);
    }

}

//testing
function touchEnded() {
    if (s.y > food.y) {
        s.dir(0, -1);
    } else if (s.y < food.y) {
        s.dir(0, 1);
    }

}
