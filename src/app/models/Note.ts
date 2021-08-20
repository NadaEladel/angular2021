import { User } from './User';

export class Note {
   public id_note: number;
    public description: String;
    public notescanner: String;
    public usernote: User;
    public type: String;
    public date: Date;
    public objet: String;
    public statut: String;
    //public usernote:number;

    public getId_note(): number {
        return this.id_note;

    }
    public setId_note(id_note: number): void {
        this.id_note = id_note;

    }

    public getNotescanner(): String {
        return this.notescanner;
    }
    public setNotescanner(notescanner: String): void {
        this.notescanner = notescanner;
    }

    public getDescription(): String {
        return this.description;
    }
    public setDescription(Description: String): void {
        this.description = Description;
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
    public setDate(date: Date): void {
        this.date = date;
    }

    public getobjet(): String {
        return this.objet;
    }
    public setobjet(objet: String): void {
        this.objet = objet;
    }

    public getstatut(): String {
        return this.statut;
    }
    public setstatut(statut: String): void {
        this.statut = statut;
    }

}