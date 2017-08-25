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

var assert = require("should");





//: @bridge:
var path = require("path");
//: @end-bridge








//: @bridge:

describe("aply", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`aply( function hello( value ){ return [ 'hey', value, this ]; }, { 'hello': 'world' }, 'yeah' )`", function () {
		it("should be equal to [ 'hey', 'yeah', { 'hello': 'world' } ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   
   					let test = JSON.stringify( aply( function hello( value ){ return [ 'hey', value, this ]; },
   						{ 'hello': 'world' }, 'yeah' ) );
   
   					return test;
   
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(JSON.parse(result), ["hey", "yeah", { "hello": "world" }]);

		});
	});

	describe("`aply( function hello( value, data ){ return [ 'hey', value, data, this ]; }, { 'hello': 'world' }, 'yeah', 123 )`", function () {
		it("should be equal to [ 'hey', 'yeah', 123, { 'hello': 'world' } ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   
   					let test = JSON.stringify( aply( function hello( value, data ){ return [ "hey", value, data, this ] },
   						{ "hello": "world" }, "yeah", 123 ) );
   
   					return test;
   
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(JSON.parse(result), ["hey", "yeah", 123, { "hello": "world" }]);

		});
	});

	describe("`aply( function test( parameter ){ return Array.from( arguments ); }, 'test', [ 'hello', [ 'world' ], 'yeah' ] )`", function () {
		it("should be equal to [ 'hello', [ 'world' ], 'yeah' ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   
   					let test = JSON.stringify( aply( function test( parameter ){ return Array.from( arguments ) },
   						"test", [ "hello", [ "world" ], "yeah" ] ) );
   
   					return test;
   
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(JSON.parse(result), ["hello", ["world"], "yeah"]);

		});
	});

	describe("`aply( function test( parameter ){ return Array.from( arguments ) }, 'test', [ 'hello', 'world', 'yeah' ] )`", function () {
		it("should be equal to [ 'hello', 'world', 'yeah' ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   
   					let test = JSON.stringify( aply( function test( parameter ){ return Array.from( arguments ) },
   						"test", [ "hello", "world", "yeah" ] ) );
   
   					return test;
   
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(JSON.parse(result), ["hello", "world", "yeah"]);

		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJkZWVwRXF1YWwiLCJKU09OIiwicGFyc2UiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7OztBQU1BO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQTs7Ozs7Ozs7O0FBU0E7O0FBRUFFLFNBQVUsTUFBVixFQUFrQixZQUFPOztBQUV4QixLQUFJQyx3QkFBdUJGLEtBQUtHLE9BQUwsQ0FBY0MsU0FBZCxFQUF5QixhQUF6QixDQUEzQjs7QUFFQUgsVUFBVSxtR0FBVixFQUErRyxZQUFPO0FBQ3JISSxLQUFJLDREQUFKLEVBQWtFLFlBQU87QUFDeEU7QUFDSDs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNHUCxVQUFPUSxTQUFQLENBQWtCQyxLQUFLQyxLQUFMLENBQVlDLE1BQVosQ0FBbEIsRUFBd0MsQ0FBRSxLQUFGLEVBQVMsTUFBVCxFQUFpQixFQUFFLFNBQVMsT0FBWCxFQUFqQixDQUF4Qzs7QUFFQSxHQW5CRDtBQW9CQSxFQXJCRDs7QUF1QkFSLFVBQVUsb0hBQVYsRUFBZ0ksWUFBTztBQUN0SUksS0FBSSxpRUFBSixFQUF1RSxZQUFPO0FBQzdFO0FBQ0g7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDR1AsVUFBT1EsU0FBUCxDQUFrQkMsS0FBS0MsS0FBTCxDQUFZQyxNQUFaLENBQWxCLEVBQXdDLENBQUUsS0FBRixFQUFTLE1BQVQsRUFBaUIsR0FBakIsRUFBc0IsRUFBRSxTQUFTLE9BQVgsRUFBdEIsQ0FBeEM7O0FBRUEsR0FuQkQ7QUFvQkEsRUFyQkQ7O0FBdUJBUixVQUFVLG1IQUFWLEVBQStILFlBQU87QUFDcklJLEtBQUkscURBQUosRUFBMkQsWUFBTztBQUNqRTtBQUNIOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0dQLFVBQU9RLFNBQVAsQ0FBa0JDLEtBQUtDLEtBQUwsQ0FBWUMsTUFBWixDQUFsQixFQUF3QyxDQUFFLE9BQUYsRUFBVyxDQUFFLE9BQUYsQ0FBWCxFQUF3QixNQUF4QixDQUF4Qzs7QUFFQSxHQW5CRDtBQW9CQSxFQXJCRDs7QUF1QkFSLFVBQVUsOEdBQVYsRUFBMEgsWUFBTztBQUNoSUksS0FBSSxpREFBSixFQUF1RCxZQUFPO0FBQzdEO0FBQ0g7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDR1AsVUFBT1EsU0FBUCxDQUFrQkMsS0FBS0MsS0FBTCxDQUFZQyxNQUFaLENBQWxCLEVBQXdDLENBQUUsT0FBRixFQUFXLE9BQVgsRUFBb0IsTUFBcEIsQ0FBeEM7O0FBRUEsR0FuQkQ7QUFvQkEsRUFyQkQ7O0FBdUJBLENBaEdEOztBQWtHQSIsImZpbGUiOiJ0ZXN0LmJyaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiYXBseVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiYXBseS90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvYXBseS5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwiYXBseVwiOiBcImFwbHlcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5jb25zdCBwYXRoID0gcmVxdWlyZSggXCJwYXRoXCIgKTtcbi8vOiBAZW5kLWJyaWRnZVxuXG5cblxuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuXG5kZXNjcmliZSggXCJhcGx5XCIsICggKSA9PiB7XG5cblx0bGV0IGJyaWRnZVVSTCA9IGBmaWxlOi8vJHsgcGF0aC5yZXNvbHZlKCBfX2Rpcm5hbWUsIFwiYnJpZGdlLmh0bWxcIiApIH1gO1xuXG5cdGRlc2NyaWJlKCBcImBhcGx5KCBmdW5jdGlvbiBoZWxsbyggdmFsdWUgKXsgcmV0dXJuIFsgJ2hleScsIHZhbHVlLCB0aGlzIF07IH0sIHsgJ2hlbGxvJzogJ3dvcmxkJyB9LCAneWVhaCcgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyAnaGV5JywgJ3llYWgnLCB7ICdoZWxsbyc6ICd3b3JsZCcgfSBdXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IEpTT04uc3RyaW5naWZ5KCBhcGx5KCBmdW5jdGlvbiBoZWxsbyggdmFsdWUgKXsgcmV0dXJuIFsgJ2hleScsIHZhbHVlLCB0aGlzIF07IH0sXG5cdFx0XHRcdFx0XHR7ICdoZWxsbyc6ICd3b3JsZCcgfSwgJ3llYWgnICkgKTtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIEpTT04ucGFyc2UoIHJlc3VsdCApLCBbIFwiaGV5XCIsIFwieWVhaFwiLCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGFwbHkoIGZ1bmN0aW9uIGhlbGxvKCB2YWx1ZSwgZGF0YSApeyByZXR1cm4gWyAnaGV5JywgdmFsdWUsIGRhdGEsIHRoaXMgXTsgfSwgeyAnaGVsbG8nOiAnd29ybGQnIH0sICd5ZWFoJywgMTIzIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgJ2hleScsICd5ZWFoJywgMTIzLCB7ICdoZWxsbyc6ICd3b3JsZCcgfSBdXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IEpTT04uc3RyaW5naWZ5KCBhcGx5KCBmdW5jdGlvbiBoZWxsbyggdmFsdWUsIGRhdGEgKXsgcmV0dXJuIFsgXCJoZXlcIiwgdmFsdWUsIGRhdGEsIHRoaXMgXSB9LFxuXHRcdFx0XHRcdFx0eyBcImhlbGxvXCI6IFwid29ybGRcIiB9LCBcInllYWhcIiwgMTIzICkgKTtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIEpTT04ucGFyc2UoIHJlc3VsdCApLCBbIFwiaGV5XCIsIFwieWVhaFwiLCAxMjMsIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgYXBseSggZnVuY3Rpb24gdGVzdCggcGFyYW1ldGVyICl7IHJldHVybiBBcnJheS5mcm9tKCBhcmd1bWVudHMgKTsgfSwgJ3Rlc3QnLCBbICdoZWxsbycsIFsgJ3dvcmxkJyBdLCAneWVhaCcgXSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbICdoZWxsbycsIFsgJ3dvcmxkJyBdLCAneWVhaCcgXVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXG5cdFx0XHRcdFx0bGV0IHRlc3QgPSBKU09OLnN0cmluZ2lmeSggYXBseSggZnVuY3Rpb24gdGVzdCggcGFyYW1ldGVyICl7IHJldHVybiBBcnJheS5mcm9tKCBhcmd1bWVudHMgKSB9LFxuXHRcdFx0XHRcdFx0XCJ0ZXN0XCIsIFsgXCJoZWxsb1wiLCBbIFwid29ybGRcIiBdLCBcInllYWhcIiBdICkgKTtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIEpTT04ucGFyc2UoIHJlc3VsdCApLCBbIFwiaGVsbG9cIiwgWyBcIndvcmxkXCIgXSwgXCJ5ZWFoXCIgXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGFwbHkoIGZ1bmN0aW9uIHRlc3QoIHBhcmFtZXRlciApeyByZXR1cm4gQXJyYXkuZnJvbSggYXJndW1lbnRzICkgfSwgJ3Rlc3QnLCBbICdoZWxsbycsICd3b3JsZCcsICd5ZWFoJyBdIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgJ2hlbGxvJywgJ3dvcmxkJywgJ3llYWgnIF1cIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gSlNPTi5zdHJpbmdpZnkoIGFwbHkoIGZ1bmN0aW9uIHRlc3QoIHBhcmFtZXRlciApeyByZXR1cm4gQXJyYXkuZnJvbSggYXJndW1lbnRzICkgfSxcblx0XHRcdFx0XHRcdFwidGVzdFwiLCBbIFwiaGVsbG9cIiwgXCJ3b3JsZFwiLCBcInllYWhcIiBdICkgKTtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIEpTT04ucGFyc2UoIHJlc3VsdCApLCBbIFwiaGVsbG9cIiwgXCJ3b3JsZFwiLCBcInllYWhcIiBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1icmlkZ2VcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
