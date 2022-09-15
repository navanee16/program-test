//  email validation
 function myform(){
    var x =document.getElementById("email").value
var y =document.getElementById("number").value


    if(x=="a" && y==11){
        alert("success validation")
    }else{
        alert("not valid")
    }

 }


//  assending order in array
var x =[4,6,8,22,9,0,1,333,7,5,3,2,111];
x.sort(function(a,b){
    return a-b
});
console.log(x);


// sum of digit number
var number=564;
var sum =0;
while(number>0){
    let rem =number%10
    sum=sum+rem;
    number=parseInt(number/10)
}
console.log(number);