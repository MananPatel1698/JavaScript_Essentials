let count = 0; // Initialize count to 0

function increaseCount() {
  count++; // Increment the count by 1
  displayCount(); //Display the count
  checkCountValue(); //Check the value and display the message.
}

function displayCount() {
  document.getElementById("countDisplay").innerHTML = count; // Display the count in the HTML
}

function checkCountValue() {
  if (count % 10 == 0) {
    alert(`Your Instagram post gained ${count} followers! Congratulations!`);
  }
}
