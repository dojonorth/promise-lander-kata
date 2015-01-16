describe('Command Module', function() {

    var Lander = require('../lib/lander'),
        lander;

    it('should move the lander if there is enough fuel available', function() {
        lander = new Lander(100, 10);
        var args = {
            'distance': 10
        };
        var currentDistance = lander.dyn_functions.engageThrusters(args);
        expect(currentDistance).toBe(110);
    });

    it('should not move the lander if there isnt enough fuel available', function() {
        lander = new Lander(100, 10);
        var args = {
            'distance': 20
        };

        var currentDistance = lander.dyn_functions.engageThrusters(args);
        expect(currentDistance).toBe(100);
    });
});