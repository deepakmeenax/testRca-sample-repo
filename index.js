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
const nums = [22, 72, 141, 135]
const target = 93
console.log(twoSum(nums, target)) // Output: [0, 1]
