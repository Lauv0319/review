function sortArray(nums, left = 0, right = nums.length-1){
  if(nums.length>1){
    let unit = part(nums, left, right)
    if(left<unit-1){
      sortArray(nums, left, unit-1)
    }
    if(unit<right){
      sortArray(nums, unit, right)
    }
  }
  return nums
}
function part(nums, left, right){
  let mid = nums[Math.floor(left+(right-left)/2)]
  let i = left
  let j = right
  while(i<=j){
    while(nums[i]<mid){
      i++
    }
    while(mid<nums[j]){
      j--
    }
    if(i<=j){
      [nums[i],nums[j]] = [nums[j],nums[i]]
      i++
      j--
    }
  }
  return i
}
console.log(sortArray([58,1,4,6,7,99]));