/*

*/

export function tribonacci( signature, n ) {
	 //Insert your code here 
	 const arr = [...signature]
	 let sigPoint = 3
	 let startPoint = 0
	 while (arr.length < n) {
	 	let numsToAdd = arr.slice(startPoint, sigPoint)
		arr.push(sum(numsToAdd))
		sigPoint += 1
		startPoint += 1
	 }
	 return arr
}

const sum = (nums) => {
	let result = 0
	nums.forEach(num => {
		result += num
	})
	return result
}