(function(exports) {
function Journey() {
    this.journeyHistory = []
    this.entryStation = undefined 
    this.exitStation = undefined
    this.fare = undefined
    this.exitZone = undefined
    this.entryZone = undefined
    this.basicFare = 1

};

Journey.prototype.setEntryStation = function(name, zone) {
    this.entryStation = name
    this.entryZone = zone
    this.entryStationAndZone = [name, zone]
}

Journey.prototype.setExitStation = function(name, zone) {
    this.exitStation = name
    this.exitZone = zone
    this.exitStationAndZone = [name, zone]
    this.setHistory()
    this.calculatePrice()
}

Journey.prototype.setHistory = function() {
    this.completeJourney = [this.entryStationAndZone, this.exitStationAndZone]
    this.journeyHistory.push(this.completeJourney)
}

Journey.prototype.calculatePrice = function() {
    if (this.entryZone == this.exitZone) {
        this.fare = 1
        return this.fare
    } else
        this.fare = Math.abs(this.entryZone - this.exitZone);
        return this.fare += this.basicFare
}

    exports.Journey = Journey;

})(this);
