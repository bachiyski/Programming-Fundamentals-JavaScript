function demo(arr) {
    let passengers = arr.shift().split(" ").map(Number);
    let maxCapacity = arr.shift();
    for (let command of arr) {
        let currCommand = command.split(' ');
        if(currCommand[0] === 'Add'){
            passengers.push(Number(currCommand[1]));
        }else{
            for (let i = 0; i < passengers.length; i++) {
                if (passengers[i] + Number(currCommand[0]) <= maxCapacity) {
                    passengers[i] += Number(currCommand[0]);
                    break
                }
                
            }
        }
    }
    console.log(passengers.join(" "));
}
demo(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])