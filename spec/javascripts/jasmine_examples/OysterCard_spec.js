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
    })

    describe('it can', function() {
        it('deposit money to the card', function() {
            oystercard.deposit(5)
            expect(oystercard.balance).toEqual(5)
        })

        it('throw and error if max balance exceeded', function() {
            expect(function(){oystercard.deposit(51)}).toThrow(new Error("max balance exceeded"))
        })
    })
});
