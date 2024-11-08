// src/app/services/consulta.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cliente {
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
    telefono: string;
    direccion: string;
    ciudadResidencia: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  private apiUrl = 'http://localhost:8090/api/cliente';  
  

  constructor(private http: HttpClient) {}

  consultarUsuario(tipoDocumento: string, numeroDocumento: string): Observable<Cliente | null> {
    const request = {
        "tipoDocumento": tipoDocumento,
        "numeroDocumento":numeroDocumento
    }
    return this.http.post<Cliente>(`${this.apiUrl}/consultar` , request);
  }
}