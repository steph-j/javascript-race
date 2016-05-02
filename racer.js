 document.addEventListener('DOMContentLoaded', function() {
   createEventListener()
 })

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

 function restartGame(player) {
  for (var i = 0; i < player.children.length; i++) {
   player.children[i].className = "";
  }
   player.children[0].className = "active";
 }

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
       if (choice === 'yes') {
         restartGame(player1_strip);
         restartGame(player2_strip);
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
     // }
   }
 }


 // function winner(player){
 // //winner equals strip with no 'active' cell
 // for (var i = i < strip.children.length; i++) {
 //   if (.className === "") {
 //     alert("You have won")
 //   }
 //  }
 // }

 // //collect the result from the end of the game
 // //if car wins
 //   //alert "car wins"
 // //else if buzz wins
 //   //alert "buzz wins"
 // }

 // //Prompt "would you like to play again?"
 //   //if no cell holds active 
 //     //add active to first cell.