var NotIdealAdd = (function () {
    function NotIdealAdd(i) {
        this.i = i;
    }
    NotIdealAdd.prototype.getValue = function () {
        return this.i;
    };
    NotIdealAdd.prototype.doIt = function () {
        this.i++;
        return this;
    };
    return NotIdealAdd;
})();
console.log('Added twice: ', (new NotIdealAdd(0)).doIt().doIt().getValue());
///* this will not work */
//class NotIdealSubtract implements NotIdealChainable {
//    constructor(private i:number) {
//    }
//
//    getValue() {
//        return this.i;
//    }
//
//    doIt():Subtract {
//        this.i--;
//        return this;
//    }
//}
//interface Chainable<T> {
//    getValue:() => number
//    doIt: () => T
//}
//
//class Add implements Chainable<Add> {
//    constructor(private i:number) {
//    }
//
//    getValue() {
//        return this.i;
//    }
//
//    doIt() {
//        this.i++;
//        return this;
//    }
//}
//
//class Subtract implements Chainable<Subtract> {
//    constructor(private i:number) {
//    }
//
//    getValue() {
//        return this.i;
//    }
//
//    doIt():Subtract {
//        this.i--;
//        return this;
//    }
//}
//console.log('Added twice: ', (new Add(0)).doIt().doIt().getValue());
//console.log('Subtracted twice: ', (new Subtract(0)).doIt().doIt().getValue()); 
//# sourceMappingURL=generics.js.map