init();

function init() {
   buttonsHeaderCard();
}

function buttonsHeaderCard() {
   let cards = document.querySelectorAll('.card');
   cards.forEach((card) => {
      card.children[0].childNodes.forEach((button) => {
         // adiciona funções de acordo com os botões

         if (button.src?.includes('locked')) {
            button.src = 'http://localhost:3000/assets/unlocked-black.svg';
            switchLockColumn(card);

            // bloqueia e desbloqueia cards de acordo com o clique
            button.addEventListener('click', () => {
               switchLockColumn(card, button);
            });
         }

         if (button.src?.includes('minimize')) {
            // minimiza coluna de acordo com o clique
            button.addEventListener('click', () => {
               switchMinimizeColumn(card);
            });
         }
      });
   });
}

function switchLockColumn(card, button) {
   if (button) {
      // troca icone
      let unlocked = 'http://localhost:3000/assets/unlocked-black.svg';
      let locked = 'http://localhost:3000/assets/locked-black.svg';
      button.src.includes('unlocked') ? (button.src = locked) : (button.src = unlocked);
   }

   // função para deixar cards draggable = true
   card.children[1].childNodes.forEach((task) => {
      task.draggable = !task.draggable;
   });
}

function switchMinimizeColumn(card) {
   card.children[1].childNodes.forEach((task) => {
      if (task.innerHTML) {
         task.attributes.hidden ? task.removeAttribute('hidden') : task.setAttribute('hidden', '');
      }
   });
}
