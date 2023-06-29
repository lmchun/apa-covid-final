window.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('[data-modal]');
    const closeButton = document.querySelector('[data-close-modal]');
  
    modal.style.display = 'block';
  
    closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
       modal.style.display = 'none';
      }
    });
  });
  