import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Output() loginFormVisible = new EventEmitter<boolean>();
  registerForm : FormGroup;

  constructor(private http:HttpClient, private router : Router, private authService : AuthenticationService, private formBuilder: FormBuilder){
    this.registerForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      username: ['', Validators.required],
      birth_date: ['', Validators.required],
      referredByFriend: [false],
      referrerUsername: ''
    });
  }

  close(){
    this.loginFormVisible.emit(true)
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form is valid');
      this.setUser();
    } else {
      console.log('Form is invalid');
      // Show errors and mark form fields as touched
      Object.keys(this.registerForm.controls).forEach((field) => {
        const control = this.registerForm.get(field);
        if(control != undefined){
          control.markAsTouched({ onlySelf: true });
        }
      });
    }
  }

  public setUser() {
    const options: any = {
      responseType: 'text',
    };
    const dateStr = this.registerForm.get('birth_date')?.value;
    let newDateStr = ""
    if(dateStr != null){
      const dateObj = new Date(dateStr);
      newDateStr = dateObj.toISOString().slice(0, 19);
    }
    const body: {
      name: string;
      last_name: string;
      birth_date: string;
      email: string;
      username: string;
      password: string;
      referral?: string; // Make referral field optional
    } = {
      name: this.registerForm.get('fname')?.value,
      last_name: this.registerForm.get('lname')?.value,
      birth_date: newDateStr,
      email: this.registerForm.get('email')?.value,
      username: this.registerForm.get('username')?.value,
      password: this.registerForm.get('password')?.value,
    };
    
    
  }

}
