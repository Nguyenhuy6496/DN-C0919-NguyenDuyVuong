let amount = document.getElementById("amount");
let unit1 = document.getElementById("unit1");
let unit2 = document.getElementById("unit2");
let rate;
function conversion() {
    if(unit1.value ==="USD" && unit2.value ==="VND"){
        rate = 23000;
    }else
    if(unit2.value ==="USD" && unit1.value ==="VND"){
        rate = 1/23000;
    }else{
        rate = 1;
    }
    alert(amount.value*rate);
}
