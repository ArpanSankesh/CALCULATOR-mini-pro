const buttons = document.querySelectorAll(".btn");
const AC = document.querySelector(".clear");
const equalbtn = document.querySelector(".equalBtn");
const input = document.querySelector("#input");

let string = "";

AC.addEventListener("click", () => {
  string = "";
  input.value = string;
});

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    string = string + e.target.innerHTML;
    console.log(string);
    input.value = string;
  });
});


equalbtn.addEventListener("click", () => {
  string = eval(string);
  input.value = string;
  console.log(string);
});
