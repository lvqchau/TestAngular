import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserSignin, UserSignup } from './../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signin(data: UserSignin): Observable<Object> {
    const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap"

    return this.http.post(url, data)
  }

  signup(data: UserSignup): Observable<Object> {
    const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy"

    return this.http.post(url, data)
  }

}
