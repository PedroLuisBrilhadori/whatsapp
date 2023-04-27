import { apiTrelloLinks } from './classes';
import fetch from 'node-fetch';

class TrelloApi {
   listWebHooks() {
      return fetch(apiTrelloLinks.listWebhooks, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         },
      });
   }

   createWebHook(callBackUrl: string) {
      return fetch(apiTrelloLinks.createWebhook, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            idModel: '620fb849d682675c38d4b3ff',
            callbackURL: callBackUrl,
         }),
      });
   }
}

export const trelloApi = new TrelloApi();
