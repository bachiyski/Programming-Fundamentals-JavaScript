function demo(n,arr){
    let slice = [];
    for (let i = 0; i < n; i++) {
        slice.push(arr[i])
        
    }
    
    console.log(slice.reverse().join(' '));
    }
    demo(3, [10, 20, 30, 40, 50])