const textClear = document.querySelector(".reset");
const textSend = document.querySelector(".submit");
textClear.addEventListener("click", (e) => {
  document.getElementById("contacts").value = "";
  console.log("TEST");
});
textSend.addEventListener("click", (e) => {
  window.open(
    `mailto:thmaskell@oakland.edu?subject=Contact Us&body=${document.querySelector(
      ".textClear"
    )}`
  );
});
