import { TrelloKey, TrelloToken } from '../api_secret';

class ApiTrelloLinks {
   /** link da api para adicionar funções que não estão no enum */
   readonly api = 'https://api.trello.com/1';

   /** chaves de autenticação do trello */
   readonly trelloAuth = `key=${TrelloKey}&token=${TrelloToken}`;

   /** requisição do tipo POST para criar um card novo */
   readonly createCard = `${this.api}/cards?${this.trelloAuth}`;

   /**
    * requisição do tipo GET para pegar informações do card
    * @param shortLink do card
    * @returns link para requisição na api trello
    */
   getCard(shortLink: string): string {
      return `${this.api}/lists/${shortLink}/cards?${this.trelloAuth}`;
   }

   /**
    * requisição do tipo PUT para alterar informações do card
    * @param shortLink do card ou cardId como parâmetro
    * @returns link para requisição na api trello
    */
   putCard(shortLink: string): string {
      return `${this.api}/cards/${shortLink}?${this.trelloAuth}`;
   }

   /**
    * requisição do tipo POST para adicionar comentários ao card
    * @param shortLink do card ou cardId como parâmetro
    * @returns link para requisição na api trello
    */
   comentCard(shortLink: string): string {
      return `${this.api}/1/cards/${shortLink}/actions/comments?${this.trelloAuth}`;
   }

   /**
    * requisição do tipo POST para adicionar membros ao card
    * @param shortLink do card ou cardId como parâmetro
    * @param idMembers id do membro
    * @returns link para requisição na api trello
    */
   addMemberCard(shortLink: string, idMembers: string) {
      return `${this.api}/1/cards/${shortLink}/${idMembers}?${this.trelloAuth}`;
   }

   /**
    * requisição do tipo POST para criar webhooks
    * @param callBackUrl url que será chamada pelo webhook
    * @returns link para requisição na api trello
    */
   createWebhook(callBackUrl: string) {
      return `${this.api}/webhooks?callbackURL=${callBackUrl}&idModel=5abbe4b7ddc1b351ef961414&${this.trelloAuth}`;
   }

   /** requisição do tipo GET para listar todos os webhooks */
   readonly listWebhooks = `${this.api}/tokens/${TrelloToken}/webhooks`;

   /**
    * requisição do tipo DELETE para deletar um webhook
    * @param idWebHook id para identificação do webhook
    * @returns link para requicição na api trello
    */
   deleteWebHook(idWebHook: string) {
      return `${this.api}/webhooks/${idWebHook}?${this.trelloAuth}`;
   }
}

export const apiTrelloLinks = new ApiTrelloLinks();
