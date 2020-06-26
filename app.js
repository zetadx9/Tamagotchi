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




// Start Game / Hatch Button

//document.getElementById("play-game").addEventListener("click", gameStart);
$("#play-game").on("click",gameStart)


let count = 0;
let Scount = 0;
let Bcount = 0;
let aging = 0;

function gameStart () {
            console.log("Game has started!");

//End Timer-----------------------------------
            let endTimer = setInterval(myCount, 1000); 


// Game Function

        function myCount() {
            // your original if-else wasn't allowing count to increment past 1
    if (count >= 10 || Scount >= 10 || Bcount >=10 || aging === 10) {
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

         if (aging < 0)
       {
          aging = 0;
       }

    $('#hungerNum').text(count);
    $('#sleepNum').text(Scount);
    $('#boredNum').text(Bcount);

    // increment count regardless of its current value
    count++;
    Scount++;
    Bcount++;
} 

// Food Button
    $("#food").on("click",petHungry)

     function petHungry() {
    // your original if-else wasn't allowing count to increment past 1
         if (count < 10) {
            count = count - 1 ;
          }
      $('#hungerNum').text(count);
      // increment
    }

           // Sleep buuton
    $("#sleep").on("click",petSleep)

       function petSleep() {
    // your original if-else wasn't allowing count to increment past 1
    if (Scount < 10) {
        Scount = Scount - 1 ;
     }
       $('#sleepNum').text(Scount);
    // increment count regardless of its current value
     }

           // Play Button
    $("#play").on("click",petPlay)

         function petPlay() {

            if (Bcount < 10) {
        Bcount = Bcount - 1 ;
      }
      $('#boredNum').text(Bcount);

    }

           // Age Function
          function myAgeCount() {
    // your original if-else wasn't allowing count to increment past 1
    if (count >= 10 || Scount >= 10 || Bcount >=10) {
        clearInterval(endTimer);
        console.log("You lose");
     }
     if (aging === 10) {
        clearInterval(endTimer);
        console.log("You Win");
     }
         if (aging > 10) {
             aging = 0;
             }
         if (count >= 10 || Scount >= 10 || Bcount >=10 ) {
         $('#change').attr('src','dead.gif');   
         $.off('#change').attr('src','dead.gif');   

         clearInterval(endTimer);
         console.log("Timer Stopped");
       }
         if(aging === 0)
       {
       $('#change').attr('src','image0.gif');   
       }
      if(aging === 2)
     {
     $('#change').attr('src','image1.gif');   
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
     $('#change').attr('src','image5.gif').finish();   
      }

     if(aging === 10)
       {
        $('#change').attr('src','image5.gif');   
        $.off('#change').attr('src','image5.gif'); 
        console.log('You Win');
       }
     $('#ageNum').text(aging);
    // increment count regardless of its current value
    aging++;
       } setInterval(myAgeCount, 5000); 

       }
    
 