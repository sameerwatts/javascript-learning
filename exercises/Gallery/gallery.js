function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery found');
  }
  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.modal');
  const next = modal.querySelector('.next');
  const prev = modal.querySelector('.prev');

  let currentImage;

  function closeModal() {
    modal.classList.remove('open');
    window.removeEventListener('keyup', (e) => handleKeyUp(e));
    modal.removeEventListener('click', (e) => {
      if (e.target === e.currentTarget) closeModal();
    });
    next.removeEventListener('click', (e) => showNextImage(e));
    prev.removeEventListener('click', (e) => showPreviousImage(e));
  }

  function handleKeyUp(e) {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') showNextImage();
    if (e.key === 'ArrowLeft') showPreviousImage();
  }

  function openModal() {
    if (modal.matches('.open')) {
      return;
    }
    modal.classList.add('open');
    window.addEventListener('keyup', (e) => handleKeyUp(e));
    modal.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) closeModal();
    });
    next.addEventListener('click', (e) => showNextImage(e));
    prev.addEventListener('click', (e) => showPreviousImage(e));
  }

  function updateModal(el) {
    if (!el) {
      console.info('No image found');
      return;
    }

    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').textContent = el.dataset.description;
    openModal();
    currentImage = el;
  }

  function showNextImage() {
    if (!currentImage.nextElementSibling) {
      updateModal(currentImage.parentNode.firstElementChild);
      return;
    }
    updateModal(currentImage.nextElementSibling);
  }
  function showPreviousImage() {
    if (!currentImage.previousElementSibling) {
      updateModal(currentImage.parentNode.lastElementChild);
      return;
    }
    updateModal(currentImage.previousElementSibling);
  }

  images.forEach((image) =>
    image.addEventListener('click', (e) => updateModal(e.currentTarget))
  );

  // loop over each image
  images.forEach((image) => {
    image.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        updateModal(e.currentTarget);
      }
    });
  });
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
