import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { SignupParams, SignupResult } from './../../core/model/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild('signupForm') signupForm!: NgForm

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  handleSignup() {
    // Làm sao lấy đc value của form, sử dụng ViewChild
    if(this.signupForm.invalid) return

    this.authService.signup(this.signupForm.value).subscribe({
      next: (result) => {
        console.log(result)
        this.router.navigateByUrl('/signin')
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

}










