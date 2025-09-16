const btnProfile = document.getElementById("btnProfile");
const profileCard = document.getElementById("profileCard");

btnProfile.addEventListener("click", () => {
  profileCard.classList.toggle("show");
  profileCard.classList.toggle("hidden");

  // เลื่อน scroll ลงไปหาการ์ด เมื่อมันถูกเปิด
  if (profileCard.classList.contains("show")) {
    profileCard.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});