const CORRECT_PIN = "0925";
const PIN_LENGTH = CORRECT_PIN.length;
const NEXT_URL = "birthday.html";

const dots = document.getElementById("dots").children;
const message = document.getElementById("message");
let input = "";

function renderDots(){
  [...dots].forEach((d,i)=> d.classList.toggle("filled", i<input.length));
}

function pushDigit(d){
  if(input.length >= PIN_LENGTH) return;
  input += d;
  renderDots();
  if(input.length === PIN_LENGTH) submitPin();
}

function clearAll(){
  input = "";
  renderDots();
  message.textContent = "";
  message.className = "message"; // reset
}

function submitPin(){
  if(input === CORRECT_PIN){
    message.textContent = "Welcome!";
    message.className = "message success";
    setTimeout(()=> location.href = NEXT_URL,1200);
  } else {
    message.textContent = "Wrong!";
    message.className = "message error";
    setTimeout(clearAll,1000);
  }
}

document.querySelectorAll(".key").forEach(btn=>{
  btn.addEventListener("click",()=>pushDigit(btn.dataset.key));
});

renderDots();