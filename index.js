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
const nums = [202, 70, 100, 100]
const target = 903
console.log(twoSum(nums, target)) // Output: [0, 1]
