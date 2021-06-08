const buttons = document.querySelectorAll('button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

const drawDescription = (img, card) => {
  const imgSrc = img.src;
  const name = card.querySelector('h2').textContent;
  const desc = card.dataset.description;
  const cardHTML = `
    <img width="600" height="600" src="${imgSrc.replace(
      '200',
      '600'
    )}" alt="${name}"/>
    <p>${desc}</p>
  `;
  modalInner.innerHTML = cardHTML;
};

const getButtonDataHandler = (e) => {
  const button = e.target;
  const card = button.closest('.card');
  const photo = card.querySelector('img');
  modalOuter.classList.add('open');
  drawDescription(photo, card);
};

const closeModalHandler = (e) => {
  if (e.target === e.currentTarget) {
    modalOuter.classList.remove('open');
  }
  if (e.key === 'Escape' && modalOuter.classList.value.includes('open')) {
    modalOuter.classList.remove('open');
  }
};

modalOuter.addEventListener('click', closeModalHandler);

buttons.forEach((button) => {
  button.addEventListener('click', getButtonDataHandler);
});

window.addEventListener('keydown', closeModalHandler);
