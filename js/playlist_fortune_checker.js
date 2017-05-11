function checkIt() {
  // Initialize scores
  var  pop= 0;
  var  rock= 0;
  var  chill= 0;
  var  rap= 0;
  var  alternative= 0;


  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'pop') {
        pop++;
      }
      else if (e.value == 'rock') {
        rock++;
      }
      else if (e.value == 'chill') {
        chill++;
      }
      else if (e.value == 'rap') {
        rap++;
      }
      else if (e.value == 'alternative') {
        alternative++;
      }

    }

  }

  // Determine result
  var counts = "pop: " +  + ", " +
               "rock: " +   + ", " +
               "chill: " +  + ", " +
               "rap: " +  + ", " +
               "alternative: " + ;

  // What is the highest value?
  var max = Math.max();

  // Form a message
  var message;

  if (max == pop) {
    message = "";
  }
  else if (max == rock) {
    message = "";
  }
  else if (max == chill) {
    message = "";
  }
  else if (max == rap) {
    message = "";
  }
  else if (max == alternative) {
    message = "";
  }

  // Display result
  //document.getElementById('result').innerHTML = counts;
    document.getElementById('result-text').innerHTML = message;
}
