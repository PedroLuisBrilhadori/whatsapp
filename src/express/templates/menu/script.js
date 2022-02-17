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
            // bloqueia e desbloqueia cards
            button.addEventListener('click', () => {
               // troca icone
               let unlocked = 'http://localhost:3000/assets/unlocked-black.svg';
               let locked = 'http://localhost:3000/assets/locked-black.svg';
               button.src.includes('unlocked') ? (button.src = locked) : (button.src = unlocked);

               // função para deixar cards draggable = true
               card.children[1].childNodes.forEach((task) => {
                  task.draggable = !task.draggable;
               });
            });
         }

         if (button.src?.includes('minimize')) {
            button.addEventListener('click', () => {
               console.log('minimize');
            });
         }
      });
   });
}
