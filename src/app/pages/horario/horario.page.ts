
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {  NavController, IonSegment } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';





@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})



export class HorarioPage implements OnInit {

  
  mostrarActividades: boolean;//condicional de HTML al precionar el boton de adicionar un horario
  mostrarHorarios: boolean;//condicional de HTML al precionar el boton de adicionar un horario
  adicionarHorario: boolean;//condicional de HTML al precionar el boton de adicionar una actividad


  


  constructor(
    private firebase: AngularFireDatabase,
    public navCtrl: NavController,
    private router: Router
    
   ) { }

  ngOnInit() {
    this.loadHorario(); 
  }



//array de las credenciales del nuevo horario
newHorario = {
  title: '',
  description: '',
};
//guardar horarios del usuario
addHorario(){
  this.firebase.list('Horario').push({
    title: this.newHorario.title,
    description: this.newHorario.description
  });
  this.mostrarFormHorario();
}
//boton de canbio entre los horarios y la pestaña de adicionar el horario
mostrarFormHorario() {
  this.adicionarHorario = !this.adicionarHorario;
  this.newHorario = {
    title: '',
    description: ''
  };
}




//array de carga de los horarios
allHorario = [];
//cargar horarios del usuario
loadHorario() {
  this.firebase.list('Horario').snapshotChanges(['child_added']).subscribe(actions => {
    this.allHorario = [];
    actions.forEach(action => {
      this.allHorario.push({
        title: action.payload.exportVal().title,
        description: action.payload.exportVal().description,
      });
    });
  });
}


//horario = 'daniel';// falta corregir y aplicar
mostrarActividad(){
  //redireccionamiento a actividades
  this.router.navigate(['home/actividades']);

}





  
  
}

