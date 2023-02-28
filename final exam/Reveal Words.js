function demo(input) {
    let password = input.shift();
    let currLine = input.shift();
    while(currLine !== "Complete"){
        let newPassword = ""
        let tokens = currLine.split(" ");
        let command = tokens[0];
        if(tokens[0] === "Make" && tokens[1] === "Upper"){
            let index = +tokens[2];
            newPassword = password.replace(password[index], password[index].toUpperCase());
        }else if(tokens[0] === "Make" && tokens[1] === "Lower"){
            let index = +tokens[2];
            newPassword = password.replace(password[index], password[index].toLowerCase());
        }else if(command === "Insert"){
            let index = +tokens[1];
            let char = tokens[2];
            if(index === undefined){
                break
            }else{
                newPassword = password.split("");
                newPassword.splice(index, 0, char);
                password = newPassword.join("")

            }
        }else if(command === "Replace"){
            let char = 
              NewPassword.charCodeAt()
        }
        currLine = input.shift()
     
    }
       console.log(password);
}
// demo((['invalidpassword*',
//     'Add 2 p',
//     'Replace i -50',
//     'Replace * 10',
//     'Make Upper 2',
//     'Validation',
//     'Complete']))
demo((['123456789',
'Insert 3 R',
'Replace 5 15',
'Validation',
'Make Lower 3',
'Complete']))