// Function to handle button click events
function selectOption(option) {
    var questionElement = document.getElementById('question');
    
    // Check which option was clicked
    if (option === 'Ah') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            questionElement.innerText = 'Do u wanna be my valentine ?'; // Keep the initial question as is
        });
    } else if (option === 'La') {
        // Change text on the "No" button to "Mt2ekd ?"
        document.getElementById('La-button').innerText = 'Mt2ekd ?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('Ah-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else if (option === 'Mt2ekd') {
        // Final confirmation question
        setTimeout(function() {
            questionElement.innerText = 'Sla7t, 3titi ljaweb!!'; // Final confirmation message
        }, 1000);
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Display the cat.gif initially
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif after "Ah"
function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none';
    };
}

// Display the cat.gif initially
displayCat();
