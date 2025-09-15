// ===== Config =====
const CORRECT_PIN = "0925";   // เปลี่ยนรหัสที่นี่
const PIN_LENGTH = CORRECT_PIN.length;
const NEXT_URL = "birthday.html"; // หน้า redirect หลังใส่ถูก

// ===== Elements =====
const dots = document.getElementById("dots").children;
const display = document.getElementById("display");
const hint = document.getElementById("hint");
let input = "";

// Update visual dots
function renderDots() {
  [...dots].forEach((d, i) => {
    d.classList.toggle("filled", i < input.length);
  });
}

// Mobile haptic feedback
function vibrate(ms=20){
  if (navigator.vibrate) navigator.vibrate(ms);
}

// Number pressed
function pushDigit(d){
  if (input.length >= PIN_LENGTH) return;
  input += d;
  renderDots();
  vibrate(10);
}

// Clear all
function clearAll(){
  input = "";
  renderDots();
  hint.textContent = "ใส่รหัส " + PIN_LENGTH + " หลัก";
}

// Submit PIN
function submitPin(){
  if (input.length < PIN_LENGTH){
    hint.textContent = "ใส่รหัสให้ครบก่อนนะ";
    vibrate(30);
    return;
  }
  if (input === CORRECT_PIN){
    display.classList.add("welcome");
    hint.textContent = "Welcome!";
    vibrate(50);
    // แสดง Welcome 1.2 วินาทีแล้วค่อยไปต่อ
    setTimeout(()=> location.href = NEXT_URL, 1500);
  } else {
    display.classList.remove("error","wrong","welcome");
    void display.offsetWidth; // restart animation
    display.classList.add("error","wrong");
    hint.textContent = "Wrong!";
    vibrate(80);
    setTimeout(()=>{
      clearAll();
      display.classList.remove("wrong");
    }, 1000);
  }
}

// Events for keypad
document.querySelectorAll("button.key").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const d = btn.dataset.key;
    const action = btn.dataset.action;
    if (d) pushDigit(d);
    else if (action === "clear") clearAll();
    else if (action === "enter") submitPin();
  });
});

// Keyboard support (desktop)
window.addEventListener("keydown", (e)=>{
  if (/^\d$/.test(e.key)) pushDigit(e.key);
  else if (e.key === "Enter") submitPin();
  else if (e.key === "Backspace") {
    input = input.slice(0,-1);
    renderDots();
  } else if (e.key === "Escape") clearAll();
});

// Init
renderDots();

