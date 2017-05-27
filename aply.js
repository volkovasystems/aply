/*;
	@module-license:
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
	@end-module-license

	@module-configuration:
		{
			"package": "aply",
			"path": "aply/aply.js",
			"file": "aply.js",
			"module": "aply",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/aply.git",
			"test": "aply-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Simple bind and apply.

		If you pass a falsy method, it will default to a function that
			will throw an no operation error.
	@end-module-documentation

	@include:
		{
			"budge": "budge",
			"protype": "protype",
			"wichevr": "wichevr",
			"wichis": "wichis",
			"zelf": "zelf"
		}
	@end-include
*/

const budge = require( "budge" );
const protype = require( "protype" );
const wichevr = require( "wichevr" );
const wichis = require( "wichis" );
const zelf = require( "zelf" );

const aply = function aply( method, context, parameter ){
	/*;
		@meta-configuration:
			{
				"method:required": "function",
				"context:required": "*",
				"parameter": "..."
			}
		@end-meta-configuration
	*/

	method = wichevr( method, function procedure( ){ throw new Error( "no operation" ); } );

	if( !protype( method, FUNCTION ) ){
		throw new Error( "invalid method" );
	}

	return method.apply( wichis( context, zelf( this ) ), budge( arguments, 2 ) );
};

module.exports = aply;
