import { create, CreateOptions, Message, Whatsapp } from 'venom-bot';
import { MessageApp } from './interfaces/message';

export class SessionWhats {
   private _client: Whatsapp | undefined = undefined;

   get up() {
      return this._client ? true : false;
   }

   private _configCreate: CreateOptions;

   start(): Promise<Whatsapp | void> {
      return create(this._configCreate).then((client) => {
         this._client = client;
         client.onMessage((msg: Message) => {});
      });
   }

   sendMessage(message: MessageApp): boolean {
      let send: boolean = false;

      if (!this._client) {
         console.log('Menssagem não enviada');
         return false;
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
