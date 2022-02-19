import { create, CreateOptions, Message, Whatsapp } from 'venom-bot';
import { MessageApp } from './interfaces/message';

export class SessionWhats {
   private _client: Whatsapp;
   private _up = false;

   get up() {
      return this._up;
   }

   private _configCreate: CreateOptions;

   async start() {
      await create(this._configCreate).then((client) => {
         this._client = client;
         this._up = true;
         client.onMessage((msg: Message) => {});
      });

      return;
   }

   async sendMessage(message: MessageApp) {
      let send = false;

      if (!this._up) {
         this.start();
         console.error('Iniciando sessão, tente novamente');
         return;
      }

      this._client
         .sendText(message.contact, message.text)
         .then((result) => {
            console.log('Result:', result);
            send = true;
         })
         .catch((error) => {
            console.error('Erro ao enviar menssagem:', error);
            send = false;
         });

      return send;
   }

   constructor(configCreate: CreateOptions) {
      this._configCreate = configCreate;
   }
}
