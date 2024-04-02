const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
    accordionItems.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  });
});
