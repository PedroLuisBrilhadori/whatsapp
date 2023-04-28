export interface TrelloCard {
   shortLink: string;
   type: string;
   progress?: TrelloCardProgress;
   member: string;
   date: string;
}

export interface TrelloCardProgress {
   after: string;
   before: string;
}
