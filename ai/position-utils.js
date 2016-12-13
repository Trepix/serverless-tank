var position_utils = function (_map) {
    /**
     * @property {object} map
     * @property {Array} map.enemies
     * @property {Array} map.walls
     * @property {object} map.tank
     * @property {number} map.suddenDeath
     * */
    var map = _map;

    var areEnemiesNear = function () {
        return map.enemies.find(function (enemy) {
                return (typeof enemy.direction != 'undefined');
            }
        );
    };

    var wallAt = function(point) {
		return map.walls.find(function (wall) {
			return wall.x === point.x && wall.y === point.y;
		});
    };

    var enemyAt = function(point) {
        return map.walls.find(function (wall) {
            return wall.x === point.x && wall.y === point.y;
        });
    };


    return {
        areEnemiesNear: areEnemiesNear,
        wallAt: wallAt,
        enemyAt: enemyAt
    }
};

module.exports = position_utils;