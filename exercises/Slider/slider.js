function Sliders(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No slider found');
  }
  const slidesContainer = slider.querySelector('.slides');
  const nextBtn = slider.querySelector('.goToNext');
  const prevBtn = slider.querySelector('.goToPrev');

  let prev;
  let current;
  let next;

  function startSlider() {
    current =
      slidesContainer.querySelector('.current') ||
      slidesContainer.firstElementChild;
    prev = current.previousElementSibling || slidesContainer.lastElementChild;
    next = current.nextElementSibling || slidesContainer.firstElementChild;
  }

  function applyClasses() {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
  }

  function move(dir) {
    const classToRemove = ['prev', 'current', 'next'];
    prev.classList.remove(...classToRemove);
    current.classList.remove(...classToRemove);
    next.classList.remove(...classToRemove);
    if (dir === 'next') {
      [prev, current, next] = [
        current,
        next,
        next.nextElementSibling || slidesContainer.firstElementChild,
      ];
    } else {
      [prev, current, next] = [
        prev.previousElementSibling || slidesContainer.lastElementChild,
        prev,
        current,
      ];
    }
    applyClasses();
  }

  // event listeners
  nextBtn.addEventListener('click', () => move('next'));
  prevBtn.addEventListener('click', move);

  startSlider();
  applyClasses();
}

const basicSlider = Sliders(document.querySelector('.slider'));
const dogSlider = Sliders(document.querySelector('.dog-slider'));
