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
              */var _from = require("babel-runtime/core-js/array/from");var _from2 = _interopRequireDefault(_from);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should");



//: @client:
var aply = require("./aply.support.js");
//: @end-client







//: @client:

describe("aply", function () {

	describe("`aply( function hello( value ){ return [ 'hey', value, this ]; }, { 'hello': 'world' }, 'yeah' )`", function () {
		it("should be equal to [ 'hey', 'yeah', { 'hello': 'world' } ]", function () {

			assert.deepEqual(aply(function hello(value) {return ['hey', value, this];},
			{ 'hello': 'world' }, 'yeah'), ["hey", "yeah", { "hello": "world" }]);

		});
	});

	describe("`aply( function hello( value, data ){ return [ 'hey', value, data, this ]; }, { 'hello': 'world' }, 'yeah', 123 )`", function () {
		it("should be equal to [ 'hey', 'yeah', 123, { 'hello': 'world' } ]", function () {

			assert.deepEqual(aply(function hello(value, data) {return ["hey", value, data, this];},
			{ "hello": "world" }, "yeah", 123),
			["hey", "yeah", 123, { "hello": "world" }]);

		});
	});

	describe("`aply( function test( parameter ){ return Array.from( arguments ); }, 'test', [ 'hello', [ 'world' ], 'yeah' ] )`", function () {
		it("should be equal to [ 'hello', [ 'world' ], 'yeah' ]", function () {

			assert.deepEqual(aply(function test(parameter) {return (0, _from2.default)(arguments);},
			"test", ["hello", ["world"], "yeah"]),
			["hello", ["world"], "yeah"]);

		});
	});

	describe("`aply( function test( parameter ){ return Array.from( arguments ) }, 'test', [ 'hello', 'world', 'yeah' ] )`", function () {
		it("should be equal to [ 'hello', 'world', 'yeah' ]", function () {

			assert.deepEqual(aply(function test(parameter) {return (0, _from2.default)(arguments);},
			"test", ["hello", "world", "yeah"]),
			["hello", "world", "yeah"]);

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiYXBseSIsImRlc2NyaWJlIiwiaXQiLCJkZWVwRXF1YWwiLCJoZWxsbyIsInZhbHVlIiwiZGF0YSIsInRlc3QiLCJwYXJhbWV0ZXIiLCJhcmd1bWVudHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsbUJBQVQsQ0FBYjtBQUNBOzs7Ozs7OztBQVFBOztBQUVBRSxTQUFVLE1BQVYsRUFBa0IsWUFBTzs7QUFFeEJBLFVBQVUsbUdBQVYsRUFBK0csWUFBTztBQUNySEMsS0FBSSw0REFBSixFQUFrRSxZQUFPOztBQUV4RUosVUFBT0ssU0FBUCxDQUFrQkgsS0FBTSxTQUFTSSxLQUFULENBQWdCQyxLQUFoQixFQUF1QixDQUFFLE9BQU8sQ0FBRSxLQUFGLEVBQVNBLEtBQVQsRUFBZ0IsSUFBaEIsQ0FBUCxDQUFnQyxDQUEvRDtBQUNqQixLQUFFLFNBQVMsT0FBWCxFQURpQixFQUNLLE1BREwsQ0FBbEIsRUFDaUMsQ0FBRSxLQUFGLEVBQVMsTUFBVCxFQUFpQixFQUFFLFNBQVMsT0FBWCxFQUFqQixDQURqQzs7QUFHQSxHQUxEO0FBTUEsRUFQRDs7QUFTQUosVUFBVSxvSEFBVixFQUFnSSxZQUFPO0FBQ3RJQyxLQUFJLGlFQUFKLEVBQXVFLFlBQU87O0FBRTdFSixVQUFPSyxTQUFQLENBQWtCSCxLQUFNLFNBQVNJLEtBQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCQyxJQUF2QixFQUE2QixDQUFFLE9BQU8sQ0FBRSxLQUFGLEVBQVNELEtBQVQsRUFBZ0JDLElBQWhCLEVBQXNCLElBQXRCLENBQVAsQ0FBcUMsQ0FBMUU7QUFDakIsS0FBRSxTQUFTLE9BQVgsRUFEaUIsRUFDSyxNQURMLEVBQ2EsR0FEYixDQUFsQjtBQUVDLElBQUUsS0FBRixFQUFTLE1BQVQsRUFBaUIsR0FBakIsRUFBc0IsRUFBRSxTQUFTLE9BQVgsRUFBdEIsQ0FGRDs7QUFJQSxHQU5EO0FBT0EsRUFSRDs7QUFVQUwsVUFBVSxtSEFBVixFQUErSCxZQUFPO0FBQ3JJQyxLQUFJLHFEQUFKLEVBQTJELFlBQU87O0FBRWpFSixVQUFPSyxTQUFQLENBQWtCSCxLQUFNLFNBQVNPLElBQVQsQ0FBZUMsU0FBZixFQUEwQixDQUFFLE9BQU8sb0JBQVlDLFNBQVosQ0FBUCxDQUFnQyxDQUFsRTtBQUNqQixTQURpQixFQUNULENBQUUsT0FBRixFQUFXLENBQUUsT0FBRixDQUFYLEVBQXdCLE1BQXhCLENBRFMsQ0FBbEI7QUFFQyxJQUFFLE9BQUYsRUFBVyxDQUFFLE9BQUYsQ0FBWCxFQUF3QixNQUF4QixDQUZEOztBQUlBLEdBTkQ7QUFPQSxFQVJEOztBQVVBUixVQUFVLDhHQUFWLEVBQTBILFlBQU87QUFDaElDLEtBQUksaURBQUosRUFBdUQsWUFBTzs7QUFFN0RKLFVBQU9LLFNBQVAsQ0FBa0JILEtBQU0sU0FBU08sSUFBVCxDQUFlQyxTQUFmLEVBQTBCLENBQUUsT0FBTyxvQkFBWUMsU0FBWixDQUFQLENBQWdDLENBQWxFO0FBQ2pCLFNBRGlCLEVBQ1QsQ0FBRSxPQUFGLEVBQVcsT0FBWCxFQUFvQixNQUFwQixDQURTLENBQWxCO0FBRUMsSUFBRSxPQUFGLEVBQVcsT0FBWCxFQUFvQixNQUFwQixDQUZEOztBQUlBLEdBTkQ7QUFPQSxFQVJEOztBQVVBLENBekNEOztBQTJDQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImFwbHlcIixcblx0XHRcdFwicGF0aFwiOiBcImFwbHkvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2FwbHkuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcImFwbHlcIjogXCJhcGx5XCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBhcGx5ID0gcmVxdWlyZSggXCIuL2FwbHkuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5cbmRlc2NyaWJlKCBcImFwbHlcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgYXBseSggZnVuY3Rpb24gaGVsbG8oIHZhbHVlICl7IHJldHVybiBbICdoZXknLCB2YWx1ZSwgdGhpcyBdOyB9LCB7ICdoZWxsbyc6ICd3b3JsZCcgfSwgJ3llYWgnIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgJ2hleScsICd5ZWFoJywgeyAnaGVsbG8nOiAnd29ybGQnIH0gXVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBhcGx5KCBmdW5jdGlvbiBoZWxsbyggdmFsdWUgKXsgcmV0dXJuIFsgJ2hleScsIHZhbHVlLCB0aGlzIF07IH0sXG5cdFx0XHRcdHsgJ2hlbGxvJzogJ3dvcmxkJyB9LCAneWVhaCcgKSwgWyBcImhleVwiLCBcInllYWhcIiwgeyBcImhlbGxvXCI6IFwid29ybGRcIiB9IF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBhcGx5KCBmdW5jdGlvbiBoZWxsbyggdmFsdWUsIGRhdGEgKXsgcmV0dXJuIFsgJ2hleScsIHZhbHVlLCBkYXRhLCB0aGlzIF07IH0sIHsgJ2hlbGxvJzogJ3dvcmxkJyB9LCAneWVhaCcsIDEyMyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbICdoZXknLCAneWVhaCcsIDEyMywgeyAnaGVsbG8nOiAnd29ybGQnIH0gXVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBhcGx5KCBmdW5jdGlvbiBoZWxsbyggdmFsdWUsIGRhdGEgKXsgcmV0dXJuIFsgXCJoZXlcIiwgdmFsdWUsIGRhdGEsIHRoaXMgXSB9LFxuXHRcdFx0XHR7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0sIFwieWVhaFwiLCAxMjMgKSxcblx0XHRcdFx0WyBcImhleVwiLCBcInllYWhcIiwgMTIzLCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGFwbHkoIGZ1bmN0aW9uIHRlc3QoIHBhcmFtZXRlciApeyByZXR1cm4gQXJyYXkuZnJvbSggYXJndW1lbnRzICk7IH0sICd0ZXN0JywgWyAnaGVsbG8nLCBbICd3b3JsZCcgXSwgJ3llYWgnIF0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyAnaGVsbG8nLCBbICd3b3JsZCcgXSwgJ3llYWgnIF1cIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggYXBseSggZnVuY3Rpb24gdGVzdCggcGFyYW1ldGVyICl7IHJldHVybiBBcnJheS5mcm9tKCBhcmd1bWVudHMgKSB9LFxuXHRcdFx0XHRcInRlc3RcIiwgWyBcImhlbGxvXCIsIFsgXCJ3b3JsZFwiIF0sIFwieWVhaFwiIF0gKSxcblx0XHRcdFx0WyBcImhlbGxvXCIsIFsgXCJ3b3JsZFwiIF0sIFwieWVhaFwiIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBhcGx5KCBmdW5jdGlvbiB0ZXN0KCBwYXJhbWV0ZXIgKXsgcmV0dXJuIEFycmF5LmZyb20oIGFyZ3VtZW50cyApIH0sICd0ZXN0JywgWyAnaGVsbG8nLCAnd29ybGQnLCAneWVhaCcgXSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbICdoZWxsbycsICd3b3JsZCcsICd5ZWFoJyBdXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIGFwbHkoIGZ1bmN0aW9uIHRlc3QoIHBhcmFtZXRlciApeyByZXR1cm4gQXJyYXkuZnJvbSggYXJndW1lbnRzICkgfSxcblx0XHRcdFx0XCJ0ZXN0XCIsIFsgXCJoZWxsb1wiLCBcIndvcmxkXCIsIFwieWVhaFwiIF0gKSxcblx0XHRcdFx0WyBcImhlbGxvXCIsIFwid29ybGRcIiwgXCJ5ZWFoXCIgXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cbn0gKTtcblxuLy86IEBlbmQtY2xpZW50XG5cblxuXG4iXX0=
//# sourceMappingURL=test.support.js.map
