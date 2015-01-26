interface NotIdealChainable {
    getValue:() => number
    doIt:() => NotIdealAdd
}
class NotIdealAdd implements NotIdealChainable {
    constructor(private i:number) {
    }

    getValue() {
        return this.i;
    }

    doIt() {
        this.i++;
        return this;
    }
}
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