let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let width, height, bubbles, /*target,*/ animateHeader = true;

initHeader();
// InnerWidth returns the interior width of the window in pixels.
// This includes the width of the vertical scroll bar, if one is present.
function initHeader() {
    width = window.innerWidth;
    height = window.innerHeight;
    // target = {x: 0, y: height};

// create particles
    bubbles = [];
    for(let i = 0; i < width * 0.9; i++) {
        let bubble = new Circle();
        bubbles.push(bubble);
    }
    animate();
}

function animate() {
    if(animateHeader) {
            ctx.clearRect(0, 0, width, height);
            for(let i in bubbles) {
                bubbles[i].draw();
            }
        }
    requestAnimationFrame(animate);
}

// Canvas manipulation
function Circle() {
    let _this = this;

    // constructor
    (function() {
        _this.pos = {};
        init();
        console.log(_this);
    })();

    function init() {
        _this.pos.x = Math.random() * width;
        _this.pos.y = height + Math.random() * 150;
        _this.alpha = 0.1 + Math.random() * 0.9;
        _this.scale = 0.1 + Math.random() * 0.9;
        _this.velocity = Math.random();
    }

    this.draw = function() {
        if(_this.alpha <= 0) {
            init();
        }
        _this.pos.y -= _this.velocity;
        _this.alpha -= 0.0005;
        ctx.beginPath();
        ctx.arc(_this.pos.x, _this.pos.y, _this.scale * 10, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'rgba(255,244,144,'+ _this.alpha+')';
        ctx.fill();
        };
}