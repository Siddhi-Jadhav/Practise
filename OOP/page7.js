//generics
var stack = /** @class */ (function () {
    function stack() {
        this.data = [];
    }
    stack.prototype.push = function (item) {
        this.data.push(item);
    };
    stack.prototype.pop = function () {
        this.data.pop();
    };
    stack.prototype.printState = function () {
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log("item = ".concat(item));
        }
    };
    return stack;
}());
var st = new stack();
st.push('st1');
st.push('st2');
st.push('st3');
st.push('st4');
st.push('st5');
st.pop();
st.push('st6');
st.printState();
var stNumber = new stack();
stNumber.push(10);
stNumber.push(20);
stNumber.push(30);
stNumber.push(40);
stNumber.pop();
stNumber.pop();
stNumber.printState();
