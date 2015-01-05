describe('Command Module', function() {

    var CommandModule = require('../lib/command-module');

    it('should move the lander if there is enough fuel available', function() {
        commandModule = new CommandModule(100, 10);
        var args = {
            'distance': 10
        };
        var currentDistance = commandModule.dyn_functions.engageThrusters(args);
        expect(currentDistance).toBe(110);
    });

    it('should not move the lander if there isnt enough fuel available', function() {
        commandModule = new CommandModule(100, 10);
        var args = {
            'distance': 20
        };

        var currentDistance = commandModule.dyn_functions.engageThrusters(args);
        expect(currentDistance).toBe(100);
    });
});