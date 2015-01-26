function addOneToVariable(x) {
    x++;
    return null;
}

class Printer {
    public log(message, value) {
        console.log(message, ' ', value.toString());
    }
}

var printer = new Printer();

var i = 0;
printer.log('initial i = ', i);
i++;
printer.log('i after increment operator = ', i);
printer.log('Final result ', addOneToVariable(i));
