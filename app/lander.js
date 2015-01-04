var CommandModule = require('../lib/command-module');

var Lander = function(distance) {
    this.distance = distance;
    this.commandModule = new CommandModule();
};

Lander.prototype.engageThrusters = function(distance) {
    this.distance += distance;
};

Lander.prototype.calculateDistance = function() {
    return this.distance;
};

module.exports = Lander;