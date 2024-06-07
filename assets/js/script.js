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

/* Search input questions page */

let inputSearchElement = document.querySelector("#search-input");
let questionsElements = document.querySelectorAll(".question");
let questions = [];
let alreadyHaveNoMatchesFromSearchMessage;

questionsElements.forEach((question, index) => {
  questions.push({
    id: index,
    question: question.querySelector(".question-title").innerHTML,
  });
});

inputSearchElement.addEventListener("input", (e) => {
  const searchValue = e.target.value.toLowerCase();
  let hasMatchingQuestions = false;

  questions.forEach((question) => {
    const questionElement = questionsElements[question.id];
    if (question.question.toLowerCase().includes(searchValue)) {
      if (alreadyHaveNoMatchesFromSearchMessage) {
        document.querySelector(".no-result").style.display = "none";
      }

      questionElement.style.opacity = "1";
      questionElement.style.transition = "opacity 0.5s";
      questionElement.style.display = "block";
      hasMatchingQuestions = true;
    } else {
      questionElement.style.opacity = "0";
      questionElement.style.transition = "opacity 0.5s";
      questionElement.style.display = "none";
    }
  });

  if (!hasMatchingQuestions) {
    const noResultsMessage = document.createElement("h1");
    noResultsMessage.textContent =
      "Não foram encontrados resultados para a sua busca.";
    noResultsMessage.classList.add("no-result-text");

    if (!alreadyHaveNoMatchesFromSearchMessage) {
      document.querySelector(".no-result").appendChild(noResultsMessage);
    }

    alreadyHaveNoMatchesFromSearchMessage = true;
  } else {
    const existingMessage = document.querySelector(".no-results-message");

    if (existingMessage) {
      noResultsMessage.remove();
    }
  }
});
