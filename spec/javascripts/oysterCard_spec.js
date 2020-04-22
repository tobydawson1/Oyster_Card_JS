describe('oysterCard', function () {
    var oystercard;
    beforeEach(function() {
        oystercard = new OysterCard();
    })

    describe('knows', function() {
        it('is a card', function() {
            expect(oystercard.balance()).toEqual(0)
        });
    });

});