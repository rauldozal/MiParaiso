fetch('navbar.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('navbar').innerHTML = html;
  })
  .catch(err => console.warn('navbar failed to load', err));