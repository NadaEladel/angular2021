import { User } from './User';

export class Proposition {
    public id_proposition: number;
    public propositionscanner: String;
    public type: String;
    public date: Date;
    public user:User;
    

    public getId_proposition(): number {
        return this.id_proposition;

    }
    public setId_proposition(id_proposition: number): void {
        this.id_proposition = id_proposition;

    }

    public getPropositionscanner(): String {
        return this.propositionscanner;
    }
    public setPropositionscanner(propositionscanner: String): void {
        this.propositionscanner = propositionscanner;
    }

    public getType(): String {
        return this.type;
    }
    public setType(type: String): void {
        this.type = type;
    }

    public getDate(): Date {
        return this.date;
    }


}