actions = require("./utils/enum/actions");
directions = require("./utils/enum/actions");
PositionUtils = require("./utils/position-utils");
EnemyUtils = require("./utils/enemy-utils");

module.exports = (function () {

    var positionUtils;
    var enemyUtils;
    var myTank;

    /**
     * @param {object} map
     * @param {Array} map.enemies
     * @param {object} map.you
     * @param {number} map.weaponRange
     * @param {number} map.visibility
     * */
    var move = function (map) {
        init(map);

        if (enemyUtils.areEnemiesNear()) {
            return combatMovement(map);
        }
        else return nonCombatMovement();
    };

    var init = function (map) {
        myTank = map.you;
        positionUtils = PositionUtils(map);
        enemyUtils = EnemyUtils(map.enemies);
    };

    var combatMovement = function (map) {
        if (enemyUtils.canShootEnemy(myTank, map.visibility)) { //wait him meanwhile I shoot
            return actions.FIRE;
        }
        else if (enemyUtils.canBeShotByEnemy(myTank, map.weaponRange)) {
            return evasionMovement();
        }
        return actions.PASS;
    };

    var nonCombatMovement = function () {
        return actions.PASS;
    };

    var evasionMovement = function() {
        var forwardMovement = directions.getForwardMovement(myTank.direction);
        var backwardMovement = directions.getBackwardMovement(myTank.direction);

        var newForwardPosition = getMovement(myTank, forwardMovement);
        var newBackwardPosition = getMovement(myTank, backwardMovement);
        if (!positionUtils.wallAt(newForwardPosition)) {
            return actions.FORWARD;
        }
        else if (!positionUtils.wallAt(newBackwardPosition)) {
            return actions.BACKWARD;
        }
        console.log("so fucked");
        return actions.TURN_LEFT;
    };

    var getMovement = function(position, movement) {
        return {x: position.x + movement.x, y: position.y + movement.y };
    };


    return {
        move: move
    };
})();

// 	movements = {
// 		top: {x: 0, y: -1},
// 		left: {x: -1, y: 0},
// 		bottom: {x: 0, y: 1},
// 		right: {x: 1, y: 0}
// 	},
// 	tank = map.you,
// 	movement = movements[tank.direction],
// 	nextField = {x: tank.x + movement.x, y: tank.y + movement.y},
// 	outsideMap = function (point) {
// 		return point.x < 0 || point.x >= map.mapWidth || point.y < 0 || point.y >= map.mapHeight;
// 	},
// 	hasTarget = function () {
// 		var distance, pointAtDistance;
// 		for (distance = 0; distance < map.weaponRange; distance++) {
// 			pointAtDistance = {x: tank.x + (distance + 1) * movement.x, y: tank.y + (distance + 1) * movement.y};
// 			if (wallAt(pointAtDistance) || enemyAt(pointAtDistance)) {
// 				return true;
// 			}
// 		}
// 		return false;
// 	},
// 	isEnemyReachable = function (curPos, position, range) {
// 		var minX = curPos.x - range;
// 		var minY = curPos.y - range;
// 		var maxX = curPos.x + range;
// 		var maxY = curPos.y + range;
// 		var isInRange = position.x > minX && position.x <= maxX && position.y >= minY && position.y <= maxY;
// 		return isInRange;
// 	},
// 	amIAimingCorrectly = function (tank1, tank2) {
// 		var correct;
// 		switch (tank1.direction) {
// 			case 'left':
// 				correct = tank2.x < tank1.x;
// 				break;
// 			case 'right':
// 				correct = tank2.x > tank1.x;
// 				break;
// 			case 'top':
// 				correct = tank2.y < tank1.y;
// 				break;
// 			case 'bottom':
// 				correct = tank2.y > tank1.y;
// 				break;
// 		}
// 		return correct;
// 	},
// 	aimToTarget = function (tank1, tank2) {
// 		return 'turn-left';
// 	},
// 	fight = function () {
// 		for (var i = 0; i < map.enemies.length; ++i) {
// 			if (isEnemyReachable(tank, map.enemies[i], map.weaponRange)) {
// 				console.log("enemy found within weapon range (you:" + tank.x + ',' + tank.y + "; tank: " + map.enemies[i].x + ',' + map.enemies[i].y + ")");
//
// 				if (!amIAimingCorrectly(tank, map.enemies[i])) {
// 					console.log("rotating...");
// 					var direction = aimToTarget(tank, map.enemies[i]);
// 					return direction;
// 				}
// 				else {
// 					console.log("aiming correctly");
// 					return 'fire';
// 				}
// 			}
// 		}
// 		return position().moveToHim(tank, map.enemies[0], map);
// 	};
//
//
// if (utils.isSuddenDeath(map)) {
// 	console.log('SUDDEN DEATH!');
// 	return 'fire';
// }
//
// if (utils.enemyNear(map)) {
// 	console.log("ENEMY NEAR, LET'S FIGHT");
// 	return fight();
// }
//
// if (outsideMap(nextField)) {
// 	return 'turn-left';
// }
// if (hasTarget()) {
// 	return 'fire';
// }
// return 'forward';



