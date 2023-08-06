const add = document.getElementById('add');
const counter = document.getElementById('counter');
const remove = document.getElementById('remove');

const clicks = JSON.parse(localStorage.getItem('clicks')) ?? [];
// console.log(clicks);
add.innerHTML = clicks.map((click) => `<p>${new Date(click)}</p>`).join('');
counter.innerHTML = add.childElementCount;

document.body.addEventListener('click', (event) => {
    if (event.target.id != 'remove') {
        clicks.push(new Date());
        localStorage.setItem('clicks', JSON.stringify(clicks));
        add.innerHTML += `<p>${new Date()}</p>`;
        counter.innerHTML = add.childElementCount;
    }
});

remove.addEventListener('click', (event) => {
    clicks.pop();
    localStorage.setItem('clicks', JSON.stringify(clicks));
    add.lastChild?.remove();
    counter.innerHTML = add.childElementCount;
});
