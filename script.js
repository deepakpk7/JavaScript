// alert("Welcome to all")

// a='deepak'
// console.log("hellow",a);

// var a='heloo'
// var a=20

// console.log(a);

// let a=20
// console.log(a);

// let a={name:'dpk',age:21}
// let b=true
// let c=(1,2,3)
// let d=[1,2,3,4,]
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);



// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)


// ARITHAMATIC OPERATOR

// console.log(10+5);

// +,-,/,%,**,++,--
// let a=5
// let b=5
// ++a
// --b
// a++
// b--

// console.log(a);
// console.log(b);

// ASSIGNMENT OPERTORS
// +=,-=,*=,/=,%=,**=

// let a=10
// a*=10
// console.log(a);
// let a=10
// let b=20

// COMPARISON 
// ==,!=,<,>,<=,>=,===,!==

// console.log(a===b);
// console.log(a!==b);

// LOGICAL
// &&
// ||

// console.log(a==b && a==10);
// console.log(a==b || a==10);
 


// ---------------------------------------------------------------------------------

// function sample(){
    // let result=document.getElementById("name")
    // console.log(result.value);
    // document.getElementById("display").innerHTML=result.value

//     let result=document.getElementById("name").value
//     console.log(result);
//     let h2=document.getElementById("display")
//     h2.innerHTML=result
// }
function add(){
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
    let h1=document.getElementById("dis")
    h1.innerHTML=n1+n2

}
function sub(){
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
    let h1=document.getElementById("dis")
    h1.innerHTML=n1-n2

}
function mul(){
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
    let h1=document.getElementById("dis")
    h1.innerHTML=n1*n2

}
function div(){
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
    let h1=document.getElementById("dis")
    h1.innerHTML=n1/n2

}
function mod(){
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
    let h1=document.getElementById("dis")
    h1.innerHTML=n1%n2

}

function eql(){
    let a=parseInt(document.getElementById("a").value)
    let b=parseInt(document.getElementById("b").value)
    let h2=document.getElementById("dis")
    if(a==b){
        h2.innerHTML='EQUAL'

    }
    else{
        h2.innerHTML='NOT EQUAL'
    }
}

function check(){
    let city=document.getElementById("city").value
    let h1=document.getElementById("dis")
    if(city=='delhi'){
        h1.innerHTML="Mounment red fort"
    }
    else if(city=='agra'){
        h1.innerHTML="Taj Mahal"
    }
    else if(city=='jaipur'){
        h1.innerHTML="jal mahal"
    }
    else{
        h1.innerHTML="Invlaid city"
    }
}
function day(){
    let day=document.getElementById("day").value
    let h1=document.getElementById("dis")
    if(day==1){
        h1.innerHTML="SUNDAY"
    }
    else if(day==2){
        h1.innerHTML="MONDAY"
    }
    else if(day==3){
        h1.innerHTML="TUESDAY"
    }
    else if(day==4){
        h1.innerHTML="WENDSDAY"
    }
    else if(day==5){
        h1.innerHTML="THURSDAY"
    }
    else if(day==6){
        h1.innerHTML="FRIDAY"
    }
    else if(day==7){
        h1.innerHTML="SATURDAY"
    }
}
function price(){
    let price=document.getElementById('price').value
    let h1=document.getElementById("dis")
    if(price>=100000){
        t=price*0.15
        h1.innerHTML=t
    }
    else if(price>=50000 && price<=100000){
        t=price*0.10
        h1.innerHTML=t
    }
    else if(price<=50000){
        t=price*0.05
        h1.innerHTML=t
    }
}


// function num(){
//     let n=document.getElementById('n').value

//     for(i=1;i<=n;i++){
//         console.log(i); 
//     }

//     let i=1
//     while (i<=n){
//         console.log(i); 
//         i++
//     }

//     let i=1
//     do{
//         console.log(i);
//         i++  
//     }
//     while(i<=n)

// }

function numbers(){
    let s=document.getElementById('s').value
    let e=document.getElementById('e').value

    for(let i=s;i<=e;i++){
        if(i%2==0){
            console.log(i);
        }
    }

}
function mul(){
    let m=document.getElementById('mul').value
    // for(let i=1;i<=10;i++){
    //     console.log(i,'*',m,'=',i*m);
        
    // }
    let i=1
    do{
        console.log(i,'*',m,'=',i*m);
        i++
    }
    while(i<=10)
}
function sum(){

    let s=document.getElementById('s').value
    let e=document.getElementById('e').value
    let even=0
    for(let i=s;i<=e;i++){
        if (i%2==0){
            even+=i
        }  
    }
    console.log(even);
}