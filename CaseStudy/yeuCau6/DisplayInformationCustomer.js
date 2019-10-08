function displayCustomer() {
    if (arrListCustomers.length === 0) {
        alert("Currently no customer information is saved");
        displayMainMenu();
    }
    let result = "Which customer do you want to show?";
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
                displayInformationCustomer(orderNumber - 1);
            } else {
                alert("The customer doesn't exist! Please try again.");
                displayCustomer();
            }
        } else {
            alert("Enter wrong order number! Please try again.");
            displayCustomer();
        }
    }
    while (repeat);
}

function displayInformationCustomer(index) {
    alert("All customer information:" + "\n" +
        "1." + "Name: " + arrListCustomers[index].getCusName() + "\n" +
        "2." + "ID Card: " + arrListCustomers[index].getCusIdCard() + "\n" +
        "3." + "Birthday: " + arrListCustomers[index].getCusBirthday() + "\n" +
        "4." + "Email: " + arrListCustomers[index].getCusEmail() + "\n" +
        "5." + "Address: " + arrListCustomers[index].getCusAddress() + "\n" +
        "6." + "Privilege: " + arrListCustomers[index].getCusPrivilege() + "\n" +
        "7." + "Discount: " + arrListCustomers[index].getCusDiscount() + "\n" +
        "8." + "Companion: " + arrListCustomers[index].getCusCompanion() + "\n" +
        "9." + "Number of days to rent: " + arrListCustomers[index].getCusDaysToRent() + "\n" +
        "10." + "Type of service: " + arrListCustomers[index].getCusTypeOfService() + "\n" +
        "11." + "Type of room: " + arrListCustomers[index].getCusTypeOfRoom());
    displayCustomer();
}