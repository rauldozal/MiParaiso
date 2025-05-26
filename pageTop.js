fetch('_includes/pageTop.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('pageTop').innerHTML = html;
  })
  .catch(err => console.warn('pageTop failed to load', err));