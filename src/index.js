import "./index.css";
import ReusePng from "./reuse.png";
import "./my.csv";

const a = 1;
const b = 2;

console.log(a + b);

let childDiv = document.createElement("div");
childDiv.classList = "hello";

let image = new Image();
image.src = ReusePng;

let d1 = document.createElement("div");
d1.innerText = "我是新增的";
d1.classList = "font";
document.body.appendChild(childDiv);
document.body.appendChild(image);
document.body.appendChild(d1);
