import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  isLoading = false;
  constructor(private authService:AuthService,
              private router: Router,
              private loadingCtrl: LoadingController) { }

  ngOnInit() {
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
