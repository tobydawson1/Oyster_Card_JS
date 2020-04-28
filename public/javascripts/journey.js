function Journey() {
    this.journeyHistory = []
    this.entryStation = undefined 
    this.exitStation = undefined
};

Journey.prototype.setEntryStation = function(name, zone) {
    this.entryStation = name
    this.entryStationAndZone = [name, zone]
}

Journey.prototype.setExitStation = function(name, zone) {
    this.exitStation = name
    this.exitStationAndZone = [name, zone]
    this.setHistory()
}

Journey.prototype.setHistory = function() {
    this.completeJourney = [this.entryStationAndZone, this.exitStationAndZone]
    this.journeyHistory.push(this.completeJourney)
}


