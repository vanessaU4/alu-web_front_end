function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

function main() {
    // Create closures for different modes
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    // Add paragraph to the body
    let paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(paragraph);

    // Add buttons to switch modes
    let spookyButton = document.createElement('button');
    spookyButton.textContent = 'Spooky';
    document.body.appendChild(spookyButton);

    let darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Dark mode';
    document.body.appendChild(darkModeButton);

    let screamModeButton = document.createElement('button');
    screamModeButton.textContent = 'Scream mode';
    document.body.appendChild(screamModeButton);

    // Event listeners to change modes when buttons are clicked
    spookyButton.addEventListener('click', spooky);
    darkModeButton.addEventListener('click', darkMode);
    screamModeButton.addEventListener('click', screamMode);
}

// Call the main function to initialize the page setup
main();