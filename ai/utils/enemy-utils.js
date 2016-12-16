basicPositionUtils = require("./basic-position-utils");
var enemy_utils = function (_enemies) {

    /**
     * @property {Array} enemies
     * */
    var enemies = _enemies;

    var areEnemiesNear = function () {
        return enemies.find(function (enemy) {
                return (typeof enemy.direction != 'undefined');
            }
        );
    };

    var canShootEnemy = function (me, range) {
        return enemies.find(function (enemy) {
            return basicPositionUtils.sameAxis(me, enemy) &&
                basicPositionUtils.tankOrientedTo(me, enemy) &&
                basicPositionUtils.distance(me, enemy) <= range;
        });
    };

    var canBeShotByEnemy = function (me, range) {
        return enemies.find(function (enemy) {
            return basicPositionUtils.sameAxis(me, enemy) &&
                   basicPositionUtils.tankOrientedTo(enemy, me) &&
                   basicPositionUtils.distance(me, enemy) <= range;
        });
    };


    return {
        areEnemiesNear: areEnemiesNear,
        canShootEnemy: canShootEnemy,
        canBeShotByEnemy: canBeShotByEnemy
    };
};

module.exports = enemy_utils;

/**
 *  (x0,y0) // (x1,y0) // (x2,y0)
 *  (x0,y1) // (x1,y1) // (x2,y1)
 *  (x0,y2) // (x1,y2) // (x2,y2)
 * */