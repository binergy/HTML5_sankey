"use strict";

var mouseController = {

    init: function(canvasId, main_logic) {

        this.mouseIsDown = false;
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');

        //this.canvas.addEventListener('touchstart',function(evt){
        this.canvas.addEventListener('click', function(evt) {
            //touchstart
            main_logic.clicks(mouseController.getMousePos(evt));
        }, false);

        this.canvas.addEventListener('mouseup', function(evt) {
            mouseController.mouseIsDown = true;
            main_logic.mouseUp(mouseController.getMousePos(evt));
        }, false);


        this.canvas.addEventListener('mousedown', function(evt) {
            mouseController.mouseIsDown = true;
            main_logic.mouseDown(mouseController.getMousePos(evt));
        }, false);

        this.canvas.addEventListener('mousemove', function(evt) {
            if (mouseController.mouseIsDown) {
                main_logic.dragging(mouseController.getMousePos(evt));
            } else {}
        }, false);

        this.canvas.addEventListener('mouseup', function(evt) {
            main_logic.mouseIsDown = false;
        }, false);
    },

    getMousePos: function(evt) {
        var rect = this.canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    },
};