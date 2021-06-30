var number = prompt("Enter number");
if (number > 0){
    document.write("It's positive")
}
else if(number < 0){
    document.write("it's negative")
}

var a = 5;
var b = 6;
var c = 7;
var s = (a + b + c) /2;
var area = Math.sqrt(s * (s-a) * (s-b) * (s-c));
console.log(s)
console.log(area)

function toArray(two, three, five, eight){
    return[two, three, five, eight]

} console.log (toArray(6,7,3,4,5))

