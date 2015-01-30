

describe('Lander', function() {

    var lander = require('../app/lander');
    var Promise = require('bluebird');

    it('run experiment with callback', function(done) {
        lander.deploySoilSampler(true, function(result) {
            console.log(result);
            done();
        });
    });

    it('run experiment with promise', function(done) {
        lander.deploySoilSamplerP(true).then(console.log).then(done);
    });


    it('run failed experiment with promise', function(done) {
        lander.deploySoilSamplerP(false).then(console.log, console.log).then(done);
    });

});