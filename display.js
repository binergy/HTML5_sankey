"use strict";

var Display = {
    init(m, canvasId, width, height) {
        this.matrix = m;
        this.mouseIsDown = false;
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');

        this.w = width;
        this.h = height;
        this.draw();
    },

    sqr( x, y ) {
        this.context.strokeStyle = "rgba(0,0,0,0.4)";
        this.context.fillStyle = "rgba(0,0,0,0.3)";
        this.context.fillRect(x,y,10,10);
        this.context.stroke();
    }, 

    go(x1, y1, x2, y2, x3, y3, x4, y4, drop, down2) {
        this.context.beginPath();

        this.sqr( x1,y1);
        this.sqr( x2,y2);
        this.sqr( x3,y3);
        this.sqr( x4,y4);

        this.context.moveTo(x1, y1);
        this.context.bezierCurveTo(x2,y2,x3,y3,x4,y4);
//        this.context.lineTo(x4,y4 );

        this.context.strokeStyle = "rgba(0,0,0,0.4)";

        this.context.fillStyle = "rgba(250,105,0,0.7)";
        this.context.stroke();

//        this.context.fill();
        this.context.restore();
    },



    getRandColor() {
        //rbga(x,y,z,a)
        var color = "rgba(";
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        var a = 0.7;

        color += r + ",";
        color += g + ",";
        color += b + ",";
        color += a + ")";

        return color;
    },



    draw() {

//R: 167 G: 219 B: 215
        var color = "rgba(167,219,215,0.9)";
        this.context.fillStyle = color;
        var x = 0;

        var stiffness = 0.4;

        for (var i = 0; i < this.matrix.length; i++) {
            var layer = this.matrix[i];
            var nextLayer = undefined;

            if (i < this.matrix.length - 1) {
                nextLayer = this.matrix[i + 1];
            }

            for (var j in layer.boxes) {
                var box = layer.boxes[j]
                this.context.fillRect(box.x, box.y, box.w, box.h);
                this.context.save();
                if (nextLayer != undefined) {

                    var box2 = nextLayer.boxes[0];

                    var distance = Math.abs( box2['x'] - ( box['x'] + box['w']))
                    distance *= stiffness;

                    var x1 = box['x'] + box['w'];
                    var y1 = box['y'];
                    
                    var x2 = box['x'] + box['w'] + distance;
                    var y2 = box['y'];

                    //var x3 = 300;
                    var x3 = box2['x'] - distance;
                    var y3 = box2['y'];

                    var x4 = box2['x'];
                    var y4 = box2['y'];

                    this.go(x1, y1, x2, y2, x3,y3,x4,y4, 41, 41);

                    this.context.beginPath();
                }
            }
        }
    },
    mouseUp(pos) {
        //        console.log("mouseUp! " + pos.x);
    },

    mouseDown(pos) {
        //        console.log("mouseDown! " + pos.x);
    },

    clicks(pos) {
        //        console.log("clicks! " + pos.x);
    },

    dragging(pos) {
        //        console.log("!!! dragging! " + pos.x);
    },
}
