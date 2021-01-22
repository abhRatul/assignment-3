//https://github.com/abhRatul/assignment-3


// kilometerToMeter
function kilometerToMeter(km)
{
    if(km<0){
        return "Distnace can't be negative";
    }
    var meter=km*1000;
    return meter;
}
var meter=kilometerToMeter(10);
console.log(meter);


// budgetCalculator
function budgetCalculator(noOfWatch,noOfPhone,noOfLaptop)
{

    var watchUnitPrice=40,phoneUnitPrice=120,laptopUnitPrice=300;
    if(noOfWatch<0 || noOfPhone<0 || noOfLaptop<0)
    {
        return "Quantity can't be negative !";
    }
    var totalBudget=watchUnitPrice*noOfWatch+phoneUnitPrice*noOfPhone+laptopUnitPrice*noOfLaptop;
    return totalBudget;
}
var totalBudget=budgetCalculator(5,5,5);
console.log(totalBudget);


// hotelCost
function hotelCost(days)
{
    var totalCost,noDiscount,firstDiscount,secondDiscount;
    if(days<0)
    {
        return "Days can't be negative!";
    }
    else if(days<=10){
        totalCost=days*100;
    }
    else if(days<=20)
    {
        noDiscount=10*100;
        firstDiscount=(days-10)*80;
        totalCost=noDiscount+firstDiscount;
    }
    else
    {
        noDiscount=10*100;
        firstDiscount=10*80;
        secondDiscount=(days-20)*50;
        totalCost=noDiscount+firstDiscount+secondDiscount;
    }
   return totalCost;
}

var totalCost=hotelCost(21)
console.log(totalCost);


//megaFriend
function megaFriend(friends)
{
    var longestName="";
    for(var i=0;i<friends.length;i++)
    {
      if(friends[i].length > longestName.length)
      {
        longestName = friends[i];
      }
    }
    return longestName;
}

var friendsName=["Abh","Ratul","kala bala","Selim chura"];
var megaName = megaFriend(friendsName);
console.log(megaName);