var ar=[]
var as=[12,15,'shreya','india']
console.log(as)
var s=prompt('enter size of array')

var ae=new Array(s)
for(var i=0;i<s;i++){
ae[i]=prompt('enter value')
}
ae.forEach(element=>{
    console.log(element)
})
console.log(ae)
