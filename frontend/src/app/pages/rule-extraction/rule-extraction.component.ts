import {Component, OnInit} from '@angular/core';
import {MessagesModule} from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { RulecancerService } from '../../services/rule-extraction.service';
import { AuthenticationService } from '../../services/authentication.service';
import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'ngx-resolution',
  styleUrls: ['./rule-extraction.component.scss'],
  templateUrl: './rule-extraction.component.html',
})
export class RuleExtractionComponent  {
  display: boolean = false;
    $:any;

  casecancer: any[] = [{ }];
  public itMe:String="";
  error=false;
  deleteError=false;
  public form:FormGroup;
  private errorMessage:any = '';
  selectedRulecancer: any[];
cancer=false;
  public submitted:boolean = false;

  constructor(fb:FormBuilder,private  casecancerService:RulecancerService, private authenticationService:AuthenticationService,private confirmationService: ConfirmationService) {
    this.itMe=this.authenticationService.getEmail();
    this.form = fb.group({
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
      setTimeout(() =>   this.casecancerService.getrulecancer().finally(() => {
      })
        .subscribe(
          database => this.casecancer = database,

          error => this.errorMessage = <any>error), 0);

    }
    else
    {
      setTimeout(() =>   this.casecancerService.getrulethyroid().finally(() => {
      })
        .subscribe(
          database => this.casecancer = database,

          error => this.errorMessage = <any>error), 0);

    }

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
      this.casecancerService.createCategory({problem:{BI:model.BI ,age:model.age,shape:parseInt(model.shape),
        dencity:parseInt(model.dencity),margin:parseInt(model.margin)},
        solution:parseInt(model.solution),"validity":{"coherence":true,"stochastique":1,"regles":true,"expert":true}});


    }
  }

}

