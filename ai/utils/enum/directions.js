module.exports = {
    TOP: 'top',
    BOTTOM: 'bottom',
    RIGHT: 'right',
    LEFT: 'left',
    getForwardMovement: function(direction) {
        var movements = {};
        movements[this.TOP] = {x: 0, y: -1};
        movements[this.BOTTOM] = {x: 0, y: 1};
        movements[this.RIGHT] = {x: 1, y: 0};
        movements[this.LEFT] = {x: -1, y: 0};
        return movements[direction];
    },
    getBackwardMovement: function(direction) {
        var movement = this.getForwardMovement(direction);
        return {x: -movement.x, y: -movement.y};
    }
};