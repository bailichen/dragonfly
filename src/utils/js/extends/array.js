Array.prototype.removeItem = function(item) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === item) {
            this.splice(i, 1);
            break;
        }
    }
}