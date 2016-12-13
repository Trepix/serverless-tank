module.exports = {
    imOnTopOfEnemy: function (tank, enemy) {
        return tank.y < enemy.y;
    },
    imOnBottomOfEnemy: function (tank, enemy) {
        return tank.y > enemy.y;
    },
    imOnRightOfEnemy: function (tank, enemy) {
        return tank.x > enemy.x;
    },
    imOnLeftOfEnemy: function (tank, enemy) {
        return tank.x < enemy.x;
    }
};

/**                   TOP
 *
 *       (x0,y0) // (x1,y0) // (x2,y0)
 * LEFT  (x0,y1) // (x1,y1) // (x2,y1)    RIGHT
 *       (x0,y2) // (x1,y2) // (x2,y2)
 *
                     BOTTOM
 * */