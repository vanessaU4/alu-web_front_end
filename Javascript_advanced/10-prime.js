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

// Measure execution time of countPrimeNumbers 100 times
function measureExecutionTime() {
    let startTime = performance.now();

    for (let i = 0; i < 100; i++) {
        countPrimeNumbers();
    }

    let endTime = performance.now();
    let executionTime = endTime - startTime;
    console.log(`Execution time of calculating prime numbers 100 times was ${executionTime} milliseconds.`);
}

// Call measureExecutionTime to measure and log the total execution time
measureExecutionTime();