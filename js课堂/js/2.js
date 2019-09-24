var add = getFunction("+");
console.log(add(3, 5));

function getFunction(op) {
    var r = null;
    switch (op) {
        case '+':
            r = function (a, b) {
                return a + b;
            };
            break;
        case '-':
            r = function (a, b) {
                return a - b;
            };
            break;
        case '*':
            r = function (a, b) {
                return a * b;
            };
            break;
        case '/':
            r = function (a, b) {
                return a / b;
            };
            break;
    }; return r
}