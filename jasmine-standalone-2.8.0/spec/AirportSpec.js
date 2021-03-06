describe("Airport", function () {

  var airport, plane; // declaring the variables used in these tests

  beforeEach(function() {
    airport = new Airport(); // initializing declared variable to a value
    plane = jasmine.createSpy('plane', ['land']);
  });

  it('Has no planes by default', function() {
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landing', function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('can clear planes for takeoff', function() {
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });

});
