console.log("outside Print this",this);
const printThis1 = () => {
    console.log("inside printThis",this);
}

printThis1();

const color = {
    printColor(){
        console.log("outer printcolor",this);
        const printColor = () => {
            console.log("inner printcolor",this);
        }
        printColor();
    }
};

color.printColor();


const printThis2 = function(){
    console.log(this);
}

printThis2.call({color:'red'}); // call overrides the value of this
printThis2.apply({color:'blue'}); // apply overrides value of this
printThis2();

const color2 = {
    printColor2(){
        console.log("outer printcolor",this);
    }
};

const randomObject = {
    a: 1,
};

color2.printColor2(); //value of this is what inside of color2 

randomObject.printColor2 = color2.printColor2;
randomObject.printColor2();