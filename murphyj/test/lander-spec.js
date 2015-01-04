describe('Lander', function() {

    var Lander = require('../app/lander'),
        initialDistance = 100;

    beforeEach(function() {
        var fuel = 10;
        lander = new Lander(initialDistance, fuel);
    });

    it('should move the lander with a thruster command', function() {
        lander.engageThrusters(10);
        expect(lander.calculateDistance()).toBe(110);
    });

    it('should not move the lander with a thruster command if there is insufficient fuel', function() {
        var fuel = 0;
        lander = new Lander(initialDistance, fuel);
        lander.engageThrusters(10);
        expect(lander.calculateDistance()).toBe(100);
    });
});