function demo(name, lastName, hairColor){
    let obj = {
        name,
        lastName,
        hairColor
    }
    console.log(JSON.stringify(obj));
}
demo('George', 'Jones', 'Brown')