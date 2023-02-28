function demo(arr) {
    let result = {}
    for (const nameOfPerson of arr) {
        phoneBook = nameOfPerson.split(' ');
        let name = phoneBook[0];
        let phone = phoneBook[1];
        result[name] = phone;
    }
    for (const key in result) {
        console.log(`${key} -> ${result[key]}`);
    }
}
demo(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])
