
/* javascript */
/* Run */



/*
Produce random #
Switch statement based on downs
  Check for pass or run
    Update yardage based on random
  Check for turnover or normal play (break)
  Check for Touchdown! based on yardage (break)
  Increment down
*/
let down = 'First';
let yard = 10;
let play = 'normal';
let random = Math.random();
let last_play = '';
document.getElementById("down").innerHTML = down + " down and " + yard;


function reset_game() {
  down = 'First';
  yard = 10;
  play = 'normal';
  last_play = '';
  $( ".yard_line" ).css( "padding", yard*20);
  document.getElementById("down").innerHTML = down + " down and " + yard;
  document.getElementById("last_play").innerHTML = '';
  document.getElementById("play_again").innerHTML = '';
  $( ".yard_line" ).css( "display", "block");
  $( ".big_script" ).css( "padding-top", 0);
  $( ".big_script" ).css( "font-size", "36px");
}

function pass() {
  if (last_play !== 'Fumble...' && last_play !== 'Interception...' && last_play !== 'Touchdown!' && last_play !== 'Turnover on downs...'){
    random = Math.random();
    $( ".yard_line" ).css( "padding", yard*20);
    document.getElementById("down").innerHTML = down + " down and " + yard;
    document.getElementById("last_play").innerHTML = last_play;
    document.getElementById("play_again").innerHTML = '';
    console.log(down + " down and " + yard);
    switch (down) {
      case "First":
        if (random <= 0.05) {
          last_play = "Interception...";
        } else if (random <= 0.15) {
          yard += 7;
          last_play = "Sack! Loss of 7 yards.";
        } else if (random <= 0.3) {
          yard += 5;
          last_play = "Sack! Loss of 5 yards.";
        } else if (random <= 0.5) {
          yard -= 4;
          last_play = "Completed pass. Gain of 4 yards.";
        } else if (random <= 0.8) {
          yard -= 5;
          last_play = "Completed pass. Gain of 5 yards.";
        } else {
          yard -= 8;
          last_play = "Completed pass. Gain of 8 yards.";
        }

        if(yard <= 0){
          last_play = 'Touchdown!';
          break;
        } else {
          down = 'Second';
        }
        break;

      case "Second":
        if (random <= 0.05) {
          last_play = "Interception...";
        } else if (random <= 0.15) {
          yard += 7;
          last_play = "Sack! Loss of 7 yards.";
        } else if (random <= 0.3) {
          yard += 5;
          last_play = "Sack! Loss of 5 yards.";
        } else if (random <= 0.5) {
          yard -= 4;
          last_play = "Completed pass. Gain of 4 yards.";
        } else if (random <= 0.8) {
          yard -= 5;
          last_play = "Completed pass. Gain of 5 yards.";
        } else {
          yard -= 8;
          last_play = "Completed pass. Gain of 8 yards.";
        }

        if(yard <= 0){
          last_play = 'Touchdown!';
          break;
        } else {
          down = 'Third';
        }
        break;

      case "Third":
        if (random <= 0.05) {
          last_play = "Interception...";
        } else if (random <= 0.15) {
          yard += 7;
          last_play = "Sack! Loss of 7 yards.";
        } else if (random <= 0.3) {
          yard += 5;
          last_play = "Sack! Loss of 5 yards.";
        } else if (random <= 0.5) {
          yard -= 4;
          last_play = "Completed pass. Gain of 4 yards.";
        } else if (random <= 0.8) {
          yard -= 5;
          last_play = "Completed pass. Gain of 5 yards.";
        } else {
          yard -= 8;
          last_play = "Completed pass. Gain of 8 yards.";
        }

        if(yard <= 0){
          last_play = 'Touchdown!';
          break;
        } else {
          down = 'Fourth';
        }
        break;

      case "Fourth":
        if (random <= 0.05) {
          last_play = "Interception...";
        } else if (random <= 0.15) {
          yard += 7;
          last_play = "Sack! Loss of 7 yards.";
        } else if (random <= 0.3) {
          yard += 5;
          last_play = "Sack! Loss of 5 yards.";
        } else if (random <= 0.5) {
          yard -= 4;
          last_play = "Completed pass. Gain of 4 yards.";
        } else if (random <= 0.8) {
          yard -= 5;
          last_play = "Completed pass. Gain of 5 yards.";
        } else {
          yard -= 8;
          last_play = "Completed pass. Gain of 8 yards.";
        }

        if(yard <= 0){
          last_play = 'Touchdown!';
          break;
        } else {
          last_play = 'Turnover on downs...';
        }
        break;
    }
  } else {
    $( ".yard_line" ).css( "display", "none");
    document.getElementById("down").innerHTML = last_play;
    document.getElementById("last_play").innerHTML = '';
    if (last_play == 'Touchdown!') {
      document.getElementById("play_again").innerHTML = 'You win! Click reset game to play again.';
    } else {
      document.getElementById("play_again").innerHTML = 'You lose. Click reset game to play again.';
    }
    $( ".big_script" ).css( "padding-top", "10%");
    $( ".big_script" ).css( "font-size", "60px");
  }
}

function run() {
  if (last_play !== 'Fumble...' && last_play !== 'Interception...' && last_play !== 'Touchdown!' && last_play !== 'Turnover on downs...'){
    random = Math.random();
    $( ".yard_line" ).css( "padding", yard*20);
    document.getElementById("down").innerHTML = down + " down and " + yard;
    document.getElementById("last_play").innerHTML = last_play;
    document.getElementById("play_again").innerHTML = '';
    console.log(down + " down and " + yard);
    switch (down) {
      case "First":
        if (random <= 0.05) {
          last_play = "Fumble...";
        } else if (random <= 0.1) {
          yard += 3;
          last_play = "Loss of 3 yards.";
        } else if (random <= 0.2) {
          yard += 2;
          last_play = "Loss of 1 yard.";
        } else if (random <= 0.4) {
          last_play = "Gain of 0 yards.";
        } else if (random <= 0.5) {
          yard -= 1;
          last_play = "Gain of 1 yard.";
        } else if (random <= 0.6) {
          yard -= 2;
          last_play = "Gain of 2 yards.";
        } else if (random <= 0.8) {
          yard -= 3;
          last_play = "Gain of 3 yards.";
        } else if (random <= 0.9) {
          yard -= 4;
          last_play = "Gain of 4 yards.";
        } else {
          yard -= 5;
          last_play = "Gain of 5 yards.";
        }

        if(yard <= 0){
          last_play = 'Touchdown!';
          break;
        } else {
          down = 'Second';
        }
        break;

      case "Second":
        if (random <= 0.05) {
          last_play = "Fumble...";
        } else if (random <= 0.1) {
          yard += 3;
          last_play = "Loss of 3 yards.";
        } else if (random <= 0.2) {
          yard += 2;
          last_play = "Loss of 1 yard.";
        } else if (random <= 0.4) {
          last_play = "Gain of 0 yards.";
        } else if (random <= 0.5) {
          yard -= 1;
          last_play = "Gain of 1 yard.";
        } else if (random <= 0.6) {
          yard -= 2;
          last_play = "Gain of 2 yards.";
        } else if (random <= 0.8) {
          yard -= 3;
          last_play = "Gain of 3 yards.";
        } else if (random <= 0.9) {
          yard -= 4;
          last_play = "Gain of 4 yards.";
        } else {
          yard -= 5;
          last_play = "Gain of 5 yards.";
        }

        if(yard <= 0){
          last_play = 'Touchdown!';
          break;
        } else {
          down = 'Third';
        }
        break;

      case "Third":
        if (random <= 0.05) {
          last_play = "Fumble...";
        } else if (random <= 0.1) {
          yard += 3;
          last_play = "Loss of 3 yards.";
        } else if (random <= 0.2) {
          yard += 2;
          last_play = "Loss of 1 yard.";
        } else if (random <= 0.4) {
          last_play = "Gain of 0 yards.";
        } else if (random <= 0.5) {
          yard -= 1;
          last_play = "Gain of 1 yard.";
        } else if (random <= 0.6) {
          yard -= 2;
          last_play = "Gain of 2 yards.";
        } else if (random <= 0.8) {
          yard -= 3;
          last_play = "Gain of 3 yards.";
        } else if (random <= 0.9) {
          yard -= 4;
          last_play = "Gain of 4 yards.";
        } else {
          yard -= 5;
          last_play = "Gain of 5 yards.";
        }

        if(yard <= 0){
          last_play = 'Touchdown!';
          break;
        } else {
          down = 'Fourth';
        }
        break;

      case "Fourth":
        if (random <= 0.05) {
          last_play = "Fumble...";
        } else if (random <= 0.1) {
          yard += 3;
          last_play = "Loss of 3 yards.";
        } else if (random <= 0.2) {
          yard += 2;
          last_play = "Loss of 1 yard.";
        } else if (random <= 0.4) {
          last_play = "Gain of 0 yards.";
        } else if (random <= 0.5) {
          yard -= 1;
          last_play = "Gain of 1 yard.";
        } else if (random <= 0.6) {
          yard -= 2;
          last_play = "Gain of 2 yards.";
        } else if (random <= 0.8) {
          yard -= 3;
          last_play = "Gain of 3 yards.";
        } else if (random <= 0.9) {
          yard -= 4;
          last_play = "Gain of 4 yards.";
        } else {
          yard -= 5;
          last_play = "Gain of 5 yards.";
        }

        if(yard <= 0){
          last_play = 'Touchdown!';
          break;
        } else {
          last_play = 'Turnover on downs...';
        }
        break;
    }
  } else {
    $( ".yard_line" ).css( "display", "none");
    document.getElementById("down").innerHTML = last_play;
    document.getElementById("last_play").innerHTML = '';
    if (last_play == 'Touchdown!') {
      document.getElementById("play_again").innerHTML = 'You win! Click reset game to play again.';
    } else {
      document.getElementById("play_again").innerHTML = 'You lose. Click reset game to play again.';
    }

    $( ".big_script" ).css( "padding-top", "10px");
    $( ".big_script" ).css( "font-size", "60px");
  }

}
