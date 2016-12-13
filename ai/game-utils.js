/**
 * Created by trepix on 12/12/2016.
 */

var WE_ARE_IN_SUDDEN_DEATH = 10;


module.exports = (function () {

    /**
     * @property {object} map
     * @property {Array} map.enemies
     * @property {object} map.tank
     * @property {number} map.suddenDeath
     * */
    this.map = map;

    var isGoingToSuddenDeath = function () {
        return map.suddenDeath <= WE_ARE_IN_SUDDEN_DEATH;
    };

    var isSuddenDeath = function() {
        return map.suddenDeath == 0;
    };

    return {
        isGoingToSuddenDeath : isGoingToSuddenDeath,
        isSuddenDeath: isSuddenDeath
    }

})(map);