function countPrimeNumbers() {
    let count = 0;

    // Function to check if a number is prime
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    }

    // Count prime numbers from 2 to 100
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            count++;
        }
    }

    return count;
}

// Measure execution time of countPrimeNumbers 100 times using setTimeout
function measureExecutionTime() {
    let startTime = performance.now();
    let executionCount = 0;

    function execute() {
        countPrimeNumbers();
        executionCount++;

        if (executionCount < 100) {
            setTimeout(execute, 0); // Recursive call with setTimeout to change stack order
        } else {
            let endTime = performance.now();
            let executionTime = endTime - startTime;
            console.log(`Execution time of calculating prime numbers 100 times was ${executionTime} milliseconds.`);
        }
    }

    execute();
}

// Call measureExecutionTime to measure and log the total execution time
measureExecutionTime();