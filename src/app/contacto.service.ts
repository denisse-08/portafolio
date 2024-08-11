import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private apiUrl = 'http://localhost/portafolioback/contacto.php'; // URL de tu servicio PHP

  constructor(private http: HttpClient) { }

  enviarContacto(contacto: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    // Convertimos el objeto a una cadena de consulta
    const body = new URLSearchParams();
    body.set('name', contacto.name);
    body.set('email', contacto.email);
    body.set('message', contacto.message);

    return this.http.post(this.apiUrl, body.toString(), { headers });
  }
}
