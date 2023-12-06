import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/payload/user-payload/user-payload.model';
import { UserService } from 'src/app/shared/service/user-service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = new User('', '', '2003-02-19', '');

  passwordConfirm: string;

  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
  }
  registerUser() {

    if (this.passwordConfirm == this.user.password) {
      this.service.createUser(this.user).subscribe(
        (response) => {
          // Manipule a resposta aqui, por exemplo, redirecionando para a página de login

          setTimeout(() => {
            this.router.navigate(['login']);
          }, 2000);

          console.log('Resposta do registro:', response);
        },
        (error) => {
          // Trate erros de registro
          alert('error');
        }
      );
    } else {
      alert('cu')
    }
    
  }
}
