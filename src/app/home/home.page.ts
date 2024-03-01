import { Component } from '@angular/core';
import { APIServiceService } from './../Services/apiservice.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { doc, setDoc } from 'firebase/firestore';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
PokeService: any;
pokemon_obtenido: any;
poke_search:string="";
poke_tipo:string=""
constructor(private api: APIServiceService, private db: Firestore) {
  // Puedes usar tanto "api" como "db" aquí
}
getPokemonData(id: any) {
  try {

    this.api.getPokemon(this.poke_search).subscribe((response => {
      this.pokemon_obtenido = response;
      this.poke_tipo=this.pokemon_obtenido.types[0].type.name
    }));

  } catch (error) {
    console.log(error);
  }
}

//HOME.PAGE.TS
async sendDataBase() {
  const ruta_documentos = doc(this.db,'tipo','tipodelpoke');//RUTA DE TABLA EN LA BD
  await setDoc(ruta_documentos, { pokemon: this.poke_tipo });//CAMBIA EL ATRIBUTO DE LA TABLA
}

}
  

