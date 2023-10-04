// Bu yerda Frontend JavaScriptni shakllantirib olamiz

const { response } = require("./app");

console.log("Frontend JS ishga tushdi");

function itemTemplate(item) {
  return ` <li
    class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
    <span class="item-text">${item.reja}</span>
    <div>
      <button
        data-id="${item._id}"
        class="edit-me btn btn-secondary btn-sm mr-1">
        Ozgartirish
      </button>
      <button
        data-id="${item._id}"
        class="delete-me btn btn-danger btn-sm">
        Ochirish
      </button>
    </div>
  </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault(); //boshqa pagega by default o'tib ketmasligi uchun

  axios // traditional post // Modern POST bo'lyapti
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data)); //shakllangan listni eng oxiriga qoshish
      createField.value = ""; // Browserda qoshib bolgandan kn qoshgan narsasini ochirsin
      createField.focus();
    })
    .catch((err) => {
      console.log("Iltimos qaytadan urinib koring");
    });
});

document.addEventListener("click", function (e) {
  console.log(e);
  if (e.target.classList.contains("delete-me")) {
    alert("siz delete tugmasini bosdingiz");
  }

  if (e.target.classList.contains("edit-me")) {
    alert("siz edit tugmasini bosdingiz");
  }
});
