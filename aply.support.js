"use strict"; /*;
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
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon"
              			],
              			"repository": "https://github.com/volkovasystems/aply.git",
              			"test": "aply-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Simple bind and apply.
              
              		If you pass a falsy method, it will default to a function that
              			will throw an no operation error.
              
              		Note that this cannot be used with bind, you have to pass the context as a parameter.
              
              		Passing array as the last parameter and the only parameter will result to spreading it
              			to the applying method.
              	@end-module-documentation
              
              	@include:
              		{
              			"parlev": "parlev",
              			"shft": "shft",
              			"wichevr": "wichevr",
              			"zelf": "zelf"
              		}
              	@end-include
              */

var parlev = require("parlev");
var shft = require("shft");
var wichevr = require("wichevr");
var zelf = require("zelf");

var aply = function aply(method, context, parameter) {
	/*;
                                                      	@meta-configuration:
                                                      		{
                                                      			"method:required": "function",
                                                      			"context:required": "*",
                                                      			"parameter": "..."
                                                      		}
                                                      	@end-meta-configuration
                                                      */

	method = wichevr(method, function procedure() {throw new Error("no operation");});

	if (typeof method != "function") {
		throw new Error("invalid method");
	}

	context = zelf(context);

	if (arguments.length > 3) {
		parameter = shft(arguments, 2);

	} else if (arguments.length == 3) {
		parameter = parlev(shft(arguments, 2));

	} else {
		return method.apply(context);
	}

	return method.apply(context, parameter);
};

module.exports = aply;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwbHkuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJwYXJsZXYiLCJyZXF1aXJlIiwic2hmdCIsIndpY2hldnIiLCJ6ZWxmIiwiYXBseSIsIm1ldGhvZCIsImNvbnRleHQiLCJwYXJhbWV0ZXIiLCJwcm9jZWR1cmUiLCJFcnJvciIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFwcGx5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6ImNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtRUEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1FLFVBQVVGLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1HLE9BQU9ILFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1JLE9BQU8sU0FBU0EsSUFBVCxDQUFlQyxNQUFmLEVBQXVCQyxPQUF2QixFQUFnQ0MsU0FBaEMsRUFBMkM7QUFDdkQ7Ozs7Ozs7Ozs7QUFVQUYsVUFBU0gsUUFBU0csTUFBVCxFQUFpQixTQUFTRyxTQUFULEdBQXFCLENBQUUsTUFBTSxJQUFJQyxLQUFKLENBQVcsY0FBWCxDQUFOLENBQW9DLENBQTVFLENBQVQ7O0FBRUEsS0FBSSxPQUFPSixNQUFQLElBQWlCLFVBQXJCLEVBQWlDO0FBQ2hDLFFBQU0sSUFBSUksS0FBSixDQUFXLGdCQUFYLENBQU47QUFDQTs7QUFFREgsV0FBVUgsS0FBTUcsT0FBTixDQUFWOztBQUVBLEtBQUlJLFVBQVVDLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7QUFDekJKLGNBQVlOLEtBQU1TLFNBQU4sRUFBaUIsQ0FBakIsQ0FBWjs7QUFFQSxFQUhELE1BR00sSUFBSUEsVUFBVUMsTUFBVixJQUFvQixDQUF4QixFQUEyQjtBQUNoQ0osY0FBWVIsT0FBUUUsS0FBTVMsU0FBTixFQUFpQixDQUFqQixDQUFSLENBQVo7O0FBRUEsRUFISyxNQUdEO0FBQ0osU0FBT0wsT0FBT08sS0FBUCxDQUFjTixPQUFkLENBQVA7QUFDQTs7QUFFRCxRQUFPRCxPQUFPTyxLQUFQLENBQWNOLE9BQWQsRUFBdUJDLFNBQXZCLENBQVA7QUFDQSxDQTlCRDs7QUFnQ0FNLE9BQU9DLE9BQVAsR0FBaUJWLElBQWpCIiwiZmlsZSI6ImFwbHkuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJhcGx5XCIsXG5cdFx0XHRcInBhdGhcIjogXCJhcGx5L2FwbHkuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImFwbHkuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiYXBseVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb25cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9hcGx5LmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiYXBseS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdFNpbXBsZSBiaW5kIGFuZCBhcHBseS5cblxuXHRcdElmIHlvdSBwYXNzIGEgZmFsc3kgbWV0aG9kLCBpdCB3aWxsIGRlZmF1bHQgdG8gYSBmdW5jdGlvbiB0aGF0XG5cdFx0XHR3aWxsIHRocm93IGFuIG5vIG9wZXJhdGlvbiBlcnJvci5cblxuXHRcdE5vdGUgdGhhdCB0aGlzIGNhbm5vdCBiZSB1c2VkIHdpdGggYmluZCwgeW91IGhhdmUgdG8gcGFzcyB0aGUgY29udGV4dCBhcyBhIHBhcmFtZXRlci5cblxuXHRcdFBhc3NpbmcgYXJyYXkgYXMgdGhlIGxhc3QgcGFyYW1ldGVyIGFuZCB0aGUgb25seSBwYXJhbWV0ZXIgd2lsbCByZXN1bHQgdG8gc3ByZWFkaW5nIGl0XG5cdFx0XHR0byB0aGUgYXBwbHlpbmcgbWV0aG9kLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJwYXJsZXZcIjogXCJwYXJsZXZcIixcblx0XHRcdFwic2hmdFwiOiBcInNoZnRcIixcblx0XHRcdFwid2ljaGV2clwiOiBcIndpY2hldnJcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBwYXJsZXYgPSByZXF1aXJlKCBcInBhcmxldlwiICk7XG5jb25zdCBzaGZ0ID0gcmVxdWlyZSggXCJzaGZ0XCIgKTtcbmNvbnN0IHdpY2hldnIgPSByZXF1aXJlKCBcIndpY2hldnJcIiApO1xuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XG5cbmNvbnN0IGFwbHkgPSBmdW5jdGlvbiBhcGx5KCBtZXRob2QsIGNvbnRleHQsIHBhcmFtZXRlciApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcIm1ldGhvZDpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFwiY29udGV4dDpyZXF1aXJlZFwiOiBcIipcIixcblx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0bWV0aG9kID0gd2ljaGV2ciggbWV0aG9kLCBmdW5jdGlvbiBwcm9jZWR1cmUoICl7IHRocm93IG5ldyBFcnJvciggXCJubyBvcGVyYXRpb25cIiApOyB9ICk7XG5cblx0aWYoIHR5cGVvZiBtZXRob2QgIT0gXCJmdW5jdGlvblwiICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgbWV0aG9kXCIgKTtcblx0fVxuXG5cdGNvbnRleHQgPSB6ZWxmKCBjb250ZXh0ICk7XG5cblx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPiAzICl7XG5cdFx0cGFyYW1ldGVyID0gc2hmdCggYXJndW1lbnRzLCAyICk7XG5cblx0fWVsc2UgaWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMyApe1xuXHRcdHBhcmFtZXRlciA9IHBhcmxldiggc2hmdCggYXJndW1lbnRzLCAyICkgKTtcblxuXHR9ZWxzZXtcblx0XHRyZXR1cm4gbWV0aG9kLmFwcGx5KCBjb250ZXh0ICk7XG5cdH1cblxuXHRyZXR1cm4gbWV0aG9kLmFwcGx5KCBjb250ZXh0LCBwYXJhbWV0ZXIgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYXBseTtcbiJdfQ==
//# sourceMappingURL=aply.support.js.map
