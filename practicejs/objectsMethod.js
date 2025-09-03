const user={name:"ana",age:20,city:"tehran"};
//فقط کلید هارو برمیگردونه
console.log(Object.keys(user));
//فقط مقدار هاشون 
console.log(Object.values(user));
//جفتش با هم
console.log(Object.entries(user));



Object.entries(user).map(([key,val])=>{
    console.log(key,val);
    
})





const obj1={a:1,b:2,c:3};
const obj2={d:4};
const merged={...obj1,...obj2};
console.log(merged);






// برای اینکه ابجکت غیر قابل تغییر بشه
// const person={name:"anahita"};
// Object.freeze(person);
// person.name="reza";
// console.log(person);


// جلوگیری از حذف یا اضافه شدن مقدار جدید اما میشه تعییر داد
// const person={name:"anahita",age:20};
// Object.seal(person);
// person.name="aryan";

// console.log(person);
   








