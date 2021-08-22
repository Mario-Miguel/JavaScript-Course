let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty : function (partySize){
        if (this.checkAvailability(partySize)){
            this.guestCount = this.guestCount + partySize
            console.log(`All in`)
        }
        else{
            console.log(`There is no space for the party`)
        }
    },
    removeParty: function (partySize) {
        if (this.guestCount > partySize){
            this.guestCount = this.guestCount- partySize
        }
        else{
            this.guestCount = 0
        }
    }
}

console.log(restaurant.checkAvailability(10))
restaurant.seatParty(70)
restaurant.seatParty(10)
restaurant.removeParty(20)
restaurant.seatParty(10)