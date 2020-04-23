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
        it('can ')
    })
});
