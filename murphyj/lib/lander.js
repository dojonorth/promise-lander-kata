var Metrics = require('./metrics');

var CommandModule = function(distance, fuel) {
    var self = this;

    this.metrics = new Metrics(fuel);
    this.distance = distance;

    this.dyn_functions = {};
    this.dyn_functions.engageThrusters = function(args) {
        var metricStats = self.metrics.calculateMetrics();
        if (metricStats.fuel >= args.distance) {
            self.distance += args.distance;
        }
        return self.distance;
    };

    this.sendCommand = function(command, args) {
        var Promise = require('bluebird');
        return new Promise(function() {
            self.dyn_functions[command](args);
        });
    };
};

module.exports = CommandModule;