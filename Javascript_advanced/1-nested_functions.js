// Create a global variable named globalVariable with value "Welcome"
let globalVariable = "Welcome";

// Define the function outer
function outer() {
    // Alert the content of the variable globalVariable
    alert(globalVariable);

    // Create a variable named course with value "Holberton"
    let course = "Holberton";

    // Define the function inner
    function inner() {
        // Alert the content of the variable globalVariable and course (concatenated)
        alert(globalVariable + " " + course);

        // Create a variable named exclamation with value "!"
        let exclamation = "!";

        // Define the function inception
        function inception() {
            // Alert the content of the variable globalVariable, course, and exclamation (concatenated)
            alert(globalVariable + " " + course + exclamation);
        }

        // Call the function inception
        inception();
    }

    // Call the function inner
    inner();
}

// Call the function outer in the main code (outside any function)
outer();