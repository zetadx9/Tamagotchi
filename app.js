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


let count = 0;
let Scount = 0;
let Bcount = 0;
let aging = 0;

function gameStart () {
console.log("Game has started!");

let endTimer = setInterval(myCount, 1000); 

function myCount() {
    // your original if-else wasn't allowing count to increment past 1
    if (count >= 10 || Scount >= 10 || Bcount >=10 || aging >= 10) {
       clearInterval(endTimer);
       console.log("You Lose");
    }
    if(count < 0)
    {
        count = 0;
    }
    if(Scount < 0)
    {
        Scount = 0;
    }
    if(Bcount < 0)
    {
        Bcount = 0;
    }

    $('#hungerNum').text(count);
    $('#sleepNum').text(Scount);
    $('#boredNum').text(Bcount);

    // increment count regardless of its current value
    count++;
    Scount++;
    Bcount++;
} 

$("#food").on("click",petHungry)

function petHungry() {
    // your original if-else wasn't allowing count to increment past 1
    if (count < 10) {
        count = count - 1 ;
    }
    $('#hungerNum').text(count);
    // increment count regardless of its current value
}

$("#sleep").on("click",petSleep)

function petSleep() {
    // your original if-else wasn't allowing count to increment past 1
    if (Scount < 10) {
        Scount = Scount - 1 ;
    }
    $('#sleepNum').text(Scount);
    // increment count regardless of its current value
}

$("#play").on("click",petPlay)

function petPlay() {
    // your original if-else wasn't allowing count to increment past 1
    if (Bcount < 10) {
        Bcount = Bcount - 1 ;
    }
    $('#boredNum').text(Bcount);
    // increment count regardless of its current value
}
}

function myAgeCount() {
    // your original if-else wasn't allowing count to increment past 1
    if (aging > 10) {
        aging = 0;
    }
    if (count >= 10 || Scount >= 10 || Bcount >=10 ) {
        clearInterval(endTimer);
        console.log("Timer Stopped");
    }
    if(aging === 4)
    {
  $('#change').attr('src','image2.gif');   
    }
    
    if(aging === 6)
    {
  $('#change').attr('src','image3.gif');   
    }
    
    if(aging === 8)
    {
  $('#change').attr('src','image4.gif');   
    }
    
    if(aging === 10)
    {
  $('#change').attr('src','image5.gif');   
    }

    if(aging === 10)
    {
        console.log('You Win');
    }
    $('#ageNum').text(aging);
    // increment count regardless of its current value
    aging++;
} setInterval(myAgeCount, 5000); 


    
 