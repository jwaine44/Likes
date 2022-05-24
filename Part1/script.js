var likes = 3;
var countElement = document.querySelector("#likeamount");

console.log(countElement);

function increaseLikes() {
    likes++;
    countElement.innerText = likes + " like(s)";
    console.log(likes);
}