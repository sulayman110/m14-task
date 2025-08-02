
// if you get more then 80 then inside your friend score. 
//     If your friend get more than 80. then go for a lunch. 
//     if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
//     if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
//     if your friend get less than 40, block your friend
// if you get less than 80 go to home and sleep and act sad

// Note: 
// use nested if-else-if-else
//  যদি তুমি ৮০ এর বেশি পাও, তাহলে তোমার বন্ধুর স্কোরের ভেতরে যাও। // যদি তোমার বন্ধু ৮০ এর বেশি পাও, তাহলে দুপুরের খাবারের জন্য যাও। // যদি তোমার বন্ধু ৮০ এর নিচে কিন্তু ৬০ এর বেশি বা সমান পাও, তাহলে তোমার বন্ধুকে বলো, পরের বার শুভকামনা। // যদি তোমার বন্ধু ৬০ এর কম পাও, কিন্তু ৪০ এর বেশি বা সমান পাও, তাহলে তোমার বন্ধুর বার্তা অদৃশ্য রাখো। // যদি তোমার বন্ধু ৪০ এর কম পাও, তাহলে তোমার বন্ধুকে ব্লক করো // যদি তুমি ৮০ এর কম পাও, তাহলে বাড়িতে গিয়ে ঘুমাও এবং দুঃখের সাথে আচরণ করো // দ্রষ্টব্য: // নেস্টেড if-else-if-else ব্যবহার করো


let friendScore = 35;

if(friendScore > 80){
    console.log('go for a lunch')
}

else if(friendScore >= 60 && friendScore < 80){

    console.log('Good luck next time')
}
else if(friendScore >= 40 && friendScore < 60){
    console.log('message unseen.')
}
else if(friendScore < 40){
    console.log('you ar a block')
}
else{console.log(' go to home and sleep and act sad')}
