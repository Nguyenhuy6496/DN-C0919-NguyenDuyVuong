let number1 = document.getElementById("inputWidth");
let number2 = document.getElementById("inputHeight");
let result = "";

function Perimeter() {
    let hcn = new rectangle();
    hcn.setWidth(number1.value * 1);
    hcn.setHeight(number2.value * 1);
    result = hcn.perimeter();
    document.getElementById("displayResult").innerText = result;
}

function Area() {
    let hcn = new rectangle();
    hcn.setWidth(number1.value * 1);
    hcn.setHeight(number2.value * 1);
    result = hcn.area();
    document.getElementById("displayResult").innerText = result;
}
