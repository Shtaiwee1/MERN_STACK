class Card{
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }
}


class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power=power;
        this.res=res;
    }

attack(target) {
    if (target instanceof Unit) {
        target.res -= this.power;
    } else {
        throw new Error("Target must be a unit!");
    }
}

showStats() {
    console.log("Power: "+ this.power, "Resilience: "+ this.res);
  }
}


class Effect extends Card{
    constructor(name,cost,text,stat,mag){
        super(name,cost)
    this.text = text;
    this.stat = stat;
    this.mag = mag;
    }

    play(target) {
        if (target instanceof Unit) {
            if (this.stat == "resilience") {
            target.res += this.mag;
            } else if (this.stat == "power") {
            target.power += this.mag;
            }
        } else {
            throw new Error("Target must be a unit!");
        }
        }
}

const BlackBeltNinja = new Unit("Black Belt Ninja", 9, 6, 8);
const RedBeltNinja = new Unit("Red Belt Ninja", 20, 12, 10);


const HardAlgorithm = new Effect(
  "Hard Algorithm",
  2,
  "increase target's resilience by 3",
  "resilience",
  3
);

const PairProgramming = new Effect(
    "Pair Programming",
    3,
    "increase target's power by 2",
    "power",
    2
  );

const UnhandledPromiseRejection = new Effect(
  "Unhandled Promise Rejection",
  1,
  "reduce target's resilience by 2",
  "resilience",
  -2
);





BlackBeltNinja.showStats();
RedBeltNinja.attack(BlackBeltNinja);
BlackBeltNinja.showStats();
RedBeltNinja.showStats();
HardAlgorithm.play(RedBeltNinja);
RedBeltNinja.showStats();
UnhandledPromiseRejection.play(RedBeltNinja);
RedBeltNinja.showStats();
PairProgramming.play(RedBeltNinja);
RedBeltNinja.showStats();