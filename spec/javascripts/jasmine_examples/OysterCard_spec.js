describe("oysterCard", function () {
    var oystercard;
    beforeEach(function() {
        oystercard = new OysterCard();

    })

    describe('knows its', function() {
        it('is a instance of a card', function() {
            expect(oystercard instanceof OysterCard).toBeTruthy();
        })

        it('starts with a balance of 0', function() {
            expect(oystercard.balance).toEqual(0)
        })

        it('when it is and is not in a journey', function() {
            oystercard.deposit(40)
            oystercard.touchIn()
            expect(oystercard.inJourney).toEqual(true)
            oystercard.touchOut()
            expect(oystercard.inJourney).toEqual(false)
        })

        it('when you do not have the minimum fare balance', function() {
            expect(function(){oystercard.touchIn()}).toThrow(new Error("minimum fare not met"))
        })
    })

    describe('it can', function() {
        it('deposit money to the card', function() {
            oystercard.deposit(5)
            expect(oystercard.balance).toEqual(5)
        })

        it('throw and error if max balance exceeded', function() {
            expect(function(){oystercard.deposit(51)}).toThrow(new Error("max balance exceeded"))
        })

        it('have money deducted for payment', function() {
            oystercard.deposit(15)
            oystercard.touchIn("Stockwell", 2)
            oystercard.touchOut("Bank", 1)
            expect(oystercard.balance).toEqual(13)
        })

        it('will deduct a penalty if i dont touch in', function() {
            oystercard.deposit(10)
            oystercard.touchOut()
            expect(oystercard.balance).toEqual(5)
        })

        it('will deduct a penalty if i dont touch out', function() {
            oystercard.deposit(10)
            oystercard.touchIn()
            oystercard.touchIn()
            expect(oystercard.balance).toEqual(5)
        })

        it('will store journeys', function() {
            oystercard.deposit(40)
            oystercard.touchIn("Stockwell", 2)
            oystercard.touchOut("Bank", 1)
            expect(oystercard.journey.journeyHistory).toEqual([[["Stockwell", 2], ["Bank", 1]]])
        })

        it('have correct money deducted for payment depnding on Zone', function() {
            oystercard.deposit(15)
            oystercard.touchIn("Mordon", 4)
            oystercard.touchOut("Bank", 1)
            expect(oystercard.balance).toEqual(11)
        })

        it('have correct money deducted for payment if they stayed in same zone', function() {
            oystercard.deposit(15)
            oystercard.touchIn("Embankment", 1)
            oystercard.touchOut("Bank", 1)
            expect(oystercard.balance).toEqual(14)
        })

        it('knows the right price if you travel between 2 zones', function() {
            oystercard.deposit(15)
            oystercard.touchIn("Embankment", 1)
            oystercard.touchOut("Bank", 3)
            expect(oystercard.journey.calculatePrice()).toEqual(3)
        })

        it('knows the right price if you travel between 2 zones', function() {
            oystercard.deposit(15)
            oystercard.touchIn("Embankment", 1)
            oystercard.touchOut("Bank", 3)
            expect(oystercard.balance).toEqual(12)
        })
    })
})
