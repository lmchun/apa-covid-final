window.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('[data-modal]');
    const closeButton = document.querySelector('[data-close-modal]');
    const nextButton = document.querySelector('[data-next-btn]')
    const instructText = document.querySelector('#instructions')
    modal.style.display = 'block';
  
    nextButton.addEventListener('click', function() {
        instructText.innerHTML = `Click on the <img src="img/infob.png" style="width:24px"> icons to read about the piece.`
        nextButton.style.display = 'none';
      });
    closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
       modal.style.display = 'none';
      }
    });
    
  });
  