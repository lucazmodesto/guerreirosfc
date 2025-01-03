document.querySelector(".login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.querySelector("input[type='text']").value;
  const password = document.querySelector("input[type='password']").value;

  if (username === "admin" && password === "12345") {
    alert("Login bem-sucedido!");
    window.location.href = "menu.html"; // Redirecionar para o menu principal
  } else {
    alert("Usuário ou senha incorretos!");
  }
});
