"use strict";

var Box = function(x,y,width,height) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
}

var logic = {
    w : 0,
    h : 0,
    init( width, height ) {
        console.log("W : " + width + "   H " + height ); 
        this.w = width;
        this.h = height;

        this.canvas = document.getElementById("background");
        this.context = this.canvas.getContext('2d');
        /*
        this.matrix = []
        this.matrix[0] = []; 
        this.matrix[0][0] = new Box( 20, 20, 40, 100 );
        this.matrix[0][1] = new Box( 120, 40, 40, 100 );
        */
        this.matrix = []; 
        this.draw();
    },

    draw() {
        var color ="rgba(50,50,50,0.9)";
        this.matrix = []; 
        for ( var layer = 0; layer < 1; layer++ ) { 
            this.matrix[layer] = [];
            var available = this.h * 0.60;
            var h = 0;
            var y = 0; 
            var looping = true;
            var loop = 0;
            var stop = 10;
            var keep_alive = true; 
            var tally = 0;
                var color ="rgba(50,50,50,0.9)";

            while ( keep_alive && loop < stop ) {
                var size = Math.random() * available;
                y += 2;
                tally += y + size;
                if ( tally > this.h ) {
                    size = this.h - 2;
                    keep_alive = false;
                } 
                var box = new Box( 20, y, 40, size ); 
//console.log("LOOP " + loop +"   height " + this.h +"    TALLY " + tally.toFixed(2) + " size " + size.toFixed(2) ); 


console.log("LOOP " + loop +" y: " + box.y + "     h " + box.h ); 
y += size;
  this.context.fillStyle = color;
                this.context.fillRect(box.x,box.y,box.w,box.h);
              

                this.matrix[layer][loop] = box;

                loop++;
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

function log(s) {
    console.log(s);
}