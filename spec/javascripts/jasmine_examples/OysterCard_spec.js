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
            oystercard.touchIn()
            oystercard.touchOut()
            expect(oystercard.balance).toEqual(14)
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

    })
})
