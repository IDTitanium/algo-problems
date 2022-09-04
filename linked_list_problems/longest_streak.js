/**
 * Write a function, longestStreak, that takes in the head of a linked list 
 * as an argument. 
 * The function should return the length 
 * of the longest consecutive streak 
 * of the same value within the list.
 * 
 * */

const a = require('./new_node1.js')

const longestStreak = (head) => {
  let current = head;
  let longestLength = 0;
  let newStreak = 0;
  let currentVal = null;

  while (current !== null) {
  	if (current.val === currentVal) {
  		newStreak += 1;
  	} else {
  		currentVal = current.val
  		newStreak = 1;
  	}

  	if (newStreak > longestLength) {
  		longestLength = newStreak
  	}

  	current = current.next;
  }

  return longestLength;
};

const longestStreakRecursively = (head, longestLength = 0, newStreak = 1) => {
	if (head === null) return longestLength
	if (head.next === null || head.val !== head.next.val) {
		newStreak = 1
	} else {
		newStreak += 1
	}
  	if (newStreak > longestLength) {
		longestLength = newStreak
	}
  
  	return longestStreak(head.next, longestLength, newStreak)
}

console.log(longestStreakRecursively(a))



