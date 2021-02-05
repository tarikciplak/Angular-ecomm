import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { User, UserResponse } from './user';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users: User[];
  model: User = new User;
 
  
  
  

  
  constructor(private accountservice: AccountService,private router:Router,private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.accountservice.getUser().subscribe((prod:UserResponse) => {
      this.users = prod.users;
      })
   
  }

  
  login(form: NgForm) {
    var i;
    for (i = 0; i < this.users.length; i++) {
      if(this.model.email === this.users[i].email && this.model.password === this.users[i].password){
        this.accountservice.login(true); 
      }this.accountservice.login(false); 
    }
      
    this.router.navigate(['checkout'])
    if(this.accountservice.isLoggedIn()){
      this.toastr.success('Giriş işlemi başarı ile gerçekleşti.','İşlem Durumu',{timeOut:8000,
        positionClass: 'toast-top-center',
        progressBar : true})
    }else this.toastr.error('Kullanıcı adınızı ve şifrenizi tekrar giriniz.','İşlem Durumu',{timeOut:2000,
      positionClass: 'toast-top-center',
      progressBar : true});


  }

  register(form: NgForm){

    if(this.model.password.length<8){
      this.toastr.warning('Lütfen şifrenizde en az 8 hane kullanınız.','Register info',{timeOut:8000,
        positionClass: 'toast-top-center',
        progressBar : true})
    }else if(this.model.email.length>10 && this.model.password.length>8){
      this.toastr.success('Kayıt İşlemi başarı ile gerçekleşti','Register info',{timeOut:8000,
        positionClass: 'toast-top-center',
        progressBar : true})
      this.accountservice.newUser(this.model)
      this.router.navigate(['login'])
    }
   
   
  }
  
  
}
