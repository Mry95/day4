Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}


Arr = ['a', 2, 4, '5g', 'h']
Arr.myForEach((item, index, arr) => {
    console.log(item, index, arr) //a,2,4,5g,h
})