basicPositionUtils = require("./basic-position-utils");
directions = require("./enum/directions");

var position_utils = function (_map) {
    /**
     * @property {object} map
     * @property {Array} map.enemies
     * @property {Array} map.walls
     * @property {object} map.tank
     * @property {number} map.suddenDeath
     * */
    var map = _map;

    var wallAt = function (point) {
        return map.walls.find(function (wall) {
            return wall.x === point.x && wall.y === point.y;
        });
    };

    var enemyAt = function (point) {
        return map.walls.find(function (wall) {
            return wall.x === point.x && wall.y === point.y;
        });
    };


    return {
        wallAt: wallAt,
        enemyAt: enemyAt
    };
};

module.exports = position_utils;

/**
 *  (x0,y0) // (x1,y0) // (x2,y0)
 *  (x0,y1) // (x1,y1) // (x2,y1)
 *  (x0,y2) // (x1,y2) // (x2,y2)
 * */