
export class Dimensionnement {
    public id: number;
    private  canals : String;
	private  namont:String ;	
	private naval:String ;
	private  debitunitaire:number;
	private  surface:number ;
	private  largeurdecanal:number;
	private  coefmanning:number;
	private  pente:number;
	private  talus:number;
	private  y0:number;
	private  revanche:number;

    
        
	public  getCanals():String {
		return this.canals;
    }
	public  setCanals( canals:String): void {
		this.canals = canals;
	}
    
    public  getNamont():String {
		return this.namont;
    }
	public  setNamont( namont:String): void {
		this.namont = namont;
	}	

    public getNaval():String {
		return this.naval;
    }
	public  setNaval( naval:String): void {
		this.naval = naval;
	}

    public getDebitUnitaire():number {
		return this.debitunitaire;
    }
	public  setDebitUnitaire( debitUnitaire:number): void {
		this.debitunitaire = debitUnitaire;
	}
   
    public getSurface():number {
		return this.surface;
    }
	public  setSurface( surface:number): void {
		this.surface = surface;
	}
  
    public getLargeurDeCanal():number {
		return this.largeurdecanal;
    }
	public  setLargeurDeCanal(largeurDeCanal:number): void {
		this.largeurdecanal = largeurDeCanal;
	}

    public getCoefManning():number {
		return this.coefmanning;
    }
	public  setCoefManning( coefManning:number): void {
		this.coefmanning = coefManning;
	}

    public getPente():number {
		return this.pente;
    }

	public  setPente(pente:number): void {
		this.pente = pente;
	}

    public getTalus():number {
		return this.talus;
    }
	public  setTalus( talus:number): void {
		this.talus = talus;
}

    public getY0():number {
		return this.y0;
    }
	public  setY0(y0:number): void {
		this.y0 = y0;
	}

    public getRevanche():number {
		return this.revanche;
    }
	public  setRevanche( revanche:number): void {
		this.revanche = revanche;
	}

  
}