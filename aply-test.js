
const assert = require( "assert" );
const aply = require( "./aply.js" );

assert.deepEqual( aply(
		function hello( value ){ return [ "hey", value, this ]; },
			{ "hello": "world" }, "yeah"
	),
	[ "hey", "yeah", { "hello": "world" } ],
	"should be equal to [ 'hey', 'yeah', { 'hello': 'world' } ]" );

assert.deepEqual( aply(
	function hello( value, data ){ return [ "hey", value, data, this ]; },
		{ "hello": "world" }, "yeah", 123 ),
	[ "hey", "yeah", 123, { "hello": "world" } ],
	"should be equal to [ 'hey', 'yeah', 123, { 'hello': 'world' } ]" );

assert.deepEqual( aply(
	function test( parameter ){ return Array.from( arguments ); },
		"test", [ "hello", [ "world" ], "yeah" ] ),
	[ "hello", [ "world" ], "yeah" ],
	"should be equal to [ 'hello', [ 'world' ], 'yeah' ]" );

assert.deepEqual( aply(
	function test( parameter ){
		return Array.from( arguments );
	}, "test", [ "hello", "world", "yeah" ] ),
	[ "hello", "world", "yeah" ],
	"should be equal to [ 'hello', 'world', 'yeah' ]" );

console.log( "ok" );
