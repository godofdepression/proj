import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css','../../../node_modules/bulma']
})
export class SignupComponent implements OnInit {

  formvalue !: FormGroup
  userobj= new user();
  edata:any;
  constructor(private formbuilder:FormBuilder,public crud: CrudService) { }
  ngOnInit(): void {
    this.formvalue=this.formbuilder.group({
      username:[''],
    })
    this.getuser();
  }
postuser(){
  this.userobj.username=this.formvalue.value.username;
  this.crud.post(this.userobj)
  .subscribe((res: any)=>{
    console.log(res);
    alert("added successfully")
  }
    )
}
getuser(){

  this.crud.get()
  .subscribe((res: any)=>{this.edata=res;})
}
deluser(row:number){

  this.crud.delete(row)
  .subscribe((res: any)=>alert("Record deleted"))
}
onedit(){

}
upduser(row:number){

  this.crud.update(this,row)
  .subscribe((res: any)=>alert("Record deleted"))
}
}

export class user{
  username: string='';
}