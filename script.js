document.getElementById('searchBox').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(query) ? 'block' : 'none';
    });
  });
  