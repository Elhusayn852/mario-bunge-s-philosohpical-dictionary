document.getElementById('search').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  document.querySelectorAll('.entry').forEach(entry => {
    const term = entry.getAttribute('data-term').toLowerCase();
    entry.style.display = term.includes(query) ? '' : 'none';
  });
});