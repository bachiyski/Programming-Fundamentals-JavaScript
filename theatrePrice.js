function demo(day, age) {
    if (age <= 122 && age >= 0) {
        switch (day) {
            case 'Weekday':
                if (age > 18 && age <= 64) {
                    price = 18
                }
                else {
                    price = 12
                } break
                case 'Weekend' :
                    if(age > 18 && age <= 64){
                        price = 20
                    }
                    else{
                        price = 15
                    }break
                    case 'Holiday' :
                        if(age <= 18) {
                            price = 5
                        }
                        else if(age > 18 && age <= 64){
                            price = 12
                        }
                        else{
                            price = 10
                        }
                        
        }
        console.log(price + '$');
    }
    else{
        console.log('Error!');
    }
}
demo('Holiday', -12)