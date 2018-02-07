import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { MatInputModule, MatButtonModule } from '@angular/material';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  submitted: Boolean;
  pendingRequest: Boolean;

  constructor(private fb: FormBuilder,
              private router: Router){
  	this.loginForm =  this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  autenticar(){
    this.router.navigate(['/dashboard']);
  }

}
