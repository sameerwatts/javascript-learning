const wrapper = document.querySelector('.wrapper');
const buttons = wrapper.querySelectorAll('button[role="tab"]');
const tabPannels = wrapper.querySelectorAll('[role = "tabpanel"]');

const openTabHandler = (e) => {
  // remove tabs
  buttons.forEach((eachBtn) => eachBtn.setAttribute('aria-selected', false));
  // remove tabs details
  tabPannels.forEach((eachPannel) => (eachPannel.hidden = true));
  // select desc using tab click
  const selectedTabPannel = [...tabPannels].find(
    (tabPannel) => tabPannel.getAttribute('aria-labelledby') === e.target.id
  );
  e.target.setAttribute('aria-selected', true);
  selectedTabPannel.removeAttribute('hidden');
};
buttons.forEach((button) => {
  button.addEventListener('click', openTabHandler);
});
