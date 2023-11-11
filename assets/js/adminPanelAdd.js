const backBtn = document.querySelector(".back");
backBtn.addEventListener("click", () => {
  location.href = "./adminPanel.html";
});

const saveBtn = document.querySelector(".save");
fetch("http://localhost:3000/users")
  .then((res) => res.json())
  .then((data) => {
    saveBtn.addEventListener("click", addUser);
  });

function addUser(e) {
  e.preventDefault();
  const addImg = document.querySelector("#img");
  const addUsername = document.querySelector("#username");
  const addEmail = document.querySelector("#email");
  const addPassword = document.querySelector("#password");
  const addName = document.querySelector("#name");
  const addSurname = document.querySelector("#surname");
  const addAge = document.querySelector("#age");
  const addGender = document.querySelector("#gender");
  const addFollowers = document.querySelector("#followers");
  const addLikes = document.querySelector("#likes");

  if (
    addImg.value === "" ||
    addUsername.value === "" ||
    addEmail.value === "" ||
    addPassword.value === "" ||
    addName.value === "" ||
    addSurname.value === "" ||
    addAge.value === "" ||
    addFollowers.value === "" ||
    addLikes.value === ""
  ) {
    alert("Please fill in all the fields.");
    return;
  }

  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: addName.value,
      surname: addSurname.value,
      age: +addAge.value,
      gender: addGender.value,
      username: addUsername.value,
      password: addPassword.value,
      email: addEmail.value,
      imgUrl: addImg.value,
      followers: +addFollowers.value,
      likes: +addLikes.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      location.href = "./adminPanel.html";
    })
    .catch((error) => console.error("Error:", error));
}
