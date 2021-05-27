const pic = document.querySelector('img');

function imageHandler(e) {
  if (e.key === 'Enter' || e.type === 'click') {
    console.log('clicked');
  }
}

pic.addEventListener('click', imageHandler); // for mouse only
pic.addEventListener('keydown', imageHandler); // for keyboard only
