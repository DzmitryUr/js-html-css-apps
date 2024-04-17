const message = document.getElementById("message");
const btnLogin = document.getElementById("btnLogin");
const btnLogout = document.getElementById("btnLogout");

function setCookie(cookieName, cookieValue, daysToExpire) {
  const date = new Date();
  date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${cookieName}=${cookieValue};${expires};path=/`;
}

function getCookie(cookieName) {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookiesArray = decodedCookie.split(";");
  for (let cookie of cookiesArray) {
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
}

function deleteCookie(cookieName) {
  document.cookie = cookieName +=
    "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}

function displayInfo() {
  const cookieValue = getCookie("username");
  if (cookieValue === "") {
    btnLogout.hidden = true;
    btnLogin.hidden = false;
    message.innerHTML = "Hello Guest. Please Sign In";
  } else {
    btnLogout.hidden = false;
    btnLogin.hidden = true;
    message.innerHTML = `Welcome again ${cookieValue}`;
  }
}

btnLogin.addEventListener("click", function () {
  const userName = prompt("Please enter user name:");
  setCookie("username", userName);
  displayInfo();
});

btnLogout.addEventListener("click", function () {
  deleteCookie("username");
  displayInfo();
});

displayInfo();
