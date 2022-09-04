//Log all pairs of an array

/**

const boxes = [1,2,3,4,5]

should log
1,1
1,2
1,3
1,4
1,5
2,1
2,2
2,3
2,4
2,5
... 5,5
**/

const logPairs = (arr) => {
	let i = 0
	let j = 0

	while (i < arr.length && j < arr.length) {
		console.log(`Printing ${arr[j]}, ${arr[i]}`)
		
		if (i === arr.length - 1) {
			j += 1
			i = 0
		} else {
			i += 1
		}
	}
}

const boxes = [1,2,3,4,5]

logPairs(boxes)