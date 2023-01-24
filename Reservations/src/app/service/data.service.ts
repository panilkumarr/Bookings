import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from 'primeng/api';
 


@Injectable({
  providedIn: 'root'
})
export class DataService {

  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
    }), 
  };
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get<any>('https://localhost:44393/api/all');
     
  }
  // postData(datas: any) {
  //   return this.http
  //     .post('https://localhost:44344/api/Home/insert', datas, this.httpOptions)
  //     .subscribe();
  // }

  addData(data:any)
  {
    return this.http.post('https://localhost:44393/api/R/insert/',data).subscribe();
  }
  update(data:any){
    return this.http.put('https://localhost:44393/update/',data).subscribe();
  }

  deleteData(SlNo:number){
    return this.http.delete("https://localhost:44393/delete/"+SlNo).subscribe();
  }
  
}

