import {Component, OnInit} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/index';
import {User} from '../../models/index';

@Component({
   moduleId: module.id,
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login  implements OnInit {
  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  public error="";
  public user:User;
 returnUrl: string;
  constructor(fb:FormBuilder, private router: Router, private route: ActivatedRoute,
        private authenticationService: AuthenticationService) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }
 ngOnInit() {
        // reset login status
        this.authenticationService.logout();
 
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
 public onSubmit(model: User):void
     {
       this.submitted = true;
    if (this.form.valid) {
      // your code goes here
        this.authenticationService.login(model.email, model.password)
            .subscribe(
                data => {
                    this.router.navigate(['/tests']);


                },
                error => {
                 /*   this.alertService.error(error._body);
                    this.loading = false;*/
                    this.error="Email or password is wrong";
                });
    }
  }
}
