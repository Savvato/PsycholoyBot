import { Message } from './message';

export class User {
    id: String;
    name: String;
    gender: String;
    hasFamily: Boolean;
    hasConversationTroubles: Boolean;
    messages: Message[];
}