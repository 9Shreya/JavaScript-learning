var size = prompt('enter the size')
var ar = new Array(size)
for (let i = 0; i < size; i++) {
    ar[i] = prompt('enter value for array')

    if (i % 2 == 0) {
        console.log(ar[i])
    }
}
console.log(ar)
ar.push(12)
console.log(ar)