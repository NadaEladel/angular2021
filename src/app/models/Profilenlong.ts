
export class Profilenlong {
    private id: number;
    private  canals : String;
	private  namont:String ;	
	private naval:String ;
	private  hauteurchute:number;
	private  nombredechute:number ;
	private  chute:number;
	private  longueur:number;
	private  cotetnamont:number;
	private  cotetnaval:number;
	
    public getId():number {
        return	this.id;
    
        }
        public setId(id: number): void {
            this.id=id;
    
        }
        
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

    public gethauteurchute():number {
		return this.hauteurchute;
    }
	public  sethauteurchute( hauteurchute:number): void {
		this.hauteurchute = hauteurchute;
	}

	public getnombredechute():number {
		return this.nombredechute;
    }
	public  setnombredechute( nombredechute:number): void {
		this.nombredechute = nombredechute;
	} 

   
  public getchute():number {
		return this.chute;
    }
	public  setchute( chute:number): void {
		this.chute = chute;
	} 
   
	public getlongueur():number {
		return this.longueur;
    }
	public  setlongueur( longueur:number): void {
		this.longueur = longueur;
	} 	

	public getcotetnamont():number {
		return this.cotetnamont;
    }
	public  setcotetnamont( cotetnamont:number): void {
		this.cotetnamont = cotetnamont;
	} 	

	public getcotetnaval():number {
		return this.cotetnaval;
    }
	public  setcotetnaval( cotetnaval:number): void {
		this.cotetnaval = cotetnaval;
	} 	
  
}