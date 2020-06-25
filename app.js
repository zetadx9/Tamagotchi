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

let count = 0;

function gameStart () {
console.log("Game has started!");

function myCount() {
    // your original if-else wasn't allowing count to increment past 1
    if (count > 10) {
        count = 0;
    }
    $('#hungerNum').text(count);
    // increment count regardless of its current value
    count++;
} setInterval(myCount, 1000); 


$("#food").on("click",petHungry)

function petHungry() {
    // your original if-else wasn't allowing count to increment past 1
    if (count < 10) {
        count = count - 1 ;
    }
    $('#hungerNum').text(count);
    // increment count regardless of its current value
}



setInterval(function() {
    $('#change').attr('src','image2.gif');
  }, 3000, clearInterval()); // <- 1000ms = 1s

  setInterval(function() {
    $('#change').attr('src','image3.gif');
  }, 6000, clearInterval()); // <- 1000ms = 1s

  setInterval(function() {
    $('#change').attr('src','image4.gif');
  }, 9000, clearInterval()); // <-  1000ms = 1s

  setInterval(function() {
    $('#change').attr('src','image5.gif');
  }, 12000, clearInterval()); // <- 1000ms = 1s
  

 


}


// Pet Feed
//document.getElementById("food").addEventListener("click", petHungry);


    
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
 
