var s =function(name ,dob)
{
    this.name=name
    this.dob=dob
}
s.prototype.country='India'
var choice=prompt("enter the details of u want "+
"1-sachin    "+"2-kholi      " +"3-dhoni       "+"4-chahal     "+"5-bumra")
switch(choice)
{
        case '1' :console.log(new s('Sachin','1973'));
        break
        case '2' :console.log(new s('virat','1975'));
        break
        case '3' :console.log(new s('dhoni','1979'));
        break
        case '4' :console.log(new s('chahal','1985'));
        break
        case '5' :console.log(new s('bumra','1993'));
        break
}