function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery found');
  }
  this.gallery = gallery;
  this.images = Array.from(gallery.querySelectorAll('img'));
  this.modal = document.querySelector('.modal');
  this.next = this.modal.querySelector('.next');
  this.prev = this.modal.querySelector('.prev');

  // bind eventlisteners
  this.handleKeyUp = this.handleKeyUp.bind(this);
  this.showNextImage = this.showNextImage.bind(this);
  this.showPreviousImage = this.showPreviousImage.bind(this);

  // event listeners
  this.images.forEach((image) =>
    image.addEventListener('click', (e) => this.updateModal(e.currentTarget))
  );

  // loop over each image
  this.images.forEach((image) => {
    image.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        this.updateModal(e.currentTarget);
      }
    });
  });
}

Gallery.prototype.closeModal = function () {
  this.modal.classList.remove('open');
  window.removeEventListener('keyup', this.handleKeyUp);
  this.modal.removeEventListener('click', (e) => {
    if (e.target === e.currentTarget) this.closeModal();
  });
  this.next.removeEventListener('click', this.showNextImage);
  this.prev.removeEventListener('click', this.showPreviousImage);
};

Gallery.prototype.handleKeyUp = function (e) {
  if (e.key === 'Escape') this.closeModal();
  if (e.key === 'ArrowRight') this.showNextImage();
  if (e.key === 'ArrowLeft') this.showPreviousImage();
};

Gallery.prototype.openModal = function () {
  if (this.modal.matches('.open')) {
    return;
  }
  this.modal.classList.add('open');
  window.addEventListener('keyup', this.handleKeyUp);
  this.modal.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) this.closeModal();
  });
  this.next.addEventListener('click', this.showNextImage);
  this.prev.addEventListener('click', this.showPreviousImage);
};

Gallery.prototype.updateModal = function (el) {
  if (!el) {
    console.info('No image found');
    return;
  }
  this.modal.querySelector('img').src = el.src;
  this.modal.querySelector('h2').textContent = el.title;
  this.modal.querySelector('figure p').textContent = el.dataset.description;
  this.openModal();
  this.currentImage = el;
};

Gallery.prototype.showNextImage = function () {
  console.log(this);
  if (!this.currentImage.nextElementSibling) {
    this.updateModal(this.currentImage.parentNode.firstElementChild);
    return;
  }
  this.updateModal(this.currentImage.nextElementSibling);
};
Gallery.prototype.showPreviousImage = function () {
  if (!this.currentImage.previousElementSibling) {
    this.updateModal(this.currentImage.parentNode.lastElementChild);
    return;
  }
  this.updateModal(this.currentImage.previousElementSibling);
};

const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));
