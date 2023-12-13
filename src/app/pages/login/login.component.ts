import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/service/auth-service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  registerSuccess: boolean;
  registerError: boolean;

  submitted = false;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthenticationService) { }
  
  ngOnInit() {
    this.formLogin = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(5)]],
      password: ["", [Validators.required, Validators.minLength(5)]]
    })
  }


  isFormControlInvalid(controlName: string): boolean {
    return (this.formLogin.get(controlName)?.invalid && this.formLogin.get(controlName)?.touched)
  }

  onSubmit(): void {

    if (this.formLogin.valid) {
      this.submitted = true;
      this.router.navigate(['/home'])
    }
    if (this.formLogin.invalid) {
      return;
    }

  }

}
