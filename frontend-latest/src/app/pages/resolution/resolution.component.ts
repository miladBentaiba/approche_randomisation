import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {CasecancerService} from "../../services/case-extraction.service";

@Component({
  selector: 'ngx-resolution',
  styleUrls: ['./resolution.component.scss'],
  templateUrl: './resolution.component.html',
})
export class ResolutionComponent {
  public form:FormGroup;
  public form1:FormGroup;
  public submitted:boolean = false;
  solution=0;
  cancer=false;
  found=false;
  public itMe:String="";

  constructor(fb:FormBuilder,private authenticationService: AuthenticationService,private  casecancerService:CasecancerService)
{
  this.cancer=this.authenticationService.getCancer();
  this.itMe=this.authenticationService.getEmail();

  this.form = fb.group({
    'BI' : ['']  ,
    'age' : [''],
    'margin' : [''],
    'shape' : [''],
    'dencity' : [''],
    'createdBy' : [ this.itMe],

  });

  this.form1 = fb.group({
    'T3' : ['']  ,
    'Thyro' : [''],
    'Trido' : [''],
    'TSH' : [''],
    'TS' : [''],
    'createdBy' : [ this.itMe],

  });
}
  isChecked: boolean = false;

  public onSubmit(model: any): void
  {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      console.log(model);

var query="problem.BI="+model.BI+"&problem.age="+model.age+"&problem.shape="+model.shape+"&problem.margin="+model.margin+"&problem.dencity="+model.dencity;
      //   this.databasesService.uploadDatabase();

      this.casecancerService.getCancerResolution(query).finally(() => {
        this.found=true;
      })
        .subscribe(
          database => this.solution = database.solution,

          error => this.solution = <any>error);

    }
  }
  public onSubmit1(model: any): void
  {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      console.log(model);
      var query="problem.T3="+model.T3+"&problem.Thyro="+model.Thyro+"&problem.Trido="+model.Trido+"&problem.TS="+model.TS+"&problem.TSH="+model.TSH;

      //   this.databasesService.uploadDatabase();
      this.casecancerService.getThyroidResolution(query).finally(() => {
        this.found=true;
      })
        .subscribe(
          database => this.solution = database.solution,

          error => this.solution = <any>error);

    }
    }


}
