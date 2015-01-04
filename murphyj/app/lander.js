var CommandModule = require('../lib/command-module');

var Lander = function(distance, fuel) {
    this.commandModule = new CommandModule(distance, fuel);
};

Lander.prototype.engageThrusters = function(distance) {
    var args = []
    args['distance'] = distance
    this.commandModule.sendCommand('engageThrusters', args);
};

Lander.prototype.calculateDistance = function() {
    return this.commandModule.sendCommand('calculateDistance');
};

module.exports = Lander;