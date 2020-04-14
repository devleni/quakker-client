const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get("name");
  const message = formData.get("message");

  const quack = {
    name,
    message
  };
  console.log(quack);
});