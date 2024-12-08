const mySym = Symbol("key1")
const JsUser ={
    name: "Aniruddha",
    age: 18,
    [mySym]: "key1",
    location: "burdwan",
    email: "aniruddha@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday","monday"]

}
/*console.log(JsUser.age);
console.log(JsUser["age"]);
console.log(JsUser[mySym]);
//console.log(typeof JsUser.mySym);

JsUser.email= "gg@gmail.com"

Object.freeze(JsUser)

JsUser.email= "ggnkk@gmail.com"
console.log(JsUser);*/



JsUser.greeting = function(){
    console.log("hello js user");
    
}



JsUser.greetingTw = function(){
    console.log(`hello js user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTw());

