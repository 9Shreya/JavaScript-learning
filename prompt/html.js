var marks=prompt("enter your marks")
alert((marks>=35) ? "congrats you passed the exam" : "sorry better luck next time")
 if (marks>=35) {
    document.write("congrats")
} else {
    document.write("mkv")
}
console.log(typeof marks);
var myAge=prompt("enter your age")
var myYear=prompt('enter the year u born')
alert(parseInt(myAge)+parseInt(myYear))

var myAge=prompt('enter your age')
alert('ur father age is : '+(parseInt(myAge)*2+5))
alert('ur mother AGE is : '+ (parseInt(myAge)*2-5))
var fath=(parseInt(myAge)*2+5)
var moth=(parseInt(myAge)*2-5)
console.log(myAge)
console.log(fath)
console.log(moth)

var radius=prompt('enter the radius of circle')
alert('the radius of circle is : '+(parseInt(radius)*3.14*parseInt(radius)))
var area=parseInt(radius)*3.14*parseInt(radius)
console.log(area)

function add(op1,op2,op3){
   
    var result=parseInt(op1)+parseInt(op2)+parseInt(op3)
    console.log(typeof(op1))
    console.log(result)
    alert('the addition is : '+result)
}

function mul(op1,op2,op3){
var pro=op1*op2*op3
alert('the product is : '+pro)
}
var saa=function(){
    var add=1+2
    return add
}
alert(saa())




