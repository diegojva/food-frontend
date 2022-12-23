import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { LoaderService } from 'src/app/service/loader.service';
import { LoginService } from 'src/app/service/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: string;
  error: string;

  constructor(private router: Router,
              private loginService: LoginService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'username': new FormControl(null, [Validators.required,Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(3)])
    });
  }

  operate(){
    this.loginService.login(this.form.value['username'], this.form.value['password']).subscribe(data => {
      sessionStorage.setItem(environment.TOKEN_NAME, data.access_token);
      this.getUser();
      this.snackBar.open('¡Bienvenido!', 'OK', { duration: 4000 });
      this.router.navigate(['/pages/dashboard']);
    }, error => {
      this.snackBar.open('Error en el servidor o datos incorrectores.', 'INFO', { duration: 2000 });
    });
  }

  getUser(){
    this.loginService.getUser().subscribe(data => {
     localStorage.setItem('username', data);
    });
  }

  get f() {
    return this.form.controls;
  }

  
}
