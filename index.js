function twoSum(nums, target) {
  const map = new Map()
  const data = 6767838947
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
const nums = [2, 7, 12341, 1545]
const target = 9

console.log('new data1')
console.log('new data2')
console.log('newdata34')
console.log('newdat1223')
const dta23 = 3444
const dta2334 = 344434
const dta2333 = 3444344
