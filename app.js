const toggle = document.getElementById("toggle");
const body = document.body;
const modeSwitch = document.querySelector(".mode__switch");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
});

modeSwitch.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    toggle.checked = !toggle.checked;
    toggle.dispatchEvent(new Event("change", { bubbles: true }));
  }
});
