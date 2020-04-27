describe("journey", function() {
    var journey;
    beforeEach(function() {
        journey = new Journey();
    })

    describe("has", function() {
        it('holds previous journeys', function() {
            expect(journey.journeyHistory).toEqual([])
        })
    })
})
