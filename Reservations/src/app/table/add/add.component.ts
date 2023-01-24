import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { SafeValue } from '@angular/platform-browser';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  add:any;
  abc="Save";
  

  constructor(private ds: DataService,@Inject(MAT_DIALOG_DATA) public data:any,private route:Router,private dialogRef:MatDialogRef<AddComponent>) {}
  ngOnInit(): void {
    console.log(this.data)
    this.add=new FormGroup({

      SlNo: new FormControl(''),
      Hotel: new FormControl(''),
      Arrival: new FormControl(''),
      Departure: new FormControl(''),
      Type: new FormControl(''),
      Guests: new FormControl(''),
      price: new FormControl(''),
    });
    
    let Adate = this.data.Arrival.split('T');
    let Ddate = this.data.Departure.split('T');
    if(this.data){
      this.abc="update";
      this.add.patchValue({
        SlNo: this.data.SlNo,
        Hotel: this.data.Hotel,
        Arrival: Adate[0],
        Departure: Ddate[0],
        Type: this.data.Type,
        Guests: this.data.Guests,
        price: this.data.price,
      });
    }
     
  }

  table(){
    this.route.navigate(['table'])
  }
  update(){
    this.ds.update(this.add.value);
    window.location.reload();
    this.dialogRef.close();
    window.location.reload();
    this.table();
  }

save() {
  if(!this.data){
    this.ds.addData(this.add.value);
    window.location.reload();
    this.dialogRef.close();
    window.location.reload();
    this.table();
  }
 else{
  this.update();
    
 }
     
  
  }
   
} 
 
 

