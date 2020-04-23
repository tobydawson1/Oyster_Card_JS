function OysterCard() {
    this.balance = 0
};

OysterCard.prototype.deposit = function(amount){
    this.balance += amount 
}