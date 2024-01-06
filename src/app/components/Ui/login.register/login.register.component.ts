import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';
import { NgIf } from '@angular/common';
import { AccountModel } from '../../../models/AccountModel';

@Component({
  selector: 'app-login.register',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.register.component.html',
  styleUrl: './login.register.component.css'
})
export class LoginRegisterComponent implements OnInit{

  constructor(private formBuild: FormBuilder,
    private authentication: AuthenticationService) {

}

formLogin = this.formBuild.group({
  username: ['', Validators.required],
  password: ['', [Validators.required, Validators.minLength(3)]],
})
  ngOnInit(): void {
  }
  get f() {
    return this.formLogin.controls;
  }
  onSubmit(){

    console.log(this.formLogin);
    // const accountModel: AccountModel = {
    //   username: this.formLogin.controls.username.value ?? "",
    //   password: this.formLogin.controls.password.value ?? "",
    // }
    // this.authentication.login(accountModel).subscribe(console.log);
  }

  onSub(){

    console.log(this.formLogin);
    // const accountModel: AccountModel = {
    //   username: this.formLogin.controls.username.value ?? "",
    //   password: this.formLogin.controls.password.value ?? "",
    // }
    // this.authentication.login(accountModel).subscribe(console.log);
  }
}
