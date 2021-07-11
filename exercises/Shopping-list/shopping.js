// select elements
const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

let items = [];

function handleSubmit(e) {
  e.preventDefault();
  const name = e.target.item.value;
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  items.push(item);
  //   displayItems();
  list.dispatchEvent(new CustomEvent('itemUpdated'));
  e.target.reset();
}

function displayItems() {
  const html = items.map(
    (item) => `
    <li class="shopping-item">
        <input type="checkbox" value=${item.id} ${item.complete && 'checked'}/>
        <span class="itemName">${item.name}</span>
        <button value=${item.id} aria-label="Remove ${
      item.name
    }">&times;</button>
    </li>
    `
  );
  list.innerHTML = html.join('');
}

function mirrorToLS() {
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLS() {
  const LSitem = JSON.parse(localStorage.getItem('items'));
  if (LSitem) {
    items.push(...LSitem);
    list.dispatchEvent(new CustomEvent('itemUpdated'));
  }
}

function deleteItem(id) {
  items = items.filter((item) => item.id !== id);
  list.dispatchEvent(new CustomEvent('itemUpdated'));
}

function markAsComplete(id) {
  const foundedItem = items.find((item) => item.id === id);
  foundedItem.complete = !foundedItem.complete;
  list.dispatchEvent(new CustomEvent('itemUpdated'));
}

// event listeners
shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemUpdated', displayItems);
list.addEventListener('itemUpdated', mirrorToLS);
list.addEventListener('click', (e) => {
  const id = parseInt(e.target.value);
  if (e.target.matches('button')) {
    deleteItem(id);
  }
  if (e.target.matches('input')) {
    markAsComplete(id);
  }
});
restoreFromLS();
