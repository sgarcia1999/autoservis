import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { endpoints } from 'src/environments/endpoints/endpoints';
import { crearEmpleado } from '../models/crearEmpleado.module';
@Injectable({
  providedIn: 'root'
})
export class CrearEmpleadoService {

  url_post : string  = endpoints.post_endpoint;

  constructor(private http: HttpClient) { }

  public searchAllPost(): Observable<crearEmpleado[]> {
		return this.http.get<any[]>(this.url_post);
	}
  public createPost(post: crearEmpleado): Observable<any> {
    const headers = { 'Content-type': 'application/json; charset=UTF-8'}
		const body = JSON.stringify(post);
		return this.http.post(this.url_post, body, { headers });
	}
}
