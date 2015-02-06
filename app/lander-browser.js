
function sendResults(results, success, failure) {
  setTimeout(function() {
    success('sent: ' + results);
  }, 3000);
}

function deployLaser(pass, success, failure) {
    setTimeout(function(){
        if (pass) {
            success("laser analysis results");
        } else {
            failure("failed to deploy laser");
        }
    }, 3000);
}

function deploySoilSampler(pass, success, failure) {
    setTimeout(function(){
        if (pass) {
            success("soil analysis results");
        } else {
            failure("failed to analyse soil");
        }
    }, 3000);
}

function deployAtmosphereSampler(pass, success, failure) {
    setTimeout(function(){
        if (pass) {
            success("atmosphere analysis results");
        } else {
            failure("failed to analyse atmosphere");
        }
    }, 3000);
}

function releaseHarpoon(pass, success, failure) {
    setTimeout(function(){
        if (pass) {
            success("harpoon released");
        } else {
            failure("failed to release harpoon");
        }
    }, 3000);
}

function fireLaunchThrusters(pass, success, failure) {
    setTimeout(function(){
        if (pass) {
            success("launch thrusters fired");
        } else {
            failure("failed to launch thrusters");
        }
    }, 3000);
}

function plotCourseToEarth(pass, success, failure) {
    setTimeout(function(){
        if (pass) {
            success("plotted course to earth");
        } else {
            failure("failed to plot course to earth");
        }
    }, 3000);
}

function sendDistressSignal(pass, success, failure) {
    setTimeout(function(){
        if (pass) {
            success("distress signal sent");
        } else {
            failure("failed to sent distress signal");
        }
    }, 3000);
}

function createPromiseVersion(f) {
    return function(pass) {
        return new Promise(function (resolve, reject) {
            f(pass, resolve, reject);
        });
    }
}

var deployLaserP = createPromiseVersion(deployLaser);
var deploySoilSamplerP = createPromiseVersion(deploySoilSampler);
var deployAtmosphereSamplerP = createPromiseVersion(deployAtmosphereSampler);
var sendResultsP = createPromiseVersion(sendResults);
var releaseHarpoonP = createPromiseVersion(releaseHarpoon);
var fireLaunchThrustersP = createPromiseVersion(fireLaunchThrusters);
var plotCourseToEarthP = createPromiseVersion(plotCourseToEarth);
var sendDistressSignalP = createPromiseVersion(sendDistressSignal);

