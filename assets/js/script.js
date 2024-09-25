const letters = [
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    "a", "s", "d", "f", "g", "h", "j", "k", "l",
    "z", "x", "c", "v", "b", "n", "m"
];

// Create buttons for letters
const keyboard = document.querySelector('.keyboard');
letters.forEach(letter => {
    const button = document.createElement('button');
    button.className = 'key';
    button.setAttribute('data-key', letter);
    button.textContent = letter;
    keyboard.appendChild(button);
});

// Add special keys
const spaceButton = document.createElement('button');
spaceButton.className = 'key';
spaceButton.setAttribute('data-key', 'SPACE');
spaceButton.style.gridColumn = 'span 5';
spaceButton.textContent = 'Space';
keyboard.appendChild(spaceButton);

const backspaceButton = document.createElement('button');
backspaceButton.className = 'key';
backspaceButton.setAttribute('data-key', 'BACKSPACE');
backspaceButton.style.gridColumn = 'span 2';
backspaceButton.textContent = 'Backspace';
keyboard.appendChild(backspaceButton);

const deleteButton = document.createElement('button');
deleteButton.className = 'key';
deleteButton.setAttribute('data-key', 'DELETE');
deleteButton.style.gridColumn = 'span 2';
deleteButton.textContent = 'Delete';
keyboard.appendChild(deleteButton);

const output = document.getElementById('output');

// Attach event listeners to buttons
document.querySelectorAll('.key').forEach(button => {
    button.addEventListener('click', () => {
        const key = button.getAttribute('data-key');
        
        if (key === 'SPACE') {
            output.value += ' '; // Add space
        } else if (key === 'BACKSPACE') {
            output.value = output.value.slice(0, -1); // Remove last character
        } else if (key === 'DELETE') {
            output.value = ''; // Clear output
        } else {
            output.value += key; // Add character to output
        }
    });
});
