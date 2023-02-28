function demo(input) {
    let equipment = input.shift().split(' ');
    for (const line of input) {
        let tokens = line.split(' ');
        let command = tokens[0];
        if (command === 'Buy') {
            if (!equipment.includes(tokens[1])) {
                let item = tokens[1];
                equipment.push(item)
            }
        } else if (command === 'Trash') {
            let index = equipment.indexOf(tokens[1]);
            if(index >= 0 ){
            equipment.splice(index, 1)
        }
        } else if (command === 'Repair') {
            let item = tokens[1]
            let index = equipment.indexOf(tokens[1])
            if (equipment.includes(item)) {
                let slicedItem = equipment.splice(index, 1);
                equipment.push(slicedItem)
            }
        } else if (command === 'Upgrade') {
            let splitted = tokens[1].split('-');
            if (equipment.includes(splitted[0])) {
            let upgraded = splitted.join(':');
            let index = equipment.indexOf(splitted[0]);
            equipment.splice(index + 1, 0, upgraded)
            }

        }
    }

    console.log(equipment.join(' '))
}
demo(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V'])