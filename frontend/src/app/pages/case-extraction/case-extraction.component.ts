import {Component, OnInit} from '@angular/core';
import {MessagesModule} from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { CasecancerService } from '../../services/case-extraction.service';
import { AuthenticationService } from '../../services/authentication.service';
import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'ngx-resolution',
  styleUrls: ['./case-extraction.component.scss'],
  templateUrl: './case-extraction.component.html',
})
export class CaseExtractionComponent  {
  display: boolean = false;
    $:any;
  public submitted:boolean = false;

  casecancer: any[] = [{ }];
  public itMe:String="";
  error=false;
  deleteError=false;
  private errorMessage:any = '';
  selectedCasecancer: any[];
  cancer=true;
  public form:FormGroup;
  public form1:FormGroup;
  constructor(fb:FormBuilder,private  casecancerService:CasecancerService, private authenticationService:AuthenticationService,private confirmationService: ConfirmationService) {
    this.itMe=this.authenticationService.getEmail();
   this.cancer=this.authenticationService.getCancer();
    this.form = fb.group({
      'BI' : ['']  ,
      'age' : [''],
      'margin' : [''],
      'shape' : [''],
      'dencity' : [''],
      'solution' : [''],
      'by' : [ this.itMe],

    });

    this.form1 = fb.group({
      'T3' : ['']  ,
      'Thyro' : [''],
      'Trido' : [''],
      'TSH' : [''],
      'TS' : [''],
      'solution' : [''],
      'by' : [ this.itMe],
    });
   if(this.cancer)
   {
     setTimeout(() =>   this.casecancerService.getcasecancer().finally(() => {
     })
       .subscribe(
         database => this.casecancer = database,

         error => this.errorMessage = <any>error), 0);

   }
   else
   {
     var caseC=[{BI: ""  ,
     age :"",
     margin : "",
     shape : "",
     dencity : "",
     solution : "",
     by : ""}];

     setTimeout(() =>   this.casecancerService.getcasethyroid().finally(() => {
       for(var i=0;i<caseC.length;i++)
       {
         if(caseC[i].BI=="")
         {}
        /* this.casecancer[i].BI=caseC[i].problem.BI;
         this.casecancer[i].age=caseC[i].problem.age;
         this.casecancer[i].margin=caseC[i].problem.margin;
         this.casecancer[i].shape=caseC[i].problem.shape;
         this.casecancer[i].dencity=caseC[i].problem.dencity;
         this.casecancer[i].solution=caseC[i].solution;
         this.casecancer[i].solution=caseC[i].solution;
         this.casecancer[i].by=caseC[i].by;*/

       }
     })
       .subscribe(
         database => this.casecancer = database,

         error => this.errorMessage = <any>error), 0);

   }

  }
  refresh()
  {
    setTimeout(() => this.cancer = this.cancer, 0);

  }
  create()
  {
    this.display = true;
  }
  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        //Actual logic to perform a confirmation
      }
    });
  }

  delete(event){
    let errorBool=false;
    this.deleteError=false;
    setTimeout(() => this.deleteError = false, 0);
    console.log(" what is heppening "+ this.selectedCasecancer.length);
    for (var i = 0; i < this.selectedCasecancer.length; i++) {
      console.log(" i am iiiin "+this.selectedCasecancer[i].createdBy+"          "+this.itMe);
      if(this.selectedCasecancer[i].by!=this.itMe)
      {
        errorBool=true;
      }
    }
    console.log(" what is heppening out "+this.deleteError);
    if(errorBool==false)
    {
      for (var i = 0; i < this.selectedCasecancer.length; i++) {
        if(this.cancer)
        {
          this.casecancerService.deleteCancer(this.selectedCasecancer[i]).finally(() => {
            this.casecancerService.getcasecancer().finally(() => {
              this.selectedCasecancer=[];
              this.cancer=this.cancer;
              setTimeout(() => this.cancer = true, 0);

            })
              .subscribe(
                method => this.casecancer = method,
                error => this.errorMessage = <any>error);


          }).subscribe();
        }
        else {
          this.casecancerService.deleteThyroid(this.selectedCasecancer[i]).finally(() => {
            this.casecancerService.getcasethyroid().finally(() => {
              this.selectedCasecancer=[];
              this.cancer=this.cancer;
              setTimeout(() => this.cancer = true, 0);

            })
              .subscribe(
                method => this.casecancer = method,
                error => this.errorMessage = <any>error);


          }).subscribe();
        }

      }

    }
    else
    {
      this.selectedCasecancer=[];
      this.deleteError=true;
      setTimeout(() => this.deleteError = true, 0);

    }


  }
  delete1()
  {

  }
  isChecked: boolean = false;

  public onSubmit(model: any): void
  {
    console.log(model);

    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      console.log(model);


      //   this.databasesService.uploadDatabase();
      this.casecancerService.createCancer({problem:{BI:model.BI ,age:model.age,shape:parseInt(model.shape),
        dencity:parseInt(model.dencity),margin:parseInt(model.margin)},
        solution:parseInt(model.solution),"validity":{"coherence":true,"stochastique":1,"regles":true,"expert":true}});


    }
  }
  public onSubmit1(model: any): void
  {
    this.submitted = true;
    if (this.form1.valid) {
      // your code goes here
      console.log(model);

      //   this.databasesService.uploadDatabase();
      this.casecancerService.createThyroid({problem:{T3:model.T3 ,Thyro:model.Thyro,Trido:model.Trido,
        TS:model.TS,TSH:model.TSH}, solution:parseInt(model.solution),"validity":{"coherence":true,"stochastique":1,"regles":true,"expert":true}});


    }
  }
  selectCas(cas:any) {

}
}

