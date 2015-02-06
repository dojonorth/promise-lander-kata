promise-lander
===================

You've been provided with an interface to the lander module.
Essentially you are writing programs that will be sent to the lander to execute.

Each function comes in two flavours.

The first, e.g. deployLaser, takes an argument and two callbacks, a success and a failure callback.
A result is passed to either the success or failure callback as appropriate

The second, suffixed with P, e.g. deployLaserP, takes an argument and returns a promise.
The promises are bluebird promises.

sendResults takes a string that is to be sent.
All the other functions take a boolean, which determines if they succeed for fail
(unrealistic, but allows you to play with success and failure)

There are several tasks below. Write code to do each.
Have a go with both the callback and the promises variants.
Feel free to have a go in different languages.

For the JavaScript versions, either use the test harness provided, or load the code in the browser using the

    lander.html 
    
file

To use the test harness you'll need node and grunt installed

Just run

    grunt test 

from the command line. The node modules have been installed locally already.

The API to the lander:


# deployLaser
# deploySoilSampler
# deployAtmosphereSampler
# sendResults
# releaseHarpoon
# fireLaunchThrusters
# plotCourseToEarth
# sendDistressSignal

Tasks:

1. deploy the soil sampler
2. deploy the soil sampler, send the results of the laser experiment when complete
3. deploy the soil sampler and the atmosphere sampler at the same time (i.e. don't wait for one to complete before doing the other)
4. deploy the soil sampler and the atmosphere sampler in parallel, as above. When both are complete send both sets of results together
5. release the harpoon. When this has completed, fire launch thrusters. When this has completed, plot course to earth
6. fire launch thrusters. If successful, plot course for earth, otherwise, send distress signal
