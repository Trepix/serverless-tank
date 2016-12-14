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

    var areEnemiesInMyAxis = function(me) {
        return getEnemiesInTheSameAxis(me).length > 0;
    };

    var getEnemiesInTheSameAxis = function(me) {
        return enemies.filter(function(enemy) {
            return basicPositionUtils.sameAxis(me, enemy);
        })

    };


    return {
        areEnemiesNear: areEnemiesNear,
        areEnemiesInMyAxis: areEnemiesInMyAxis,
        getEnemiesInTheSameAxis: getEnemiesInTheSameAxis
    };
};

module.exports = enemy_utils;

/**
 *  (x0,y0) // (x1,y0) // (x2,y0)
 *  (x0,y1) // (x1,y1) // (x2,y1)
 *  (x0,y2) // (x1,y2) // (x2,y2)
 * */