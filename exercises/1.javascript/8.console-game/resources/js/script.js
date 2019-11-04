//**********Good luck************ */
function stats(name, race, type, attack, heal, health) {
    this.name = name;
    this.race = race;
    this.type = type;
    this.attack = attack;
    this.heal = heal;
    this.health = health;
}
let sans = new stats("SANS", "MONSTER", "SKELETON", "ATTACK", "HEAL",
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

        winCondition()
        randomPun(puns);
        setTimeout(sans, 1500);

    } else {
        friskAttack = Math.floor(Math.random() * (121 - 20)) + 20;
        sansHP -= friskAttack;
        console.log("Frisk dealt " + friskAttack + " damage" + "\n" + "Sans now has " + sansHP + " hit points left" + "\n" + "--------------");
        if (soundOn == true) {
            attackAudio.play();
        } else {
            //no sound
        }
        winCondition()
        randomPun(puns);
        setTimeout(sans, 1500);
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
    } else {
        randomPun(puns);
    }
    if (soundOn == true) {
        healAudio.play();
    } else {
        //no sound
    }
    winCondition()
    setTimeout(sans, 1500);
}

//sans turn
function Sans() {
    sansTurn = Math.floor(Math.random() * (3 - 1)) + 1;

    if (sansTurn === 1) {
        critAttackChance = (Math.floor(Math.random() * (5 - 1)) + 1); //initialise new random crit chance
        if (critAttackChance == 1) {
            //CRIT
            sansAttack = Math.floor(Math.random() * (16 - 10)) + 10; //initialise new random damage value
            friskHP -= (sansAttack * 2);
            console.log("CRIT!" + "\n" + "Sans did " + sansAttack * 2 + " damage" + "\n" + "Chara now has " + '%c' +
                friskHP + '%c' + " hp" + "\n" + "--------------", 'color: red', 'color:none');
            if (soundOn == true) {
                attackSound.play();
            } else {
                //no soundbyte
            }
        } else {
            sansAttack = Math.floor(Math.random() * (16 - 10)) + 10; //initialise new random damage value
            //normal hit
            friskHP -= sansAttack;
            console.log("Sans did " + sansAttack + " damage" + "\n" + "Chara now has " + '%c' +
                friskHP + '%c' + " hp" + "\n" + "--------------",
                'color: red', 'color:none');
            if (soundOn == true) {
                attackSound.play();
            } else {
                //no soundbyte
            }
        }
    } else {
        function sansHeals() {
            sansHeal = Math.floor(Math.random() * (81 - 40)) + 40; //initialise new random heal value
            console.log("Sans healed " + sansHeal + " hp" + "\n" + "Sans now has " + '%c' +
                sansHP + '%c' + " hp" + "\n" + "--------------", 'color: blue', 'color:none');
        }
        if (soundOn == true) {
            healSound.play();
        } else {
            //no soundbyte
        }
        winCondition()
        sansHeals();
    }
}

let friskWins = false;
let sansWins = false;

function winCondition() { //check to see if anyone has lost the game
    if (sansHP < 1) {
        friskWins = true;
        console.log("GAME END" + "\n" + "CHARA WINS")
        setTimeout(restart, 5000);
    } else if (friskHP < 1) {
        sansWins = true;
        console.log("GAME END" + "\n" + "SANS WINS")
        setTimeout(restart, 5000);
    }
}

function restart() { //Restart game when someone has won

    if (sansWins == true || friskWins == true) {
        window.location.reload();
    } else {
        console.log("Can't restart unless someone has won the game")
    }
}