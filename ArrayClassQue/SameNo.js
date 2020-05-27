var s=prompt('enter the size')
var ar=new Array(s)
if(same()==false){
    console.log('no is not same')
}
console.log('*************')
if (add()==false){
    console.log('no is not same')
}

function same(){
for(let i=0;i<s;i++){
    ar[i]=prompt('enter data')
}var b=ar[0]
    ar.forEach(Element=>{
        if(b!=Element)
       {
        return false;
       }
})
console.log('all are same')
}

console.log(ar)
function add(){
    var b=ar[0]
        for(let i=0;i<s;i++){
            if(b!=ar[i])
           {
            return false;
           }
    }
    console.log('all are same')
    }