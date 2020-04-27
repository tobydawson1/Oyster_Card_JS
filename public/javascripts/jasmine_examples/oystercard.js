function OysterCard() {
    this.balance = 0
    this.inJourney = false
    this.charge = 1
    this.maxBalance = 50
};

OysterCard.prototype.deposit = function(amount) {
    if (amount > this.maxBalance) {
        throw new Error("max balance exceeded")
    } else {
        this.balance += amount 
    }
};

OysterCard.prototype.payment = function(amount) {
    this.balance -= amount
}

OysterCard.prototype.touchIn = function() {
    if (this.balance < this.charge) {
        throw new Error("minimum fare not met")
    } else {
        this.inJourney = true
    }
}

OysterCard.prototype.touchOut = function() {
    this.payment(this.charge) 
    this.inJourney = false
}
