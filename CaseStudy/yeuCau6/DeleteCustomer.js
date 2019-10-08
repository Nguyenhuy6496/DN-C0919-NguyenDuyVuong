function deleteCustomer() {
    if (arrListCustomers.length === 0) {
        alert("Currently no customer information is saved");
        displayMainMenu();
    }
    let result = "Which customer do you want to delete?";
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
                deleteOneOfCustomer(orderNumber - 1);
            } else {
                alert("Customer doesn't exist! Please try again.");
                deleteCustomer();
            }
        } else {
            alert("Enter wrong order number! Please try again.");
            deleteCustomer();
        }
    }
    while (repeat);
}

function deleteOneOfCustomer(index) {
    let confirm = prompt("Are you sure you delete this customer?" + "\n" + "1. Yes, I am sure." + "\n" + "2. Back to menu.");
    let regexp = /^[1-2]$/;
    if (regexp.test(confirm)) {
        confirm = Number.parseFloat(confirm);
    } else {
        alert("Enter wrong order number! Please try again.");
        deleteOneOfCustomer();
    }
    switch (confirm) {
        case 1:
            alert("The customer name is " + arrListCustomers[index].getCusName()+ " have been deleted.");
            arrListCustomers.splice(index, 1);
            deleteCustomer();
            break;
        case 2:
            displayMainMenu();
            break;
    }
}