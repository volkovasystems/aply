"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "aply",
			"path": "aply/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/aply.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"aply": "aply"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const aply = require( "./aply.js" );
//: @end-server

//: @client:
const aply = require( "./aply.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "aply", ( ) => {

	describe( "`aply( function hello( value ){ return [ 'hey', value, this ]; }, { 'hello': 'world' }, 'yeah' )`", ( ) => {
		it( "should be equal to [ 'hey', 'yeah', { 'hello': 'world' } ]", ( ) => {

			assert.deepEqual( aply( function hello( value ){ return [ 'hey', value, this ]; },
				{ 'hello': 'world' }, 'yeah' ), [ "hey", "yeah", { "hello": "world" } ] );

		} );
	} );

	describe( "`aply( function hello( value, data ){ return [ 'hey', value, data, this ]; }, { 'hello': 'world' }, 'yeah', 123 )`", ( ) => {
		it( "should be equal to [ 'hey', 'yeah', 123, { 'hello': 'world' } ]", ( ) => {

			assert.deepEqual( aply( function hello( value, data ){ return [ "hey", value, data, this ] },
				{ "hello": "world" }, "yeah", 123 ),
				[ "hey", "yeah", 123, { "hello": "world" } ] );

		} );
	} );

	describe( "`aply( function test( parameter ){ return Array.from( arguments ); }, 'test', [ 'hello', [ 'world' ], 'yeah' ] )`", ( ) => {
		it( "should be equal to [ 'hello', [ 'world' ], 'yeah' ]", ( ) => {

			assert.deepEqual( aply( function test( parameter ){ return Array.from( arguments ) },
				"test", [ "hello", [ "world" ], "yeah" ] ),
				[ "hello", [ "world" ], "yeah" ] );

		} );
	} );

	describe( "`aply( function test( parameter ){ return Array.from( arguments ) }, 'test', [ 'hello', 'world', 'yeah' ] )`", ( ) => {
		it( "should be equal to [ 'hello', 'world', 'yeah' ]", ( ) => {

			assert.deepEqual( aply( function test( parameter ){ return Array.from( arguments ) },
				"test", [ "hello", "world", "yeah" ] ),
				[ "hello", "world", "yeah" ] );

		} );
	} );

} );

//: @end-server


//: @client:

describe( "aply", ( ) => {

	describe( "`aply( function hello( value ){ return [ 'hey', value, this ]; }, { 'hello': 'world' }, 'yeah' )`", ( ) => {
		it( "should be equal to [ 'hey', 'yeah', { 'hello': 'world' } ]", ( ) => {

			assert.deepEqual( aply( function hello( value ){ return [ 'hey', value, this ]; },
				{ 'hello': 'world' }, 'yeah' ), [ "hey", "yeah", { "hello": "world" } ] );

		} );
	} );

	describe( "`aply( function hello( value, data ){ return [ 'hey', value, data, this ]; }, { 'hello': 'world' }, 'yeah', 123 )`", ( ) => {
		it( "should be equal to [ 'hey', 'yeah', 123, { 'hello': 'world' } ]", ( ) => {

			assert.deepEqual( aply( function hello( value, data ){ return [ "hey", value, data, this ] },
				{ "hello": "world" }, "yeah", 123 ),
				[ "hey", "yeah", 123, { "hello": "world" } ] );

		} );
	} );

	describe( "`aply( function test( parameter ){ return Array.from( arguments ); }, 'test', [ 'hello', [ 'world' ], 'yeah' ] )`", ( ) => {
		it( "should be equal to [ 'hello', [ 'world' ], 'yeah' ]", ( ) => {

			assert.deepEqual( aply( function test( parameter ){ return Array.from( arguments ) },
				"test", [ "hello", [ "world" ], "yeah" ] ),
				[ "hello", [ "world" ], "yeah" ] );

		} );
	} );

	describe( "`aply( function test( parameter ){ return Array.from( arguments ) }, 'test', [ 'hello', 'world', 'yeah' ] )`", ( ) => {
		it( "should be equal to [ 'hello', 'world', 'yeah' ]", ( ) => {

			assert.deepEqual( aply( function test( parameter ){ return Array.from( arguments ) },
				"test", [ "hello", "world", "yeah" ] ),
				[ "hello", "world", "yeah" ] );

		} );
	} );

} );

//: @end-client


//: @bridge:

describe( "aply", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`aply( function hello( value ){ return [ 'hey', value, this ]; }, { 'hello': 'world' }, 'yeah' )`", ( ) => {
		it( "should be equal to [ 'hey', 'yeah', { 'hello': 'world' } ]", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){

					let test = JSON.stringify( aply( function hello( value ){ return [ 'hey', value, this ]; },
						{ 'hello': 'world' }, 'yeah' ) );

					return test;

				}

			).value;
			//: @end-ignore
			assert.deepEqual( JSON.parse( result ), [ "hey", "yeah", { "hello": "world" } ] );

		} );
	} );

	describe( "`aply( function hello( value, data ){ return [ 'hey', value, data, this ]; }, { 'hello': 'world' }, 'yeah', 123 )`", ( ) => {
		it( "should be equal to [ 'hey', 'yeah', 123, { 'hello': 'world' } ]", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){

					let test = JSON.stringify( aply( function hello( value, data ){ return [ "hey", value, data, this ] },
						{ "hello": "world" }, "yeah", 123 ) );

					return test;

				}

			).value;
			//: @end-ignore
			assert.deepEqual( JSON.parse( result ), [ "hey", "yeah", 123, { "hello": "world" } ] );

		} );
	} );

	describe( "`aply( function test( parameter ){ return Array.from( arguments ); }, 'test', [ 'hello', [ 'world' ], 'yeah' ] )`", ( ) => {
		it( "should be equal to [ 'hello', [ 'world' ], 'yeah' ]", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){

					let test = JSON.stringify( aply( function test( parameter ){ return Array.from( arguments ) },
						"test", [ "hello", [ "world" ], "yeah" ] ) );

					return test;

				}

			).value;
			//: @end-ignore
			assert.deepEqual( JSON.parse( result ), [ "hello", [ "world" ], "yeah" ] );

		} );
	} );

	describe( "`aply( function test( parameter ){ return Array.from( arguments ) }, 'test', [ 'hello', 'world', 'yeah' ] )`", ( ) => {
		it( "should be equal to [ 'hello', 'world', 'yeah' ]", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){

					let test = JSON.stringify( aply( function test( parameter ){ return Array.from( arguments ) },
						"test", [ "hello", "world", "yeah" ] ) );

					return test;

				}

			).value;
			//: @end-ignore
			assert.deepEqual( JSON.parse( result ), [ "hello", "world", "yeah" ] );

		} );
	} );

} );

//: @end-bridge
