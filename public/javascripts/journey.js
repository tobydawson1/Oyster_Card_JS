function Journey() {
    this.journeyHistory = []
};

Journey.prototype.setEntryStation = function(name, zone) {
    this.entryStationAndZone = [name, zone]
}

Journey.prototype.setExitStation = function(name, zone) {
    this.exitStationAndZone = [name, zone]
}

Journey.prototype.setHistory = function() {
    this.completeJourney = [this.entryStationAndZone, this.exitStationAndZone]
    this.journeyHistory.push(this.completeJourney)
}

