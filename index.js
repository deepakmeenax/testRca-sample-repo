function twoSum(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map.has(complement)) {
      return [map.get(complement), i]
    }
    map.set(nums[i], i)
  }
  return []
}

// Example usage:
const nums = [2, 2, 4, 3]
const target = 5
console.log(twoSum(nums, target)) // Output: [0, 1]
