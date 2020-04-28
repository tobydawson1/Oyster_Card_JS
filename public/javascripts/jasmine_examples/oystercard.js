function OysterCard() {
    this.balance = 0
    this.inJourney = false
    this.charge = 1
    this.maxBalance = 50
    this.penalty = 5
    this.journey = new Journey()
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
    } else if (this.inJourney == true) {
        this.balance -= this.penalty
    } else {
        this.inJourney = true
    }
    this.journey.setEntryStation(name, zone)
}

OysterCard.prototype.touchOut = function(name, zone) {
    if (this.inJourney == false) {
        this.balance -= this.penalty
    } else {
    this.payment(this.charge) 
    this.inJourney = false
    }
    this.journey.setExitStation(name, zone)
    this.journey.journeyHistory
}


