const add = document.getElementById('add');
const counter = document.getElementById('counter');
const remove = document.getElementById('remove');

document.body.addEventListener('click', (event) => {
    // console.log(event.target.id);
    if (event.target.id != 'remove') {
        add.innerHTML += `<p>${new Date()}</p>`;
        counter.innerHTML = add.childElementCount;
    }
});

remove.addEventListener('click', (event) => {
    // console.log(event);
    add.lastChild?.remove();
    counter.innerHTML = add.childElementCount;
});
