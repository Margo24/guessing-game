class GuessingGame {
// make a binary search by class

//define variables
    constructor() {
        this.min;
        this.max;
        this.middle;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.middle = Math.ceil((this.min + this.max)/2);
    }
//reinitialize
    lower() {
        this.max = this.middle;
    }

    greater() {
        this.min = this.middle;
    }
}

module.exports = GuessingGame;
