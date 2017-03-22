"use strict";
const clog = require('./index');

describe(__filename, function(){
	it("output null", function(done){
		// fbkt().clog("NULL", null);
		done();
	});
	
	it("output undefined", function(done){
		// fbkt().clog("UNDEFINED", undefined);
		done();
	});

	it.only("output json", function(done){
	  clog('TEST JSON', {
	    some: 'THING',
      complex: {
	      name: 'COMPLEX',
        data: [
          {
            id: 1,
            text: "TEXT DATA"
          }
        ]
      }
    });
	  done();
  })
});