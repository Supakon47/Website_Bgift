const btnProfile = document.getElementById("btnProfile");
const profileCard = document.getElementById("profileCard");

const btnTwenty = document.getElementById("btnTwenty");
const twentyCard = document.getElementById("twentyCard");
const collectBtn = document.getElementById("collectBtn");
const polaroid = document.getElementById("polaroid");
const overlay = document.getElementById("overlay");

btnProfile.addEventListener("click", () => {
  profileCard.classList.toggle("show");
  profileCard.classList.toggle("hidden");

  //  scroll Down to profileCard if it's shown
  if (profileCard.classList.contains("show")) {
    profileCard.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

btnTwenty.addEventListener("click", () => {
  twentyCard.classList.add("show");
  polaroid.classList.remove("exit"); // reset เผื่อเคย collect ไปแล้ว
  polaroid.style.opacity = "1";
  twentyCard.scrollIntoView({ behavior: "smooth", block: "start" });
});

collectBtn.addEventListener("click", () => {
  overlay.classList.add("show");

  // หลัง 2.5s ให้ overlay ค่อย ๆ เลื่อนหาย
  setTimeout(() => {
    overlay.classList.add("exit");
  }, 2500);

  // reset กลับมาหน้าปกติ
  setTimeout(() => {
    overlay.classList.remove("show","exit");
    twentyCard.classList.remove("show");
    polaroid.style.opacity = "0";
  }, 4000);
});