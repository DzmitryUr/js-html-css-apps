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

    if (!isValidEmail(email)) {
      errorMessage.innerHTML = "Please enter a valid email address";
      return false;
    }

    //send request
    //wait for reponse

    document.querySelector(".message-container").classList.add("visible");
    document.querySelector(".form-container").classList.remove("visible");
  });

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document.addEventListener("click", () => {
  document.querySelector(".message-container").classList.remove("visible");
  document.querySelector(".form-container").classList.add("visible");
});
