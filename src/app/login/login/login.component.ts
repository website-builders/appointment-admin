import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.initForm();
  }
  login() {
    console.log('loggin in', this.loginForm.value);
  }

  private initForm() {
    this.loginForm = this.fb.group({
      userName: [null, Validators.required],
      password: [null, Validators.required]
    });
  }
}
