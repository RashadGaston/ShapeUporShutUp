let squareSide = document.getElementById("square-side-length");
let circleRadius = document.getElementById('circle-radius');
let triangleHeight = document.getElementById('triangle-height');
let rectangleHeight = document.getElementById('rectangle-height');
let rectangleWidth = document.getElementById('rectangle-width');
//buttons
let circleButton = document.getElementById('circle-button');
let triangleButton = document.getElementById('triangle-button');
let rectangleButton = document.getElementById('rect-button');
let squareButton = document.getElementById('square-button');

// Input buttons
circleButton.addEventListener('click', function newCircle() {
    new Circle(circleRadius.value);
});
triangleButton.addEventListener('click', function newTriangle() {
    new Triangle(triangleHeight.value);
});
rectangleButton.addEventListener('click', function newRectangle() {
    new Rectangle(rectangleHeight.value, rectangleWidth.value);
    Rectangle.describe();
});
squareButton.addEventListener('click', function newSquare() {
    new Square(squareSide.value);
});


    // Shape is very generic
    // Try to put as much logic in this class as you can, but remember,
    // sometimes you have to put logic in child classes for more custom behavio

class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    draw() {
        if(this.width > 600 && this.height > 600) {
            return alert("Thats too large");


        } else if (this.width > 600) {
            return alert("No, no. You can't do that");


        } else if(this.height > 600) {
            return alert("Cant do that");
        };
        let x = Math.floor(Math.random() * (600 - this.width));
        let y = Math.floor(Math.random() * (600- this.height));
        this.div = document.createElement('div');
        this.div.classList.add(this.cssClass);
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
        this.div.style.width = `${this.width}px`;
        this.div.style.height = `${this.height}px`;
        container.appendChild(this.div);
    };
    describe() {
        
    }
};

// Class- Circle

//     Needs to take a single parameter, radius, in its constructor
//     Needs to call the constructor of its logical parent class
//     Can have methods that define behavior/calculations specific to Circles

class Circle extends Shape {
    constructor(radius) {
        super(radius, radius);
        this.radius = radius;
        this.cssClass = 'circle';
        this.draw();
    };
};
// Class- Triangle

//     This will be a right isosceles Triangle
//     Needs to take a single parameter, height, in its constructor
//     Since it is a right isosceles Triangle, height/width/base will all be the same
//     Needs to call the constructor of its logical parent class
//     Can have methods that define behavior/calculations specific to Triangles

class Triangle extends Shape {
    constructor(height) {
        super(height, height);
        this.cssClass = 'triangle';
        this.draw();
        this.div.style.width = '0';
        this.div.style.height = '0';
        this.div.style.borderBottomWidth = `${height}px`;
        this.div.style.borderRightWidth = `${height}px`;
    };
};

   // Class- Rectangle

//     Needs to take two parameters, width and height, in its constructor
//     Needs to call the constructor of its logical parent class
//     Can have methods that define behavior/calculations specific to Rectangles

class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width);
        this.cssClass = 'rectangle';
        this.draw();
        
    };
};
// Class- Square

//     Needs to take a single parameter, sideLength, in its constructor
//     Needs to call the constructor of its logical parent class
//     A square is a special type of rectangle
//     Can have methods that define behavior/calculations specific to Squares

class Square extends Shape {
    constructor(side) {
        super(side, side);
        this.cssClass = 'square';
        this.draw();
    };

