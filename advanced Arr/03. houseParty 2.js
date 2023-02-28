function demo(arr) {
    let newArr = [];
    for (const line of arr) {
        let tokens = line.split(' ');
        let name = tokens[0];
        if (tokens.length === 3) {
            if (newArr.includes(name)) {
                console.log(`${name} is already in the list!`);
            }
            else{
                newArr.push(name)
            }
        }else{
            let indexOfPerson = newArr.indexOf(name)
            if (indexOfPerson !== -1) {
                newArr.splice(indexOfPerson,1)
            }
            else{
                console.log(`${name} is not in the list!`)
            }
        }
    }  
    console.log(newArr.join("\n")) 
}
demo(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'])