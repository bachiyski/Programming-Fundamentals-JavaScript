function demo(arr){     
       class Cat {
            constructor(name, age){
                this.namee = name;
                this.age = age;
            }
            speak(){
                console.log(`${this.namee}, age ${this.age} says Meow`);
            }
        }
        let newArr = [];
    for (let catAsString of arr) {
        let splitted = catAsString.split(' ')
        let cat = new Cat(splitted[0], Number(splitted[1]))
        newArr.push(cat)
    }

    for (const cat of newArr ) {
        cat.speak()
    }
    
}
demo(['Mellow 2', 'Tom 5'])