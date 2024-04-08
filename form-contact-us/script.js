document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const errorMessage = document.getElementById("errorMessage");

    errorMessage.innerHTML = "";

    if (name === "" || email === "" || message === "") {
      errorMessage.innerHTML = "Please fill out all fields";
      return false;
    }

    //TODO: check email

    //send request
    //wait for response
    document.querySelector(".message-container").classList.add("visible");
    document.querySelector(".form-container").classList.remove("visible");
  });
