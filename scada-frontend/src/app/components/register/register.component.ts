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
      password: ['', [Validators.required, Validators.minLength(6)]],
      username: ['', Validators.required]
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
    this.authService.register(this.registerForm.get('username')?.value, this.registerForm.get('password')?.value)
    .subscribe((res) => {
      this.registerForm.reset();
      this.close();
      alert("Successfully created an account, please log in");
     });
  }

}
