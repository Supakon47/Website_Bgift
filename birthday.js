const btnProfile = document.getElementById("btnProfile");
const profileCard = document.getElementById("profileCard");
const btnTwenty = document.getElementById("btnTwenty");
const twentyCard = document.getElementById("twentyCard");

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
  twentyCard.scrollIntoView({ behavior: "smooth", block: "start" });
});