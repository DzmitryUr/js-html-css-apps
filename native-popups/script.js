function showAlert() {
  alert("This is a native alert dialog.");
  document.getElementById("textAlert").textContent = "Alert was opened";
}

function showConfirm() {
  const result = confirm("Do you want to continue?");
  const text = result ? "OK" : "Cancel";
  document.getElementById("textConfirm").textContent = `You clicked ${text}`;
}

function showPrompt() {
  const name = prompt("Please enter your name", "John");
  let content = "You clicked Cancel or closed the prompt.";
  if (name) {
    content = `Welcome ${name}`;
  }
  document.getElementById("textPrompt").textContent = content;
}
