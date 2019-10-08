function addNewCustomer() {
    let customerInput = new Customer();
    //Nhập và kiểm tra Tên.
    do {
        customerInput.setCusName(prompt("Enter customer name:" + "\n" + "(Does not contain special characters)"));
        if (!customerInput.checkCusName()) {
            alert("Invalid customer name! Please try again.");
            repeat = true;
            continue;
        }
        repeat = false;
    }
    while (repeat);
    //Nhập và kiểm tra ID card.
    do {
        customerInput.setCusIdCard(prompt("Enter customer ID card:" + "\n" + "(Must have 9 numbers or 12 numbers)"));
        if (!customerInput.checkCusIdCard()) {
            alert("Invalid customer ID card! Please try again.");
            repeat = true;
            continue;
        }
        repeat = false;
    }
    while (repeat);
    //Nhập và kiểm tra Ngày sinh.
    do {
        customerInput.setCusBirthday(prompt("Enter customer birthday:" + "\n" + "(dd/MM/YYYY)"));
        if (!customerInput.checkCusBirthday()) {
            alert("Invalid customer birthday! Please try again.");
            repeat = true;
            continue;
        }
        repeat = false;
    }
    while (repeat);
    //Nhập và kiểm tra Email.
    do {
        customerInput.setCusEmail(prompt("Enter customer email:"));
        if (!customerInput.checkCusEmail()) {
            alert("Invalid customer email! Please try again.");
            repeat = true;
            continue;
        }
        repeat = false;
    }
    while (repeat);
    //Nhập và kiểm tra Địa chỉ.
    do {
        customerInput.setCusAddress(prompt("Enter customer address:" + "\n" + "Da Nang, Quang Nam, Hue on sale"));
        if (!customerInput.checkCusAddress()) {
            alert("Invalid customer address! Please try again.");
            repeat = true;
            continue;
        }
        repeat = false;
    }
    while (repeat);
    //Nhập và kiểm tra Đặc quyền.
    do {
        customerInput.setCusPrivilege(prompt("Enter customer privilege:" + "\n" + "(Diamond, Platinum, Gold, Silver, Member or Not)"));
        if (!customerInput.checkCusPrivilege()) {
            alert("Invalid customer privilege! Please try again.");
            repeat = true;
            continue;
        }
        repeat = false;
    }
    while (repeat);
    //Nhập và kiểm tra Giả giá.
    do {
        customerInput.setCusDiscount(prompt("Enter customer discount:"));
        if (!customerInput.checkCusDiscount()) {
            alert("Invalid customer discount! Please try again.");
            repeat = true;
            continue;
        }
        repeat = false;
    }
    while (repeat);
    //Nhập và kiểm tra Số người đồng hành.
    do {
        customerInput.setCusCompanion(prompt("Enter companion customer:"));
        if (!customerInput.checkCusCompanion()) {
            alert("Invalid companion customer! Please try again.");
            repeat = true;
            continue;
        }
        repeat = false;
    }
    while (repeat);
    //Nhập và kiểm tra Số ngày thuê phòng.
    do {
        customerInput.setCusDaysToRent(prompt("Enter the number of days to rent:"));
        if (!customerInput.checkCusDaysToRent()) {
            alert("Invalid number of days to rent! Please try again.");
            repeat = true;
            continue;
        }
        repeat = false;
    }
    while (repeat);
    //Nhập và kiểm tra Loại dịch vụ lưu trú.
    do {
        customerInput.setCusTypeOfService(prompt("Enter type of service customer want:" + "\n" + "(Villa, House, Room)"));
        if (!customerInput.checkCusTypeOfService()) {
            alert("Invalid type of service! Please try again.");
            repeat = true;
            continue;
        }
        repeat = false;
    }
    while (repeat);
    //Nhập và kiểm tra Cấp độ lưu trú.
    do {
        customerInput.setCusTypeOfRoom(prompt("Enter type of room customer want:" + "\n" + "(VIP, Business, Normal)"));
        if (!customerInput.checkCusTypeOfRoom()) {
            alert("Invalid type of room! Please try again.");
            repeat = true;
            continue;
        }
        repeat = false;
    }
    while (repeat);

    arrListCustomers.push(customerInput);
    displayMainMenu();
}