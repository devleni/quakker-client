const form = document.querySelector("form");
const API_URL = "http://localhost:5000/quacks";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get("name");
  const message = formData.get("message");

  const quack = {
    name,
    message
  };

  fetch(API_URL, {
    method: "POST",
    body: quack,
    headers: {
      "content-type": "application/json"
    }
  });

});