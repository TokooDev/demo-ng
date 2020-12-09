import { Component, OnInit, enableProdMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.get();
  }

  onSubmit() {
    console.log(this.userForm);
    this.insert({ "email": this.userForm.email, "password": this.userForm.password, "prenom": this.userForm.prenom });
  }

  insert(user: any) {
    this.http.post("http://localhost:3000/register", user).subscribe(data => {
      console.log(data);
      return data;
    },
      err => {

      });
  }

  get() {
    console.log("oki");
    this.http.get("http://localhost:3000/users").subscribe(data => {
      console.log(data);
      return data;
    },
      err => {

      });
  }

}
