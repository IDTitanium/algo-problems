
// [2,9,10,3,7]

const a = [2,9,10,3,7]
const b = [2,9,22,32,1]

const getHeaviestPackage = (packages) => {
	let largestCombo = 0
	let firstIndex = null
	let secondIndex = null
	for (i = 0; i<packages.length; i++) {
		if (packages[i] < packages[i + 1]) {
			let combo = packages[i] + packages[i + 1]
			if (combo > largestCombo) {
				firstIndex = i
				secondIndex = i + 1
				largestCombo = combo
			}
		}
	}

	if(firstIndex && secondIndex) {
		packages[secondIndex] = packages[firstIndex] + packages[secondIndex]
		packages.splice(firstIndex, 1)
	}

	const max = handleOtherCombinations(packages)
	return max
}
const handleOtherCombinations = (packages) => {
	let largerValue = 0
	let smallerValue = 0
	let index = null
	for (i = 0; i<packages.length; i++) {
		if (packages[i] < packages[i + 1] && packages[i + 1] > largerValue) {
			largerValue = packages[i + 1]
			smallerValue = packages[i]
			index = i
		}

		if (index !== null) {
			const combined = smallerValue + largerValue
			packages[index+1] = combined
			packages.splice(index, 1)
			handleOtherCombinations(packages)
		}
	}

	return Math.max(...packages)
}

const getLargestWeight = (packages) => {
    let currentMax = -Infinity;
    let pointer1 = 0;
    let pointer2 = 0;
    let currentAcc = packages[pointer2];

    while(pointer1 < packages.length) {
        if(packages[pointer2] < packages[pointer2 + 1]){
              currentAcc += packages[pointer2 + 1];
              pointer2++;
        } else {
            pointer1++;
            pointer2 = pointer1;
           

            if(currentAcc > currentMax) {
                currentMax = currentAcc;
            }

             currentAcc = packages[pointer2];
        }
    }

    if(currentAcc > currentMax) {
        currentMax = currentAcc;
    }

    return currentMax;
}

console.log(getLargestWeight(a))