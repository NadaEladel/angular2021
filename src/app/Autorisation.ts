import { Time } from '@angular/common';

export class Autorisation {

	private id: number;
	private nomComplet: String;
	private dateSortie: Date;
	private heureSortie: String;
	private heureRetour: String;
	private raison: String;
	private destination: String;
	private motif: String;
	private validateur: String;
	private etat: String;

	public getId():number {
	return	this.id;

	}
	public setId(id: number): void {
		this.id=id;

	}
	
	public getnomComplet():String {
		return	this.nomComplet;
	
		}
	public setnomComplet(nomComplet: String): void {
		this.nomComplet=nomComplet;
		
	}

	public getds():Date {
		return	this.dateSortie;
	
		}
	public setdateSortie(dateSortie: Date): void {
		this.dateSortie=dateSortie;
		
	}

	public getheureSortie():String {
		return	this.heureSortie;
	
		}
	public setheureSortie(heureSortie: String): void {
		this.heureSortie=heureSortie;
		
	}

	public gethr():String {
		return	this.heureRetour;
	
		}
	public setheureRetour(heureRetour: String): void {
		this.heureRetour=heureRetour;
		
	}

	public getraison():String {
		return	this.raison;
	
		}
	public setraison(raison: String): void {
		this.raison=raison;
		
	}

	public getdestination():String {
		return	this.destination;
	
		}
	public setdestination(destination: String): void {
		this.destination=destination;
		
	}

	public getmotif():String {
		return	this.motif;
	
		}
	public setmotif(motif: String): void {
		this.motif=motif;
		
	}

	public getvalidateur():String {
		return	this.validateur;
	
		}
	public setvalidateur(validateur: String): void {
		this.validateur=validateur;
		
	}

	public getetat():String {
		return	this.etat;
	
		}
	public setetat(etat: String): void {
		this.etat=etat;
		
	}

	
}