import { Sequence } from "./Sequence";
import { Client } from "./Client";

export class dataBase {
  public  allSequences: Sequence[];
    allClients: Client[];
    constructor() {
        this.allSequences = [
            new Sequence(),
            new Sequence(),
            new Sequence(),
            new Sequence(),
            new Sequence()
        ];
        this.allSequences[0].SequenceCode=1;this.allSequences[0].Name= "aaaaaaaa"; this.allSequences[0].ClientCode= 11;
        this.allSequences[0].SequenceCode=1;this.allSequences[1].Name= "aaaaaaaa"; this.allSequences[1].ClientCode= 11;
        this.allSequences[0].SequenceCode=1;this.allSequences[2].Name= "aaaaaaaa"; this.allSequences[2].ClientCode= 11;
        this.allSequences[0].SequenceCode=1;this.allSequences[3].Name= "aaaaaaaa"; this.allSequences[3].ClientCode= 11;
        this.allSequences[0].SequenceCode=1;this.allSequences[4].Name= "aaaaaaaa"; this.allSequences[4].ClientCode= 11;

        this.allClients = [
            new Client("aa111", "sara","aa@gmail.com"),
            new Client("bb222", "rivka", "bb@gmail.com"),
            new Client("cc333", "rachel", "cc@gmail.com"),
            new Client("dd444", "leah", "dd@gmail.com"),
        ];
    }
}