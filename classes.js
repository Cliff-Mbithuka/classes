class Rectangle {
    constructor( _width, _height, _color, _name){
        console.log("The is being created:");
        this.width = _width;
        this.height = _height;
        this.color = _color;
        this.name = _name;
    }
getArea(){
   return this.width * this.height;
}


showProperties(){
    console.log(`Width: ${this.width}, Height: ${this.height}, Color: ${this.color}, Name: ${this.name}`);
}

showArea(){
    const Area = this.getArea();
    console.log(`Area: ${Area}`);
}
}

const myRectangle = new Rectangle(10, 5, "pink", "cliff");

myRectangle.showProperties();
myRectangle.showArea();