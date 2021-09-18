import { Component, ElementRef, OnInit } from '@angular/core';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Statistique } from '../models/statistique';
import { TokenStorageService } from '../_services/token-storage.service';
import { ProfilenlongService } from '../services/profilenlong.service';
import { Dimensionnement } from '../models/Dimensionnement';
import { HttpClient } from '@angular/common/http';
import { DimcalculService } from '../services/dimcalcul.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  @ViewChild('htmlData') htmlData:ElementRef;
  @ViewChild('htmlData1') htmlData1:ElementRef;
  @ViewChild('htmlData2') htmlData2:ElementRef;
  @ViewChild('htmlData3') htmlData3:ElementRef;
  
  list:any []
  list1:any[]
  list2:any[]
  list3:any[]
  list4:any[]
  list5:any[]
  list6:any[]
  list7:any[]
  list8:any[]
  list9:any[]
  list10: any[]
  list11: any[]
  list12: any[]

  public lineChartData: Array<any> 
  = [
    { data: [100, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true
  };
   lineChartColors: Array<any> = [
     {
       backgroundColor: 'rgba(105, 0, 132, .2)',
       borderColor: 'rgba(200, 99, 132, .7)',
       borderWidth: 2,
     },
    { // dark grey
      backgroundColor: 'rgba(240, 52, 52, 1)',
      borderColor: 'rgba(240, 52, 52, 1)',
      pointBackgroundColor: 'rgba(240, 52, 52, 1)',
      poipublicntBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(240, 52, 52, 1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';











  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartColors: Array<any> = [{
    backgroundColor: ['#F8E018', '#E91E0A', '#C0E135', '#41D456'],
    borderColor: ['rgba(252, 235, 89, 0.2)', 'rgba(77, 152, 202, 0.2)', 'rgba(77, 152, 202, 0.2)', 'rgba(241, 107, 119, 0.2)']
  }];
  public pieChartLegend = true;
  public pieChartPlugins = [];


  public pieChartLabels1 = [];
  public pieChartType: ChartType = 'pie';
  public pieChartData1 = [];
  public pieChartLabels2 = [];
  public pieChartData2 = [];
  stat: Statistique;

  public chartColors: Array<any> = [
    { // second color
      backgroundColor: '#C0C0C0',
      borderColor: '#008080',
      pointBackgroundColor: '#008080',
      pointBorderColor: '#CF1625',
      pointHoverBackgroundColor: '#FFCE56',
      pointHoverBorderColor: '#CF1622'
    },
  ];
  data: any;

  showFiller = false;

  statis: Array<any>;
  id: number;
  currentUser: any;
  roles: string[];
  isLoggedIn = false;
  username: string;
  data1: any;
  constructor(private token: TokenStorageService, private ps: ProfilenlongService,private dimcal:DimcalculService ) {
  }
  ngOnInit() {
    this.isLoggedIn = !!this.token.getToken();

    if (this.isLoggedIn) {
      const user = this.token.getUser();
      this.roles = user.roles;
      this.username = user.username;
      this.id = user.id;
    }
    this.currentUser = this.token.getUser();

    this.ps.statutstat().subscribe(data => {
      console.log(data);
      this.stat = data as Statistique;
      //for (const c of this.user) {
      this.pieChartLabels1.push(this.stat.label1);
      this.pieChartData1.push(this.stat.numb1);
      this.pieChartLabels1.push(this.stat.label2);
      this.pieChartData1.push(this.stat.numb2);
      this.pieChartLabels1.push(this.stat.label3);
      this.pieChartData1.push(this.stat.numb3);

    });


this.dimcal.statisticYn().subscribe (data => {
  console.log("statistique")
  console.log(data);
  this.list=data;
  console.log(this.list)
 this.lineChartData4[1]=({ data: this.list, label: 'Yn Tertiaire' });
});

this.dimcal.secondaireYn().subscribe (data => {
  console.log("statistique1")
  console.log(data);
  this.list1=data;
  console.log(this.list1)
  this.lineChartData3[1]=({ data: this.list1, label: ' Yn Secondaire' });
});

this.dimcal.primaireYn().subscribe (data => {
  console.log("statistique1")
  console.log(data);
  this.list2=data;
  console.log(this.list2)
  this.lineChartData1[1]=({ data: this.list2, label: 'Yn Primaire' });

});

//statutstatCoteProjetPrimaire()
this.ps.statutstatCoteProjetPrimaire().subscribe (data => {
  console.log("statistique4")
  console.log(data);
  this.list3=data;
  console.log(this.list3)
  this.lineChartData1[0]=({ data: this.list3, label: ' Cote projet Primaire' });
});

this.ps.statutstatCoteAmontPrimaire().subscribe (data => {
  console.log("statistique5")
  console.log(data);
  this.list4=data;
  console.log(this.list4)
  this.lineChartData1[2]=({ data: this.list4, label: 'Cote tn Primaire' });
});

//secondaire
this.ps.statutstatCoteProjetSecondaire().subscribe (data => {
  console.log("statistique6")
  console.log(data);
  this.list5=data;
  console.log(this.list5)
  this.lineChartData3[0]=({ data: this.list3, label: ' Cote projet Secondaire' });
});

this.ps.statutstatCoteAmontSecondaire().subscribe (data => {
  console.log("statistique7")
  console.log(data);
  this.list6=data;
  console.log(this.list6)
  this.lineChartData3[2]=({ data: this.list4, label: 'Cote tn Secondaire' });
});
//tertiaire

this.ps.statutstatCoteProjetTertiaire().subscribe (data => {
  console.log("statistique6")
  console.log(data);
  this.list7=data;
  console.log(this.list7)
  this.lineChartData4[0]=({ data: this.list7, label: ' Cote projet Tertiaire' });
});

this.ps.statutstatCoteAmontTertiaire().subscribe (data => {
  console.log("statistique7")
  console.log(data);
  this.list8=data;
  console.log(this.list8)
 this.lineChartData4[2]=({ data: this.list8, label: 'Cote tn Tertiare' });
});
 //namont Primaire
 this.dimcal.namontPrimaire().subscribe (data => {
  console.log("statistique namont")
  console.log(data);
  this.list9=data;
  console.log(this.list2)
  //this.lineChartData1[1]=({ data: this.list2, label: 'Yn Primaire' });
  this.lineChartLabels1= this.list9;
});
 //namontSecondaire :lineChartLabels3
    this.dimcal.namontSecondaire().subscribe(data => {
      console.log("statistique namont")
      console.log(data);
      this.list10 = data;
      console.log(this.list2)
      //this.lineChartData1[1]=({ data: this.list2, label: 'Yn Primaire' });
      this.lineChartLabels3 = this.list10;
    });
////namontTertiare :lineChartLabels4
    this.dimcal.namontSecondaire().subscribe(data => {
      console.log("statistique namont")
      console.log(data);
      this.list11 = data;
      console.log(this.list2)
      //this.lineChartData1[1]=({ data: this.list2, label: 'Yn Primaire' });
      this.lineChartLabels4 = this.list11;
    });

/////////////////////////////
    this.dimcal.namontSecondaire().subscribe(data => {
      console.log("statistique namont")
      console.log(data);
      this.list11 = data;
      console.log(this.list2)
      //this.lineChartData1[1]=({ data: this.list2, label: 'Yn Primaire' });
      this.lineChartLabels3 = this.list11;
    });


}


///////////////////////////////
 /* 
  public lineChartData1: ChartDataSets[]
    = [
    
    { data: [0,0, 0, 0, 0, 0], label: '' },
  ];
  public lineChartLabels1: Array<any> = [];
  public lineChartOptions1: any = {
    responsive: true
  };

  lineChartColors1: Array<any> = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  
  ];
  public lineChartLegend1: boolean = true;
  public lineChartType1: string = 'line';

*/


  /////////////////////////////////////////////
  ////
  public lineChartData1: ChartDataSets[] =  [
    
    { data: [0,0, 0, 0, 0, 0], label: '' },
  ];
 
  lineChartLabels1: Array<any> =[];

  public lineChartOptions1 =   {
    responsive: true,
  };
 
  lineChartColors1: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(240, 52, 52, 1)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public lineChartLegend1: boolean = true;
  public lineChartPlugins = [];
 public  lineChartType1 : string = 'line';
 
 
 //stat2
  lineChartData3: ChartDataSets[]= [
    
    { data: [0,0, 0, 0, 0, 0], label: '' },
  ];
 //string amont 
  public lineChartLabels3: Array<any>= [];

 public  lineChartOptions3 : any = {
    responsive: true,
  };
 
/*   lineChartColors3: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(77, 152, 202, 0.2)',
    },
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
    {
      borderColor: 'black',
      backgroundColor: 'rgba(252, 235, 89, 0.2)',
    }
  ]; */

  lineChartColors3: Color[] = [
    {
      borderColor: 'rgba(200, 99, 132, .7)',
      backgroundColor: 'rgba(105, 0, 132, .2) ',

    },
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    }
  ];

  lineChartLegend3 = true;
  //stat3

  lineChartData4: ChartDataSets[]= [
    
    { data: [0,0, 0, 0, 0, 0], label: '' },
  ];
 
  lineChartLabels4: Label[] = [];

  lineChartOptions4 = {
    responsive: true,
  };
 
/*   lineChartColors3: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(77, 152, 202, 0.2)',
    },
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
    {
      borderColor: 'black',
      backgroundColor: 'rgba(252, 235, 89, 0.2)',
    }
  ]; */

  lineChartColors4: Color[] = [
    {
      backgroundColor: 'rgba(246, 36, 89, 1)',
      borderColor: 'rgba(246, 36, 89, 1)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(246, 36, 89, 1)',
      borderColor: 'rgba(246, 36, 89, 1)',
      borderWidth: 2,
    }
  ];

  lineChartLegend4 = true;
  lineChartType4 = 'line';

  //pdf1
  public openPDF():void {
    let DATA = document.getElementById('htmlData');
        
    html2canvas(DATA).then(canvas => {
        
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a2');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
        PDF.save('Statistique.pdf');
    });     
    }
//pdf 2
public openPDF1():void {
  let DATA = document.getElementById('htmlData1');
      
  html2canvas(DATA).then(canvas => {
      
      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;
      
      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a2');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
      
      PDF.save('Statistique.pdf');
  });     
  }

  //pdf3
  public openPDF2():void {
    let DATA = document.getElementById('htmlData2');
        
    html2canvas(DATA).then(canvas => {
        
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a2');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
        PDF.save('Statistique.pdf');
    });     
    }
    //pdf 4

    public openPDF3():void {
      let DATA = document.getElementById('htmlData3');
          
      html2canvas(DATA).then(canvas => {
          
          let fileWidth = 208;
          let fileHeight = canvas.height * fileWidth / canvas.width;
          
          const FILEURI = canvas.toDataURL('image/png')
          let PDF = new jsPDF('p', 'mm', 'a2');
          let position = 0;
          PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
          
          PDF.save('Statistique.pdf');
      });     
      }
      //pdf 4

    
}

