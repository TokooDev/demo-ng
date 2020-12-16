import { User } from './../../models/user';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: any = {};

  submitted = false;
  constructor(private http: HttpClient) { }


  ngOnInit(): void {

  }
  onSubmit() {
    this.http.post("http://localhost:3000/users", this.registerForm).subscribe(
    data => {
      console.log('Ajout effectué avec suuces ', data);
    },
    error => {
      console.log('Une erreur survenue', error);
    }
  );
  }

}
