import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  login(user: any) {
    this.http.post("http://localhost:3000/login", user).subscribe(data => {
      console.log(data);
      return data;
    },
      err => {

      });
  }

  onSubmit() {

    this.login({ "email": this.userForm.email, "password": this.userForm.password })
  }

}
