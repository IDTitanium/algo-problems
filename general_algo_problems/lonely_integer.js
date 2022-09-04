function lonelyinteger(a) {
    // Write your code here
    let uniqueNum = {}
    a.forEach(num => {
        if (num in uniqueNum) {
            uniqueNum[num] += 1
        }else {
            uniqueNum[num] = 1
        }
    })
    
    for (const num in uniqueNum) {
        // if (uniqueNum[num] === 1) {
        //     return uniqueNum[num]
        // }
        console.log(uniqueNum[num])
    }
    
}

// console.log(lonelyinteger([1,1,1,3]))

lonelyinteger([1,2,1,1,1,3])