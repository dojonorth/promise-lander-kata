var dyn_functions = {};

var CommandModule = function(distance, fuel) {
    var self = this;

    self.distance = distance;
    self.fuel = fuel;

    dyn_functions.engageThrusters = function(args) {
        if (self.fuel >= args.distance) {
            self.distance += args.distance;
        }
    },
    dyn_functions.calculateDistance = function() {
        return self.distance;
    };
};

CommandModule.prototype.sendCommand = function(command, args) {
    return dyn_functions[command](args);
};

module.exports = CommandModule;