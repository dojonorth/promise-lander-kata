function Metrics(fuel) {
    this.values = [];
    this.values.fuel = fuel;
}

Metrics.prototype.calculateMetrics = function() {
    return this.values;
};

module.exports = Metrics;