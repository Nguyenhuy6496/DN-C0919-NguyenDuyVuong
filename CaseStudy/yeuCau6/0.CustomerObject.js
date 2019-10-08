let Customer = function () {
    this.setCusName = function (name) {
        this.cusName = name;
    };
    this.getCusName = function () {
        this.cusName = this.cusName.trim().toLocaleLowerCase();
        let nameStandard = "";
        for (let i = 0; i < this.cusName.length; i++) {
            if (this.cusName.charAt(i) === " " && this.cusName.charAt(i + 1) === " ") {
                continue;
            }
            if (i === 0 || this.cusName.charAt(i - 1) === " ") {
                nameStandard += this.cusName.charAt(i).toLocaleUpperCase();
                continue;
            }
            nameStandard += this.cusName.charAt(i);
        }
        return nameStandard;
    };
    this.checkCusName = function () {
        if(this.getCusName() ===""){
            return false;
        } else {
            let regexp = /^[\p{Lu}\p{Ll}\s]{1,25}$/u;
            return regexp.test(this.getCusName());
        }
    };

    this.setCusIdCard = function (idCard) {
        this.cusIdCard = idCard;
    };
    this.getCusIdCard = function () {
        return this.cusIdCard;
    };
    this.checkCusIdCard = function () {

        let regexp = /(^[0-9]{9}$)|(^[0-9]{12}$)/;
        return regexp.test(this.getCusIdCard());
    };

    this.setCusBirthday = function (birthday) {
        this.cusBirthday = birthday;
    };
    this.getCusBirthday = function () {
        return this.cusBirthday;
    };
    this.checkCusBirthday = function () {
        let regexp = /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[469]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;
        return regexp.test(this.getCusBirthday());
    };

    this.setCusEmail = function (email) {
        this.cusEmail = email;
    };
    this.getCusEmail = function () {
        return this.cusEmail;
    };
    this.checkCusEmail = function () {
        let regexp = /^(\w{1,20})(@[a-zA-Z0-9]{2,8})(.(\w{2,4})){1,3}$/;
        return regexp.test(this.getCusEmail());
    };

    this.setCusAddress = function (address) {
        this.cusAddress = address;
    };
    this.getCusAddress = function () {
        this.cusAddress = this.cusAddress.trim().toLocaleLowerCase();
        let addStandard = "";
        for (let i = 0; i < this.cusAddress.length; i++) {
            if (this.cusAddress.charAt(i) === " " && this.cusAddress.charAt(i + 1) === " ") {
                continue;
            }
            if (i === 0 || this.cusAddress.charAt(i - 1) === " ") {
                addStandard += this.cusAddress.charAt(i).toLocaleUpperCase();
                continue;
            }
            addStandard += this.cusAddress.charAt(i);
        }
        return addStandard;
    };
    this.checkCusAddress = function () {
        let regexp = /^[\p{Lu}\p{Ll}\s]{1,25}$/u;
        return regexp.test(this.getCusAddress());
    };

    this.setCusPrivilege = function (privilege) {
        this.cusPrivilege = privilege;
    };
    this.getCusPrivilege = function () {
        this.cusPrivilege = this.cusPrivilege.trim().toLocaleLowerCase();
        let privilegeStandard = "";
        for (let i = 0; i < this.cusPrivilege.length; i++) {
            if (i === 0) {
                privilegeStandard += this.cusPrivilege.charAt(i).toLocaleUpperCase();
                continue;
            }
            privilegeStandard += this.cusPrivilege.charAt(i);
        }
        return privilegeStandard;
    };
    this.checkCusPrivilege = function () {
        switch (this.getCusPrivilege()) {
            case "Diamond":
            case "Platinum":
            case "Gold":
            case "Silver":
            case "Member":
            case "Not":
                return true;
            default:
                return false;
        }
    };

    this.setCusDiscount = function (discount) {
        this.cusDiscount = discount;
    };
    this.getCusDiscount = function () {
        return this.cusDiscount;
    };
    this.checkCusDiscount = function () {
        let regexp = /(^[0-9]{1,2}$)/;
        return regexp.test(this.getCusDiscount());
    };

    this.setCusCompanion  = function (companion ) {
        this.cusCompanion  = companion ;
    };
    this.getCusCompanion = function () {
        return this.cusCompanion;
    };
    this.checkCusCompanion = function () {
        let regexp = /(^[0-9]{1,2}$)/;
        return regexp.test(this.getCusCompanion());
    };

    this.setCusDaysToRent = function (daysToRent) {
        this.cusDaysToRent = daysToRent;
    };
    this.getCusDaysToRent = function () {
        return this.cusDaysToRent;
    };
    this.checkCusDaysToRent = function () {
        let regexp = /^[1-9]$|^[0-9]{2}$/;
        return regexp.test(this.getCusDaysToRent());
    };


    this.setCusTypeOfService = function (typeOfService) {
        this.cusTypeOfService = typeOfService;
    };
    this.getCusTypeOfService = function () {
        this.cusTypeOfService = this.cusTypeOfService.trim().toLocaleLowerCase();
        let typeOfServiceStandard = "";
        for (let i = 0; i < this.cusTypeOfService.length; i++) {
            if (i === 0) {
                typeOfServiceStandard += this.cusTypeOfService.charAt(i).toLocaleUpperCase();
                continue;
            }
            typeOfServiceStandard += this.cusTypeOfService.charAt(i);
        }
        return typeOfServiceStandard;
    };
    this.checkCusTypeOfService = function () {
        switch (this.getCusTypeOfService()) {
            case "Villa":
            case "Hotel":
            case "Room":
                return true;
            default:
                return false;
        }
    };

    this.setCusTypeOfRoom = function (typeOfRoom) {
        this.cusTypeOfRoom = typeOfRoom;
    };
    this.getCusTypeOfRoom = function () {
        return this.cusTypeOfRoom;
    };
    this.checkCusTypeOfRoom = function () {
        switch (this.getCusTypeOfRoom()) {
            case "VIP":
            case "Business":
            case "Normal":
                return true;
            default:
                return false;
        }
    };
};