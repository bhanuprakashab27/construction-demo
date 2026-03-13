import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '../entity/service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   private apiUrl = "http://localhost:8080/api";
  constructor(private http: HttpClient) {}

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>('/data/services.json');
  }

  getProjects(){
  return this.http.get<any[]>('/data/projects.json')
}

getWhyChoose(){
  return this.http.get<any[]>('/data/whychoose.json')
}

getTestimonials(){
  return this.http.get<any[]>('data/testimonials.json')
}
getService(){
  return this.http.get<any[]>('data/service.json');
}
getServiceFeatures(){
  return this.http.get<any[]>('data/service-features.json');
}
getServiceFaq(){
  return this.http.get<any[]>('data/service-faq.json');
}
getProject(){
  return this.http.get<any[]>('data/project.json');
}


sendMessage(data:any):Observable<any>{
    return this.http.post(this.apiUrl + "/contact", data);
  }



}