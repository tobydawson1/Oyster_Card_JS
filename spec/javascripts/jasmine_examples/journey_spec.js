describe("journey", function() {
    var journey;
    beforeEach(function() {
        journey = new Journey();
    })

    describe("holds", function() {
        it('previous journeys', function() {
            journey.setEntryStation("Stockwell", 2)
            journey.setExitStation("Bank", 1)
            journey.setHistory()
            expect(journey.journeyHistory).toEqual([[["Stockwell", 2], ["Bank", 1]]])
        })

    })
})
