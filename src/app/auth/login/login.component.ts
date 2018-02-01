import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Angular2TokenService } from 'angular2-token';
import { Router } from '@angular/router';
import { MatInputModule, MatButtonModule } from '@angular/material';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  submitted: Boolean;
  pendingRequest: Boolean;

  constructor(){  }

}
