import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AuthenticateService } from 'src/app/providers/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userData = {"username": "","password": ""};
  responseData:any;
  token:any;

  constructor(private authService: AuthenticateService,
              private navCtrl: NavController,
              private toast: ToastController,
              private loadCtrl: LoadingController) { }

  ngOnInit() {
  }

   login(){
    this.authService.postData(this.userData).then(async ( result) => {
     this.responseData = result;
     console.log(this.responseData);
     localStorage.setItem('userData', JSON.stringify(this.responseData));

     let load = await this.loadCtrl.create({
      message: 'Cargando complementos...',
      spinner:'crescent',
      duration:3000
    });
     await load.present();
     this.navCtrl.navigateForward('home')

        

  
   }, async (err) => {
       let toast = await this.toast.create({
         message: 'Usuario y/o contraseña incorrecta',
         duration: 2800,
         color: "danger",

       });
   toast.present();
   });

 }

}
