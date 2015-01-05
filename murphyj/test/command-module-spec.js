describe('Command Module', function() {

    var CommandModule = require('../lib/command-module');

    it('should move the lander if there is enough fuel available', function() {
        commandModule = new CommandModule(100, 10);
        var args = {
            'distance': 10
        };
        commandModule.sendCommand('engageThrusters', args).then(
        function(currentDistance) {
            expect(currentDistance).toBe(110);
        });

    });
});