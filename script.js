 //! 1.For the given JSON iterate over all for loops(for,for in,for of,for each),

 var arr =[
    {
        "name":"Dineshkumar",
        "age":"25",
        "gender":"Male",
        "id":"706"
    }, 
    {
        "name":"Rolex",
        "age":"40",
        "gender":"Male",
        "id":"777"
    },
    {
        "name":"Leo",
        "age":"45",
        "gender":"Male",
        "id":"666"
    },
    {
        "name":"Elisa",
        "age":"25",
        "gender":"Female",
        "id":"707"
    }
 ]
//for loop
for(var i=0;i<arr.length;i++){
    console.log(arr[i].name);
}
//for in loop
for(var key in arr){
    console.log(arr[key].age);
}
//for of loop
for(var val of arr){
    console.log(val.gender);
}
//for each loop
arr.forEach((z)=>{
console.log(z.id)})


//! 2.Create your own resume data in JSON format
 
 var basics = [
    {
  
    name1    : "DINESHKUMAR",
    email   : "dineshkutty404@gmail.com",
    mobile  : "7358725811",
    age1     : "24",
    gender1 : "Male",
    address : [
        {
    no      : "135",
    street  : "pillayar kovil street",
    area    : "vada puzhuthiyur,naidumangalam",
    district: "tiruvannamalai"
}
],
    education : [
        {

    Institution  : "govt high school",
    area         : "teynampet,chennai",
    qualification: "sslc",
    passedout    : "2014",
    percentage   : "80"
    
    },
 
    {
    Institution  : "apollo polytechnic college",
    Area         : "oragadam,kanchipuram",
    course       : "DME",
    passedout    : "2019",
    percentage   : "76"
    
    }],
   
   workExperience : [
       {
           companyName : "mobis india ltd",
           designation : "quality inspector",
           experience  :  "1 year",
         }
          
       ],   
    
   languagesknown : [ "Tamil,English,"],
   
   
   skills : ["basic computer knowledge,good management and organizational skills"],
   
   
    }];

console.log(basics);