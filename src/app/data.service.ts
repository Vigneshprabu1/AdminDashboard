import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
let apiURl="http://localhost:8080/"

@Injectable({
  providedIn: 'root'
})
export class DataService {
public result1;id;result;shop;vendor;id1;id2:any
  constructor(private http:HttpClient) {
    
   }
  // PostDetails(type){
  //   return new Promise((resolve , reject) =>{
  //     let headers =new HttpHeaders();
  //     //headers.append("Content-Type","application/json");
     
  //     this.http.get(apiURl+type,{headers:headers}).
  //     subscribe (data =>{
  //       console.log("success");
  //       console.log(this.result1);
  //       resolve(data);
  //     },(err)=>{
  //       reject(err);  
  //     });
  //   });
  // }
  updateDetails(details,type){
    return new Promise((resolve , reject) =>{
      let headers =new HttpHeaders();
      //headers.append("Content-Type","application/json");
      //console.log(details);
      this.http.put(apiURl+type,details,{headers:headers}).
      subscribe (data =>{
        //console.log(this.result1);
        console.log("success");
        resolve(data);
      },(err)=>{
        reject(err);  
      });
    });
  }
  deleteDetails(type){
    return new Promise((resolve , reject) =>{
      let headers =new HttpHeaders();
      //headers.append("Content-Type","application/json");
      this.http.delete(apiURl+type,{headers:headers}).
      subscribe (data =>{
       // console.log(this.result1);
        console.log("success");
        resolve(data);
      },(err)=>{
        reject(err);  
      });
    });
  }
  getDetails(type){
    return new Promise((resolve , reject) =>{
      let headers =new HttpHeaders();
      //headers.append("Content-Type","application/json");
      
      this.http.get(apiURl+type,{headers:headers}).
      subscribe (data =>{
        console.log("success");
        resolve(data);
        //console.log(data);
      },(err)=>{
        reject(err);  
      });
    });

}
postDetails(details,type){
  return new Promise((resolve , reject) =>{
    let headers =new HttpHeaders();
    //headers.append("Content-Type","application/json");
    //console.log(details);
    this.http.post(apiURl+type,details,{headers:headers}).
    subscribe (data =>{
      //console.log(this.result1);
      console.log("success");
      resolve(data);
    },(err)=>{
      reject(err);  
    });
  });
} 




public getShop(type){
  return  new Promise((resolve,reject)=>{
    let headers=new HttpHeaders();
    this.http.get(apiURl+type,{headers:headers}).
    subscribe(res=>{
      resolve(res);
    },(err)=>{
      reject(err);
    });
  });
}
public postShop(details,type){
  return  new Promise((resolve,reject)=>{
    let headers=new HttpHeaders();
    //console.log(details);
    this.http.post(apiURl+type,details,{headers:headers}).
    subscribe(res=>{
      resolve(res);
    },(err)=>{
      reject(err);
    });
  });
}


public getp(p){
  //console.log("mano");
  localStorage.setItem("quentinTarantino", JSON.stringify(p));
  this.respon();
}
public respon(){
  var jj=JSON.parse(localStorage.getItem("quentinTarantino"));
  return jj;
}


 

}

