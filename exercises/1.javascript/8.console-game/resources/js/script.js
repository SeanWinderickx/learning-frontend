//**********Good luck************ */
function stats(name, race, type, attack, heal, health) {
    this.name = name;
    this.race = race;
    this.type = type;
    this.attack = attack;
    this.heal = heal;
    this.health = health;
}
let sans = new stats("SANS", "MONSTER", "SKELETON", "ATTACK",
    "HEAL", 1000); //sans stats
console.log(sans);
let frisk = new stats("FRISK", "HUMAN...?", "DUMBASS", "ATTACK", "HEAL", 100); //player stats
console.log(frisk);

//Sans lets
let sansHP = sans.health;
let sansAttack = sans.attack;
let sansHeal = sans.heal;

//Frisk lets
let friskHP = frisk.health;
let friskAttack = frisk.attack;
let friskHeal = frisk.heal;

let healAudio = new Audio('resources/sound/heal.mp3');
let attackAudio = new Audio('resources/sound/attack.mp3');


//frisk attacks
function friskAttacks() {
    critChance = (Math.floor(Math.random() * (5 - 1)) + 1) //The chance of landing a critical strikes
    if (critChance == 4) {
        friskAttack = Math.floor(Math.random() * (121 - 20)) + 20;
        sansHP -= (friskAttack * 2);
        console.log("OOF!" + "\n" + "Frisk just crit for" + friskAttack * 2 + " damage" + "\n" + "Sans now has " + sansHP + " hit points left" + "\n" + "-----------");
        console.log("Sans is considering his next move...");
        if (soundOn == true) {
            attackAudio.play();
        } else {
            //no sound
        }

    } else {
        friskAttack = Math.floor(Math.random() * (121 - 20)) + 20;
        sansHP -= friskAttack;
        console.log("Frisk dealt " + friskAttack + " damage" + "\n" + "Sans now has " + sansHP + " hit points left" + "\n" + "--------------");
        if (soundOn == true) {
            attackAudio.play();
        } else {
            //no sound
        }
    }
}

//frisk heals
function friskHeals() {
    friskHeal = Math.floor(Math.random() * (21 - 8)) + 8;
    console.log("Frisk mended " + friskHeal + " hit points" + "\n" + "Frisk now has " +
        friskHP + " hp" + "\n" + "--------------");
    console.log("Sans is considering his next move...")
    if (friskHP > 100) {
        randomPun(overHealReaction);
        console.log("OVERHEALED");
    } else {}
    if (soundOn == true) {
        healAudio.play();
    } else {
        //no sound
    }
}

//sans turn
/*functions sans() {
    sansTurn = Math.floor(Math.random() * (3 - 1) + 1);

    if (sansTurn === 1) {
    }
}*/