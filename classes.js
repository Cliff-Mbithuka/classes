// class Rectangle {
//     constructor( _width, _height, _color, _name){
//         console.log("The is being created:");
//         this.width = _width;
//         this.height = _height;
//         this.color = _color;
//         this.name = _name;
//     }
// getArea(){
//    return this.width * this.height;
// }


// showProperties(){
//     console.log(`Width: ${this.width}, Height: ${this.height}, Color: ${this.color}, Name: ${this.name}`);
// }

// showArea(){
//     const Area = this.getArea();
//     console.log(`Area: ${Area}`);
// }
// }

// const myRectangle = new Rectangle(10, 5, "pink", "cliff");

// myRectangle.showProperties();
// myRectangle.showArea();

//GETERS AND SETTERS
class Square {
    constructor (_width){
        this.height = _width;
        this.width = _width;
        this.numOfRequestsForArea = 0;
    }

    get area() {
        this.numOfRequestsForArea++;
        return this.width * this.height;
    }

    set area(area){
        this.width = Math.sqrt(area);
        this.height = this.width;
       
    }
}
 
let square1 = new Square(7);
//Get area
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);

console.log(square1.numOfRequestsForArea);


//set width and height 
square1.area = 25;
console.log(square1.width);
console.log(square1.height);










