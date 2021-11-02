import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  isLoading = true;
  isLogin= true;
  constructor(private authService:AuthService,
              private router: Router,
              private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  onSwitchAuthMode(){
    this.isLogin = ! this.isLogin;
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    console.log(email,password);

    if(this.isLogin){
      //send a req to FireBase to login
    }else{
      //send a req to FireBase to signup
    }
  }

  onLogin(){
    this.isLoading= true;
    this.authService.login();    
    this.loadingCtrl.create(
      {
        keyboardClose: true,
        message: 'Logging in...'
      }
    ).then(loadingEl => {
      loadingEl.present();
      setTimeout(() => {
        this.isLoading= false;
        loadingEl.dismiss();
        this.router.navigateByUrl('/places/tabs/discover');
      }, 1500);
    })
  }

}
