const tips = [
  "git status shows the state of your working directory.",
  "git add stages changes for the next commit.",
  "git commit saves a snapshot with a message.",
  "git push uploads commits to the remote repository.",
  "git pull brings remote changes into your local branch."
];

const button = document.getElementById("btn");
const output = document.getElementById("tip");

button.addEventListener("click", () => {
  const index = Math.floor(Math.random() * tips.length);
  output.textContent = tips[index];
});
