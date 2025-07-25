const token = localStorage.getItem("token");
if (!token) {
  window.location.href = "login.html";
}

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "login.html";
});

const postsContainer = document.getElementById("postsContainer");
const searchInput = document.getElementById("searchInput");
let posts = [];

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  posts = await res.json();
  displayPosts(posts);
}

function displayPosts(list) {
  postsContainer.innerHTML = "";
  list.forEach((post) => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = post.title;
    card.onclick = () => openModal(post);
    postsContainer.appendChild(card);
  });
}

function openModal(post) {
  document.getElementById("modalTitle").textContent = post.title;
  document.getElementById("modalBody").textContent = post.body;
  document.getElementById("postModal").classList.remove("hidden");
}

document.getElementById("closeModal").onclick = () => {
  document.getElementById("postModal").classList.add("hidden");
};

searchInput.addEventListener("input", () => {
  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  displayPosts(filtered);
});

fetchPosts();
