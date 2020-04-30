describe("journey", function() {
    var journey;
    beforeEach(function() {
        journey = new Journey();
    })

    describe("holds", function() {
        it('previous journeys', function() {
            journey.setEntryStation("Stockwell", 2)
            journey.setExitStation("Bank", 1)
            expect(journey.journeyHistory).toEqual([[["Stockwell", 2], ["Bank", 1]]])
        })

        it('calculates price', function() {
            journey.setEntryStation("Stockwell", 2)
            journey.setExitStation("Bank", 1)
            expect(journey.calculatePrice()).toEqual(2)
        })

    })

})
