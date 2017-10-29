import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'ngx-resolution',
  styleUrls: ['./setting.component.scss'],
  templateUrl: './setting.component.html',
})
export class SettingComponent {
  public form:FormGroup;
  public form1:FormGroup;

  cancer=false;
  public itMe:String="";

  constructor(fb:FormBuilder,private authenticationService: AuthenticationService)
{
  this.cancer=this.authenticationService.getCancer();
  this.itMe=this.authenticationService.getEmail();

  this.form = fb.group({
    'name' : ['']  ,
    'resolution' : [''],
    'sensor' : [''],
    'modality' : [''],
    'numberTot' : [''],
    'numberScans' : [''],
    'note' : [''],
    'type':[''],
    'modalities' : [],
    'ref' : [''],
    'publicDatabase':false,
    'preTraited':false,
    'createdBy' : [ this.itMe],

  });

  this.form1 = fb.group({
    'name' : ['']  ,
    'resolution' : [''],
    'sensor' : [''],
    'modality' : [''],
    'numberTot' : [''],
    'numberScans' : [''],
    'note' : [''],
    'type':[''],
    'modalities' : [],
    'ref' : [''],
    'publicDatabase':false,
    'preTraited':false,
    'createdBy' : [ this.itMe],

  });
}

}
