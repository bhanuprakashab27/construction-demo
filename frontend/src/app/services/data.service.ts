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




  // Project Api's
  getAdminProjects(){
    return this.http.get<any[]>(this.apiUrl + "/project/getAll");
  }

  saveAdminProject(project:any):Observable<any>{
    return this.http.post(this.apiUrl + "/project/save",project);
  }

updateProject(id: string, project: any) {
  return this.http.put(`${this.apiUrl}/project/update/${id}`, project);
}

  deleteproject(id: String) {
    return this.http.delete(`${this.apiUrl}/project/delete/${id}`, { responseType: 'text' });
  }

  // Service Api's

  getAllServices(){
    return this.http.get<any[]>(this.apiUrl + "/service/getAll");
  }

  saveService(service:any):Observable<any>{
    return this.http.post(this.apiUrl + "/service/save" , service);
  }

  updateService(id:any, service:any){
    return this.http.put(`${this.apiUrl}/service/update/${id}`,service);
  }

  deleteService(id:any){
    return this.http.delete(`${this.apiUrl}/service/delete/${id}`,{responseType : 'text'});
  }

  // Testominal Api's
  getAllTestimonial(){
    return this.http.get<any[]>(this.apiUrl + "/testimonial/getAll");
  }

  saveTestimonial(testimonial:any):Observable<any>{
    return this.http.post(this.apiUrl + "/testimonial/save" , testimonial);
  }

  updateTestimonial(id:any, testimonial:any){
    return this.http.put(`${this.apiUrl}/testimonial/update/${id}`,testimonial);
  }

  deleteTestimonial(id:any){
    return this.http.delete(`${this.apiUrl}/testimonial/delete/${id}`,{responseType : 'text'});
  }

  // contact or leads

  getAllContactLead(){
    return this.http.get<any[]>(this.apiUrl + "/contactLead/getAll");
  }

  // saveContactLead(contactLead:any):Observable<any>{
  //   return this.http.post(this.apiUrl + "/contactLead/save" , contactLead);
  // }

  sendMessage(data:any):Observable<any>{
    return this.http.post(this.apiUrl + "/contactLead/save", data);
  }

  updateContactLead(id:any, contactLead:any){
    return this.http.put(`${this.apiUrl}/contactLead/update/${id}`,contactLead);
  }

  deleteContactLead(id:any){
    return this.http.delete(`${this.apiUrl}/contactLead/delete/${id}`,{responseType : 'text'});
  }

  updateLeadStatus(id: any, status: string) {
  return this.http.put(`${this.apiUrl}/contactLead/updateStatus/${id}`, {
    status: status
  });
}

}