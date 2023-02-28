function demo(nums, commands) {
    for (const line of commands) {
        let command = line.split(' ');
        if (command[0] === 'add') {
            let index = Number(command[1]);
            let element = Number(command[2]);
            nums.splice(index, 0, element);
        } else if (command[0] === 'addMany') {
            let index = Number(command[1]);
            command.splice(0, 2);
            let numbersToAdd = command.map(Number);
            nums.splice(index, 0, ...numbersToAdd);
        } else if (command[0] === 'contains') {
            let element = Number(command[1]);
            console.log(nums.indexOf(Number(element)))
        } else if (command[0] === 'remove') {
            let index = Number(command[1]);
            nums.splice(index, 1)
        } else if (command[0] === 'shift') {
            let position = Number(command[1]);
            for (let i = 0; i < position; i++) {
                let fistNumber = nums.shift()
                nums.push(fistNumber)
            }
        } else if (command[0] === 'sumPairs') {
            let newArr = [];
            if (nums.length % 2 === 0) {
                nums.push(0);
            }
            for (let i = 0; i < nums.length - 1; i+=2) {
                let sum = nums[i] + nums[i + 1]
                newArr.push(sum);
            }
            nums = newArr
        } else if (command[0] === 'print') {
            console.log(`[ ${nums.join(', ')} ]`)
            break
        }
    }

}
demo([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"])