import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import { Observable } from 'rxjs';
//? Servicios 
import { AuthService } from '../services/db/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor( private _auth:AuthService,private _router:Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
      const tokenizeReq = req.clone({
        setHeaders:{
            Authorization: `Bearer ${this._auth.getToken()}`
        }
      })
      return next.handle(tokenizeReq);

  }
}
