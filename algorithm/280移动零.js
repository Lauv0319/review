function moveZero(nums){
  let normalIndex = 0
  for(let i = 0;i<nums.length;i++){
    if(nums[i]!==0){
      [nums[normalIndex],nums[i]] = [nums[i],nums[normalIndex]]
      normalIndex++
    }
  }
return nums
}
console.log(moveZero([0,2,5,0,7]));