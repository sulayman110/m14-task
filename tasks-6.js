/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let age = 60;
let fare = 800 ;
const isStrudent = false ;

if(isStrudent === true){
    fare = fare / 2;
}
else if(age < 10){
    fare = 0;
}
else if(age >= 60){
    discaunt = fare*15/100 ;
   fare =fare - discaunt
}
console.log('Ticket price',fare,'tk');