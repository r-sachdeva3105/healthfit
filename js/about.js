function showGamePopup() {
    document.getElementById("gamePopup").style.display = "block";
  }

  function startGame() {
    // Get the user's choice from the input field
    let userChoice = document.getElementById("userChoice").value;

    // Validate the user input
    if (userChoice >= 1 && userChoice <= 5) {
      // Call a function to recommend an exercise based on the user's choice
      recommendExercise(parseInt(userChoice));
    } else {
      alert("Please enter a valid number from 1 to 5.");
    }

    // Close the game pop-up
    closeGamePopup();
  }

  function recommendExercise(number) {
    // Map numbers to exercises and sets
    switch (number) {
      case 1:
        alert("Recommended Exercise: Plank\nNumber of Sets: 3");
        break;
      case 2:
        alert("Recommended Exercise: Pushups\nNumber of Sets: 4");
        break;
      case 3:
        alert("Recommended Exercise: Jumping Jacks\nNumber of Sets: 3");
        break;
      case 4:
        alert("Recommended Exercise: Sit-ups\nNumber of Sets: 3");
        break;
      case 5:
        alert("Recommended Exercise: Skipping\nNumber of Sets: 5");
        break;
      default:
        alert("Invalid choice");
    }
  }

  function closeGamePopup() {
    document.getElementById("gamePopup").style.display = "none";
  }