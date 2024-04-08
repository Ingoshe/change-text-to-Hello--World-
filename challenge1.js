const paragraphText = document.querySelector(".text");
const clickButton = document.querySelector(".myButton");
const secondButton = document.querySelector(".button");

clickButton.addEventListener('click',function(){
    paragraphText.textContent="Hello, World!"
});

secondButton.addEventListener('click',function(){
    paragraphText.textContent = "LONDON IS BLUE."
})