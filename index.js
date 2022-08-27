// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"


const userListEl = document.querySelector('.user-list')

async function main() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData = await users.json();
  console.log(usersData)

  userListEl.innerHTML=
    usersData.map(
      (user) => userHtml(user)
    )
}

main();

function showUserPosts(id){
    //how to route to a new page in vanilla js
    localStorage.setItem("id", id )
    window.location.href = `${window.location.origin}/user.html`
}

function userHtml(user) {
    return `<div class="user-card" onclick="showUserPosts(${user.id})">
    <div class="user-card__container">
        <h3>${user.name}</h4>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>:</b> ${user.phone}</p>
        <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
    </div>
</div>`
}
