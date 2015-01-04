describe('Lander', function() {

    var Lander = require('../app/lander');

    beforeEach(function() {
        var initialDistance = 100;
        lander = new Lander(initialDistance);
    });

    it('should move the lander if a thruster command is sent to the lander', function() {
        lander.engageThrusters(10);
        expect(lander.calculateDistance()).toBe(110);
    });
});