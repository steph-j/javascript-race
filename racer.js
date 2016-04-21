  document.addEventListener('DOMContentLoaded', function() {
    createEventListerener()
  })

  function createEventListerener() {
    document.addEventListener('keyup', function(e) {
      // if key is pressed == to the correct key, 
      if (e.which === 13) {
        updatePlayer("player1_strip")
      } else if (e.which === 80) {
        updatePlayer("player2_strip")
      }
    })
  }

  function updatePlayer(player) {
    // set is-found to false
    var isFound = false;
    //define strip
    var strip = document.getElementById(player)
      // loop through the children on the correct row. 
    for (var i = 0; i < strip.children.length; i++) {
      var cell = strip.children[i]
        // if - the table cell has active class. 
      if (cell.className === "active") {
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



  // var strip1 = document.getElementById('player1_strip')
  // var strip1 = strip1.children

  // var strip2 = document.getElementById('player2_strip')
  // var strip2 = strip2.children



  // var name = prompt("What is your name?");

  //   function move(key) {
  //     console.log("I'm moving because you pressed key", key)
  //     for (var i = 0; i < myTableArray.length; i++) {
  //         if (td.className === "active") {
  //           td.className = "";
  //         } else {
  //           td.className = "active"
  //         }
  //   }


  //