const CORRECT_PIN = "0925";
const PIN_LENGTH = CORRECT_PIN.length;
const NEXT_URL = "birthday.html";

const dots = document.getElementById("dots").children;
const display = document.getElementById("display");
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
  input="";
  renderDots();
}

function submitPin(){
  if(input === CORRECT_PIN){
    display.textContent = "Welcome!";
    display.style.color = "green";
    setTimeout(()=>location.href=NEXT_URL,1200);
  } else {
    display.textContent = "Wrong!";
    display.style.color = "red";
    setTimeout(()=>{
      display.textContent="";
      display.style.color="";
      clearAll();
      renderDots();
    },1000);
  }
}

document.querySelectorAll(".key").forEach(btn=>{
  btn.addEventListener("click",()=>pushDigit(btn.dataset.key));
});

renderDots();