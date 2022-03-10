class Tamagotchi {
    name:string;
    typeA:string;
    value1: number;
    value2: number;
    intervall: number;

    constructor (name, typeA){
        this.name = name;
        this.typeA = typeA;
        this.value1 = 5;
        this.value2 = 5; 
        setInterval(this.decreaseValue1.bind(this), 30000); 
        setInterval(this.decreaseValue2.bind(this), 30000); 
    }

    feedTamagotchi(){
        this.value1++; 
        console.log('Thank you pawrent, for the food!');
    }

    decreaseValue1() {
        this.value1--;  
        console.log(`You need to feed your tama, foodvalue is now ${this.value1}`); 
    }

    decreaseValue2() {
        this.value2--;
        console.log(`You need to play with your tama, happyvalue is running low! It is now ${this.value2}`); 
    }

    playTamagotchi(){
        this.value2++; 
        console.log('Yey, we are having so much fun!'); 
    }
}

