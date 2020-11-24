import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { DirectoryService } from 'src/app/providers/directory.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  parkingList:any;
  parkingList2:any;
  token:any;
  name:any;

  constructor(private directoryService: DirectoryService,
              private loadCtrl: LoadingController) { 
    this.token = JSON.parse(localStorage.getItem('userData')).token;
    this.name = JSON.parse(localStorage.getItem('userData')).user.username;
  }

  ngOnInit() {

    }



  async getParking(){

    let load = await this.loadCtrl.create({
      message: 'Buscando aparcamientos...',
      spinner:'crescent',
      duration:3000
    });
     await load.present();
     this.directoryService.getParking(this.token)
     .then(async data=>{
      this.parkingList = data;
       })
     .catch(error=>{
       console.log(error);
      })
    }
}

