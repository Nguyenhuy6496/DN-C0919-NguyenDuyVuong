function yesIDo() {
    alert("Yes! you are right");
}

function canNotClick() {
    let x = Math.round(Math.random() * window.innerWidth);
    let z = Math.round(Math.random() * window.innerHeight);
    document.getElementById("btnNo").style.left = x + "px";
    document.getElementById("btnNo").style.top = z + "px";

}