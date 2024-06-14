// alert("welcome");
// document.write("welcome");
// console.log("welocme");
// console.log("welcome");
// console.log("jee");
// console.log("jee2");

// name="tony";
// console.log(name);
// age=24;
// console.log(age);
// x=null;
// y=undefined;
// hello=true;
// console.log(hello); 
// let fname="tony";
// console.log(fname);
 /*VARIABLES*/
// var age=40;
// var age=42;
// console.log(age); 
// const age=5;
//  let a;
//  console.log(a);
//  let b=BigInt("12");
//  let c=Symbol("hello");

// const student={
//     name : "rahul",
//     age:20,
//     cgpa: 8.2,
//     isPass: true
// };
// student["age"]+=1;
// console.log(student["age"]);

// const product={
//     fname : " pen",
//     rating : 4,
//     offer : 5,
//     price : 270,
//     isOffer : false
// };
//  console.log(typeof product["price"]);
//  console.log("hello");

//arithmetic operators
//  let a=5;
//  let b=2;
//  console.log("a+b=",a+b);
//  console.log("a/b=",a/b);
//  console.log("a^b=",a**b);

 //unary operator
//  console.log("a++=",a++);
//  console.log("a=",a);
//  console.log("++a=",++a);

 //assignment operator
//  let c=6;
//  let d=7;
//  console.log("c+=d",c+=d);

 //comparison operator
//  let a=5;
//  let b="5";
//  console.log("a==b",a===b);

 //logical
//  let e=5;
//  let f=6;
//  let cond1=a>b;
//   let cond2=a===b;
//   console.log(" cond1 && cond2=",cond1 && cond2);

  //conditional statement
//   let age=25;
//   if(age>18)
//     console.log("you can vote");

//   let age1=23;
//   if(age1<18)
//     console.log("junior");
// else if(age1>60)
//      console.log("senior");
// else
//      console.log("middle");    

//      //ternary oprator
    //  let age=25;
    //  let result=(age>18)?"vote":"not vote"
    //  console.log(result);

     //Q-1
     /*let num=prompt("enter a no.");
     if(num%5===0)
         console.log(num,"is a multiple of 5")
     else 
        console.log(num," is not a multiple of 5") */  

    //Q-2
    // let marks=prompt("enter the marks");
    //  if(marks>=80 && marks<=100)
    //     console.log("A");
    // else if(marks>=70)
    //     console.log("B");
    // else if(marks>=60)
    //      console.log("C");
    // else if(marks>=50)
    //      console.log("D");
    // else 
    //     console.log("F");
    
    //LOOPS in JS
    //  for(let i=1;i<=5;i++){
    //     console.log("hello");
    //  }

     //calculate 1 to n
    //  let n=5;
    //  let sum=0;
    //  for(let i=1;i<=n;i++)
    //     {
    //         sum+=i;
    //     }
    //     console.log(sum);

    //while loop
    // let i=1;
    // while(i<=5)
    //     {
    //         console.log("mera");
    //         i++;
    //     }
    
    //do--while
    // let i=1;
    // do
    // {
    //     console.log("apna");
    //     i++;
    // }
    // while(i<=5);
//for-of loop
// let str="shresth";
// for(let ch of str)
//     {
//         console.log(ch);
//     }

//for-in loop
// const student={
//     marks:80,
//     name:"rahul",
//     isGF: false
// }
// for(let it in student)
//     console.log(student[it]);

//lets practice
// const num=64;
// let game=prompt("enter the game number");
// while(game!=num)
//     game=prompt("enter the game number");
// console.log("correct number has been entered");

//strings
// let str="shresth";
// let size=str.length;
// console.log(size);
// console.log(str[4]);

//template literals
// let sentence=`this is my first`;
// console.log(sentence);

// const item={
//     thing: "pen",
//     price:10
// }
// console.log("the cos of",item.thing,"is ",item.price);
// let output=`the cost of ${item.thing} is ${item.price}`;
// console.log(output);
//string methods
// let str1="shresth";
// console.log(str1.toUpperCase());

//let practice
// let name=prompt("enter the name");
// let num=name.length;
// let username="@"+name+num;
// console.log(username);

//Arrays
// let marks=[96,97,95,2];
// console.log(marks.length);
// console.log(marks);
// marks[0]=59;
// console.log(marks);
//for loop
// for(let i=0;i<marks.length;i++)
//     console.log(marks[i]);
//for-of loop
// for(let i of marks)
//     console.log(i);

//lets practice
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let i=0;i<marks.length;i++)
//     sum+=marks[i];
// console.log("average marks=",sum/marks.length);

//let practice
// let items=[250,645,300,900,50];
// for(let i=0;i<items.length;i++)
//     items[i]=items[i]-(10/100)*items[i];
// console.log(items);

//array methods
// let food=["potato","litchi","mango"];
// console.log(food);
// food.push("chips");
// console.log(food);
// let item=food.pop();
// console.log(item);
// console.log(food);
// console.log(food.toString());
// console.log(food);

// let marks=[85,97,44,37,76,60];
// console.log(marks);
// console.log(marks.toString());
// let common=marks.concat(food);
// console.log(common);
// console.log(common.unshift(39));
// console.log(common.shift());
// console.log(marks)
// console.log(marks.slice(1,4));
// console.log(marks.splice(1,3));
// marks.splice(2,0,39);
// console.log(marks);

//lets practice
// let arr=["bloomberg","microsoft","uber","google","ibm","netflix"];
// console.log(arr); 
// arr.shift();
// console.log(arr);
// arr.splice(1,1,"ola");
// console.log(arr);
// arr.push("amazon");
// console.log(arr);

//Fuctions
// function myfunc(msg)
// {
//     console.log(msg);
//     //parameter->msg
// }
// myfunc("hello");//argument

// function sum(x,y)
// {   
//     //local variables->scope
//     s=x+y;
//     return s;
// }
// let val=sum(3,4);
// console.log(val);

// function sum(a,b)
// {
//     return a+b;
// }
// const arrowSum=(a,b)=>{
//     console.log(a+b);
// }
// function multi(a,b)
// {
//     return a*b;
// }
// const printhello=()=>
//     console.log("hello");

// function vowel(str)
// {   
//     str=str.toUpperCase();
//     cnt=0;
//     for(let i=0;i<str.length;i++)
//         {
//             if(str[i]=='A' || str[i]=='E' || str[i]=='I' || str[i]=='O' || str[i]=='U')
//                 cnt++;
//         }
//         return cnt;
// }
// let val=vowel(prompt("enter the string"));
// console.log(val);

// const vowel2=(str)=>{
//     str=str.toUpperCase();
//     let cnt=0;
//     for(let i=0;i<str.length;i++)
//         {
//             if(str[i]=='A' || str[i]=='E' || str[i]=='I' || str[i]=='O' || str[i]=='U')
//                 cnt++;
//         }
//         return cnt;
// }

//forEach function
// let arr=[1,2,3,4,5]
// arr.forEach(function printVl(val,idx,arr){
//     console.log(val,idx,arr);
// });


//lets practice
// let arr=[1,2,4,5,8];
// arr.forEach(function square(val){
//     console.log(val*val);
// })

//MAP
// let arr=[1,2,3,2];
// let newArr=arr.map((val)=>{
//     return val;
// })
// console.log(newArr);

//filter
// let nums=[1,2,3,4]
// let newarr=nums.filter((val)=>{
//     return val%2===0;
// })
// console.log(newarr);

//reduce
// let arr=[1,2,3,4];
// let res=0;
// let ans=arr.reduce((res,curr)=>{
//     return res+curr; 
// });
// console.log(ans);

// let arr=[51,2,312,14];
//  const ans=arr.reduce((res,val)=>{
//     if(res<val)
//         return val;
//     else
//        return res;

//  });
//  console.log(ans);

//lets preactice
// let arr=[67,9,94,92,100];
// let newArr=arr.filter((val)=>{
//     return val>90;
// });
// console.log(newArr);

//SUM AND PRODUCT
// let n=prompt("enter a no.");
// let arr=[];
// for(let i=0;i<n;i++)
//     {
//         arr[i]=i+1;
//     }
//  const sum=arr.reduce((res,curr)=>{
//     return res+curr;
//  });
//  console.log(sum);   
//  const prod=arr.reduce((res,curr)=>{
//     return res*curr;
//  });
//  console.log(prod);  

//DOM
// console.dir(document.body);
// console.log(document.body);
// let Heading=document.getElementById("Heading");
// console.dir(Heading);
// let Heading2=document.getElementById("Heading3");
// console.dir(Heading2);
// let hell=document.getElementsByClassName("hello");
// console.dir(hell);
// let paras=document.getElementsByTagName("p")
// console.dir(paras);
// let elements=document.querySelector("p");
// console.dir(elements);
// let elements2=document.querySelectorAll("p");
// console.dir(elements2);
// console.dir(document.body.firstChild);

// let div=document.querySelector("div");
// console.dir(div);
// let heading=document.querySelector("h1")
// console.dir(heading);

//lets pratice
//Q-1
// let h2=document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText+" from apna college";
// console.dir(h2.innerText);

//Q-2
// let divs=document.querySelectorAll(".box");
// console.dir(divs);
// let idx=1;
// for(div of divs)
//     {
//     div.innerText=`new value ${idx}`;
//     idx++;
//     }

//getAttribute
// let div=document.querySelector("div");
// console.log(div);

// let id=div.getAttribute("id");
// console.log(id);

// let hello=div.getAttribute("name");
// console.log(hello);

// let p=document.querySelector("p");
// console.log(p);
// let clas=p.getAttribute("class");
// console.log(clas);

//setAttribute
// let div=document.querySelector("div");
// //  console.log(div.setAttribute("id","tool"));
// let div=document.querySelector("div");
// div.style.backgroundColor="red";
// div.style.visibility="hidden";

// let newBtn=document.createElement("button");
// newBtn.innerText="click me";
// console.log(newBtn);

// let div=document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);

//create element
// let newhead=document.createElement("h1");
// newhead.innerHTML="<i> hi i am here </i>";
// document.querySelector("body").prepend(newhead);
// //delete element
// let p=document.querySelector("p");
// p.remove();

//lets practice
//Q-1
// let newBtn=document.createElement("button");
// newBtn.innerText="click me";
// newBtn.style.backgroundColor="red";
// newBtn.style.color="white";
// document.querySelector("body").prepend(newBtn);

//Q-2
// let para=document.querySelector("p");
//para.classList.add("newClass");

//Events
// let btn1=document.querySelector("button");
// btn1.onclick=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX);
//     console.log(evt.clientY);
// }
// let box=document.querySelector("div");
// box.onmouseover=()=>{
//     console.log("you are in div")
// }

//
// let btn1=document.querySelector("button");
// btn1.addEventListener("click",(evt)=>{
//     console.log("button 1 is clicked")
//     console.log(evt.type);
// });
// btn1.addEventListener("click",()=>{
//     console.log("button 1 is clicked twice")
// });
// const handler3=()=>{
//     console.log("button 1 is clicked thrice")
// }
// btn1.addEventListener("click",handler3);
// btn1.addEventListener("click",()=>{
//     console.log("button 1 is clicked fourth")
// });
// btn1.removeEventListener("click",handler3)
 
//lets practice
//Toggle between light and dark mode
// let btn1=document.querySelector("button");
// let currMode="light";
// let body=document.querySelector("body");
// btn1.addEventListener("click",()=>{
//     if(currMode==="light"){
//         currMode="dark";
//         body.classList.add("dark");  
//         body.classList.remove("light");
//     }
//     else {
//         currMode="light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currMode);
// })

// let div=document.querySelector("div");
// div.addEventListener("mouseover",()=>{
//     document.querySelector("body").style.backgroundColor="yellow";
    
// })






