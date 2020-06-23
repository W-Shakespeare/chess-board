let body = document.body;
let wrapperDiv = document.getElementsByClassName("wrapper")[0];
let boardArr = [];
let prevColor = "white";
let nextColor = "black";
for (let i = 0; i < 64; i++) {
  i % 8 == 0
    ? boardArr.push(prevColor)
    : nextColor == "white"
    ? drawColor("white")
    : drawColor("black");
  function drawColor(color) {
    boardArr.push(color);
    nextColor = color == "white" ? "black" : "white";
    prevColor = prevColor == "white" ? "black" : "white";
  }
}
boardArr.forEach((color) => {
  let div = document.createElement("div");
  div.style.backgroundColor = color;
  div.className = "cell";
  wrapperDiv.appendChild(div);
});
