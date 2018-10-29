
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CallingRestServices } from '../../../services/common/calling-rest.services';
import { LoginResponse } from '../../../entities/login/login-response';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data;
  userForm: FormGroup;
  showSubmit = false;
  checkuser;
  submitted = false;

  constructor(private toastr: ToastrService, private _callingServices: CallingRestServices,
    private router: Router,
    private form: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    sessionStorage.clear();
  }

  checkFunction() {

    this._callingServices.PostService(
      environment.portSecurity, '/api/Auth/Login', this.userForm.value).subscribe((response: LoginResponse) => {
        if (response.authenticated === true) {
          this.data = response;
          sessionStorage.setItem('access', JSON.stringify(this.data.permission));
          sessionStorage.setItem('userData', JSON.stringify(this.data.user));
          this.router.navigateByUrl('/home');
        } else {
          this.toastr.error('Usuario o contraseña incorrectos intentalo de nuevo', 'Intentalo de nuevo');
        }
      });
  }

  createForm() {
    this.userForm = this.form.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ShowSubmit() {
    this.showSubmit = true;
  }

  HideSubmit() {
    this.showSubmit = false;
  }


}
