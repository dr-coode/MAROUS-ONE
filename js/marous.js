let btn = document.querySelector("i");
let ul = document.querySelector("ul");
btn.style = "  cursor: pointer;";
ul.style.display = "none";
btn.onclick = function () {
  document.querySelector("ul").classList.toggle("clicked");
  if (ul.classList.contains("clicked")) {
    ul.style.display = "block";
  } else {
    ul.style = "display: none;";
  }
};
document.querySelector(".contact").querySelector("a").title = "The Developer";