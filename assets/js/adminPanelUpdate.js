const backBtn = document.querySelector(".back");
backBtn.addEventListener("click", () => {
  location.href = `./detail.html#${hash}`;
});

const hash = window.location.hash.substring(1);
window.onload = function () {
  fetch(`http://localhost:3000/users/${hash}`, {})
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("img").value = data.imgUrl;
      document.getElementById("username").value = data.username;
      document.getElementById("email").value = data.email;
      document.getElementById("password").value = data.password;
      document.getElementById("name").value = data.name;
      document.getElementById("surname").value = data.surname;
      document.getElementById("age").value = data.age;
      document.getElementById("gender").value = data.gender;
      document.getElementById("followers").value = data.followers;
      document.getElementById("likes").value = data.likes;
    });
};

const updateBtn = document.getElementById("updateBtn");

updateBtn.onclick = function () {
  const updatedUserData = {
    imgUrl: document.getElementById("img").value,
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    name: document.getElementById("name").value,
    surname: document.getElementById("surname").value,
    age: +document.getElementById("age").value,
    gender: document.getElementById("gender").value,
    followers: +document.getElementById("followers").value,
    likes: +document.getElementById("likes").value,
  };

  fetch(`http://localhost:3000/users/${hash}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedUserData),
  })
    .then((res) => res.json())
    .then((data) => {
      location.href = `./detail.html#${hash}`
    })
    .catch((error) => {
      alert("Error updating user:", error);
    });
};
