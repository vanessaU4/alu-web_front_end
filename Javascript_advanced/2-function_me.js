function welcomeMessage(fullName) {
    return function() {
        alert("Welcome " + fullName);
    };
}

// Create variables using welcomeMessage closure
let guillaume = welcomeMessage("Guillaume");
let alex = welcomeMessage("Alex");
let fred = welcomeMessage("Fred");

// Example usage
guillaume(); // Alerts: Welcome Guillaume
alex();      // Alerts: Welcome Alex
fred();      // Alerts: Welcome Fred