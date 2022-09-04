const a = [4,1,3,2]

const imb = 0

const findImbalance = (rank, sliceLevel = 1) => {
	const newTest = rank.slice(0, sliceLevel)

	for (i = 0; i< newTest; i++) {
		const result = Math.abs(newTest[i] - newTest[i+1])
		if (result > 0) {
			imb += 1
		}
	}

	if (sliceLevel < rank.length) {
		rank.splice(0, sliceLevel)
		findImbalance(rank, sliceLevel + 1)
	}
}

findImbalance(a)

console.log(imb)