/*
Count of Even and Odd numbers in a range Ex: 1 to 50
*/
// Function to count even and odd numbers in a range
function countEvenOdd(start, end) {
    // Input validation
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        console.error("Error: Both start and end must be integers.");
        return;
    }
    if (start > end) {
        // Swap if range is reversed
        [start, end] = [end, start];
    }

    let evenCount = 0;
    let oddCount = 0;

    for (let num = start; num <= end; num++) {
        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    console.log(`Range: ${start} to ${end}`);
    console.log(`Even numbers count: ${evenCount}`);
    console.log(`Odd numbers count: ${oddCount}`);
}

// Example usage: Count from 1 to 50
countEvenOdd(1, 50);

console.log("------Prime Numbers----------");

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false; // 1 and below are not prime
    if (num === 2) return true; // 2 is prime
    if (num % 2 === 0) return false; // even numbers greater than 2 are not prime
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false; // divisible by a number other than 1 and itself
    }
    return true;
}
// Function to print prime numbers from 1 to 50
function printPrimes() {
    for (let i = 1; i <= 100; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}
// Call the function
printPrimes();


//console.log(Math.sqrt(15));
