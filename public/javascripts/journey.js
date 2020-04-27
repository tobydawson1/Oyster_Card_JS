function Journey() {
    this.journeyHistory = []
};

Journey.prototype.setEntryStation = function(name, zone) {
    this.entryStation = name
    this.entryZone = zone
}

journey.prototype.setExitStation = function(name, zone) {
    this.exitStation = name
    this.exitZone = zone
}

