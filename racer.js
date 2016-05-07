 document.addEventListener('DOMContentLoaded', function() {
   var game = prompt('Would you like to play a game?', 'yes');
   if (game == 'yes') {
     setCount()
   } else {
    
   document.documentElement.innerHTML = '';
   document.body.style.backgroundImage = "url('data:image/jpeg;base64,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')";
   }
 })

 // COUNTDOWN SEQUENCE
 var num = 3;
 var table = document.getElementsByTagName('table');

 function setCount() {
   var timer = setInterval(function() {
     countDown(timer)
   }, 1000);
 }

 function countDown(timer) {
   var count = document.getElementsByClassName('count' + num);
   count[0].className = 'hide';
   console.log(count[0]);
   --num;
   if (num === -1) {
     clearInterval(timer);
     createEventListener();
     table[0].className = 'racer_table';
   }
 }

 // KEYPRESS EVENT LISTENER
 function createEventListener() {
   document.addEventListener('keyup', function(e) {
     // if key is pressed == to the correct key, 
     if (e.which === 90) {
       updatePlayer("player1_strip")
     } else if (e.which === 80) {
       updatePlayer("player2_strip")
     }
   })
 }

 // RESTART GAME
 function restartGame(player) {
   for (var i = 0; i < player.children.length; i++) {
     player.children[i].className = "";
   }
   player.children[0].className = "active";
 }

 // UPDATE THE PLAYER POSSITION
 function updatePlayer(player) {
   // set is-found to false
   var isFound = false;
   //define strip
   var strip = document.getElementById(player);
   // loop through the children on the correct row. 
   for (var i = 0; i < strip.children.length + 1; i++) {
     var cell = strip.children[i]
       // if - the table cell has active class. 
       // alert("the string i " + i + "" + strip.children.length);
     if (i === strip.children.length - 1 && cell.className === ("active")) {
       alert("you have won " + player);
       var choice = prompt("would you like to play again?", "yes");
       if (choice == 'yes') {
         restartGame(player1_strip);
         restartGame(player2_strip);
         var answer = prompt('Would you like to lengthen the track?', 'yes, no, reset');
         if (answer == 'yes') {
           var add = prompt("Pick a number between 1 - 10", "1 - 10");
           add = parseInt(add);
           if (isNaN(add) || add < 1) {
             alert("Sorry, that isn't lengthening the track")
             var add = prompt("Pick a number between 1 - 10", "1 - 10");
           }
           console.log(add);
           // LENGTHEN THE TRACK
           function lengthenTrack(player) {
             for (var i = 0; i < add; i++) {
               var insert = player.insertCell(1);
             }
           }
           lengthenTrack(player1_strip);
           lengthenTrack(player2_strip);
         }
       } else {
         alert("Go in peace")
       }
     } else if (cell.className === "active") {
       // Make it inactive.
       cell.className = "";
       // set is-found to true 
       isFound = true;
     }
     // else p the is not active and is-found is true
     else if (cell.className === "" && isFound) {
       // make it active
       cell.className = "active";
       // reset isfound
       isFound = false;
     }
   }
 }

 //OTHER IDEAS TO IMPLEMENT
 // Put a reset button on the html that will put the squars back to 7 columns.
 // Remember who won by storing result. 'you won player 1' input name then push to array.