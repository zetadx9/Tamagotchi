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

function gameStart () {
//$('img').hide();
//$//('#Age1').css('style', '')
console.log("Game has started!")
setInterval(function() {
    $('#change').attr('src','image2.gif');
  }, 3000); // <- 1000ms = 1s

  setInterval(function() {
    $('#change').attr('src','image3.gif');
  }, 60000); // <- 1000ms = 1s

  setInterval(function() {
    $('#change').attr('src','image4.gif');
  }, 9000); // <- 1000ms = 1s

  setInterval(function() {
    $('#change').attr('src','image5.gif');
  }, 12000); // <- 1000ms = 1s
clearTimeout();
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
 
