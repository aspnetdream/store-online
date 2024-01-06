import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent implements OnInit{

  constructor(private formBuild: FormBuilder) {

  }
  formLogin = this.formBuild.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(3)]],
  })

  ngOnInit(): void {
  }

  onSubmit(){
    // const md = {
    //   username: this.formLogin.controls.username.value,
    //   password: this.formLogin.controls.password.value,
    // }
    // this.authentication.login(md).subscribe(console.log);
  }

}
