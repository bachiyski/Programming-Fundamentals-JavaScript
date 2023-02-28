function demo(input) {
    let string = '';
    let counter = 0;
    for (const line of input) {
        let tokens = line.split(' ');
        let command = tokens[0];
        if (command === 'Add') {
            let substring = tokens[1];
            let arr = string.split('')
            arr.push(substring);
            string = arr.join('')

        } else if (command === 'Upgrade') {
            let letter = tokens[1];
            let index = string.indexOf(letter);
            let code = string.charCodeAt(index);   
            let swap = String.fromCharCode(code + 1);
            let toFindRegex = new RegExp(letter, 'g');
            string = string.replace(toFindRegex, swap);
        } else if (command === 'Print') {
            console.log(string);
        } else if (command === 'Index') {
            let letter = tokens[1];
            let index = string.indexOf(letter);
            let arr = [];
            if (index < 0) {
                console.log('None');
            }else{
            for (let allLetters of string) {
                if (allLetters === letter) {
                    arr.push(counter)
                }
                counter++
            }
            console.log(arr.join(' '))
        }
        } else if (command === 'Remove') {
            let substring = tokens[1];
            let toFindRegex = new RegExp(substring, 'g');
            string = string.replace(toFindRegex,'');
        } else if (command === 'End') {
            break
        }
    }
}
demo(["Add HelloWorld",
"Upgrade e",
"Print",
"Index b",
"Remove rl",
"Print",
"End"])


