const add = document.getElementById('add');
const remove = document.getElementById('remove');

add.addEventListener('click', (event) => {
  add.innerHTML += `<p>${new Date()}</p>`;
});

remove.addEventListener('click', (event) => {
    add.lastChild?.remove();
});
