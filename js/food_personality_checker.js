function checkIt() {
  // Initialize scores
  var red = 0;
  var orange = 0;
  var yellow = 0;
  var green = 0;
  var blue = 0;
  var purple = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'red') {
        red++;
      }
      else if (e.value == 'orange') {
        orange++;
      }
      else if (e.value == 'yellow') {
        yellow++;
      }
      else if (e.value == 'green') {
        green++;
      }
      else if (e.value == 'blue') {
        blue++;
      }
      else if (e.value == 'purple') {
        purple++;
      }
    }

  }

  // Determine result
  var counts = "red: " + red + ", " +
               "orange: " + orange  + ", " +
               "yellow: " + yellow + ", " +
               "green: " + green + ", " +
               "blue: " + blue + ", " +
               "purple: " + purple;

  // What is the highest value?
  var max = Math.max(red, orange, yellow, green, blue, purple);

  // Form a message
  var message;

  if (max == red) {
    message = "You're favorite color is red! You've got a bold taste in pizza.";
  }
  else if (max == orange) {
    message = "You're favorite color is orange! You have an interesting taste in pizza to say the least.";
  }
  else if (max == yellow) {
    message = "You're favorite color is yellow! You've got a pretty unique taste in pizza... and in color.";
  }
  else if (max == green) {
    message = "You're favorite color is green! You've made yourself a classic pizza, can't complain there!";
  }
  else if (max == blue) {
    message = "You're favorite color is blue! I like your style.";
  }
  else if (max == purple) {
    message = "You're favorite color is purple! You've crafted yourself a pretty cool pizza.";
  }

  // Display result
  //document.getElementById('result').innerHTML = counts;
    document.getElementById('result-text').innerHTML = message;
}
