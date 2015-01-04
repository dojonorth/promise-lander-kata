var CommandModule = require('../lib/command-module');

var Lander = function(distance, fuel) {
    this.distance = distance;
    this.fuel = fuel;
    this.commandModule = new CommandModule();
};

Lander.prototype.engageThrusters = function(distance) {
    if (this.fuel >= distance) {
        this.distance += distance;
    }
};

Lander.prototype.calculateDistance = function() {
    return this.distance;
};

module.exports = Lander;