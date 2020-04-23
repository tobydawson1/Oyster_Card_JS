function OysterCard() {
    this.balance = 0
    this.inJourney = false
};

OysterCard.prototype.deposit = function(amount) {
    if (amount > 50) {
        throw new Error("max balance exceeded")
    } else {
        this.balance += amount 
    }
};

OysterCard.prototype.payment = function(amount) {
    this.balance -= amount
}

OysterCard.prototype.touchIn = function() {
    this.inJourney = true
}

