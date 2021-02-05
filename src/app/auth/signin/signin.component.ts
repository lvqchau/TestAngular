import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup = new FormGroup({
    taiKhoan: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    matKhau: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  handleSignin() {
    // Đánh dấu tất cả input có trạng thái touched thành true
    this.signinForm.markAllAsTouched()
    if(this.signinForm.invalid) return

    this.authService.signin(this.signinForm.value).subscribe({
      next: result => {
        console.log(result)
      },
      error: error => {
        console.log(error)
      }
    })
  }

}







