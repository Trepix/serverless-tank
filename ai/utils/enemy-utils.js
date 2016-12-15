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

    var canShootEnemy = function (me, shootDistance) {
        return enemies.find(function (enemy) {
            console.log("shootDistance:" + shootDistance);
            console.log("distance:" + basicPositionUtils.distance(me, enemy));
            console.log("well oritented:" + basicPositionUtils.imWellOrientedToPoint(me, enemy));
            return basicPositionUtils.sameAxis(me, enemy) &&
                basicPositionUtils.imWellOrientedToPoint(me, enemy) &&
                basicPositionUtils.distance(me, enemy) <= shootDistance;
        });
    };


    return {
        areEnemiesNear: areEnemiesNear,
        canShootEnemy: canShootEnemy
    };
};

module.exports = enemy_utils;

/**
 *  (x0,y0) // (x1,y0) // (x2,y0)
 *  (x0,y1) // (x1,y1) // (x2,y1)
 *  (x0,y2) // (x1,y2) // (x2,y2)
 * */