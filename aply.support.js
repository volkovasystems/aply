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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwbHkuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJwYXJsZXYiLCJyZXF1aXJlIiwic2hmdCIsIndpY2hldnIiLCJ6ZWxmIiwiYXBseSIsIm1ldGhvZCIsImNvbnRleHQiLCJwYXJhbWV0ZXIiLCJwcm9jZWR1cmUiLCJFcnJvciIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFwcGx5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6ImNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtRUEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1FLFVBQVVGLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1HLE9BQU9ILFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1JLE9BQU8sU0FBU0EsSUFBVCxDQUFlQyxNQUFmLEVBQXVCQyxPQUF2QixFQUFnQ0MsU0FBaEMsRUFBMkM7QUFDdkQ7Ozs7Ozs7Ozs7QUFVQUYsVUFBU0gsUUFBU0csTUFBVCxFQUFpQixTQUFTRyxTQUFULEdBQXFCLENBQUUsTUFBTSxJQUFJQyxLQUFKLENBQVcsY0FBWCxDQUFOLENBQW9DLENBQTVFLENBQVQ7O0FBRUEsS0FBSSxPQUFPSixNQUFQLElBQWlCLFVBQXJCLEVBQWlDO0FBQ2hDLFFBQU0sSUFBSUksS0FBSixDQUFXLGdCQUFYLENBQU47QUFDQTs7QUFFREgsV0FBVUgsS0FBTUcsT0FBTixDQUFWOztBQUVBLEtBQUlJLFVBQVVDLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7QUFDekJKLGNBQVlOLEtBQU1TLFNBQU4sRUFBaUIsQ0FBakIsQ0FBWjs7QUFFQSxFQUhELE1BR00sSUFBSUEsVUFBVUMsTUFBVixJQUFvQixDQUF4QixFQUEyQjtBQUNoQ0osY0FBWVIsT0FBUUUsS0FBTVMsU0FBTixFQUFpQixDQUFqQixDQUFSLENBQVo7O0FBRUEsRUFISyxNQUdEO0FBQ0osU0FBT0wsT0FBT08sS0FBUCxDQUFjTixPQUFkLENBQVA7QUFDQTs7QUFFRCxRQUFPRCxPQUFPTyxLQUFQLENBQWNOLE9BQWQsRUFBdUJDLFNBQXZCLENBQVA7QUFDQSxDQTlCRDs7QUFnQ0FNLE9BQU9DLE9BQVAsR0FBaUJWLElBQWpCIiwiZmlsZSI6ImFwbHkuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qO1xyXG5cdEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwiYXBseVwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJhcGx5L2FwbHkuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwiYXBseS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcImFwbHlcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvblwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9hcGx5LmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJhcGx5LXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0U2ltcGxlIGJpbmQgYW5kIGFwcGx5LlxyXG5cclxuXHRcdElmIHlvdSBwYXNzIGEgZmFsc3kgbWV0aG9kLCBpdCB3aWxsIGRlZmF1bHQgdG8gYSBmdW5jdGlvbiB0aGF0XHJcblx0XHRcdHdpbGwgdGhyb3cgYW4gbm8gb3BlcmF0aW9uIGVycm9yLlxyXG5cclxuXHRcdE5vdGUgdGhhdCB0aGlzIGNhbm5vdCBiZSB1c2VkIHdpdGggYmluZCwgeW91IGhhdmUgdG8gcGFzcyB0aGUgY29udGV4dCBhcyBhIHBhcmFtZXRlci5cclxuXHJcblx0XHRQYXNzaW5nIGFycmF5IGFzIHRoZSBsYXN0IHBhcmFtZXRlciBhbmQgdGhlIG9ubHkgcGFyYW1ldGVyIHdpbGwgcmVzdWx0IHRvIHNwcmVhZGluZyBpdFxyXG5cdFx0XHR0byB0aGUgYXBwbHlpbmcgbWV0aG9kLlxyXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwicGFybGV2XCI6IFwicGFybGV2XCIsXHJcblx0XHRcdFwic2hmdFwiOiBcInNoZnRcIixcclxuXHRcdFx0XCJ3aWNoZXZyXCI6IFwid2ljaGV2clwiLFxyXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IHBhcmxldiA9IHJlcXVpcmUoIFwicGFybGV2XCIgKTtcclxuY29uc3Qgc2hmdCA9IHJlcXVpcmUoIFwic2hmdFwiICk7XHJcbmNvbnN0IHdpY2hldnIgPSByZXF1aXJlKCBcIndpY2hldnJcIiApO1xyXG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcclxuXHJcbmNvbnN0IGFwbHkgPSBmdW5jdGlvbiBhcGx5KCBtZXRob2QsIGNvbnRleHQsIHBhcmFtZXRlciApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibWV0aG9kOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIixcclxuXHRcdFx0XHRcImNvbnRleHQ6cmVxdWlyZWRcIjogXCIqXCIsXHJcblx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdG1ldGhvZCA9IHdpY2hldnIoIG1ldGhvZCwgZnVuY3Rpb24gcHJvY2VkdXJlKCApeyB0aHJvdyBuZXcgRXJyb3IoIFwibm8gb3BlcmF0aW9uXCIgKTsgfSApO1xyXG5cclxuXHRpZiggdHlwZW9mIG1ldGhvZCAhPSBcImZ1bmN0aW9uXCIgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG1ldGhvZFwiICk7XHJcblx0fVxyXG5cclxuXHRjb250ZXh0ID0gemVsZiggY29udGV4dCApO1xyXG5cclxuXHRpZiggYXJndW1lbnRzLmxlbmd0aCA+IDMgKXtcclxuXHRcdHBhcmFtZXRlciA9IHNoZnQoIGFyZ3VtZW50cywgMiApO1xyXG5cclxuXHR9ZWxzZSBpZiggYXJndW1lbnRzLmxlbmd0aCA9PSAzICl7XHJcblx0XHRwYXJhbWV0ZXIgPSBwYXJsZXYoIHNoZnQoIGFyZ3VtZW50cywgMiApICk7XHJcblxyXG5cdH1lbHNle1xyXG5cdFx0cmV0dXJuIG1ldGhvZC5hcHBseSggY29udGV4dCApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIG1ldGhvZC5hcHBseSggY29udGV4dCwgcGFyYW1ldGVyICk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFwbHk7XHJcbiJdfQ==
//# sourceMappingURL=aply.support.js.map
