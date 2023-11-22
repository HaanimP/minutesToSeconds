// Get the button element
let convertButton = document.getElementById("convertButton");

// Add event listener to the button
convertButton.addEventListener("click", function() {
    convertMinutesToSeconds();
});

// Function to convert minutes to seconds
function convertMinutesToSeconds() {
    // Get the value entered by the user
    let minutesInput = document.getElementById("minutes").value;

     // Validate the input
     if (isNaN(minutesInput) || minutesInput < 0) {
        alert("Please enter a valid positive number for minutes.");
        return;
    }

       // Call the function to calculate seconds
       let seconds = calculateSeconds(parseFloat(minutesInput));

       // Display the result in the DOM
       displayResult(seconds);
   }

// Function to calculate seconds from minutes
function calculateSeconds(minutes) {
    // 1 minute = 60 seconds
    return minutes * 60;
}

 // Function to display the result in the DOM
 function displayResult(seconds) {
    // Get the result element
    let resultElement = document.getElementById("result");

// Format the result to two decimal places
    let formattedResult = seconds.toFixed(2);

// Display the result in the DOM
     resultElement.innerHTML = "Result: " + formattedResult + " seconds";
 }