const input = document.querySelector(".search");
const listItems = [...document.querySelectorAll("li")];

input.addEventListener("input", search);

function search() {
  for (let i = 0; i < listItems.length; i++) {
    let listItem = listItems[i].innerText.toLowerCase();
    if (listItem.includes(input.value.toLowerCase())) {
      listItems[i].style.display = "list-item";
    } else {
      listItems[i].style.display = "none";
    }
  }
}
