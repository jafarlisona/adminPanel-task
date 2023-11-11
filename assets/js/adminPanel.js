const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", () => {
  location.href = "./adminPanelAdd.html";
});
const backBtn = document.querySelector(".back");
backBtn.onclick = () => {
  location.href = "./index.html";
};
fetch("http://localhost:3000/users")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((x) => {
      getUsers(
        x.id,
        x.imgUrl,
        x.name,
        x.surname,
        x.username,
        x.email,
        x.password
      );
    });
  });

function getUsers(id, imgUrl, name, surname, username, email, password) {
  const tableUsers = document.querySelector("table");
  const tableRow = document.createElement("tr");
  tableRow.classList.add("tableUsers");
  tableRow.innerHTML = `
    <td class="adminId" >${id}</td>
    <td class="adminImg" ><img src=${imgUrl} alt=""></td>
    <td class="adminName">${name} ${surname}</td>
    <td class="adminUsername">${username}</td>
    <td class="adminEmail">${email}</td>
    <td class="adminPassword">${password}</td>
    <td class="adminDetail"><button>MORE</button></td>
    `;
  tableUsers.appendChild(tableRow);

  const detailBtn = tableRow.querySelector(".adminDetail button");
  detailBtn.addEventListener("click", () => {
    location.href = "./detail.html#" + id;
  });
}
