// console.log('Hello World')


class tamagotchi {
    constructor(name) {
        this.name = name
        this.creatureType = 'Digimon'
        this.hunger = 10
        this.sleepiness = 10
        this.boredom = 10
        this.health = 10
        this.age = 0
        this.stopIntervals = []
      }
}


// Start Game

document.getElementById("play-game").addEventListener("click", gameStart);

function gameStart () {

}



// Pet Feed
document.getElementById("food").addEventListener("click", petHungry);

function petHungry () {
    while(this.hunger <= 10) {
    this.hunger -= 1;
    if(this.hunger === 0)
    {
        console.log('You died');
    }
    break;
}
}


// Pet Rest
document.getElementById("sleep").addEventListener("click", petSleepy);

function petSleepy () {

}


// Pet Play Time
document.getElementById("play").addEventListener("click", petBored);

function petBored () {

}

// Pet Health


function petHealth () {

}
 
