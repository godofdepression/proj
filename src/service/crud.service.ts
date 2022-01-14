import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudService {



  constructor(private http:HttpClient){}
  
  post(data:any){
    return this.http.post<any>("http://localhost:3000/user",data)
  .pipe(map((res:any)=>{return res;}))
  }
  
  get(){
    return this.http.get<any>("http://localhost:3000/user").pipe(map((res:any)=>{return res;}))}
  
  update(data:any,id:number){
      return this.http.get<any>("http://localhost:3000/"+id,data)
      .pipe(map((res:any)=>{return res;}))}
    
  delete(id:number){
        return this.http.delete<any>("http://localhost:3000/posts/"+id)
        .pipe(map((res:any)=>{return res;}))}
  
      
    }