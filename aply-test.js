
const assert = require( "assert" );
const aply = require( "./aply.js" );

assert.deepEqual( aply( function hello( value ){
	return [ "hey", value, this ];
}, { "hello": "world" }, "yeah" ), [ "hey", "yeah", { "hello": "world" } ], "should be deeply equal" );

console.log( "ok" );
