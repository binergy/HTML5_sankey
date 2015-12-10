"use strict";

var Box = function() {
    this.x=-1;
    this.y=-1;
    this.w=-1;
    this.h=-1;
}

var Layer = function( ary, height ) {
    this.groups = ary;
    this.sparsity = 0;
    var total = 0;
    for ( var g in this.groups ) {
        total += this.groups[g]; 
    }
    this.sparsity = ( height - total ) / ( ary.length + 1 );
    this.population = total;
}

function log( s ) {
    console.log( s ); 
}
var Logic = {
    init : function(width, height) {
        this.w = width;
        this.h = height;
        this.matrix = [];

        this.populate();
    },

    populate : function() {

        var possible = [1,2,3,5,6,6,6,8,9]; 
        var last_group_count = -1;
        for ( var layer = 0; layer < 2; layer++ ) {
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
                ary[i] = Math.random() * max_possible;
            }
            this.matrix[layer] = new Layer( ary, this.h );
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