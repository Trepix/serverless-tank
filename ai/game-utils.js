/**
 * Created by trepix on 12/12/2016.
 */

var LIMIT_OF_TURNS_TO_CONSIDER_SUDDEN_DEATH_NEAR = 10;


module.exports = (function () {

    /**
     * @property {object} map
     * @property {Array} map.enemies
     * @property {object} map.tank
     * @property {number} map.suddenDeath
     * */
    this.map = map;

    var isGoingToSuddenDeath = function () {
        return map.suddenDeath <= LIMIT_OF_TURNS_TO_CONSIDER_SUDDEN_DEATH_NEAR;
    };

    var isSuddenDeath = function() {
        return map.suddenDeath == 0;
    };

    return {
        isGoingToSuddenDeath : isGoingToSuddenDeath,
        isSuddenDeath: isSuddenDeath
    }

})(map);