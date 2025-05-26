fetch('footer.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('footer').innerHTML = html;
  })
  .catch(err => console.warn('Footer failed to load', err));