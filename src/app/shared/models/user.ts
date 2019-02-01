import { Message } from "../models/message";

export class User {
  name: string;
  status: string;
  messages: Message[];
}