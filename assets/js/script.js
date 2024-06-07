const btnMobile = document.querySelector("#barra");
const fecharMobile = document.querySelector("#fechar");

function toggleMenu() {
  const nav = document.querySelector(".menu");
  nav.classList.toggle("active");
  const ativo = nav.classList.contains("active");
  if (ativo) {
    fecharMobile.classList.toggle("active");
    btnMobile.classList.add("remove");
  } else {
    btnMobile.classList.remove("remove");
    fecharMobile.classList.remove("active");
  }
}

btnMobile.addEventListener("click", toggleMenu);
fecharMobile.addEventListener("click", toggleMenu);
