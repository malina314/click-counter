document.body.addEventListener('click', (event) => {
  document.body.innerHTML += `<p>${new Date()}</p>`;
});
