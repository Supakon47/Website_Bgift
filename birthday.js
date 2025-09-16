const btnProfile = document.getElementById("btnProfile");
const profileCard = document.getElementById("profileCard");
const btnTwenty = document.getElementById("btnTwenty");
const twentyCard = document.getElementById("twentyCard");
const collectBtn = document.getElementById("collectBtn");
const polaroid = document.getElementById("polaroid");

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
  polaroid.classList.add("exit"); // เล่น animation ออก
  setTimeout(() => {
    twentyCard.classList.remove("show"); // ซ่อน printer
  }, 1500); // ให้เวลา animation เล่นก่อนค่อยซ่อน
});