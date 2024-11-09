let roomDimensions = {
    width: 50,
    length: 100,
    getArea: function() {
        return this.width * this.length;
    }
};

let boundGetArea = roomDimensions.getArea.bind(roomDimensions);

// Testing the bound function
console.log("Width:", roomDimensions.width);
console.log("Length:", roomDimensions.length);
console.log("Area:", boundGetArea()); // Calling the bound function to get the area