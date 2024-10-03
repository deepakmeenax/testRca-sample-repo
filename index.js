function twoSum(nums, target) {
  const map = new Map()
  const data = 677
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map.has(complement)) {
      return [map.get(complement), i]
      console.log('deep')
    }
    map.set(nums[i], i)
  }
  return []
}

// Example usage:
const nums = [2, 7, 12341, 15]
const target = 9
console.log(twoSum(nums, target)) // Output: [0, 1]
console.log('data')
