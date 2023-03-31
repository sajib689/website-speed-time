const form = document.querySelector('form');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', e => {
  e.preventDefault();
  const url = form.url.value;
  const startTime = performance.now();

  fetch(url)
    .then(response => response.text())
    .then(() => {
      const endTime = performance.now();
      const loadTime = endTime - startTime;
      resultDiv.innerHTML = 'Website loaded in '+`${loadTime.toFixed(2)}` + 'milliseconds.'
    })
    .catch(error => {
      console.error(error);
      resultDiv.innerHTML = 'Error loading website. Please check the URL and try again.';
    });
});