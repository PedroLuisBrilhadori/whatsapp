import { create } from 'venom-bot';

export class SessionWhats {
   #client;
   #up = false;

   #configCreate = {
      session: '',
   };

   async start() {
      await create(this.#configCreate).then((client) => {
         this.#client = client;
         this.#up = true;
         client.onMessage((msg) => {
            console.log(msg);
         });
      });

      return;
   }

   sendMessage(message) {
      if (!this.#up) {
         this.start();
         console.error('Iniciando sessão, tente novamente');
         return;
      }

      if (!message.text || !message.contact) {
         console.error('Erro, menssagem não enviada. Revise sua menssagem', {
            text: message.text,
            contact: message.contact,
         });
         return;
      }

      this.#client
         .sendText(message.contact, message.text)
         .then((result) => {
            console.log('Result:', result);
         })
         .catch((error) => {
            console.error('Erro ao enviar menssagem:', error);
         });
   }

   constructor(configCreate) {
      // sesion name | default = 'name-default'
      this.#configCreate.session = configCreate.session ? configCreate.session : 'name-default';

      // multidevice session | default = false
      this.#configCreate.multidevice = configCreate.multidevice !== undefined ? configCreate.multidevice : false;

      //  Open devtools by default | default = false
      this.#configCreate.devtools = configCreate.devtools !== undefined ? configCreate.devtools : false;

      // Headless chrome | default = true
      this.#configCreate.headless = configCreate.headless !== undefined ? configCreate.headless : true;

      // If false will use Chromium instance | default = true
      this.#configCreate.useChrome = configCreate.useChrome ? configCreate.useChrome : true;
   }
}
