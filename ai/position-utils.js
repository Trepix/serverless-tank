
basicPositionUtils = require("./basic-position-utils");
directions = require("./directions");

var position_utils = function (_map) {
    /**
     * @property {object} map
     * @property {Array} map.enemies
     * @property {Array} map.walls
     * @property {object} map.tank
     * @property {number} map.suddenDeath
     * */
    var map = _map;
    var me = map.tank;

    var areEnemiesNear = function () {
        return map.enemies.find(function (enemy) {
                return (typeof enemy.direction != 'undefined');
            }
        );
    };

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

    var canBeShotUp = function () {
        return map.enemies.find(function (enemy) {
            if (inSameAxisX(me, enemy)) {

            }
            return false;
        });
    };

    var inSameAxisX = function (tank, enemy) {
            return tank.x == enemy.x;
        },
        inSameAxisY = function (tank, enemy) {
            return tank.y == enemy.y;
        },
        isLookingToMe = function (tank, enemy) {
            return false;
        };


    return {
        areEnemiesNear: areEnemiesNear,
        wallAt: wallAt,
        enemyAt: enemyAt,
        canBeShotUp: canBeShotUp
    };
};

module.exports = position_utils;

/**
 *  (x0,y0) // (x1,y0) // (x2,y0)
 *  (x0,y1) // (x1,y1) // (x2,y1)
 *  (x0,y2) // (x1,y2) // (x2,y2)
 * */