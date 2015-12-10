require("./logic").Layer;
var Logic = require("./logic").Logic;


var UnitTest = {
    setup : function(width, height) {
        this.w = width;
        this.h = height;
        Logic.init( this.w, this.h);

        this.populate_test();
        this.layerObj_test();
        this.matrixShape_test();
    },

    populate_test : function() {
        var bar = 1; 
        var isOk = false;
        if ( Logic.matrix.length > bar ) {
            isOk = true; 
        }
        this.verdict("populate_test", isOk );
    },
    matrixShape_test : function() {
        var bigEnough = true; 
        for ( var i in Logic.matrix ) {
            var layer = Logic.matrix[i]; 
//            console.log("groups: " + layer.groups.length );
            for ( var j in layer.groups ) {
//                console.log("\t\t" + layer.groups[j]);
                if ( layer.groups[j] < 1 ) {
                    bigEnough = false;
                }
            }
        } 

        var squareEnough = false;
        if ( Logic.matrix.length > 1 ) {
            if ( Logic.matrix[0].groups.length > 0 ) {
                squareEnough = true;

            }
        }
//        console.log("BE: " + bigEnough );
//        console.log("SE " + squareEnough); 
        var isOk = true == squareEnough == bigEnough; 
        this.verdict("matrixShape_test", isOk );
    },

    layerObj_test : function() {
        var bar = 1;
        var isOk = false;
        var layer =  Logic.matrix[0]
        if ( ! layer.groups.length > bar ) {
            isOk = true; 
        }

        var totalSparsity = layer.sparsity * ( layer.groups.length  + 1 );
        var total = totalSparsity + layer.population;
        
        // slop is unlikely to be needed, but, random numbers...  
        // Anyhow, does not hurt.
        var slop = 1;
        if ( this.h > ( total - 1 ) && this.h < ( total + 1 ) ) { 
            isOk = true;
        } 
        this.verdict("layerObj_test", isOk );
    },

    verdict : function ( caller, isOk ) { 
        var v = isOk ? "PASS" : "FAIL";
        console.log( v + "\t" + caller ); 
    }
}
UnitTest.setup( 1500,500 );

//var test = new UnitTest();