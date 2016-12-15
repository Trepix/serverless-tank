directions = require("./enum/directions");

module.exports = {
    sameAxisX(me, point) {
        return me.x == point.x;
    },
    sameAxisY(me, point) {
        return me.y = point.y;
    },
    sameAxis(me, point) {
        return this.sameAxisX(me, point) || this.sameAxisY(me, point);
    },
    distanceOnAxisX(me, point) {
        return Math.abs(me.x - point.x);
    },
    distanceOnAxisY(me, point) {
        return Math.abs(me.y - point.y);
    },
    imOnTop: function (me, point) {
        return me.y < point.y;
    },
    imOnBottom: function (me, point) {
        return me.y > point.y;
    },
    imOnRight: function (me, point) {
        return me.x > point.x;
    },
    imOnLeft: function (me, point) {
        return me.x < point.x;
    },
    distance: function (me, point) {
        var xDistance = Math.abs(me.x - point.x);
        var yDistance = Math.abs(me.y - point.y);
        return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    },
    /**
     * @return {Array} directions
     * */
    inWhichDirectionIsPoint(me, point) {
        var directionsToPoint = [];
        if (this.imOnTop(me, point)) directionsToPoint.push(directions.BOTTOM);
        if (this.imOnBottom(me, point)) directionsToPoint.push(directions.TOP);
        if (this.imOnRight(me, point)) directionsToPoint.push(directions.LEFT);
        if (this.imOnLeft(me, point)) directionsToPoint.push(directions.RIGHT);
        return directionsToPoint;
    },
    /**
     * @param {object} me
     * @param {string} me.direction
     * @param {object} point
     * */
    imWellOrientedToPoint(me, point) {
        var directionsOfPoint = this.inWhichDirectionIsPoint(me, point);
        return directionsOfPoint.find(function (directionOfPoint) {
            return directionOfPoint == me.direction;
        })
    }
};


/**                   TOP
 *
 *       (x0,y0) // (x1,y0) // (x2,y0)
 * LEFT  (x0,y1) // (x1,y1) // (x2,y1)    RIGHT
 *       (x0,y2) // (x1,y2) // (x2,y2)
 *
 BOTTOM
 * */