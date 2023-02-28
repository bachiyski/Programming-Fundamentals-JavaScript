function demo(nums){
    nums.sort((a,b) => a-b)
    console.log(nums.slice(0,2).join(' '));
}
demo([30, 15, 50, 5])