const nav = document.querySelector("nav");
const h1 = document.querySelector("nav h1");
const a = document.querySelector("nav a");
window.onscroll = function () {
  if (document.documentElement.scrollTop >= 50) {
    nav.classList.add("nav-colored");
    nav.classList.remove("nav-transparent");
    h1.classList.add("h1-colored");
    a.classList.add("a-colored");
  } else {
    nav.classList.add("nav-transparent");
    nav.classList.remove("nav-colored");
    h1.classList.remove("h1-colored");
    a.classList.remove("a-colored");
  }
};
fetch("http://localhost:3000/users")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((x) => {
      getUsers(
        x.imgUrl,
        x.username,
        x.name,
        x.surname,
        x.age,
        x.gender,
        x.email,
        x.followers,
        x.likes
      );
    });
  });

function getUsers(
  imgUrl,
  username,
  name,
  surname,
  age,
  gender,
  email,
  followers,
  likes
) {
  const users = document.querySelector(".container");
  const card = document.createElement("div");
  card.classList.add("userCard");
  card.innerHTML = `
  <div class="userImage">
          <img src=${imgUrl} alt="">
        </div>
        <p class="title">@${username}</p>
        <div class="userContent">
          <div class="userName">name:
            <span class="name">${name}</span>
            <span class="surname">${surname}</span>
          </div>
          <p class="age">age: <span>${age}</span></p>
          <p class="gender">gender: <span>${gender}</span></p>
          <p class="email">email: <span>${email}</span></p>
        </div>
        <div class="activity">
        <span class="followers"><i class="fa-regular fa-user"></i>${followers}</span>
        <span class="likes"><i class="fa-regular fa-heart"></i>${likes}</span>
        </div>
  `;
  users.appendChild(card);
}
