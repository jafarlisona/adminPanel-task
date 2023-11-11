window.onload = function () {
  const hash = window.location.hash.substring(1);
  fetch(`http://localhost:3000/users/${hash}`, {})
    .then((res) => res.json())
    .then((data) => {
      getDetails(
        data.imgUrl,
        data.id,
        data.username,
        data.email,
        data.password,
        data.name,
        data.surname,
        data.age,
        data.gender,
        data.followers,
        data.likes
      );
      const deleteBtn = document.querySelector(".delete");
      const editBtn = document.querySelector(".edit");
      deleteBtn.onclick = () => {
        deleteItem(data.id);
      };
      editBtn.onclick = () => {
        location.href = `./adminPanelUpdate.html#${hash}`;
      };
    });
};
function getDetails(
  imgUrl,
  id,
  username,
  email,
  password,
  name,
  surname,
  age,
  gender,
  followers,
  likes
) {
  const container = document.querySelector(".detailBox");
  container.innerHTML = `
  <div class="detailImg">
          <img src=${imgUrl} alt="" />
        </div>
        <div class="detailContent">
          <p>
          id:  <span>${id}</span> 
          username:  <span>${username}</span> 
          email:  <span>${email}</span> 
          password:  <span>${password}</span>
          name:  <span>${name} ${surname}</span> 
          age:  <span>${age}</span> 
          gender:  <span>${gender}</span> 
          followers:  <span>${followers}</span> 
          likes:  <span>${likes}</span>
          </p>
        </div>
  `;
}
const backBtn = document.querySelector(".back");
backBtn.onclick = () => {
  location.href = "./adminPanel.html";
};

function deleteItem(userId) {
  fetch(`http://localhost:3000/users/${userId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      location.href = "./adminPanel.html";
    })
    .catch((error) => {
      alert("Error deleting user:", error);
    });
}
