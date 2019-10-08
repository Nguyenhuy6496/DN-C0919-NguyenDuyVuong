function displayMainMenu() {
    let selectValue = prompt(
        "What would you like to do?" + "\n" +
        "Please select an optional value." + "\n" +
        "1: Add New Customer." + "\n" +
        "2: Display Information Customer." + "\n" +
        "3: Display Total Pay of Customer." + "\n" +
        "4: Edit Information." + "\n" +
        "5: Delete Customer." + "\n" +
        "6: Exit."
    );
    console.log(selectValue);
    switch (selectValue) {
        case "1":
            addNewCustomer();
            break;
        case "2":
            displayCustomer();
            break;
        case "3":
            displayTotalPayOfCustomer();
            break;
        case "4":
            editInformation();
            break;
        case "5":
            deleteCustomer();
            break;
        case "6":
            exit();
            break;
        case "":
            alert("Please enter the number in the box.");
            displayMainMenu();
            break;
        default:
            alert("Type wrong number! Please try again.");
            displayMainMenu();
            break;
    }
}