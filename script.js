const cards = [];

const createCard = ({ image, name, species }) => `
  <div class="card">
    <img src="${image}" class="card-img-top" alt="character-image">

    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${species}</p>
    </div>
  </div>
`;

const createCards = charactersData => {
  const charactersHtml = charactersData.map(charactersData => createCard(charactersData)).join("");

  return `
    <div class="card-container">
      ${charactersHtml}
    </div>
  `;
};

const createTitle = title => `<h1>Characters of ${title}</h1>`;

const createDom = (data, rootElement) => {
  rootElement.innerHTML = "";
  cards.push(...data.results);

  const domHtml = `
    ${createTitle("Rick And Morty")}
    ${createCards(cards)}
  `;

  return domHtml;
};

fetch("https://rickandmortyapi.com/api/character")
.then(res => res.json())
.then(data => {
  const rootElement = document.querySelector("#root");
  
  rootElement.insertAdjacentHTML("beforeend", createDom(data, rootElement));
  });