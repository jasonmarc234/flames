const flamesMeanings = {
    'F': 'Friends',
    'L': 'Lovers',
    'A': 'Affectionate',
    'M': 'Marriage',
    'E': 'Enemies',
    'S': 'Siblings'
};

function playFlames() {
    // Get input values
    const name1 = document.getElementById('name1').value.trim().toLowerCase().replace(/\s/g, '');
    const name2 = document.getElementById('name2').value.trim().toLowerCase().replace(/\s/g, '');
    
    // Reset previous results
    resetFlames();
    
    // Validate inputs
    if (!name1 || !name2) {
        document.getElementById('errorMsg').classList.add('show');
        return;
    }
    
    document.getElementById('errorMsg').classList.remove('show');
    
    // Find all common letters between the two names
    let str1 = name1;
    let str2 = name2;
    let commonLetters = new Set();
    
    // Identify which letters are common
    for (let char of name1) {
        if (name2.includes(char)) {
            commonLetters.add(char);
        }
    }
    
    // Count occurrences of common letters in both names
    let count = 0;
    for (let char of commonLetters) {
        // Count in name1
        for (let letter of name1) {
            if (letter === char) count++;
        }
        // Count in name2
        for (let letter of name2) {
            if (letter === char) count++;
        }
    }
    console.log('Common letter count:', count);
    
    // Calculate FLAMES result by counting through sequentially
    const flames = ['F', 'L', 'A', 'M', 'E', 'S'];
    
    // If count is 0, default to index 0
    if (count === 0) {
        count = 1;
    }
    
    // Get the result by finding which letter we land on
    // We subtract 1 because array is 0-indexed
    const resultIndex = (count - 1) % flames.length;
    const result = flames[resultIndex];
    
    // Display result
    displayResult(result);
}

function displayResult(letter) {
    // Highlight the letter
    document.getElementById(letter.toLowerCase()).classList.add('highlight');
    
    // Show popup with meaning
    const popup = document.getElementById('resultPopup');
    document.getElementById('resultLetter').textContent = letter;
    document.getElementById('resultMeaning').textContent = flamesMeanings[letter];
    popup.classList.add('show');
}

function resetFlames() {
    // Remove highlights
    const letters = ['f', 'l', 'a', 'm', 'e', 's'];
    letters.forEach(letter => {
        document.getElementById(letter).classList.remove('highlight');
    });
    
    // Hide popup
    document.getElementById('resultPopup').classList.remove('show');
}

// Allow Enter key to trigger the game
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        playFlames();
    }
});