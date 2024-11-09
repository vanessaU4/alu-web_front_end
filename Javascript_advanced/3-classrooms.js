function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat;
        };
    }

    let students = [];
    for (let i = 0; i < numbersOfStudents; i++) {
        let seatNumber = i + 1;
        students.push(studentSeat(seatNumber));
    }

    return students;
}

// Create a closure classRoom with 10 students
let classRoom = createClassRoom(10);

// Example usage as per requirements
console.log(classRoom[0]()); // Output: 1 (seat number of the first student)
console.log(classRoom[3]()); // Output: 4 (seat number of the fourth student)
console.log(classRoom[9]()); // Output: 10 (seat number of the tenth student)