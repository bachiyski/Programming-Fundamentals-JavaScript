function demo(arr){
    for (const name of arr) {
        singer = {
        name : name,
        personalNumber : name.length
    }
    console.log(`Name: ${singer.name} -- Personal Number: ${singer.personalNumber}`);
}
}
demo([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])