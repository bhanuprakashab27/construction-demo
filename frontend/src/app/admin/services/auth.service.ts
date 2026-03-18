import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
constructor(private router:Router){}

login(email:string,password:string){

// dummy login (later API)

if(email==='admin@gmail.com' && password==='123456'){

localStorage.setItem('admin', 'true');

this.router.navigate(['/admin/dashboard']);

}else{

alert('Invalid credentials');

}

}

logout(){

localStorage.removeItem('admin');

this.router.navigate(['/admin/login']);

}

isLoggedIn(){

return localStorage.getItem('admin')==='true';

}

}