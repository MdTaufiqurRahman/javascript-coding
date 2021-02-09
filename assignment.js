//Here x is the input value in kilometer
function kilometerToMeter(x) {
    var meter;

    if (x < 0)
        return console.log("Wrong Input");
    else {
        meter = x * 1000;
        return meter;
    }

}

//Here x,y,z are quantity value of watch,mobile,laptop 
function budgetCalculator(x, y, z) {

    var watchPrice, mobilePrice, laptopPrice, totalPrice;

    if (x < 0 || y < 0 || z < 0)
        return console.log("wrong input");
    else {
        watchPrice = x * 50;
        mobilePrice = y * 100;
        laptopPrice = z * 500;

        
        totalPrice = watchPrice + mobilePrice + laptopPrice;

        return totalPrice;
    }

}

//Here x is the amount of days
function hotelCost(x) {

    if (x < 0)
        return console.log("Days cannot be negative!Please insert positive value");
    else if (x <= 10) {

        var totalCost = x * 100;
        return totalCost;
    }
    else if (x <= 20) {

        var firstTenDays = 10 * 100;
        var remainingDays = x - 10;
        var totalCost = (remainingDays * 80) + firstTenDays;
        return totalCost;

    }
    else {

        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = x - 20;
        totalCost = firstTenDays + secondTenDays + (x - 20) * 50;
        return totalCost;


    }



}

function megaFriend(array) {

    var largestName = array[0];
    var i;

    if (array.length != 0) {
        for (i = 0; i < array.length; i++) {

            if (array[i].length > largestName.length) {

                largestName = array[i];

            }


        }
        return largestName;
    }

    else
        return console.log("Sorry!Your array is empty.");

}