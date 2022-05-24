var likes1 = 9;
var likes2 = 12;
var likes3 = 9;
var countElement = document.querySelector("#likeamount");
var countElement2 = document.querySelector("#likeamount2");
var countElement3 = document.querySelector("#likeamount3");

console.log(countElement);

function increaseLikes1() {
    likes1++;
    countElement.innerText = likes1 + " like(s)";
    console.log(likes1);
}

function increaseLikes2() {
    likes2++;
    countElement2.innerText = likes2 + " like(s)";
    console.log(likes2);
}

function increaseLikes3() {
    likes3++;
    countElement3.innerText = likes3 + " like(s)";
    console.log(likes3);
}