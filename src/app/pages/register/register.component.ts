import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/payload/user-payload/user-payload.model';
import { UserService } from 'src/app/shared/service/user-service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formRegister: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    passwordConfirm: new FormControl('')
  });

  registerSuccess: boolean;
  registerError: boolean;

  constructor(private fb: FormBuilder, private service: UserService, private router: Router) { }

  ngOnInit() {
    this.formRegister = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(5)]],
      email: [""],
      password: ["", [Validators.required, Validators.minLength(5)]],
      passwordConfirm: ["", [Validators.required, Validators.minLength(5)]]
    })
  }

  registerUser() {
    if (this.formRegister.valid) {
      this.registerSuccess = true;

      setTimeout(() => {
        this.router.navigate(['/home'])
      }, 4000);      
    }
    if (this.formRegister.invalid) {
      this.registerError = true;
      setTimeout(() => {
        this.registerError = false; 
      }, 5000);    
      return;
    }
  }
}
