let month = document.getElementById("month"); //không nên dùng parseInt() để khai báo kiểu số thực

function daysInMonth() {
    switch (month.value * 1) { //nhân 1 để khai báo kiểu số thực
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("result").innerText = "Tháng này có 31 ngày."; //Hiển thị ở dòng có Id = "result"
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("result").innerText = "Tháng này có 30 ngày."; //Hiển thị ở dòng có Id = "result"
            break;
        case 2:
            document.getElementById("result").innerText = "Tháng này có 28 hoặc 29 ngày."; //Hiển thị ở dòng có Id = "result"
            break;
    }
}
