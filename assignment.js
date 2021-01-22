



function kilometerToMeter(kilo) {
    var meter = kilo * 1000 ;
    return meter;
}


function budgetCalculator(amountWatch, amountPhone, amountLaptop) {
    var watchPrice = amountWatch * 50;
    var phonePrice = amountPhone * 100;
    var laptopPrice = amountLaptop * 500;
    var totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
}


function hotelCost(stayInHotel) {
    var stayInHotel = 28;
var hotelRent = 0; 
if(stayInHotel <= 10){
    var hotelRent = 10 * 100;
}
else if(stayInHotel <= 20){
    firstTenDays = 10 * 100;
    remainingDays = stayInHotel - 10;
    secondTenDays = remainingDays * 80;
    var hotelRent = firstTenDays + secondTenDays;
}
else{
    firstTenDays = 10 * 100;
    secondTenDays = 20 * 80; 
    remainingDays = stayInHotel - 20;
    otherDays = remainingDays * 50;
    var hotelRent = firstTenDays + secondTenDays + otherDays;
}
    return hotelRent;
}


function megaFriend(largestNames) {
    
var names = ['araf', 'jaraf', 'sharaf',  'rahat'];
var largestNames = names[0];
for(var i = 0; i< names.length; i++){
    var element = names[i];
    if(element > largestNames){
        largestNames = element ;
    }
}
    return largestNames;
}
