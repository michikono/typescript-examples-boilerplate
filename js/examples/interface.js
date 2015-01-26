var PointOnPaper = (function () {
    function PointOnPaper(nx, ny) {
        this.x = 0;
        this.y = 0;
        this.x = nx;
        this.y = ny;
    }
    return PointOnPaper;
})();
//interface ThreeDCoordinate extends TwoDCoordinate {
//    x: number;
//    y: number;
//    z: number;
//}
//
//class PointInSpace implements TwoDCoordinate {
//    x: number = 0;
//    y: number = 0;
//    z: number = 0;
//    constructor(nx: number, ny: number, nz: number) {
//        this.x = nx;
//        this.y = ny;
//        this.z = nz;
//    }
//}
//
//function printCoordinates(c: ThreeDCoordinate) {
//    console.log("x: "+ c.x, "  y: "+ c.y, "  z: "+ c.z);
//}
//
//function moveAway(c: ThreeDCoordinate): ThreeDCoordinate {
//    c.z = c.z * 1.5;
//    return c;
//}
//
//var space = new PointInSpace(1, 3, 2);
//printCoordinates(moveAway(space));
//
//var paper = new PointOnPaper(1, 3);
//printCoordinates(moveAway(paper));
//# sourceMappingURL=interface.js.map