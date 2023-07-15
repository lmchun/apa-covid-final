window.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('[data-modal]');
    const closeButton = document.querySelector('[data-close-modal]');
    const nextButton = document.querySelector('[data-next-btn]')
    const instructText = document.querySelector('#instructions');
    const backButton = document.querySelector('[data-back-btn]')
    let counterBtn = 0;
    modal.style.display = 'block';

    nextButton.addEventListener('click', function() {
        counterBtn++;
        console.log(counterBtn);
        checkCounter();
        // nextButton.style.display = 'none';
      });

    backButton.addEventListener('click', function(){
        if (counterBtn > 0){
          counterBtn--;
        }
        checkCounter();
        console.log(counterBtn);

    });
    function checkCounter(){
      if(counterBtn == 0){
        instructText.innerHTML = ` <span class="material-symbols-outlined">swipe</span><br><br>
        Click and drag your mouse, look around the scene.`
        nextButton.style.display = 'inline-block';
        backButton.style.display = 'none';
      }
      if(counterBtn == 1){
        instructText.innerHTML = `Click on the <img src="img/infob.png" style="width:24px"> icons to read about the piece.`
        backButton.style.display = 'inline-block';
        nextButton.style.display = 'inline-block';

      }
      if(counterBtn == 2){
        instructText.innerHTML = `Click on the <img src="img/collapseb.png" style="width:24px"> icons close the overview.`
        backButton.style.display = 'inline-block';
        nextButton.style.display = 'inline-block';

      }
      if(counterBtn == 3){
        instructText.innerHTML = `Click on the <img src="img/expandb.png" style="width:24px"> icons to open the overview <br> <br> browse or jump to different rooms.`
        nextButton.style.display = 'none';
        backButton.style.display = 'inline-block';
      }
    }
    

    closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
       modal.style.display = 'none';
      }
    });
    
  });
  