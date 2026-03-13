function randomLetters(len) {
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let out = "";
for (let i = 0; i < len; i++) {
out += chars[Math.floor(Math.random() * chars.length)];
}
return out;
}

function randomNumbers(len) {
const chars = "0123456789";
let out = "";
for (let i = 0; i < len; i++) {
out += chars[Math.floor(Math.random() * chars.length)];
}
return out;
}

function generateCode(){

const time = Math.floor(Date.now() / 60000); // minute timestamp

const code =
randomLetters(2) +
"-" +
randomNumbers(4) +
"-" +
time.toString().slice(-3);

document.getElementById("code").innerText = code;

const expire = new Date(Date.now() + 60000);

document.getElementById("expiry").innerText =
"Code expires in 60 seconds";

}
