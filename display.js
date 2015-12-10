"use strict";

var Display = {
    init( m, canvasId, width, height ) {
        this.matrix = m;
        this.mouseIsDown = false;
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');


        this.w = width;
        this.h = height;
        this.draw(); 
    },

    draw() {
                var color ="rgba(50,50,50,0.9)";

              this.context.fillStyle = color;
              var step = 100; 
            var over = 20; 
              for ( var i in this.matrix ) {
                var layer = this.matrix[i]; 

                var down = 0 ; 

                down += layer.sparsity;
                for ( var j in layer.groups ) {

                    var size = layer.groups[j]; 

                    this.context.fillRect(over,down,40,size);

                    down += size; 
                    down += layer.sparsity;


                }

                over += step; 


              }

    //            this.context.fillRect(box.x,box.y,box.w,box.h);
//        var over = 20; 

  //  this.context.fillRect(20,20,20,20);


/* 
        for ( var layer in this.matrix ) {
            var down = 0; 
            for ( var element in this.matrix[layer]) {
                var w = 40;
                var h = this.matrix[layer][element].h;
                var x = over;
                down += h;
                var y = down;

                this.context.fillRect(x,y,w,h);
            }
            over += 60;
        }
        */
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
