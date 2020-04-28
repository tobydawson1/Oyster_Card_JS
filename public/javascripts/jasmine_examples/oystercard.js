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

OysterCard.prototype.touchIn = function(name, zone) {
    if (this.balance < this.charge) {
        throw new Error("minimum fare not met")
    } else {
        this.inJourney = true
    }
    this.journey = new Journey()
    this.journey.setEntryStation(name, zone)
}

OysterCard.prototype.touchOut = function(name, zone) {
    this.payment(this.charge) 
    this.inJourney = false
    this.journey.setExitStation(name, zone)
    this.journey.journeyHistory
}

