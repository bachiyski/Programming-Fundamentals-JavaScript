function demo(input){
    let message = input.shift();
    for (const line of input) {
        let tokens = input.shift().split('|');
        let command = tokens[0];
        if(command === 'Move'){
            let numOfletters = tokens[1];
            let spliced = message.splice(0,numOfletters);
            message.push(spliced)
        }else if(command === 'Insert'){
            let index = tokens[1];
            let value = tokens[2];
            message.splice(index - 1, 0 ,value)
        }else if(command === 'ChangeAll'){
            let substring = tokens[1];
            let replacement = tokens[2];
                message.replace(substring,replacement)
        }else if(command === 'Decode'){
            console.log(`The decrypted message is: ${message}`);
        }
    }
}
demo([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ])