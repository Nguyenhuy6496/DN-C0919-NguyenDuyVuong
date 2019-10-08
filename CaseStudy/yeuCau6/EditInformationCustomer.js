function editInformation() {
    if (arrListCustomers.length === 0) {
        alert("Currently no customer information is saved");
        displayMainMenu();
    }
    let result = "Which customer do you want to edit?";
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
                editOneOfInformation(orderNumber - 1);
            } else {
                alert("Customer doesn't exist! Please try again.");
                editInformation();
            }
        } else {
            alert("Enter wrong order number! Please try again.");
            editInformation();
        }
    }
    while (repeat);
}
function editOneOfInformation(index) {
    let numberEdit = prompt("All customer information:" + "\n" +
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
        "11." + "Type of room: " + arrListCustomers[index].getCusTypeOfRoom()+ "\n" +
        "12" + ". Back to menu.");
    let regexp = /^[1-9]$|^\d\d$/;
    if (regexp.test(numberEdit)){
        numberEdit = Number.parseFloat(numberEdit);
        if(numberEdit>12){
            alert("The customer information doesn't exist! Please try again.");
            editOneOfInformation(index);
        }
    } else {
        alert("Enter wrong order number! Please try again.");
        editOneOfInformation(index);
    }
    switch (numberEdit) {
        case 1:
            do {
                arrListCustomers[index].setCusName(prompt("Enter customer name:" + "\n" + "(Does not contain special characters)"));
                if (!arrListCustomers[index].checkCusName()) {
                    alert("Invalid customer name! Please try again.");
                    repeat = true;
                    continue;
                }
                repeat = false;
            }
            while (repeat);
            editOneOfInformation(index);
            break;
        case 2:
            do {
                arrListCustomers[index].setCusIdCard(prompt("Enter customer ID card:" + "\n" + "(Must have 9 numbers or 12 numbers)"));
                if (!arrListCustomers[index].checkCusIdCard()) {
                    alert("Invalid customer ID card! Please try again.");
                    repeat = true;
                    continue;
                }
                repeat = false;
            }
            while (repeat);
            editOneOfInformation(index);
            break;
        case 3:
            do {
                arrListCustomers[index].setCusBirthday(prompt("Enter customer birthday:" + "\n" + "(dd/MM/YYYY)"));
                if (!arrListCustomers[index].checkCusBirthday()) {
                    alert("Invalid customer birthday! Please try again.");
                    repeat = true;
                    continue;
                }
                repeat = false;
            }
            while (repeat);
            editOneOfInformation(index);
            break;
        case 4:
            do {
                arrListCustomers[index].setCusEmail(prompt("Enter customer email:"));
                if (!arrListCustomers[index].checkCusEmail()) {
                    alert("Invalid customer email! Please try again.");
                    repeat = true;
                    continue;
                }
                repeat = false;
            }
            while (repeat);
            editOneOfInformation(index);
            break;
        case 5:
            do {
                arrListCustomers[index].setCusAddress(prompt("Enter customer address:" + "\n" + "Da Nang, Quang Nam, Hue on sale"));
                if (!arrListCustomers[index].checkCusAddress()) {
                    alert("Invalid customer address! Please try again.");
                    repeat = true;
                    continue;
                }
                repeat = false;
            }
            while (repeat);
            editOneOfInformation(index);
            break;
        case 6:
            do {
                arrListCustomers[index].setCusPrivilege(prompt("Enter customer privilege:" + "\n" + "(Diamond, Platinum, Gold, Silver, Member or Not)"));
                if (!arrListCustomers[index].checkCusPrivilege()) {
                    alert("Invalid customer privilege! Please try again.");
                    repeat = true;
                    continue;
                }
                repeat = false;
            }
            while (repeat);
            editOneOfInformation(index);
            break;
        case 7:
            do {
                arrListCustomers[index].setCusDiscount(prompt("Enter customer discount:"));
                if (!arrListCustomers[index].checkCusDiscount()) {
                    alert("Invalid customer discount! Please try again.");
                    repeat = true;
                    continue;
                }
                repeat = false;
            }
            while (repeat);
            editOneOfInformation(index);
            break;
        case 8:
            do {
                arrListCustomers[index].setCusCompanion(prompt("Enter companion customer:"));
                if (!arrListCustomers[index].checkCusCompanion()) {
                    alert("Invalid companion customer! Please try again.");
                    repeat = true;
                    continue;
                }
                repeat = false;
            }
            while (repeat);
            editOneOfInformation(index);
            break;
        case 9:
            do {
                arrListCustomers[index].setCusDaysToRent(prompt("Enter the number of days to rent:"));
                if (!arrListCustomers[index].checkCusDaysToRent()) {
                    alert("Invalid number of days to rent! Please try again.");
                    repeat = true;
                    continue;
                }
                repeat = false;
            }
            while (repeat);
            editOneOfInformation(index);
            break;
        case 10:
            do {
                arrListCustomers[index].setCusTypeOfService(prompt("Enter type of service customer want:" + "\n" + "(Villa, House, Room)"));
                if (!arrListCustomers[index].checkCusTypeOfService()) {
                    alert("Invalid type of service! Please try again.");
                    repeat = true;
                    continue;
                }
                repeat = false;
            }
            while (repeat);
            editOneOfInformation(index);
            break;
        case 11:
            do {
                arrListCustomers[index].setCusTypeOfRoom(prompt("Enter type of room customer want:" + "\n" + "(VIP, Business, Normal)"));
                if (!arrListCustomers[index].checkCusTypeOfRoom()) {
                    alert("Invalid type of room! Please try again.");
                    repeat = true;
                    continue;
                }
                repeat = false;
            }
            while (repeat);
            editOneOfInformation(index);
            break;
        case 12:
            displayMainMenu();
            break;
    }
}