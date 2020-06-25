// console.log('Hello World')


class tamagotchi {
    constructor(name) {
        this.name = name;
        this.creatureType = 'Digimon';
        this.hunger = 10;
        this.sleepiness = 10;
        this.boredom = 10;
        this.age = 0;
          this.tired = function() {
            this.sleepiness--;
            console.log('Bleeeeh! Sick!!!!!!');
            console.log(this.name + ' has current health = ' + this.sleepiness);
          };
          this.bored = function(){
            this.boredom--;
            console.log('Yaaaawwwwn! So tired');
            console.log(this.name + ' has current restedness = ' + this.boredom);
          };
          this.start = function(){
            console.log("Starting " + this.name);
            var self = this;
            this.hungerTimer = setInterval(function() {
              self.cry();
            }, 6000);
            this.yawnTimer = setInterval(function() {
              self.tired();
            }, 10000);
            this.boredTimer = setInterval(function() {
              self.bored();
            }, 25000);
          };
          this.stop = function(){
            console.log("Stopping " + this.name);
            clearInterval(this.hungerTimer);
            clearInterval(this.yawnTimer);
            clearInterval(this.boredTimer);
          };
        };
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
  }, 30000); // <- 1000ms = 1s

  setInterval(function() {
    $('#change').attr('src','image3.gif');
  }, 600000); // <- 1000ms = 1s

  setInterval(function() {
    $('#change').attr('src','image4.gif');
  }, 90000); // <- 1000ms = 1s

  setInterval(function() {
    $('#change').attr('src','image5.gif');
  }, 120000); // <- 1000ms = 1s
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
 
