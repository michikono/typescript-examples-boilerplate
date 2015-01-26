function addOneToVariable(x) {
    x++;
    return null;
}
var Printer = (function () {
    function Printer() {
    }
    Printer.prototype.log = function (message, value) {
        console.log(message, ' ', value.toString());
    };
    return Printer;
})();
var printer = new Printer();
var i = 0;
printer.log('initial i = ', i);
i++;
printer.log('i after increment operator = ', i);
printer.log('Final result ', addOneToVariable(i));
//# sourceMappingURL=debug.js.map