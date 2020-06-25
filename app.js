// console.log('Hello World')


class tamagotchi {
    constructor(name) {
        this.name = name;
        this.creatureType = 'Digimon';
        this.hunger = 10;
        this.sleepiness = 10;
        this.boredom = 10;
        this.age = 0;
    }
}




// Start Game

//document.getElementById("play-game").addEventListener("click", gameStart);
$("#play-game").on("click",gameStart)
console.log($("#age").val());

function gameStart () {
console.log("Game has started!");

let num = parseInt($('#hungerNum'));
let count = 0;
function myCount() {
    // your original if-else wasn't allowing count to increment past 1
    if (count > 10) {
        count = 0;
    }
    $('#hungerNum').text(count);
    // increment count regardless of its current value
    count++;
}

setInterval(myCount, 500); 
  
}









// Pet Feed
//document.getElementById("food").addEventListener("click", petHungry);
$("#food").on("click",petHungry)

 function petHungry () {
    this.hunger--;
    console.log("WAAAH!!!!!!");
    console.log(this.name + ' has current food in tummy = ' + tamagotchi.this.hunger);
 }
 //petHungry();


// Pet Rest
//document.getElementById("sleep").addEventListener("click", petSleepy);
$("#sleep").on("click",petSleepy);

function petSleepy () {
console.log("petSleepy");

}


// Pet Play Time
//document.getElementById("play").addEventListener("click", petBored);
$("#play").on("click",petBored);

$('#Boredom').append('9');


// Pet Health


function petHealth () {

}
 
