class GuessingGame {
    constructor() {
        this.gMin = 0
        this.gMax = 0
        this.res = 0
    }

    setRange(min, max) {
        this.gMin = min
        this.gMax = max
    }

    guess() {
        this.res =  Math.round((this.gMax-this.gMin)/2)+this.gMin
        return this.res
    }

    lower() {
        this.gMax =  this.res
    }

    greater() {
        this.gMin =  this.res
    }
}

module.exports = GuessingGame;
