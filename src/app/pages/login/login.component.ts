import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/shared/payload/user-payload/user-payload.model';
import { AuthenticationService } from 'src/app/shared/service/auth-service/authentication.service';
import { UserService } from 'src/app/shared/service/user-service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  selectedName: string = '';
  selectedEmail: string = '';
  selectedPassword: string = '';
  selectedBirthday: string = '';

  username: string = '';
  password: string = '';

  constructor(private authService: AuthenticationService) { }
  
  ngOnInit() {
  }

  login() {
    const credentials = { username: this.username, password: this.password };

    this.authService.login(credentials).subscribe(
      (response) => {
        // Manipule a resposta aqui, por exemplo, armazenando o token JWT em localStorage
        console.log('Resposta do login:', response);
      },
      (error) => {
        // Trate erros de autenticação
        console.error('Erro de autenticação:', error);
      }
    );
    console.log('nome:', this.username)
    console.log('senha:', this.password)
  }

}
