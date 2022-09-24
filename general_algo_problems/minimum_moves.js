function minimumMoves(arr1, arr2) { // Write your code here
    let i = 0;
    let numOfMoves = 0
    while (i < arr1.length) {
        const num1 = arr1[i]
        const num2 = arr2[i]
        numOfMoves += getMoves(num1, num2)
        i += 1
    }
    return numOfMoves
}

function getMoves(num1,num2) {
    num1 = num1.toString()
    num2 = num2.toString()
    let result = 0
    for (let i = 0; i < num1.length; ++i) {
        result = result+ Math.abs(num1[i] - num2[i])
    }
    return result
}