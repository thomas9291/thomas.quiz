const form = document.querySelector(".form");
const newSectionContainer = document.querySelector(".form-submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log(data);
  const title = document.createElement("h2");
  title.textContent = data.question;
  const btn = document.createElement("button");
  btn.setAttribute("class", "btn");
  btn.textContent = "Show Answer";
  const text = document.createElement("p");
  text.setAttribute("class", "answert");
  const tagText = document.createElement("p");
  tagText.setAttribute("class", "tag");
  tagText.textContent = data.tag;
  newSectionContainer.append(title, btn, tagText);
});

const btnAnswer = document.querySelector(".btn");

newSectionContainer.addEventListener("click", () => {
  if (btnAnswer.textContent === "Show answer") {
    text.textContent = data.answert;
    btnAnswer.textContent = "hide answer";
  } else {
    text.textContent = "";
    btnAnswer.textContent = "Show answer";
  }
});
