describe('MissionControl', function() {

    var Lander = require('../app/mission-control'),
        lander,
        initialDistance = 100,
        Promise = require('bluebird');

    beforeEach(function() {
        var fuel = 10;
        lander = new Lander(initialDistance, fuel);
    });

    it('should move the lander with a thruster command', function(done) {
        spyOn(lander.lander, 'sendCommand').and.returnValue(Promise.resolve(110));

        lander.engageThrusters(10).then(
            function(currentDistance) {
                expect(currentDistance).toBe(110);
                done();
            }
        );
    });
});