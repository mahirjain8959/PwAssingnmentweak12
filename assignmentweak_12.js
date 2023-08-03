//  Assignment of weak 12 
    //  Question number 1 
    // find 20 percent discount
let totalvalue = 2000;
let discountpercentage  = 20;
 let discount ;
 discount =  discountpercentage / 100 * totalvalue ;
    console.log("the finial discount is", discount);
    let afterdiscount = totalvalue - discount ;
  console.log("the finial price after discount is ", afterdiscount); 

    // question number 2
let username ="admin";
let password = "1234";
if (username == "admin") {
    console.log("login successful");
}else{
    console.log("invalid username or password");
}

    //  question number 3
let INR = 850;
let USA = 0.0125141;
let convert = INR * USA;
 console.log("the 850 indian rupay is USA is ",convert);
 
    //  question Number 4
let numberofchild = 2;
let numberofadult = 1;
let numberofseniors = 1;
 
let child = 100;
let adult = 150;
let seniors = 120;
   let totalRS = child * 2 + adult + seniors ;
   console.log("the total ticket price is", totalRS);

   //  question number 5
let shippping = "express";
switch (shippping) {
    case "standard":
        console.log("take 3 to 5 days");
        break;
    case "express":
        console.log("take 1 to 2  days");
        break;       
    case "overnight":
        console.log("delivered the next day");
        break;
    default:
        console.log("invalid");
        break;
}

   // question number 6
   let name ="mahir";
   let email = "jainmahir769@gmail.com";
   let age = 21;
    console.log("the username should be a",typeof name);
    console.log("the email should be a" ,typeof email) ;
    console.log("the age should be a " ,typeof age);


     // question number 7
     let list = ["pen","pencil","keyboard","bag","laptop"];
     for(i = 0; i < list.length; i++){
         console.log(list[i]);
     }
     

    // question number 8
    let num = 0;
    while (num <= 10) {
         console.log(num);
         num = num + 1;        
    }

    // question number 9
    let arr =[1 ,2,99,56,"mithun",1234 ,"Pw"]
      for (let i = 0; i < arr.length; i++) {
          if (typeof arr[i] === "string") {
              console.log(`Found The First String: ${arr[i]}`);
              break;
            }
      }     
    // question number 10
    let array = [1, 2, -3, 5 ,-9 ,-8 ,-7 ,7] ;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
           continue;
        }
        console.log(array[i]);
    }