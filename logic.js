"use strict";

var Box = function(x,y,w,h,cohort) {
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.cohort = cohort;
}
//Box.prototype = {todo : function() {}}

var Layer = function( ary, height ) {
    this.groups = ary;
    this.sparsity = 0;
    var total = 0;
    for ( var g in this.groups ) {
        total += this.groups[g]; 
    }
    this.sparsity = ( height - total ) / ( ary.length + 1 );
    this.population = total;
    this.boxes = []; 
}

var Logic = {
    init : function(width, height) {
        this.w = width;
        this.h = height;
        this.matrix = [];
        this.people = 50000; 
        this.populate();
    },

    populate : function() {
        // make the basic random population of cohorts-to-be
        // and also make sure that they'll fix into the screen 
        // height

        var possible = [2,3,5,6,6,6,8,9]; 
        var last_group_count = -1;
        for ( var layer = 0; layer < 10; layer++ ) {
            var pick = Math.floor( Math.random() * possible.length);

            var group_count = possible[pick];
            // mimick the long term stabile groups which tend to be very few
            // i.e., just lock in 1 group and roll through the rest of the timeline
            // with that one
            if ( last_group_count === 1 ) {
                group_count = 1;
            }
            last_group_count = group_count;
            var max_possible = this.h / group_count;
            var ary = [];
            for ( var i = 0; i < group_count; i++ ) {
                var val = Math.random() * max_possible;
                if ( val < 6 ) { 
                    val = 5;
                } 
                ary[i] = val;
            }
            this.matrix[layer] = new Layer( ary, this.h );
        }
        this.makeBoxCohort(); 
    },

    makeBoxCohort : function() { 
        var step = 190;
        var over = 20;
        for (var i in this.matrix) {
            var layer = this.matrix[i];

            var down = 0;

            down += layer.sparsity;
            var total_per = 0; 
            for (var j in layer.groups) {
                var size = layer.groups[j];

                var ratio =  size / this.h; 
                total_per += ratio;

                var cohort = this.people * total_per;
                layer.boxes[j] = new Box( over, down, 40, size, cohort );

                down += size;
                down += layer.sparsity;
            }
            this.people *= total_per;
            over += step;
        }
    },
}

//////////////////// //////////////////// //////////////////// ////////////////////
try { 
    module.exports.Logic = Logic;
    module.exports.Layer = Layer;
} catch ( ignore ) {
    // This will be tripped only if loaded into a webpage.
}
