function displayTotalPayOfCustomer() {
    if (arrListCustomers.length === 0) {
        alert("Currently no customer information is saved");
        displayMainMenu();
    }
    let result = "Which customers total invoice do you want to display?";
    for (let i = 0; i < arrListCustomers.length; i++) {
        result += "\n" + (i + 1) + ". Name: " + arrListCustomers[i].getCusName() + "; ID Card: " + arrListCustomers[i].getCusIdCard();
    }
    result += "\n" + (arrListCustomers.length + 1) + ". Back to menu.";
    let orderNumber;
    let regexp = /^[1-9]$|^\d\d$/;
    do {
        orderNumber = prompt(result);
        if (regexp.test(orderNumber)) {
            orderNumber = Number.parseFloat(orderNumber);
            if (orderNumber === (arrListCustomers.length + 1)) {
                displayMainMenu();
            } else if (orderNumber <= arrListCustomers.length) {
                totalPay(orderNumber - 1);
            } else {
                alert("The customer doesn't exist! Please try again.");
                displayTotalPayOfCustomer();
            }
        } else {
            alert("Enter wrong order number! Please try again.");
            displayTotalPayOfCustomer();
        }
    }
    while (repeat);
}

function totalPay(number) {
    let roomRates;
    switch (arrListCustomers[number].getCusTypeOfService()) {
        case "Villa":
            roomRates = 500;
            break;
        case "Hotel":
            roomRates = 300;
            break;
        case "Room":
            roomRates = 100;
            break;
    }
    let total = roomRates * parseFloat(arrListCustomers[number].getCusDaysToRent())
        * (1 - parseFloat(arrListCustomers[number].getCusDiscount()) / 100);
    alert("Total pay of customer is " + total +".");
    displayTotalPayOfCustomer();
}
