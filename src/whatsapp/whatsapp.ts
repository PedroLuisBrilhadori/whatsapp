import { create, CreateOptions, Message, Whatsapp } from 'venom-bot';
import { MessageApp } from './interfaces/message';

export class SessionWhats {
   public app: Whatsapp | undefined;

   get up() {
      return this.app ? true : false;
   }

   private _configCreate: CreateOptions;

   private start(): Promise<Whatsapp> {
      return create(this._configCreate)
         .then((client) => {
            client.onMessage((msg: Message) => {});
            return client;
         })
         .catch((err) => {
            return err;
         });
   }

   sendMessage(message: MessageApp): boolean {
      let send: boolean = false;

      if (!this.app) {
         console.log('Menssagem não enviada');
         return false;
      }

      this.app
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
      this.start()
         .then((client) => (this.app = client))
         .catch((err) => (this.app = undefined));
   }
}
