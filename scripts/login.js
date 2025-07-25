document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  try {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorElem = document.getElementById("loginError");

    if (username === "Bia Vizeu" && password === "1234") {
      const fakeToken = "token-bia-vizeu-1234";
      const user = { username: "biavizeu", nome: "Bia Vizeu" };

      localStorage.setItem("token", fakeToken);
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "posts.html";
    } else {
      errorElem.textContent = "Usuário ou senha inválidos.";
      errorElem.classList.remove("hidden");
    }
  } catch (err) {
    console.error(err);
    alert("Erro ao tentar fazer login");
  }
});
