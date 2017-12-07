# AIRPORT CHALLENGE

```
        ______
        _\____\___
=  = ==(____MA____)
          \_____\___________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

```

## Instructions

* Challenge time: in class Wednesday and Saturday, on your own time, until Monday 5pm
* Feel free to use google, your notes, books, each other etc. **but work on your own**
* If you refer to the solution of another student, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* Slack a link to your Github repo by Monday 5pm


## Steps
1. Create a new repo named airport-js
2. Inside set up jasmine as your testing framework…
  -  https://github.com/jasmine/jasmine/releases
  -  if you still have the zip file simply drag it in and open it
  -  if desired delete the demo/example files that come with jasmine
3. In ‘spec’ file add the unit tests you’ve been provided via Slack
4. In ‘src’ file create Plane.js and Airport.js
  - These files are for your Plane/Airport objects/’classes’
  - Recall the javascript module pattern we’ve been working on
  - In these files you will write the code required to pass your tests
5. Update the SpecRunner.html with links to the spec & src files
6. Initialize a local git repository
  - Make sure you do so in the root directory of your project airport-js
7. Stage and commit your project setup with the message 'first commit'
  - Create a Github repo and set up a remote in order to push your repo


## Complete the following task:
We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.

Your task is to make the prewritten tests pass AND write additional tests to  TDD the creation of a set of classes/modules to satisfy all the above user stories. You will need to use a random number generator to set the weather (it is normally sunny but on rare occasions it may be stormy). In your tests, you'll need to use a stub to override random weather to ensure consistent test behavior.

Here are the user stories that were worked out in collaboration with the client:

> As an air traffic controller
So I can get passengers to a destination
I want to instruct a plane to land at an airport

> As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

> As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

> As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

> As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

> As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

### In code review we'll be hoping to see...
* All tests passing
* The code is elegant: every class has a clear responsibility, methods are short etc.
* Create separate files for every class, module and test suite.


Your code should defend against [edge cases](http://programmers.stackexchange.com/questions/125587/what-are-the-difference-between-an-edge-case-a-corner-case-a-base-case-and-a-b) such as inconsistent states of the system ensuring that planes can only take off from airports they are in; planes that are already flying cannot takes off and/or be in an airport; planes that are landed cannot land again and must be in an airport, etc.

## Finally, don’t overcomplicate things. This task isn’t as hard as it may seem at first.
