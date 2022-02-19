import { TrelloKey, TrelloToken } from '../api_secret';

class ApiTrelloLinks {
   // link da api para adicionar funções que não estão no enum
   readonly api = 'https://api.trello.com/1';

   readonly trelloAuth = `key=${TrelloKey}&token=${TrelloToken}`;

   // requisição do tipo POST para criar um card novo
   readonly createCard = `${this.api}/cards?${this.trelloAuth}`;

   // requisição do tipo GET para pegar informações do card
   getCard(shortLink: string): string {
      return `${this.api}/lists/${shortLink}/cards?${this.trelloAuth}`;
   }

   // requisição do tipo PUT para alterar informações do card
   // passar shortLink ou cardId como parâmetro
   putCard(shortLink: string) {
      return `${this.api}/cards/${shortLink}?${this.trelloAuth}`;
   }

   // requisição do tipo POST para adicionar comentários ao card
   // passar shortLink ou cardId como parâmetro
   comentCard(shortLink: string) {
      return `${this.api}/1/cards/${shortLink}/actions/comments?${this.trelloAuth}`;
   }

   addMemberCard(shortLink: string, idMembers: string) {
      return `${this.api}/1/cards/${shortLink}/${idMembers}?${this.trelloAuth}`;
   }
}

export const apiTrelloLinks = new ApiTrelloLinks();
