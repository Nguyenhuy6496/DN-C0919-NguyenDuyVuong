// function isFirstLetterUpperCase(str) {
//     let regexp = /^[A-Z]/;
//     if(regexp.test(str)){
//         document.write("String's first character is uppercase.");
//     } else {
//         document.write("String's first character is not uppercase.");
//
//     }
// }
//let x = prompt("Type the string want to check here.");
isFirstLetterUpperCase("Huy");
isFirstLetterUpperCase("huy");
function isFirstLetterUpperCase(str){
    let regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        console.log("String's first character is uppercase");
    } else {
        console.log("String's first character is not uppercase");
    }
}