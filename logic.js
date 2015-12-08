"use strict";

var Box = function(x,y,width,height) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
}



var logic = {


    init() {

        this.canvas = document.getElementById("background");
        this.context = this.canvas.getContext('2d');

        this.matrix = []
        this.matrix[0] = []; 
        this.matrix[0][0] = new Box( 20, 20, 40, 100 );
        this.matrix[0][1] = new Box( 120, 40, 40, 100 );


        this.draw();
    },

    draw() {

        for ( var layer in this.matrix ) { 

var a = [];
//a[0] = "#333333";
//a[1] = "#ff0000";
//a[0]="rgb(32,45,21)";
//a[1]="rgb(123,145,21)";
a[0]="rgba(32,45,21,0.9)";
a[1]="rgba(123,145,21,0.9)";

            for ( var box in this.matrix[layer] ) {
                var obj = this.matrix[layer][box]; 

var r_a =  0.3; 
//this.context.fillStyle = "rgba(32, 45, 21, r_a)";

                this.context.fillStyle = a[box];//"#333333";
                this.context.fillRect(obj.x,obj.y,obj.w,obj.h);

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