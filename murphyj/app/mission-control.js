var Lander = require('../lib/lander');

var MissionControl = function(distance, fuel) {
    this.lander = new Lander(distance, fuel);
};

MissionControl.prototype.engageThrusters = function(distance) {
    var args = [];
    args.distance = distance;
    return this.lander.sendCommand('engageThrusters', args);
};

MissionControl.prototype.calculateDistance = function() {
    return this.lander.sendCommand('calculateDistance');
};

MissionControl.prototype.getMetrics = function() {
    return this.lander.metrics.values;
};

module.exports = MissionControl;