
const buttons = document.querySelectorAll(".btn");
const AC = document.querySelector(".clear");
const equalbtn = document.querySelector(".equalBtn");
const input = document.querySelector("#input");
const backSpaceBtn = document.querySelector(".backSpaceBtn");

let string = "";

AC.addEventListener("click", () => {
  input.style.fontSize = "5.5rem";
  string = "";
  input.value = string;
});

backSpaceBtn.addEventListener("click", ()=>{
  if (string.length = 0) {
    input.style.fontSize = "5.5rem";
  } 
  string = string.slice(0,string.length -1);
  input.value = string;
});

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    string = string + e.target.innerHTML;
    console.log(string);
    input.value = string;


    if (string.length >= 9) {
      input.style.fontSize = "2rem";
    } else if (string.length >= 5) {
      input.style.fontSize = "3.5rem";
    }
  });
});

equalbtn.addEventListener("click", () => {
  string = eval(string);
  input.value = string;
  console.log(string);
});


document.addEventListener('mousemove', function(e){
  let mouseX = e.clientX;
  let mouseY = e.clientY;

  // console.log(mouseX, mouseY);
})

