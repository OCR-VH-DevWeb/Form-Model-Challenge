import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../models/user-model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  submitted = false;

  newUser: User = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  };

  // onSubmit() {
  //   this.submitted = true;
  //   if (this.newUser) {
  //   }
  //   console.log(this.newUser.firstname);
  // }
  onSubmit() {
    this.submitted = true;
    if (
      this.newUser.firstname &&
      this.newUser.lastname &&
      this.newUser.email &&
      this.newUser.password
    ) {
      console.log(this.newUser);
    }
  }
}
