function demo(arr){
    let sorted = arr.sort((a,b) => a.length - b.length ||
    a.localeCompare(b))
console.log(sorted.join('\n'));
}
demo(['alpha', 'beta', 'gamma'])