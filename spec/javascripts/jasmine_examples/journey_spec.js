describe("journey", function() {
    var journey;
    beforeEach(function() {
        journey = new Journey();
    })

    describe("holds", function() {
        it('previous journeys', function() {
            journey.setEntryStation("Stockwell", 2)
            journey.setExitStation("Bank", 1)
            journey.setEntryStation("Clapham North", 2)
            journey.setExitStation("Mordon", 4)
            journey.setEntryStation("Tooting Bec", 3)
            journey.setExitStation("Aldgate East", 1)
            journey.setEntryStation("Oval", 2)
            journey.setExitStation("Embankment", 1)
            expect(journey.journeyHistory).toEqual([[["Stockwell", 2], ["Bank", 1]], [["Clapham North", 2], ["Mordon", 4]], [["Tooting Bec", 3], ["Aldgate East", 1]], [["Oval", 2], ["Embankment", 1]]])
        })
    })

    describe('can', function() {

        it('calculate price', function() {
            journey.setEntryStation("Stockwell", 2)
            journey.setExitStation("Bank", 1)
            expect(journey.calculatePrice()).toEqual(2)
        })

    })

})
