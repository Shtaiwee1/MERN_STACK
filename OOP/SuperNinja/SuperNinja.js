class Ninja{
    constructor(name,health,speed,strength){
    this.name=name;
    this.health=100;
    this.speed=3;
    this.strength=3;
}

sayName(){
console.log(this.name);
}

showStats(){
    console.log("Name: " + this.name);
    console.log("Strength: " +this.strength);
    console.log("Speed: "+ this.speed);
    console.log("Health: "+  this.health);
}


drinkSake(){
    this.health+=10;
    return"What one programmer can do in one month, two programmers can do in two months."

}
}


class Sensei extends Ninja{
    constructor(name){
        super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom=10;

    }


    speakWisdom(){
        const message=super.drinkSake();
        console.log(message);
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"