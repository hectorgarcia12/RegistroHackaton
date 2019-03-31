import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Participante } from '../../modelos/participante';

@Injectable({
  providedIn: 'root'
})
export class ParticipanteService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http:  HttpClient) { }

  obtenerParticipantes() {

    return this.http.get( `${this.API_URI}/participantes`);
  }

  obtenerUnParticipante(id: string) {

    return this.http.get( `${this.API_URI}/participantes/${id}`);

  }

  agregarParticipante(participante: Participante) {

    return this.http.post(`${this.API_URI}/participantes`, participante);

  }
}
